<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <!-- 引入Font Awesome的css文件 -->
    <link type="text/css" rel="stylesheet" href="static/power/css/font-awesome.css">
    <link type="text/css" rel="stylesheet" href="static/power/css/module.css">

    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <script id="microloader" type="text/javascript" src="static/power/bootstrap.js"></script>

    <style>
        #wrap{
            margin: 30px auto;
            width: 800px;
            height: 600px;
            border: 1px solid #ccc;
            border-radius: 2px;
            padding: 5px;
        }
        h2{
            margin-bottom: 30px;
        }
        img{
            height: 160px;
            margin-right: 20px;
        }

        table{
            margin: 20px 0;
            font-size: 15px;
            border: 0px solid #0C0000;
            align:center;
        }
        tr  {
            border: 0px solid #0C0000;
            padding: 3px;
        }

       td{
            border: 1px solid #0C0000;
            padding: 3px;
        }
    </style>
</head>
<body>
<div id="wrap">
<%--<div>--%>
    <h2 align="center">${name}  注册号：${buslicno}</h2>
    <table   style=" width: 100%;margin:auto border:1px solid red;border-collapse:collapse;">

        <tr>
            <td>职务</td>
            <td>证件类型</td>
            <td>姓名</td>
            <td>证件号码</td>
            <td>手机</td>
            <td>传真</td>
            <td>E-mail</td>
            <td>Q Q</td>
            </tr>

            <tr>
                <td>${psotion}</td>
                <td>${edoctype}</td>
                <td>${edocnum}</td>
                <td>${etel}</td>
                <td>${ephone}</td>
                <td>${efax}</td>
                <td>${eemail}</td>
                <td>${eqq}</td>
                </tr>

    </table>


</div>
</body>
</html>