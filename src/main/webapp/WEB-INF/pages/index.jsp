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
    <link href="static/css/images/wq-icon.png" rel="shortcut icon">

    <style>
        * {
            box-sizing: border-box;
        }

        body * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #5abb8b;
        }

        .wrap {
            width: 300px;
            margin: 180px auto;
            background-color: transparent;
        }

        .wrap img {
            display: block;
            width: 300px;
            margin-bottom: 1em;
        }

        form input {
            width: 100%;
            font-size: 16px;
            margin: 0;
            border: thin solid white;
            padding: 0.8em;
        }

        input:focus {
            box-shadow: none;
        }

        input[type="text"] {
            border-radius: 3px 3px 0 0;
        }

        input[type="password"] {
            border-top: thin solid #CCCCCC;
        }

        input[type="submit"] {
            margin-top: 1em;
            border-radius: 3px;
            color: white;
            background-color: #ef5350;
            border: thin solid #ef5350;
            font-weight: 800;
        }

        .image-background {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .wrap a {
            color: white;
            text-decoration: none;
            display: block;
            text-align: center;
            margin-top: 1em;
            font-family: 'Microsoft YaHei';
        }

        .wrap a:visited {
            color: #ffffff;
        }

        .wrap a:hover {
            color: #e2e2e2;
        }
    </style>
</head>
<body>
<div class="wrap">
    <img src="static/css/images/font-logo.png">

    <form action="login_check" method="POST" autocomplete="off">
        <input name="user" type="text" id="user" placeholder="用户名">
        <input name="password" type="password" id="password" placeholder="密码">
        <input type="submit" value="登录">
    </form>

    <a href="#">忘 记 密 码？</a>
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
