<%--
  Created by IntelliJ IDEA.
  User: xwq
  Date: 14-7-15
  Time: 9:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Access-Control-Allow-Origin" content="http://dx.ipyy.net">
    <meta content="yes" name="apple-mobile-web-app-capable"/>
    <link rel="icon" href="/cloudl/static/css/images/sti.png">
    <link rel="stylesheet" href="static/css/font_awesome/css/font-awesome.css">
    <link rel="stylesheet" href="static/css/global.css">
    <link rel="stylesheet" href="static/css/desktop.css">

    <style>
        #center-content{
            padding-top: 9em;
        }
        #center-content span {
            margin-top: 10px;
            margin-left: 50px;
        }

        .signin {
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: white;
            width: 29em;
            padding: 2em 3em;
            margin: 0 auto;
            box-shadow: 0 0 4px #CCC;
        }

        .signin input[type="text"], .signin input[type="password"], .signin input[type="email"],select {
            width: 100%;
            padding: 0.6em 0.5em;
            font-size: 1.2em;
            border: 1px solid #9DAAB5;
            color: #8A9BA8;
            border-radius: 3px;
            margin: 0.5em 0;
        }

        select{
            width: 60%;
        }

        .signin input[name="phone-code"]{
            width: 60%;
        }

        .signin input[type="submit"]{
            width: 100%;
            margin: 1.2em 0;
            padding: 1em;
            height: 2em;
        }

        #get-code{
            display: inline-block;
            text-align: center;
            font-size: 1.2em;
            padding: 0.6em 0;
            width: 7em;
            margin: 0 auto;
            border: 1px solid #CCC;
            border-radius: 2px;
            color: #468CC8;
            box-shadow: 0 1px 1px #E2E4E6;
        }
        #get-code:hover{
            background-color: #468CC8;
            color: white;
            border: 1px solid #468CC8;
            text-decoration: none;
        }

        .signin button{
            padding: 0.6em;
            border: 1px solid #8A9BA8;
            background-color: #8A9BA8;
            border-radius: 4px;
            color: white;
            font-size: 1.6em;
            width: 100%;
        }

        .image-background {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    </style>
    <script type="text/javascript" src="static/jslib/jquery.mini.js"></script>
    <%--<script src="static/jslib/slides.min.jquery.js"></script>--%>

    <script>
        var Account = null;
        var codecheck=true;
        var boolphone = false;
        var boolcode = false;
        var boolemail = false;
        var boolppassword = false;
        var boolrefercode = false;
        $(document).ready(function () {
            $('#a-logout').click(function (e) {
                e.preventDefault();
                $.ajax({
                    type: 'post',
                    secureuri: false,
                    dataType: 'json',
                    url: "logo",
                    success: function (data) {
                        if (data.success == true) {
                            location.href = "index";
                        }
                        else {
                            swal("操作失败！", "需要重新注销。", "error");
                        }
                    }
                });
            });
            //获取验证码
            $('#get-code').click(function (e) {
                e.preventDefault();
                var myreg = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
                if($("#phone").val() == ""){
                    $('#phonespan').html("<span style='color:darkorange;font-size:13px;'>电话号码不能为空！</span>");
                    return;
                }else if(!myreg.test($("#phone").val())){
                    $('#phonespan').html("<span style='color:darkorange;font-size:13px;'>电话号码格式不正确！</span>");
                    return;
                }

                $.ajax({
                    url: 'sendcheckcode',
                    type: 'post',
                    data: {
                        'myphone': $('#phone').val()
                    },
                    success: function (data) {
//                        alert(data)
                        if(data == "success"){
                            $('#phonespan').html("<span style='color:darkorange;font-size:13px;'></span>");
                            boolphone = true;
                            alert("验证码已发送至您输入的手机号！有效期3分钟！");
                            RemainTime();
                        }else if(data == "fail"){
                            $('#phonespan').html("<span style='color:darkorange;font-size:13px;'>此电话号码已经注册，请更换电话号码！</span>");
                        }else{
                            alert("验证码获取失败！请重新获取！");
                        }
                    }
                });





            });
            //校验验证码
            $('#phone-code').focusout(function () {

                if(codecheck == false){
                    $('#phone-code').val("");
                    alert("验证码已过期，请重新获取！")
                    return;
                }
                $.ajax({
                    url: 'validcheckcode',
                    type: 'post',
                    data: {
                        'mycode': $('#phone-code').val()
                    },
                    success: function (data, statusText) {
                        if(data == "success"){
                            boolcode = true;
                            alert("验证成功！")
                        }else if(data == "fail"){
                            alert("验证失败,请重新输入验证码！")
                        }
                    }
                });
            });
            //校验邮箱号
            $('#email').focusout(function () {
                var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if($("#email").val() == ""){
                    $('#emailspan').html("<span style='color:darkorange;font-size:13px;'>邮箱号不能为空！</span>");
                    $('#email').val("");
                    return;
                }else if(!filter.test($("#email").val())){
                    $('#emailspan').html("<span style='color:darkorange;font-size:13px;'>邮箱号格式不正确！</span>");
                    $('#email').val("");
                    return;
                }
                $.ajax({
                    url: 'judgeemail',
                    type: 'post',
                    data: {
                        'myemail': $('#email').val()
                    },
                    success: function (data, statusText) {
                        if(data == "fail"){
                            $('#emailspan').html("<span style='color:darkorange;font-size:13px;'>此邮箱已经注册，请更换邮箱！</span>");
                        }else if(data == "success"){
                            $('#emailspan').html("<span style='color:darkorange;font-size:13px;'></span>");
                            boolemail = true;
                        }
                    }
                });
            });
            //校验密码是否符合规定
            $('#password').focusout(function () {
                var patrn=/^(\w){6,20}$/;
                if( $('#password').val()==""){
                    $('#passwordspan').html("<span style='color:darkorange;font-size:13px;'>密码不能为空！</span>");
                    return;
                }else if(!patrn.exec($('#password').val()) ){
                    $('#passwordspan').html("<span style='color:darkorange;font-size:13px;'>只能输入6-20个字母、数字、下划线 ！</span>");
                    $('#password').val("");
                    return;
                }
                $('#passwordspan').html("<span style='color:darkorange;font-size:13px;'></span>");
                boolppassword = true;
            });
            //校验两次密码输入是否一致
            $('#passwdagain').focusout(function () {
               if( $('#password').val() !=  $('#passwdagain').val()){
                   $('#passwdagainspan').html("<span style='color:darkorange;font-size:13px;'>两次密码输入不一致，请重新输入！</span>");
                   $('#passwdagain').val("");
                   return;
               }
                $('#passwdagainspan').html("<span style='color:darkorange;font-size:13px;'></span>");
            });
            //提交数据
            $('#tijiao').click(function (e) {
                e.preventDefault();

                if(!boolcode){
                   $('#codespan').html("<span style='color:darkorange;font-size:13px;'>验证码不正确！</span>");
                   return;
                }
                if(!boolemail){
                       $('#emailspan').html("<span style='color:darkorange;font-size:13px;'>邮箱号不正确！</span>");
                       return;
                }

                if(!boolphone){
                           $('#phonespan').html("<span style='color:darkorange;font-size:13px;'>电话号码不正确！</span>");
                           return;
                }

                if(!boolppassword){
                               $('#passwordspan').html("<span style='color:darkorange;font-size:13px;'>密码不正确！</span>");
                               return;
                }
//                if(!boolrefercode){
//                    $('#refercodespan').html("<span style='color:darkorange;font-size:13px;'>对不起，你所输入的推荐码不存在！</span>");
//                    return;
//                }

                $.ajax({
                    url: 'registeruserinfo',
                    type: 'post',
                    data: {
                        'phone': $('#phone').val(),
                        'email': $('#email').val(),
                        'password': $('#password').val(),
                        'refree': $('#refercode').val()
                    },
                    success: function (data, statusText) {

                        swal({
                            title: "信息",
                            text: "注册成功，请等待管理员审核！",
                            type: "info",
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "OK",
                            closeOnConfirm: false,
                            closeOnCancel: false
                        }, function (isConfirm) {
                            if (isConfirm) {
                                window.location.href = "userregistersuccess";
                            }
                        });

                    }
                });
            });

            //校验推荐码
//            $('#refercode').focusout(function () {
//
//                if ($('#refercode').val() == '') {
//                    alert("请输入推荐码！")
//                    return;
//                }
//
//                $.ajax({
//                    url: 'validcheckrefercode',
//                    type: 'post',
//                    data: {
//                        'refercode': $('#refercode').val()
//                    },
//                    success: function (data, statusText) {
//                        if (data == "success") {
//                            boolrefercode = true;
//                            $('#refercodespan').html("<span style='color:darkorange;font-size:13px;'> </span>");
//
//                        } else if (data == "fail") {
//                            $('#refercodespan').html("<span style='color:darkorange;font-size:13px;'>对不起，你所输入的推荐码不存在！</span>");
//                        }
//                    }
//                });
//            });
        })


        //验证码有效期倒计时
        var iTime = 180;
        function RemainTime() {
            var iSecond;
            var sSecond = "", sTime = "";

            if (iTime >= 0) {
                iSecond = parseInt(iTime % 180);
                if (iSecond >= 0) {
                    sSecond = iTime + "秒";
                }
                sTime = "<span style='color:darkorange;font-size:13px;'>" + sSecond + "</span>";
                if (iTime == 0) {
                    clearTimeout(Account);
                    sTime = "<span style='color:red;font-size:12px;'>验证码已过期</span>";
                    codecheck = false;
                }
                else {
                    Account = setTimeout("RemainTime()", 1000);
                }
                iTime = iTime - 1;
            }
            $("#codespan").html(sTime);
        }

    </script>
    <title>在线注册</title>
</head>
<body>
<div id="wrap-div">

    <%--引入顶部导航条--%>

    <div id="center-content">
        <%--<img src="static/css/images/font-logo.png">--%>

        <form autocomplete="off" class="signin">
            <h2 style="text-align: center; margin: 1em 0;">中小微企业信息管理系统在线账号</h2>
            <fieldset>

                <p id="phonespan"></p>
                <input type="text" id="phone" name="phone" maxlength="20" placeholder="手机号">
                <p id="codespan"></p>
                <input type="text" id="phone-code" name="phone-code" maxlength="20" placeholder="获取手机验证码">
                <a id="get-code" href="#"><i class="fa fa-mobile-phone"></i> 获取验证码</a>
                <p id="emailspan"></p>
                <input type="email" id="email" name="" placeholder="邮箱地址">
                <p id="refercodespan"></p>
                <input type="text" id="refercode" name="refercode"  placeholder="身份证">
                <p id="passwordspan"></p>
                <input type="password" id="password" name="password" placeholder="密码">
                <p id="passwdagainspan"></p>
                <input type="password" id="passwdagain" name="passwdagain" maxlength="20" placeholder="再次输入">
                <button id="tijiao">提交</button>
            </fieldset>
        </form>
    </div>
</div>
<div id="banner"></div>
<div style="width: 100%;" id="image-background" class="image-background">
    <img style="width: 100%;" src="static/css/images/login-back.png" class="centerImage">
</div>
<script>
    (function ($) {
        "use strict";
        var pluginName = 'centerImage';

        var pluginController = function (element, theOptions) {

            var $container = $(element);

            var defaults = {
                imgClass: "centerImage"
            };
            // Get options saved within $container's data attributes
            var meta = $container.data(pluginName + '-options');
            var options = $.extend(defaults, meta, theOptions);

            var $img = $container.find("img." + options.imgClass);
            var tempImg = new Image();
            var init = function () {
                $img.css({
                    position: "absolute",
                    "max-width": "none",
                    "max-height": "none"
                });

                tempImg.src = $img.attr("src");
                centerImage();
                $(window).on('resize.' + pluginName + ' ' + 'orientationchange.' + pluginName, centerImage);
            };

            var getImageDim = function () {
                var $imgContainer = $container;
                var containerWidth = $imgContainer.width();
                var containerHeight = $imgContainer.height();
                var containerRatio = containerHeight / containerWidth;
                var imageWidth = tempImg.width;
                var imageHeight = tempImg.height;
                var imageRatio = imageHeight / imageWidth;
                var necontainerWidth;
                var necontainerHeight;

                if (containerRatio > imageRatio) {
                    necontainerHeight = containerHeight;
                    necontainerWidth = containerHeight / imageRatio;
                } else {
                    necontainerHeight = containerWidth * imageRatio;
                    necontainerWidth = containerWidth;
                }

                return {
                    width: necontainerWidth,
                    height: necontainerHeight,
                    left: (containerWidth - necontainerWidth ) / 2,
                    top: (containerHeight - necontainerHeight ) / 2
                };
            };

            // apply style for bg image and canvas
            var centerImage = function () {
                var dim = getImageDim();
                var styleCSS = {
                    width: dim.width,
                    height: dim.height,
                    left: dim.left,
                    top: dim.top
                };

                $img.css(styleCSS);
            };

            // Destroy the warp object without removing elements
            var destroy = function () {
                // Unbind events
                $container.off('.' + pluginName);
                $container.find('*').off('.' + pluginName);
                // Remove data
                $container.removeData(pluginName);
                $container = null;
            };

            // Wapper object
            var that = {};
            that.options = options;
            that.destroy = destroy;

            // Initialize the wrapper object to generate elements of the widget
            init();

            //
            // Store wrapper object in $container using jQuery's $.data function.
            // Usage: console.log($('#theListener').data('jqListener'));
            $container.data(pluginName, that);
        };

        //
        // jQuery function
        //
        $.fn[pluginName] = function (options) {
            this.each(function () {
                pluginController(this, options);
            });
            // Chain-ability of jQuery objects
            return this;
        };
    })(jQuery);

    $(document).ready(function () {
        //debugger;
        jQuery("#image-background").centerImage();
    });
</script>
</body>
</html>
