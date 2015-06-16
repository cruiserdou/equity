//var str = "static/upload/";

Ext.define('App.view.enterprise.Applyf', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.applyf', 
    layout: 'fit',
    listeners: {
        afterrender: function () {
            setup();preselect('甘肃省');
            setup_cl();preselect_cl('农、林、牧、渔业');
        }
    },
    applyTpl: [
        '<div class="wrap_center">',
        '<h2>企业信息</h2>',
        '<form id="apply_form">',
        '<table class="enter_table" id="table_base">',
        '<div class="wrap_center">',
        '<tr>',
        '<th class="table_header" colspan="4">基本信息</th>',
        '</tr>',
        '<tr>',
        '<th>营业执照号码<span style="color: red">*</span></th>',
        '<td><input id="buslicno"  name="buslicno"  type="text" value="{buslicno}"/></td>',
        '<th>企业名称</th>',
        '<td><input id="name" name="name"  type="text" value="{name}"/></td>',
        '</tr>',
        '<tr>',
        '<th>单位类别</th>',
        '<td><input id="unit" name="unit"  type="text" value="{unit}"/></td>',
        '<th>法定代表人</th>',
        '<td><input id="legrep" name="legrep"  type="text" value="{legrep}"/></td>',
        '</tr>',
        '<tr>',
        '<th>地域</th>',
        '<td>',
        '<select style="width: 70px" class="select" name="province"  id="s1">',
        '<option >{province}</option>',
        ' </select>',
        ' <select style="width: 70px"  class="select" name="city" id="s2">',
        '<option>{city}</option>',
        '</select>',
        '<select style="width: 70px"  class="select" name="county" id="s3">',
        '<option>{county}</option>',
        '</select>',
        '</td>',
        '<th>公司简称</th>',
        '<td><input id="nos" name="nos"  type="text" value="{nos}"/></td>',
        '</tr>',
        '<tr>',
        '<th>邮政编码</th>',
        '<td><input id="postal" name="postal"  type="text" value="{postal}"/></td>',
        '<th>企业性质</th>',
        '<td><input id="nature" name="nature"  type="text" value="{nature}"/></td>',
        '</tr>',
        '<tr>',
        '<th>注册资本（万元）</th>',
        '<td><input id="regcap" name="regcap"  type="text" value="{regcap}"/></td>',
        '<th>注册日期</th>',
        '<td><input id="regdt" name="regdt"  type="date" value="{regdt}"/></td>',
        '</tr>',
        '<tr>',
        '<th>营业期限自</th>',
        '<td><input id="bustermfdt" name="bustermfdt"  type="date" value="{bustermfdt}"/></td>',
        '<th>营业期限至</th>',
        '<td><input id="bustremtdt" name="bustremtdt"  type="date" value="{bustremtdt}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>挂牌区域</th>'+
        '<td><input id="list_area" name="list_area"  type="text" value="{list_area}"/></td>'+
        '<th>挂牌日期</th>'+
        '<td><input id="listdt" name="listdt"  type="date" value="{listdt}"/></td>'+
            //'<th>挂牌推荐人</th>'+
            //'<td><input id="refer" name="refer"  type="text" value="{refer}"/></td>'+
        '</tr>'+
        '<tr>',
        '<th>挂牌代码</th>'+
        '<td><input id="listcode" name="listcode"  type="text" value="{listcode}"/></td>'+
        '<th>挂牌价格<br>元/元出资(股)</th>'+
        '<td><input id="listprice" name="listprice"  type="text" value="{listprice}"/></td>'+
        '</tr>'+

        '<tr>'+
        '<th>企业微信号</th>',
        '<td><input id="webchat" name="webchat"  type="text" value="{webchat}"/></td>'+
        '<th>推荐单位</th>'+
        '<td><input id="channels" name="channels"  type="text" value="{channels}"/></td>'+
        '</tr>'+
            //'<tr>'+
            //'<th>融资负责人</th>'+
            //'<td><input id="rz_charge" name="rz_charge"  type="text" value="{rz_charge}"/></td>'+
            //'<th>维护负责人</th>'+
            //'<td><input id="wh_charge" name="wh_charge"  type="text" value="{wh_charge}"/></td>'+
            //'</tr>'+
        '<tr>'+
        '<th>登记机关</th>'+
        '<td><input id="regist_organ" name="regist_organ"  type="text" value="{regist_organ}"/></td>'+

        '<th>员工人数</th>'+
        '<td><input id="staffnum" name="staffnum"  type="text" value="{staffnum}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>注册地址</th>'+
        '<td colspan="3"><input id="regaddr" name="regaddr"  type="text" value="{regaddr}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>办公地址</th>'+
        '<td colspan="3"><input id="offaddr" name="offaddr"  type="text" value="{offaddr}"/></td>'+
        '</tr>'+
        '<tr>',
        '<th>经营范围</th>'+
        '<td colspan="3"><textarea id="scope" name="scope"  type="text" value="{scope}">{scope}</textarea></td>'+
        '</tr>'+
        '<tr>'+
        '<th>主营业务</th>'+
        '<td colspan="3"><textarea id="mbus" name="mbus"  type="text" value="{mbus}">{mbus}</textarea></td>'+
        '</tr>'+
        '<tr>'+
        '<th>企业简介</th>'+
        '<td colspan="3"><textarea id="eprofile" name="eprofile"  type="text" value="{eprofile}">{eprofile}</textarea></td>'+
        '</tr>'+
        '<tr>',
        '<th>备注</th>',
        '<td colspan="3"><textarea id="bz" name="bz"  type="text" value="{bz}"></textarea></td>',
        '</tr>',
        '<tr>',
        '<th>企业图文信息</th>',
        '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>',
        '</tr>',
        '</table>',

        '<table class="enter_table" id="table_sh">',
        '<tr>',
        '<th class="table_header" colspan="8">股东名册</th>',
        '</tr>',
        '<tr>' +
        '<td  colspan="4" align="center"><input type="button" id="addRow" name="addRow" onClick="addRow();" value="添加行"/></td>' +
        '<td align="center"><input type="button" id="delRow" name="delRow" onClick="removeRow();" value="删除行"/></td>' +
        '</tr>',

            '<tr>',
        '<th>股东类型</th>',
        '<th>股东</th>',
        '<th>证照/证件类型</th>',
        '<th>证照/证件号码</th>',
        '<th>持股数量</th>',
        '<th>流通数量</th>',
        '<th>冻结数量</th>',
        '<th>详情</th>',
        '</tr>',
        '<tr>',
        '<td>{shtype}</td>',
        '<td>{shname}</td>',
        '<td>{shdoctype}</td>',
        '<td>{shdocnum}</td>',
        '<td>{shareholdnum}</td>',
        '<td>{currencynum}</td>',
        '<td>{freezenum}</td>',
        '<td>{remark}</td>',
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_link">',
        '<tr>',
        '<th class="table_header" colspan="4">法定代表人基本信息</th>',
        '</tr>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="contact" name="contact"  type="text" value="{contact}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="doctype" name="doctype"  type="text" value="{doctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="post" name="post"  type="text" value="{post}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="docnum" name="docnum"  type="text" value="{docnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="phone" name="phone"  type="text" value="{phone}"/></td>',
        '<th>传真</th>',
        '<td><input id="fax" name="fax"  type="text" value="{fax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="email" name="email"  type="text" value="{email}"/></td>',
        '<th>QQ</th>',
        '<td><input id="qq" name="qq"  type="text" value="{qq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="webchat_gr" name="webchat_gr"  type="text" value="{webchat_gr}"/></td>'+
        '<th>固话</th>',
        '<td><input id="tel_gr" name="tel_gr"  type="text" value="{tel_gr}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
        '</tr>'+
        '</table>'+




        '<table class="enter_table" id="table_acount">',
        '<tr>',
        '<th class="table_header" colspan="4">国民经济行业分类信息</th>',
        '</tr>',
        '<tr>',
        '<th>行业一级分类</th>',
        '<td>    ' +
        '<select class="select" name="indclass1" id="cl1">',
        '<option>{indclass1}</option>',
        ' </select>',
        '</td>',
        '<th>行业二级分类</th>',
        '<td>',
        '<select class="select" name="indclass2" id="cl2">',
        '<option>{indclass2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>行业三级分类</th>',
        '<td>',
        '<select class="select" name="indclass3" id="cl3">',
        '<option>{indclass3}</option>',
        ' </select>',
        '</td>',
        '<th>行业四级分类</th>',
        '<td>',
        '<select class="select" name="indclass4" id="cl4">',
        '<option>{indclass4}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_csrc_type">',
        '<tr>',
        '<th class="table_header" colspan="4">证监会行业分类信息</th>',
        '</tr>',
        '<tr>',
        '<th>证监会行业一级分类</th>',
        '<td>    ' +
        '<select class="select" name="csrc_type" id="csrc1">',
        '<option>{csrc_type}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业二级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ2" id="csrc2">',
        '<option>{csrc_typ2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>证监会行业三级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ3" id="csrc3">',
        '<option>{csrc_typ3}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业四级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ4" id="csrc4">',
        '<option>{csrc_typ4}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '</table>',


        '<table  class="enter_table" id="table_ocompay">',
        '<tr>',
        '<th class="table_header" colspan="4">企业最近一次被关注信息</th>',
        '</tr>',
        '<tr>',
        '<th>更新日期</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>更新人</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>更新单位</th>',
        '<td colspan="3"><input id="esourcedesc" name="esourcedesc"  type="text" value="{esourcedesc}"/></td>',
        '</tr>',
        '<tr>',
        '<th>推荐日期</th>',
        '<td><input id="recomdt" name="recomdt"  type="date" value="{recomdt}"/></td>',
        '<th>企业维护人</th>',
        '<td><input id="emaint" name="emaint"  type="text" value="{emaint}"/></td>',
        '</tr>',
        '<tr>',
        '<th>托管状态</th>',
        '<td><input id="trusteeship" name="trusteeship"  type="text" value="{trusteeship}"/></td>',
        '<th>挂牌状态</th>',
        '<td><input id="listst" name="listst"  type="text" value="{listst}"/></td>',
        '</tr>',
        '<tr>',
        '<th>企业等级</th>',
        '<td><input id="eclass" name="eclass"  type="text" value="{eclass}"/></td>',
        '<th>企业维护状态</th>',
        '<td><input id="maintain" name="maintain"  type="text" value="{maintain}"/></td>',
        '</tr>',
        '<tr>',
        '<th>所属后备库</th>',
        '<td><input id="reserve" name="reserve"  type="text" value="{reserve}"/></td>',
        '<th>联系人</th>',
        '<td><input id="contacter" name="contacter"  type="text" value="{contacter}"/></td>',
        '</tr>',
        '<tr>',
        '<th>部门</th>',
        '<td><input id="dept" name="dept"  type="text" value="{dept}"/></td>',
        '<th>职务</th>',
        '<td><input id="psotion" name="psotion"  type="text" value="{psotion}"/></td>',
        '</tr>',
        '<tr>',
        '<th>证件类型</th>',
        '<td><input id="edoctype" name="edoctype"  type="text" value="{edoctype}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="edocnum" name="edocnum"  type="text" value="{edocnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定电话</th>',
        '<td><input id="etel" name="etel"  type="text" value="{etel}"/></td>',
        '<th>手机号码</th>',
        '<td><input id="ephone" name="ephone"  type="text" value="{ephone}"/></td>',
        '</tr>',
        '<tr>',
        '<th>传真</th>',
        '<td><input id="efax" name="efax"  type="text" value="{efax}"/></td>',
        '<th>E-mail</th>',
        '<td><input id="eemail" name="eemail"  type="text" value="{eemail}"/></td>',
        '</tr>',
        '<tr>',
        '<th>QQ</th>',
        '<td><input id="eqq" name="eqq"  type="text" value="{eqq}"/></td>',
        '<th>备注</th>',
        '<td><input id="remark" name="remark"  type="text" value="{remark}"/></td>',
        '</tr>',
        '</table>',

        '<table class="enter_table" id="table_assets_finance">',
        '<tr>',
        '<th class="table_header" colspan="6">企业财务信息</th>',
        '</tr>',
        '<tr>',
        '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;始&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th></th>',
        '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
        '<td><input id="servicetype" name="servicetype"  type="text" value="{servicetype}"/></td>',
        '<th></th>',

        '</tr>',
        '<tr>',
        '<th>资产</th>',
        '<th>年初余额(元)</th>',
        '<th>期末余额(元)</th>',
        '<th>负债和所有者权益</th>',
        '<th>年初余额(元)</th>',
        '<th>期末余额(元)</th>',
        '</tr>',
        '<tr>',
        '<th>流动资产：</th>',
        '<th></th>',
        '<th></th>',
        '<th>流动负债：（元）</th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>货币资金</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>短期借款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>交易性金融资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>交易性金融负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收票据</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付票据</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收账款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付账款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>预付款项</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>预收款项</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收利息</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付职工薪酬</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收股利</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应交税费</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他应收款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付利息</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>存货</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付股利</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>一年内到期非流动资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>其他应付款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他流动资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>一年内到期的非流动负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '<th>其他流动负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>流动资产合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>流动负债合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>非流动资产：</th>',
        '<th></th>',
        '<th></th>',
        '<th>非流动负债：</th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>可供出售金融资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>长期借款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>持有至到期投资</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>应付债券</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期应收款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>长期应付款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期股权投资</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>专项应付款</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>投资性房地产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>预计负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>递延所得税负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',

        '<tr>',
        '<th>减：累计折旧</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>其他非流动负债</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产净值</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>非流动负债合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>减：固定资产减值准备</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>负债合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产净额</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>在建工程</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>所有者权益(或股东权益)</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>工程物资</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>实收资本（或股本）</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产清理</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>资本公积</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>生产性生物资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>减：库存股</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>无形资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>专项储备</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>商誉</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>盈余公积</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期待摊费用</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>未分配利润</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>递延所得税资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>所有者权益合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他非流动资产</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>非流动资产合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>资产总计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>负债和所有者权益合计</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_service">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  name="type_server"  type="checkbox" value="true" />服务机构&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">服务机构信息</th>',
        '</tr>',
        '<tr>',
        '<th>服务机构名称</th>',
        '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '<th>服务机构类别</th>',
        '<td><input id="servicetype" name="servicetype"  type="text" value="{servicetype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>业务内容</th>',
        '<td><input id="servicecontent" name="servicecontent"  type="text" value="{servicecontent}"/></td>',
        '<th>级别</th>',
        '<td><input id="servicelevels" name="servicelevels"  type="text" value="{servicelevels}"/></td>',
        '</tr>',
        '<tr>',
        '<th>惩罚记录</th>',
        '<td><input id="servicepenalty" name="servicepenalty"  type="text" value="{servicepenalty}"/></td>',
        '<th>专属领域</th>',
        '<td><input id="servicedomain" name="servicedomain"  type="text" value="{servicedomain}"/></td>',
        '</tr>',
        '<tr>',
        '<th>专审委员</th>',
        '<td><input id="b_examiner" name="b_examiner"  type="text" value="{b_examiner}"/></td>',
        '<th>兼任职务</th>',
        '<td><input id="part_post" name="part_post"  type="text" value="{part_post}"/></td>',
        '</tr>',
        '<tr>',
        '<th>简介</th>',
        '<td colspan="3"><textarea id="servicedescs" name="servicedescs"  type="text" value="{servicedescs}"></textarea></td>'+
        '</tr>',
        '<tr>',
        '<th>备注</th>',
        '<td colspan="3"><textarea id="serviceremark" name="serviceremark"  type="text" value="{serviceremark}"></textarea></td>'+
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_investors">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  name="type_investors"  type="checkbox" value="true" />投资人&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">投资人信息</th>',
        '</tr>',
        '<tr>',
        '<th>投资领域</th>',
        '<td  colspan="3"><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>',
        '</tr>',
        '<tr>',
        '<th>行业一级分类</th>',
        '<td>',
        '<select class="select" name="indclass1" id="cl1">',
        '<option>{indclass1}</option>',
        ' </select>',
        '</td>',
        '<th>行业二级分类</th>',
        '<td>',
        '<select class="select" name="indclass2" id="cl2">',
        '<option>{indclass2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>行业三级分类</th>',
        '<td>',
        '<select class="select" name="indclass3" id="cl3">',
        '<option>{indclass3}</option>',
        ' </select>',
        '</td>',
        '<th>行业四级分类</th>',
        '<td>',
        '<select class="select" name="indclass4" id="cl4">',
        '<option>{indclass4}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>证监会行业一级分类</th>',
        '<td>    ' +
        '<select class="select" name="csrc_type" id="csrc1">',
        '<option>{csrc_type}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业二级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ2" id="csrc2">',
        '<option>{csrc_typ2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>证监会行业三级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ3" id="csrc3">',
        '<option>{csrc_typ3}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业四级分类</th>',
        '<td>',
        '<select class="select" name="csrc_typ4" id="csrc4">',
        '<option>{csrc_typ4}</option>',
        ' </select>',
        '</td>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="contact" name="contact"  type="text" value="{contact}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="doctype" name="doctype"  type="text" value="{doctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="post" name="post"  type="text" value="{post}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="docnum" name="docnum"  type="text" value="{docnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="phone" name="phone"  type="text" value="{phone}"/></td>',
        '<th>传真</th>',
        '<td><input id="fax" name="fax"  type="text" value="{fax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="email" name="email"  type="text" value="{email}"/></td>',
        '<th>QQ</th>',
        '<td><input id="qq" name="qq"  type="text" value="{qq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="webchat_gr" name="webchat_gr"  type="text" value="{webchat_gr}"/></td>'+
        '<th>固话</th>',
        '<td><input id="tel_gr" name="tel_gr"  type="text" value="{tel_gr}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
        '</tr>'+
        '</table>',


        '<table class="enter_table" id="table_govermt">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  name="type_govermt" type="checkbox"  value="true"/>政府机构&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">政府部门信息</th>',
        '</tr>',
        '<tr>',
        '<th>单位名称</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>处/室</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职能介绍</th>',
        '<td colspan="3"><input id="esourcedesc" name="esourcedesc"  type="text" value="{esourcedesc}"/></td>',
        '</tr>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="contact" name="contact"  type="text" value="{contact}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="doctype" name="doctype"  type="text" value="{doctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="post" name="post"  type="text" value="{post}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="docnum" name="docnum"  type="text" value="{docnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="phone" name="phone"  type="text" value="{phone}"/></td>',
        '<th>传真</th>',
        '<td><input id="fax" name="fax"  type="text" value="{fax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="email" name="email"  type="text" value="{email}"/></td>',
        '<th>QQ</th>',
        '<td><input id="qq" name="qq"  type="text" value="{qq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="webchat_gr" name="webchat_gr"  type="text" value="{webchat_gr}"/></td>'+
        '<th>固话</th>',
        '<td><input id="tel_gr" name="tel_gr"  type="text" value="{tel_gr}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
        '</tr>'+
        '</table>',

        '<table class="enter_table" id="table_demand_rz">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  type="checkbox" name="demand_rz" value="true" />融资需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">融资需求</th>',
        '</tr>',
        '<tr>',
        '<th>融资金额</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>融资用途</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>股份融资/债券融资</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>偿付保障</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>可接受成本（%/年）</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>融资期限</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>融资用途详细说明</th>'+
        '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
        '</tr>'+
        '</table>',


        '<table class="enter_table" id="table_demand_px">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  type="checkbox" name="demand_px" value="true"/>培训需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">培训需求</th>',
        '</tr>',
        '<tr>',
        '<th>培训方式</th>',
        '<td colspan="3"><input id="esourcedesc" name="esourcedesc"  type="text" value="{esourcedesc}"/></td>',
        '</tr>',
        '<tr>',
        '<th>有效时间</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>可接受成本</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>培训内容</th>',
        '<td colspan="3"><textarea id="serviceremark" name="serviceremark"  type="text" value="{serviceremark}"></textarea></td>'+
        '</tr>',
        '<tr>'+
        '<th>详细要求</th>'+
        '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
        '</tr>'+
        '</table>',

        '<table class="enter_table" id="table_demand_rl">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  type="checkbox" name="demand_rl" value="true"/>人力需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">人力资源需求</th>',
        '</tr>',
        '<tr>',
        '<th>需求职位</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>职位人数</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职位薪金</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>性别要求</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>年龄要求</th>',
        '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>',
        '<th>经验要求</th>',
        '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>',
        '</tr>'+
        '</table>',

        '<a href="#"  style="font-size:18px;text-decoration: none;text-align: center;color: #ffffff;  margin: 1em auto;width: 8em;border-radius: 5px;  padding: 0.5em 0;background-color: #38AD5A; border: 1px solid #38AD5A;display: block;  "  onclick="save_cust_add()">保存</a>'+
        '</div>',
        '<div style="position: fixed; top: 7em; right: 6em">',
        '<ul>',
        '<li></li>',
        '<li></li>',
        '<br>',
        '<br>',
        '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>',
        '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>',
        '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>',
        '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>',
        '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>',
        '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>',
        '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>',
        '<li><a href="#table_service"  style="font-size:18px;">服务机构</a></li>',
        '<li><a href="#table_investors"  style="font-size:18px;">投资人</a></li>',
        '<li><a href="#table_govermt"  style="font-size:18px;">政府部门</a></li>',
        '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>',
        '<li><a href="#table_demand_px"  style="font-size:18px;">培训需求</a></li>',
        '<li><a href="#table_demand_rl"  style="font-size:18px;">人力资源需求</a></li>',
        '</ul>',
        '</form>',
        '</div>'
    ],
    border: false,
    id: 'image-upload',
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
                id: 'applyf_panel',
                autoScroll: true,
                tpl: Ext.create('Ext.XTemplate', this.applyTpl),
                listeners: {
                    afterrender: function () {
                        var obtain_panel = Ext.getCmp('applyf_panel');
                        obtain_panel.tpl.overwrite(obtain_panel.body, {});
                    }
                },
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        border: true,
                        items: [
                            {
                                text: '新建',
                                handler: function () {
                                    document.getElementById('apply_form').reset();
                                    //document.getElementById('apply_form_img').src = '';

                                }
                            },
                            '-',
                            {
                                text: '保存',
                                handler: function () { 


                                     
                                    //if (document.getElementById("apply_form_id_licmd").value == "") {
                                    //    Ext.Msg.alert("提示", "<span style='color: red;'>申请类别不能为空！</span>")
                                    //    return;
                                    //} 
                                    save_cust_add()

                                }
                            }
 
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});

