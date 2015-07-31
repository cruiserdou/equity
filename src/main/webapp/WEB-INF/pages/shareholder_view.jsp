
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>

<head>

  <meta charset="UTF-8">

  <title>企业股东信息</title>

    <%--<link rel="stylesheet" type="text/css" href="static/css/main.css"/>--%>
    <%--<link rel="stylesheet" type="text/css" href="static/css/xwq_exam_main.css"/>--%>
    <style>
        #wrap{
            margin: 30px auto;
            width: 100%;
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
            align:center;
        }
    </style>
</head>

<body>

<div id="wrap">
   <h2 align="center">考企业股东信息</h2><br/><br/>


               <table style="width: 100%; align:center; border-collapse:collapse;" border="1">
                   <tr>
                       <th class="table_header" colspan="15">股东名册</th>
                       </tr>
                   <tr>
                       <th>股东类型</th>
                       <th>股东</th>
                       <th>证件类型</th>
                       <th>证件号码</th>
                       <th>持股数量</th>
                       <th>流通数量</th>
                       <th>冻结数量</th>
                       <th>详情</th>
                       <th>职务</th>
                       <th>电话</th>
                       <th>传真</th>
                       <th>E-mail</th>
                       <th>QQ</th>
                       <th>个人微信号</th>
                       <th>固定电话</th>
                       </tr>
                       <tr>
                           <td>${gd_shtype}</td>
                           <td>${gd_shname}</td>
                           <td>${gd_shdoctype}</td>
                           <td>${gd_shdocnum}</td>
                           <td>${gd_shareholdnum}</td>
                           <td>${gd_currencynum}</td>
                           <td>${gd_freezenum}</td>
                           <td>${gd_remark}</td>
                           <td>${gd_psotion}</td>
                           <td>${gd_phone}</td>
                           <td>${gd_fax}</td>
                           <td>${gd_email}</td>
                           <td>${gd_qq}</td>
                           <td>${gd_webchat}</td>
                           <td>${gd_tel}</td>
                       </tr>

                   </table>

</div>


</body>

</html>