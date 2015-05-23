<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 13-11-14
  Time: 上午9:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>甘肃中小微企业信息管理系统</title>
    <link href="static/css/font_awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="static/css/index.css" rel="stylesheet">
    <link href="static/css/images/yg-logo32.jpg" rel="shortcut icon">
    <script src="static/jslib/jquery.mini.js"></script>

    <style>
        .image-background {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        #reg-btn {
            display: block;
            text-align: center;
            padding: 0.2em 0;
            width: 7em;
            margin: 0 auto;
            border: 1px solid #CCC;
            border-radius: 3px;
            color: #468CC8;
            box-shadow: 0 1px 1px #E2E4E6;
        }

        #reg-btn:hover{
            background-color: #c0c89b;
            color: white;
            border: 1px solid #468CC8;
            text-decoration: none;
        }

        body {
            background-color: #ffffff;
        }

        .container {
            display: block;
            width: 360px;
            border: 1px solid #cccccc;
            color: rgb(64, 64, 64);
            background-color: rgba(247, 247, 247, 0.8);
            border-radius: 2px;
            box-shadow: rgba(0, 0, 0, 0.298039) 0px 2px 2px;
            padding: 30px 0;
            margin: 0 auto;
            margin-top: 9em;
            zoom: 1;
        }
    </style>
</head>
<body>
<div id="login">

    <h2><i class="fa fa-user fa-fw"></i>甘肃中小微企业信息管理系统</h2>

    <form action="login_check" method="POST" autocomplete="off">

        <fieldset>

            <p><label for="user">用户名</label></p>
            <p><input name="user" type="text" id="user"></p>
            <!-- JS because of IE support; better: placeholder="mail@address.com" -->

            <p><label for="password">密码</label></p>
            <p><input name="password" type="password" id="password"></p>
            <!-- JS because of IE support; better: placeholder="password" -->

            <p><input type="submit" value="登录"></p>

        </fieldset>

    </form>
    <%--<a id="reg-btn" href="userregister"><span class="fa fa-user-plus"></span>注册新用户</a>--%>

</div>
<!-- end login -->

<div id="banner"></div>
<div id="image-background" class="image-background">
    <img src="static/css/images/17.jpg" class="centerImage">
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