function NumberCheck(num)
{
    var regex = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/;
    return regex.exec(num) != null;
}


function win_close() {

    Ext.getCmp('cust_add_id').close();

}


function save_cust_add() {

    if(document.getElementById('apply_form')['buslicno'].value==null && document.getElementById('apply_form')['buslicno'].value==""){
        Ext.Msg.alert("提示", "请填写营业执照号码！");
        return;
    }else{
        Ext.Ajax.request({
            method: "POST",
            params: {
                buslicno: document.getElementById('buslicno').value,
                name: document.getElementById('name').value,
                unit: document.getElementById('unit').value,
                legrep: document.getElementById('legrep').value,
                region: "",
                province: document.getElementById('s1').value,
                city: document.getElementById('s2').value,
                county: document.getElementById('s3').value,
                nos: document.getElementById('nos').value,
                postal: document.getElementById('postal').value,
                nature: document.getElementById('nature').value,
                regcap: document.getElementById('regcap').value,
                bustermfdt: document.getElementById('bustermfdt').value,
                bustremtdt: document.getElementById('bustremtdt').value,
                regdt: document.getElementById('regdt').value,
                listcode: document.getElementById('listcode').value,
                regaddr: document.getElementById('regaddr').value,
                offaddr: document.getElementById('offaddr').value,
                listprice: document.getElementById('listprice').value,
                staffnum: document.getElementById('staffnum').value,
                scope: document.getElementById('scope').value,
                mbus: document.getElementById('mbus').value,
                eprofile: document.getElementById('eprofile').value,
                phoinf: document.getElementById('phoinf').value,
                post: document.getElementById('post').value,
                doctype: document.getElementById('doctype').value,
                contact: document.getElementById('contact').value,
                docnum: document.getElementById('docnum').value,
                phone: document.getElementById('phone').value,
                fax: document.getElementById('fax').value,
                email: document.getElementById('email').value,
                qq: document.getElementById('qq').value,
                indclass1: document.getElementById('cl1').value,
                indclass2: document.getElementById('cl2').value,
                indclass3: document.getElementById('cl3').value,
                indclass4: document.getElementById('cl4').value,
                esource: document.getElementById('esource').value,
                referee: document.getElementById('referee').value,
                esourcedesc: document.getElementById('esourcedesc').value,
                recomdt: document.getElementById('recomdt').value,
                emaint: document.getElementById('emaint').value,
                trusteeship: document.getElementById('trusteeship').value,
                listst: document.getElementById('listst').value,
                eclass: document.getElementById('eclass').value,
                maintain: document.getElementById('maintain').value,
                reserve: document.getElementById('reserve').value,
                contacter: document.getElementById('contacter').value,
                dept: document.getElementById('dept').value,
                psotion: document.getElementById('psotion').value,
                edoctype: document.getElementById('edoctype').value,
                edocnum: document.getElementById('edocnum').value,
                etel: document.getElementById('etel').value,
                ephone: document.getElementById('ephone').value,
                efax: document.getElementById('efax').value,
                eemail: document.getElementById('eemail').value,
                eqq: document.getElementById('eqq').value,
                remark: document.getElementById('remark').value,

                webchat: document.getElementById('webchat').value,
                refer: document.getElementById('refer').value,
                channels: document.getElementById('channels').value,
                listdt: document.getElementById('listdt').value,
                bz: document.getElementById('bz').value,
                regist_organ: document.getElementById('regist_organ').value,

                csrc_type: document.getElementById('csrc1').value,
                csrc_type2: document.getElementById('csrc2').value,
                csrc_type3: document.getElementById('csrc3').value,
                csrc_type4: document.getElementById('csrc4').value,

                rz_charge: document.getElementById('rz_charge').value,
                wh_charge: document.getElementById('wh_charge').value,
                list_area: document.getElementById('list_area').value,

                webchat_gr: document.getElementById('webchat_gr').value,
                tel_gr: document.getElementById('tel_gr').value,
                type_enterp: document.getElementById('type_enterp').value,
                type_server: document.getElementById('type_server').checked,
                type_investors: document.getElementById('type_investors').checked,
                type_govermt: document.getElementById('type_govermt').checked,
                demand_rz: document.getElementById('demand_rz').checked,
                demand_px: document.getElementById('demand_px').checked,
                demand_rl: document.getElementById('demand_rl').checked
            },
            url: 'add_enterprise_info',
            success: function () {
                Ext.Msg.alert("提示", "保存成功！");
                //Ext.getCmp('cust_add_id').close();
                Ext.getCmp('grid_enterprise').getStore().load();
                document.getElementById('apply_form').reset();
            },
            failure: function () {
                Ext.Msg.alert("提示", "保存失败！");
            }
        });
    }


}
function card_check() {
    show();

}

function show()
{
    var form_obt_apply = document.getElementById("apply_form");
    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_apply['buslicno'].value
        },
        url: 'check_buslicno_info',
        success: function (response,opts) {
            var obj=Ext.decode(response.responseText);

            if(!obj.success)
            {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_form')['buslicno'].value="";
            }
        },
        failure: function (response,opts) {
            Ext.Msg.alert("提示", "错");
        }
    });
}



function addRow()
{
    //var Table = document.getElementById("table_sh");
    //
    //NewRow = Table.insertRow();
    //NewCell1= NewRow.insertCell();                     //添加列
    //NewCell2=NewRow.insertCell();
    //NewCell3=NewRow.insertCell();
    //NewCell4=NewRow.insertCell();
    //NewCell5=NewRow.insertCell();
    //NewCell6=NewRow.insertCell();
    //NewCell7=NewRow.insertCell();
    //NewCell8=NewRow.insertCell();
    //NewCell1.innerHTML = "<B>这是新加的列</B>";          //添加数据
    //NewCell1.innerHTML="<a href='#'>这是空链接</a>";





}



 
 

 

 