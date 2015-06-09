<%@ page import="java.util.Map" %>
<%@ page contentType="text/html;charset=UTF-8" import="com.xwq.common.util.sqlBean" language="java" %>
<%@ page import="java.sql.ResultSet" %>
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
            width: 600px;
            height: 581px;
            border: 0px solid #ccc;
            border-radius: 2px;
            padding: 30px;
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

    <%--<h2 align="center">经营性道路客货驾驶员从业资格考试成绩单</h2>--%>
   <table class="enter_table" id="table_base">
   <tr>
       <th class="table_header" colspan="4">基本信息</th>
       </tr>
   <tr>
       <th>营业执照号码</th>
       <td>{buslicno}</td>
       <th>企业名称</th>
       <td>{name}</td>
       </tr>
   <tr>
       <th>单位类别</th>
       <td>{unit}</td>
       <th>法定代表人</th>
       <td>{legrep}</td>
       </tr>
   <tr>
       <th>地域</th>
        //'<td>{region}</td>
       <td>
           <select class="select" name="province" id="s1">
               <option >{province}</option>
                ' </select>
            ' <select class="select" name="city" id="s2">
               <option>{city}</option>
               </select>
           <select class="select" name="county" id="s3">
               <option>{county}</option>
               </select>
           </td>
       <th>公司简称</th>
       <td>{nos}</td>
       </tr>
   <tr>
       <th>邮政编码</th>
       <td>{postal}</td>
       <th>企业性质</th>
       <td>{nature}</td>
       </tr>
   <tr>
       <th>注册资本（万元）</th>
       <td>{regcap}</td>
       <th>注册日期</th>
       <td>{regdt}</td>
       </tr>
   <tr>
       <th>营业期限自</th>
       <td>{bustermfdt}</td>
       <th>营业期限至</th>
       <td>{bustremtdt}</td>
       </tr>
   <tr>
       <th>挂牌代码</th>
       <td>{listcode}</td>
       <th>挂牌价格</th>
       <td>{listprice}</td>
       </tr>
   <tr>
       <th>挂牌出资（元/元出资.股）</th>
       <td>{list_contrib}</td>
       <th>挂牌日期</th>
       <td>{listdt}</td>
       </tr>
   <tr>
       <th>微信号</th>
       <td>{webchat}</td>
       <th>推荐人</th>
       <td>{refer}</td>
       </tr>
   <tr>
       <th>负责人</th>
       <td>{liabler}</td>
       <th>推荐渠道</th>
       <td>{channels}</td>
       </tr>
   <tr>
       <th>注册地址</th>
       <td>{regaddr}</td>
       <th>员工人数</th>
       <td>{staffnum}</td>
       </tr>
   <tr>
       <th>办公地址</th>
       <td>{offaddr}</td>
       <th>证监会行业分类</th>
       <td>{csrc_type}</td>
       </tr>
   <tr>
       <tr>
       <th>经营范围</th>
       <td colspan="3"><textarea id="scope" name="scope"  type="text" value="{scope}">{scope}</textarea></td>
       </tr>
   <tr>
       <th>主营业务</th>
       <td colspan="3"><textarea id="mbus" name="mbus"  type="text" value="{mbus}">{mbus}</textarea></td>
       </tr>
   <tr>
       <th>企业简介</th>
       <td colspan="3"><textarea id="eprofile" name="eprofile"  type="text" value="{eprofile}">{eprofile}</textarea> </td>
       </tr>
   <tr>
       <th>备注</th>
       <td colspan="3"><textarea id="bz" name="bz"  type="text" value="{bz}"></textarea></td>
       </tr>
   <tr>
       <th>企业照片资料</th>
       <td colspan="3">{phoinf}</td>
       </tr>
   </table>

   <table class="enter_table" id="table_sh">
   <tr>
       <th class="table_header" colspan="8">股东名册</th>
       </tr>
   <tr>
       <th>股东类型</th>
       <th>股东</th>
       <th>证照/证件类型</th>
       <th>证照/证件号码</th>
       <th>持股数量</th>
       <th>流通数量</th>
       <th>冻结数量</th>
       <th>详情</th>
       </tr>
   <tpl  for="list_sh">
       <tr>
           <td>{shtype}</td>
           <td>{shname}</td>
           <td>{shdoctype}</td>
           <td>{shdocnum}</td>
           <td>{shareholdnum}</td>
           <td>{currencynum}</td>
           <td>{freezenum}</td>
           <td>{remark}</td>
           </tr>
       </tpl>
   </table>


   <table class="enter_table" id="table_link">
   <tr>
       <th class="table_header" colspan="4">法定代表人基本信息<a href="legrep_details?id={id}" target="_blank">详细</a></th>
       </tr>
   <tr>
       <th>职务</th>
       <td>{post}</td>
       <th>证件类型</th>
       <td>{doctype}</td>
       </tr>
   <tr>
       <th>姓名</th>
       <td>{contact}</td>
       <th>证件号码</th>
       <td>{docnum}</td>
       </tr>
   <tr>
       <th>手机</th>
       <td>{phone}</td>
       <th>传真</th>
       <td>{fax}</td>
       </tr>
   <tr>
       <th>E-mail</th>
       <td>{email}</td>
       <th>QQ</th>
       <td>{qq}</td>
       </tr>
   </table>


   <table class="enter_table" id="table_acount">
   <tr>
       <th class="table_header" colspan="4">国民经济行业分类信息</th>
       </tr>
   <tr>
       <th>行业一级分类</th>
       <td>
           <select class="select" name="indclass1" id="cl1">
               <option>{indclass1}</option>
                ' </select>
           </td>
       <th>行业二级分类</th>
       <td>
           <select class="select" name="indclass2" id="cl2">
               <option>{indclass2}</option>
                ' </select>
           </td>
       </tr>
   <tr>
       <th>行业三级分类</th>
       <td>
           <select class="select" name="indclass3" id="cl3">
               <option>{indclass3}</option>
                ' </select>
           </td>
       <th>行业四级分类</th>
       <td>
           <select class="select" name="indclass4" id="cl4">
               <option>{indclass4}</option>
                ' </select>
           </td>
       </tr>
   </table>


   <table  class="enter_table" id="table_ocompay">
   <tr>
       <th class="table_header" colspan="4">企业维护信息</th>
       </tr>
   <tr>
       <th>企业来源</th>
       <td>{esource}</td>
       <th>推荐人</th>
       <td>{referee}</td>
       </tr>
   <tr>
       <th>企业来源详情</th>
       <td colspan="3">{esourcedesc}</td>
       </tr>
   <tr>
       <th>推荐日期</th>
       <td>{recomdt}</td>
       <th>企业维护人</th>
       <td>{emaint}</td>
       </tr>
   <tr>
       <th>托管状态</th>
       <td>{trusteeship}</td>
       <th>挂牌状态</th>
       <td>{listst}</td>
       </tr>
   <tr>
       <th>企业等级</th>
       <td>{eclass}</td>
       <th>企业维护状态</th>
       <td>{maintain}</td>
       </tr>
   <tr>
       <th>所属后备库</th>
       <td>{reserve}</td>
       <th>联系人</th>
       <td>{contacter}</td>
       </tr>
   <tr>
       <th>部门</th>
       <td>{dept}</td>
       <th>职务</th>
       <td>{psotion}</td>
       </tr>
   <tr>
       <th>证件类型</th>
       <td>{edoctype}</td>
       <th>证件号码</th>
       <td>{edocnum}</td>
       </tr>
   <tr>
       <th>固定电话</th>
       <td>{etel}</td>
       <th>手机号码</th>
       <td>{ephone}</td>
       </tr>
   <tr>
       <th>传真</th>
       <td>{efax}</td>
       <th>E-mail</th>
       <td>{eemail}</td>
       </tr>
   <tr>
       <th>QQ</th>
       <td>{eqq}</td>
       <th>备注</th>
       <td>{remark}</td>
       </tr>
   </table>
    <%--<div style="margin-top: 30px;">打印日期： 2014-09-01</div>--%>

</div>


<script>
    print();
</script>
</body>
</html>