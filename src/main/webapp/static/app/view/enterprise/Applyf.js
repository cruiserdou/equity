//var str = "static/upload/";

Ext.define('App.view.enterprise.Applyf', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.applyf', 
    layout: 'fit',
    listeners: {
        afterrender: function () {
            setup();preselect('甘肃省');
            setup_cl();preselect_cl('农、林、牧、渔业');
            setup_zjh();type_zjh('农、林、牧、渔业');
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
        '<td><input id="buslicno"  name="buslicno"  type="text" onchange="card_check_apply(this);"  value="{buslicno}"/></td>',
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
        '<select style="width: 70px" class="select" name="province"  id="province">',
        '<option >{province}</option>',
        ' </select>',
        ' <select style="width: 70px"  class="select" name="city" id="city">',
        '<option>{city}</option>',
        '</select>',
        '<select style="width: 70px"  class="select" name="county" id="county">',
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
        '<td colspan="3"><textarea id="remark" name="remark"  type="text" value="{remark}"></textarea></td>',
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
        //'<tr>' +
        //'<td  colspan="4" align="center"><input type="button" id="addRow" name="addRow" onClick="addRow();" value="添加行"/></td>' +
        //'<td align="center"><input type="button" id="delRow" name="delRow" onClick="removeRow();" value="删除行"/></td>' +
        //'</tr>',

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
        '<td><input id="gd_shtype" name="gd_shtype"  type="text" value="{gd_shtype}"/></td>',
        '<td><input id="gd_shname" name="gd_shname"  type="text" value="{gd_shname}"/></td>',
        '<td><input id="gd_shdoctype" name="gd_shdoctype"  type="text" value="{gd_shdoctype}"/></td>',
        '<td><input id="gd_shdocnum" name="gd_shdocnum"  type="text" value="{gd_shdocnum}"/></td>',
        '<td><input id="gd_shareholdnum" name="gd_shareholdnum"  type="text" value="{gd_shareholdnum}"/></td>',
        '<td><input id="gd_currencynum" name="gd_currencynum"  type="text" value="{gd_currencynum}"/></td>',
        '<td><input id="gd_freezenum" name="gd_freezenum"  type="text" value="{gd_freezenum}"/></td>',
        '<td><input id="gd_remark" name="gd_remark"  type="text" value="{gd_remark}"/></td>',
        '</tr>',
        '</table>',




        '<table class="enter_table" id="table_link">',
        '<tr>',
        '<th class="table_header" colspan="4">法定代表人基本信息</th>',
        '</tr>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="cont_name" name="cont_name"  type="text" value="{cont_name}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="cont_edoctype" name="cont_edoctype"  type="text" value="{cont_edoctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="cont_psotion" name="cont_psotion"  type="text" value="{cont_psotion}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="cont_edocnum" name="cont_edocnum"  type="text" value="{cont_edocnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="cont_ephone" name="cont_ephone"  type="text" value="{cont_ephone}"/></td>',
        '<th>传真</th>',
        '<td><input id="cont_efax" name="cont_efax"  type="text" value="{cont_efax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="cont_eemail" name="cont_eemail"  type="text" value="{cont_eemail}"/></td>',
        '<th>QQ</th>',
        '<td><input id="cont_eqq" name="cont_eqq"  type="text" value="{cont_eqq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="cont_webchat" name="cont_webchat"  type="text" value="{cont_webchat}"/></td>'+
        '<th>固话</th>',
        '<td><input id="cont_tel" name="cont_tel"  type="text" value="{cont_tel}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="cont_bz" name="cont_bz"  type="text" value="{cont_bz}"></textarea></td>'+
        '</tr>'+
        '</table>'+




        '<table class="enter_table" id="table_acount">',
        '<tr>',
        '<th class="table_header" colspan="4">国民经济行业分类信息</th>',
        '</tr>',
        '<tr>',
        '<th>行业一级分类</th>',
        '<td>    ' +
        '<select class="select" name="indclass1" id="indclass1">',
        '<option>{indclass1}</option>',
        ' </select>',
        '</td>',
        '<th>行业二级分类</th>',
        '<td>',
        '<select class="select" name="indclass2" id="indclass2">',
        '<option>{indclass2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>行业三级分类</th>',
        '<td>',
        '<select class="select" name="indclass3" id="indclass3">',
        '<option>{indclass3}</option>',
        ' </select>',
        '</td>',
        '<th>行业四级分类</th>',
        '<td>',
        '<select class="select" name="indclass4" id="indclass4">',
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
        '<select class="select" name="csrc_type1" id="csrc_type1">',
        '<option>{csrc_type1}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业二级分类</th>',
        '<td>',
        '<select class="select" name="csrc_type2" id="csrc_type2">',
        '<option>{csrc_type2}</option>',
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
        '<td><input id="mai_changer_dt" name="mai_changer_dt"  type="date" value="{mai_changer_dt}"/></td>',
        '<th>更新人</th>',
        '<td><input id="mai_changer_id" name="mai_changer_id"  type="text" value="{mai_changer_id}"/></td>',
        '</tr>',
        '<tr>',
        '<th>更新单位</th>',
        '<td><input id="mai_changer_dept" name="mai_changer_dept"  type="text" value="{mai_changer_dept}"/></td>',
        '<th>推荐日期</th>',
        '<td><input id="mai_recomdt" name="mai_recomdt"  type="date" value="{mai_recomdt}"/></td>',
        '</tr>',
        '<tr>',
        '<th>托管状态</th>',
        '<td><input id="mai_trusteeship" name="mai_trusteeship"  type="text" value="{mai_trusteeship}"/></td>',
        '<th>挂牌状态</th>',
        '<td><input id="mai_listst" name="mai_listst"  type="text" value="{mai_listst}"/></td>',
        '</tr>',
        '<tr>',
        '<th>企业等级</th>',
        '<td><input id="mai_eclass" name="mai_eclass"  type="text" value="{mai_eclass}"/></td>',
        '<th>企业维护状态</th>',
        '<td><input id="mai_maintain" name="mai_maintain"  type="text" value="{mai_maintain}"/></td>',
        '</tr>',
        '<tr>',
        '<th>所属后备库</th>',
        '<td><input id="mai_reserve" name="mai_reserve"  type="text" value="{mai_reserve}"/></td>',
        '<th>企业接待人</th>',
        '<td><input id="mai_emaint" name="mai_emaint"  type="text" value="{mai_emaint}"/></td>',
        '</tr>',
        '<tr>',
        '<th>部门</th>',
        '<td><input id="mai_dept" name="mai_dept"  type="text" value="{mai_dept}"/></td>',
        '<th>职务</th>',
        '<td><input id="mai_post" name="mai_post"  type="text" value="{mai_post}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定电话</th>',
        '<td><input id="mai_tel" name="mai_tel"  type="text" value="{mai_tel}"/></td>',
        '<th>手机号码</th>',
        '<td><input id="mai_phone" name="mai_phone"  type="text" value="{mai_phone}"/></td>',
        '</tr>',
        '<tr>',
        '<th>传真</th>',
        '<td><input id="mai_fax" name="mai_fax"  type="text" value="{mai_fax}"/></td>',
        '<th>E-mail</th>',
        '<td><input id="mai_email" name="mai_email"  type="text" value="{mai_email}"/></td>',
        '</tr>',
        '<tr>',
        '<th>QQ</th>',
        '<td><input id="mai_qq" name="mai_qq"  type="text" value="{mai_qq}"/></td>',
        '<th>微信号</th>',
        '<td><input id="mai_webchat" name="mai_webchat"  type="text" value="{mai_webchat}"/></td>',
        '</tr>',
        '<tr>',
        '<th>备注</th>',
        '<td colspan="3"><textarea id="mai_bz" name="mai_bz"  type="text" value="{mai_bz}"></textarea></td>'+
        '</tr>',
        '</table>',

        '<table class="enter_table" id="table_assets_finance">',
        '<tr>',
        '<th class="table_header" colspan="6">企业财务信息</th>',
        '</tr>',
        '<tr>',
        '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;始&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
        '<td><input id="start_time" name="start_time"  type="date" value="{start_time}"/></td>',
        '<th></th>',
        '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
        '<td><input id="end_time" name="end_time"  type="date" value="{end_time}"/></td>',
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
        '<td><input id="st_money_fund" name="st_money_fund"  type="text" value="{st_money_fund}"/></td>',
        '<td><input id="end_money_fund" name="end_money_fund"  type="text" value="{end_money_fund}"/></td>',
        '<th>短期借款</th>',
        '<td><input id="st_short_borrow" name="st_short_borrow"  type="text" value="{st_short_borrow}"/></td>',
        '<td><input id="end_short_borrow" name="end_short_borrow"  type="text" value="{end_short_borrow}"/></td>',
        '</tr>',
        '<tr>',
        '<th>交易性金融资产</th>',
        '<td><input id="st_jyxjr_assets" name="st_jyxjr_assets"  type="text" value="{st_jyxjr_assets}"/></td>',
        '<td><input id="end_jyxjr_assets" name="end_jyxjr_assets"  type="text" value="{end_jyxjr_assets}"/></td>',
        '<th>交易性金融负债</th>',
        '<td><input id="st_jyx_finance_fz" name="st_jyx_finance_fz"  type="text" value="{st_jyx_finance_fz}"/></td>',
        '<td><input id="end_jyx_finance_fz" name="end_jyx_finance_fz"  type="text" value="{end_jyx_finance_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收票据</th>',
        '<td><input id="st_ys_bill" name="st_ys_bill"  type="text" value="{st_ys_bill}"/></td>',
        '<td><input id="end_ys_bill" name="end_ys_bill"  type="text" value="{end_ys_bill}"/></td>',
        '<th>应付票据</th>',
        '<td><input id="st_yf_bill" name="st_yf_bill"  type="text" value="{st_yf_bill}"/></td>',
        '<td><input id="end_yf_bill" name="end_yf_bill"  type="text" value="{end_yf_bill}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收账款</th>',
        '<td><input id="st_ys_account" name="st_ys_account"  type="text" value="{st_ys_account}"/></td>',
        '<td><input id="end_ys_account" name="end_ys_account"  type="text" value="{end_ys_account}"/></td>',
        '<th>应付账款</th>',
        '<td><input id="st_yf_account" name="st_yf_account"  type="text" value="{st_yf_account}"/></td>',
        '<td><input id="end_yf_account" name="end_yf_account"  type="text" value="{end_yf_account}"/></td>',
        '</tr>',
        '<tr>',
        '<th>预付款项</th>',
        '<td><input id="st_yf_money" name="st_yf_money"  type="text" value="{st_yf_money}"/></td>',
        '<td><input id="end_yf_money" name="end_yf_money"  type="text" value="{end_yf_money}"/></td>',
        '<th>预收款项</th>',
        '<td><input id="st_ys_money" name="st_ys_money"  type="text" value="{st_ys_money}"/></td>',
        '<td><input id="end_ys_money" name="end_ys_money"  type="text" value="{end_ys_money}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收利息</th>',
        '<td><input id="st_ys_interest" name="st_ys_interest"  type="text" value="{st_ys_interest}"/></td>',
        '<td><input id="end_ys_interest" name="end_ys_interest"  type="text" value="{end_ys_interest}"/></td>',
        '<th>应付职工薪酬</th>',
        '<td><input id="st_yf_staff_pay" name="st_yf_staff_pay"  type="text" value="{st_yf_staff_pay}"/></td>',
        '<td><input id="end_yf_staff_pay" name="end_yf_staff_pay"  type="text" value="{end_yf_staff_pay}"/></td>',
        '</tr>',
        '<tr>',
        '<th>应收股利</th>',
        '<td><input id="st_ys_dividends" name="st_ys_dividends"  type="text" value="{st_ys_dividends}"/></td>',
        '<td><input id="end_ys_dividends" name="end_ys_dividends"  type="text" value="{end_ys_dividends}"/></td>',
        '<th>应交税费</th>',
        '<td><input id="st_yj_tax" name="st_yj_tax"  type="text" value="{st_yj_tax}"/></td>',
        '<td><input id="end_yj_tax" name="end_yj_tax"  type="text" value="{end_yj_tax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他应收款</th>',
        '<td><input id="st_other_ys_money" name="st_other_ys_money"  type="text" value="{st_other_ys_money}"/></td>',
        '<td><input id="end_other_ys_money" name="end_other_ys_money"  type="text" value="{end_other_ys_money}"/></td>',
        '<th>应付利息</th>',
        '<td><input id="st_yf_interest" name="st_yf_interest"  type="text" value="{st_yf_interest}"/></td>',
        '<td><input id="end_yf_interest" name="end_yf_interest"  type="text" value="{end_yf_interest}"/></td>',
        '</tr>',
        '<tr>',
        '<th>存货</th>',
        '<td><input id="st_inventory" name="st_inventory"  type="text" value="{st_inventory}"/></td>',
        '<td><input id="end_inventory" name="end_inventory"  type="text" value="{end_inventory}"/></td>',
        '<th>应付股利</th>',
        '<td><input id="st_yf_dividends" name="st_yf_dividends"  type="text" value="{st_yf_dividends}"/></td>',
        '<td><input id="end_yf_dividends" name="end_yf_dividends"  type="text" value="{end_yf_dividends}"/></td>',
        '</tr>',
        '<tr>',
        '<th>一年内到期非流动资产</th>',
        '<td><input id="st_ynndq_no_assets" name="st_ynndq_no_assets"  type="text" value="{st_ynndq_no_assets}"/></td>',
        '<td><input id="end_ynndq_no_assets" name="end_ynndq_no_assets"  type="text" value="{end_ynndq_no_assets}"/></td>',
        '<th>其他应付款</th>',
        '<td><input id="st_other_yf_money" name="st_other_yf_money"  type="text" value="{st_other_yf_money}"/></td>',
        '<td><input id="end_other_yf_money" name="end_other_yf_money"  type="text" value="{end_other_yf_money}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他流动资产</th>',
        '<td><input id="st_other_assets" name="st_other_assets"  type="text" value="{st_other_assets}"/></td>',
        '<td><input id="end_other_assets" name="end_other_assets"  type="text" value="{end_other_assets}"/></td>',
        '<th>一年内到期的非流动负债</th>',
        '<td><input id="st_ynndq_no_fz" name="st_ynndq_no_fz"  type="text" value="{st_ynndq_no_fz}"/></td>',
        '<td><input id="end_ynndq_no_fz" name="end_ynndq_no_fz"  type="text" value="{end_ynndq_no_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '<th>其他流动负债</th>',
        '<td><input id="st_other_fz" name="st_other_fz"  type="text" value="{st_other_fz}"/></td>',
        '<td><input id="end_other_fz" name="end_other_fz"  type="text" value="{end_other_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>流动资产合计</th>',
        '<td><input id="st_hj_assets" name="st_hj_assets"  type="text" value="{st_hj_assets}"/></td>',
        '<td><input id="end_hj_assets" name="end_hj_assets"  type="text" value="{end_hj_assets}"/></td>',
        '<th>流动负债合计</th>',
        '<td><input id="st_hj_fz" name="st_hj_fz"  type="text" value="{st_hj_fz}"/></td>',
        '<td><input id="end_hj_fz" name="end_hj_fz"  type="text" value="{end_hj_fz}"/></td>',
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
        '<td><input id="st_kgcs_assets" name="st_kgcs_assets"  type="text" value="{st_kgcs_assets}"/></td>',
        '<td><input id="end_kgcs_assets" name="end_kgcs_assets"  type="text" value="{end_kgcs_assets}"/></td>',
        '<th>长期借款</th>',
        '<td><input id="st_long_borrow" name="st_long_borrow"  type="text" value="{st_long_borrow}"/></td>',
        '<td><input id="end_long_borrow" name="end_long_borrow"  type="text" value="{end_long_borrow}"/></td>',
        '</tr>',
        '<tr>',
        '<th>持有至到期投资</th>',
        '<td><input id="st_cyzdq_investment" name="st_cyzdq_investment"  type="text" value="{st_cyzdq_investment}"/></td>',
        '<td><input id="end_cyzdq_investment" name="end_cyzdq_investment"  type="text" value="{end_cyzdq_investment}"/></td>',
        '<th>应付债券</th>',
        '<td><input id="st_yf_bond" name="st_yf_bond"  type="text" value="{st_yf_bond}"/></td>',
        '<td><input id="end_yf_bond" name="end_yf_bond"  type="text" value="{end_yf_bond}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期应收款</th>',
        '<td><input id="st_long_ys_money" name="st_long_ys_money"  type="text" value="{st_long_ys_money}"/></td>',
        '<td><input id="end_long_ys_money" name="end_long_ys_money"  type="text" value="{end_long_ys_money}"/></td>',
        '<th>长期应付款</th>',
        '<td><input id="st_long_yf_money" name="st_long_yf_money"  type="text" value="{st_long_yf_money}"/></td>',
        '<td><input id="end_long_yf_money" name="end_long_yf_money"  type="text" value="{end_long_yf_money}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期股权投资</th>',
        '<td><input id="st_long_gq_investment" name="st_long_gq_investment"  type="text" value="{st_long_gq_investment}"/></td>',
        '<td><input id="end_long_gq_investment" name="end_long_gq_investment"  type="text" value="{end_long_gq_investment}"/></td>',
        '<th>专项应付款</th>',
        '<td><input id="st_zx_yf_money" name="st_zx_yf_money"  type="text" value="{st_zx_yf_money}"/></td>',
        '<td><input id="end_zx_yf_money" name="end_zx_yf_money"  type="text" value="{end_zx_yf_money}"/></td>',
        '</tr>',
        '<tr>',
        '<th>投资性房地产</th>',
        '<td><input id="st_invest_house" name="st_invest_house"  type="text" value="{st_invest_house}"/></td>',
        '<td><input id="end_invest_house" name="end_invest_house"  type="text" value="{end_invest_house}"/></td>',
        '<th>预计负债</th>',
        '<td><input id="st_yj_fz" name="st_yj_fz"  type="text" value="{st_yj_fz}"/></td>',
        '<td><input id="end_yj_fz" name="end_yj_fz"  type="text" value="{end_yj_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产</th>',
        '<td><input id="st_gd_assets" name="st_gd_assets"  type="text" value="{st_gd_assets}"/></td>',
        '<td><input id="end_gd_assets" name="end_gd_assets"  type="text" value="{end_gd_assets}"/></td>',
        '<th>递延所得税负债</th>',
        '<td><input id="st_dysds_fz" name="st_dysds_fz"  type="text" value="{st_dysds_fz}"/></td>',
        '<td><input id="end_dysds_fz" name="end_dysds_fz"  type="text" value="{end_dysds_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>减：累计折旧</th>',
        '<td><input id="st_accu_deprec" name="st_accu_deprec"  type="text" value="{st_accu_deprec}"/></td>',
        '<td><input id="end_accu_deprec" name="end_accu_deprec"  type="text" value="{end_accu_deprec}"/></td>',
        '<th>其他非流动负债</th>',
        '<td><input id="st_other_no_fz" name="st_other_no_fz"  type="text" value="{st_other_no_fz}"/></td>',
        '<td><input id="end_other_no_fz" name="end_other_no_fz"  type="text" value="{end_other_no_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产净值</th>',
        '<td><input id="st_gd_assets_jz" name="st_gd_assets_jz"  type="text" value="{st_gd_assets_jz}"/></td>',
        '<td><input id="end_gd_assets_jz" name="end_gd_assets_jz"  type="text" value="{end_gd_assets_jz}"/></td>',
        '<th>非流动负债合计</th>',
        '<td><input id="st_hj_no_fz" name="st_hj_no_fz"  type="text" value="{st_hj_no_fz}"/></td>',
        '<td><input id="end_hj_no_fz" name="end_hj_no_fz"  type="text" value="{end_hj_no_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>减：固定资产减值准备</th>',
        '<td><input id="st_gd_assets_ready" name="st_gd_assets_ready"  type="text" value="{st_gd_assets_ready}"/></td>',
        '<td><input id="end_gd_assets_ready" name="end_gd_assets_ready"  type="text" value="{end_gd_assets_ready}"/></td>',
        '<th>负债合计</th>',
        '<td><input id="st_hj_total_fz" name="st_hj_total_fz"  type="text" value="{st_hj_total_fz}"/></td>',
        '<td><input id="end_hj_total_fz" name="end_hj_total_fz"  type="text" value="{end_hj_total_fz}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产净额</th>',
        '<td><input id="st_gd_assets_je" name="st_gd_assets_je"  type="text" value="{st_gd_assets_je}"/></td>',
        '<td><input id="end_gd_assets_je" name="end_gd_assets_je"  type="text" value="{end_gd_assets_je}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>在建工程</th>',
        '<td><input id="st_now_project" name="st_now_project"  type="text" value="{st_now_project}"/></td>',
        '<td><input id="end_now_project" name="end_now_project"  type="text" value="{end_now_project}"/></td>',
        '<th>所有者权益(或股东权益)</th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>工程物资</th>',
        '<td><input id="st_project_material" name="st_project_material"  type="text" value="{st_project_material}"/></td>',
        '<td><input id="end_project_material" name="end_project_material"  type="text" value="{end_project_material}"/></td>',
        '<th>实收资本（或股本）</th>',
        '<td><input id="st_paid_assets" name="st_paid_assets"  type="text" value="{st_paid_assets}"/></td>',
        '<td><input id="end_paid_assets" name="end_paid_assets"  type="text" value="{end_paid_assets}"/></td>',
        '</tr>',
        '<tr>',
        '<th>固定资产清理</th>',
        '<td><input id="st_gd_assets_ql" name="st_gd_assets_ql"  type="text" value="{st_gd_assets_ql}"/></td>',
        '<td><input id="end_gd_assets_ql" name="end_gd_assets_ql"  type="text" value="{end_gd_assets_ql}"/></td>',
        '<th>资本公积</th>',
        '<td><input id="st_zb_reserve" name="st_zb_reserve"  type="text" value="{st_zb_reserve}"/></td>',
        '<td><input id="end_zb_reserve" name="end_zb_reserve"  type="text" value="{end_zb_reserve}"/></td>',
        '</tr>',
        '<tr>',
        '<th>生产性生物资产</th>',
        '<td><input id="st_scx_investment" name="st_scx_investment"  type="text" value="{st_scx_investment}"/></td>',
        '<td><input id="end_scx_investment" name="end_scx_investment"  type="text" value="{end_scx_investment}"/></td>',
        '<th>减：库存股</th>',
        '<td><input id="st_kc_stock" name="st_kc_stock"  type="text" value="{st_kc_stock}"/></td>',
        '<td><input id="end_kc_stock" name="end_kc_stock"  type="text" value="{end_kc_stock}"/></td>',
        '</tr>',
        '<tr>',
        '<th>无形资产</th>',
        '<td><input id="st_wx_assets" name="st_wx_assets"  type="text" value="{st_wx_assets}"/></td>',
        '<td><input id="end_wx_assets" name="end_wx_assets"  type="text" value="{end_wx_assets}"/></td>',
        '<th>专项储备</th>',
        '<td><input id="st_zx_reserve" name="st_zx_reserve"  type="text" value="{st_zx_reserve}"/></td>',
        '<td><input id="end_zx_reserve" name="end_zx_reserve"  type="text" value="{end_zx_reserve}"/></td>',
        '</tr>',
        '<tr>',
        '<th>商誉</th>',
        '<td><input id="st_goodwill" name="st_goodwill"  type="text" value="{st_goodwill}"/></td>',
        '<td><input id="end_goodwill" name="end_goodwill"  type="text" value="{end_goodwill}"/></td>',
        '<th>盈余公积</th>',
        '<td><input id="st_yy_reserve" name="st_yy_reserve"  type="text" value="{st_yy_reserve}"/></td>',
        '<td><input id="end_yy_reserve" name="end_yy_reserve"  type="text" value="{end_yy_reserve}"/></td>',
        '</tr>',
        '<tr>',
        '<th>长期待摊费用</th>',
        '<td><input id="st_cqdt_cost" name="st_cqdt_cost"  type="text" value="{st_cqdt_cost}"/></td>',
        '<td><input id="end_cqdt_cost" name="end_cqdt_cost"  type="text" value="{end_cqdt_cost}"/></td>',
        '<th>未分配利润</th>',
        '<td><input id="st_wfp_profit" name="st_wfp_profit"  type="text" value="{st_wfp_profit}"/></td>',
        '<td><input id="end_wfp_profit" name="end_wfp_profit"  type="text" value="{end_wfp_profit}"/></td>',
        '</tr>',
        '<tr>',
        '<th>递延所得税资产</th>',
        '<td><input id="st_dysds_assets" name="st_dysds_assets"  type="text" value="{st_dysds_assets}"/></td>',
        '<td><input id="end_dysds_assets" name="end_dysds_assets"  type="text" value="{end_dysds_assets}"/></td>',
        '<th>所有者权益合计</th>',
        '<td><input id="st_hj_owner_right" name="st_hj_owner_right"  type="text" value="{st_hj_owner_right}"/></td>',
        '<td><input id="end_hj_owner_right" name="end_hj_owner_right"  type="text" value="{end_hj_owner_right}"/></td>',
        '</tr>',
        '<tr>',
        '<th>其他非流动资产</th>',
        '<td><input id="st_other_no_assets" name="st_other_no_assets"  type="text" value="{st_other_no_assets}"/></td>',
        '<td><input id="end_other_no_assets" name="end_other_no_assets"  type="text" value="{end_other_no_assets}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>非流动资产合计</th>',
        '<td><input id="st_hj_no_asset" name="st_hj_no_asset"  type="text" value="{st_hj_no_asset}"/></td>',
        '<td><input id="end_hj_no_asset" name="end_hj_no_asset"  type="text" value="{end_hj_no_asset}"/></td>',
        '<th></th>',
        '<th></th>',
        '<th></th>',
        '</tr>',
        '<tr>',
        '<th>资产总计</th>',
        '<td><input id="st_hj_total_asset" name="st_hj_total_asset"  type="text" value="{st_hj_total_asset}"/></td>',
        '<td><input id="end_hj_total_asset" name="end_hj_total_asset"  type="text" value="{end_hj_total_asset}"/></td>',
        '<th>负债和所有者权益合计</th>',
        '<td><input id="st_hj_fz_owner_right" name="st_hj_fz_owner_right"  type="text" value="{st_hj_fz_owner_right}"/></td>',
        '<td><input id="end_hj_fz_owner_right" name="end_hj_fz_owner_right"  type="text" value="{end_hj_fz_owner_right}"/></td>',
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_service">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_server"  name="type_server"  type="checkbox" value="true" />服务机构&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">服务机构信息</th>',
        '</tr>',
        '<tr>',
        '<th>服务机构名称</th>',
        '<td><input id="srv_name" name="srv_name"  type="text" value="{srv_name}"/></td>',
        '<th>服务机构类别</th>',
        '<td><input id="srv_type" name="srv_type"  type="text" value="{srv_type}"/></td>',
        '</tr>',
        '<tr>',
        '<th>业务内容</th>',
        '<td><input id="srv_content" name="srv_content"  type="text" value="{srv_content}"/></td>',
        '<th>级别</th>',
        '<td><input id="srv_levels" name="srv_levels"  type="text" value="{srv_levels}"/></td>',
        '</tr>',
        '<tr>',
        '<th>惩罚记录</th>',
        '<td><input id="srv_penalty" name="srv_penalty"  type="text" value="{srv_penalty}"/></td>',
        '<th>专属领域</th>',
        '<td><input id="srv_domain" name="srv_domain"  type="text" value="{srv_domain}"/></td>',
        '</tr>',
        '<tr>',
        '<th>专审委员</th>',
        '<td><input id="srv_examiner" name="srv_examiner"  type="text" value="{srv_examiner}"/></td>',
        '<th>兼任职务</th>',
        '<td><input id="srv_post" name="srv_post"  type="text" value="{srv_post}"/></td>',
        '</tr>',
        '<tr>',
        '<th>简介</th>',
        '<td colspan="3"><textarea id="srv_descs" name="srv_descs"  type="text" value="{srv_descs}"></textarea></td>'+
        '</tr>',
        '<tr>',
        '<th>备注</th>',
        '<td colspan="3"><textarea id="srv_remark" name="srv_remark"  type="text" value="{srv_remark}"></textarea></td>'+
        '</tr>',
        '</table>',


        '<table class="enter_table" id="table_investors">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_investors" name="type_investors"  type="checkbox" value="true" />投资人&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">投资人信息</th>',
        '</tr>',
        '<tr>',
        '<th>投资领域</th>',
        '<td  colspan="3"><input id="inv_domain" name="inv_domain"  type="text" value="{inv_domain}"/></td>',
        '</tr>',
        '<tr>',
        '<th>行业一级分类</th>',
        '<td>',
        '<select class="select" name="inv_csrc_type1" id="inv_csrc_type1">',
        '<option>{inv_csrc_type1}</option>',
        ' </select>',
        '</td>',
        '<th>行业二级分类</th>',
        '<td>',
        '<select class="select" name="inv_csrc_type2" id="inv_csrc_type2">',
        '<option>{inv_csrc_type2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>行业三级分类</th>',
        '<td>',
        '<select class="select" name="inv_csrc_type3" id="inv_csrc_type3">',
        '<option>{inv_csrc_type3}</option>',
        ' </select>',
        '</td>',
        '<th>行业四级分类</th>',
        '<td>',
        '<select class="select" name="inv_csrc_type4" id="inv_csrc_type4">',
        '<option>{inv_csrc_type4}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>证监会行业一级分类</th>',
        '<td>    ' +
        '<select class="select" name="inv_indclass1" id="inv_indclass1">',
        '<option>{inv_indclass1}</option>',
        ' </select>',
        '</td>',
        '<th>证监会行业二级分类</th>',
        '<td>',
        '<select class="select" name="inv_indclass2" id="inv_indclass2">',
        '<option>{inv_indclass2}</option>',
        ' </select>',
        '</td>',
        '</tr>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="inv_contact" name="inv_contact"  type="text" value="{inv_contact}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="inv_doctype" name="inv_doctype"  type="text" value="{inv_doctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="inv_psotion" name="inv_psotion"  type="text" value="{inv_psotion}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="inv_docnum" name="inv_docnum"  type="text" value="{inv_docnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="inv_phone" name="inv_phone"  type="text" value="{inv_phone}"/></td>',
        '<th>传真</th>',
        '<td><input id="inv_fax" name="inv_fax"  type="text" value="{inv_fax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="inv_email" name="inv_email"  type="text" value="{inv_email}"/></td>',
        '<th>QQ</th>',
        '<td><input id="inv_qq" name="inv_qq"  type="text" value="{inv_qq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="inv_webchat" name="inv_webchat"  type="text" value="{inv_webchat}"/></td>'+
        '<th>固话</th>',
        '<td><input id="inv_tel" name="inv_tel"  type="text" value="{inv_tel}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="inv_remark" name="inv_remark"  type="text" value="{inv_remark}"></textarea></td>'+
        '</tr>'+
        '</table>',



        '<table class="enter_table" id="table_govermt">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_govermt"  name="type_govermt" type="checkbox"  value="true"/>政府机构&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">政府部门信息</th>',
        '</tr>',
        '<tr>',
        '<th>单位名称</th>',
        '<td><input id="gov_domain" name="gov_domain"  type="text" value="{gov_domain}"/></td>',
        '<th>处/室</th>',
        '<td><input id="gov_office" name="gov_office"  type="text" value="{gov_office}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职能介绍</th>',
        '<td colspan="3"><input id="gov_desc" name="gov_desc"  type="text" value="{gov_desc}"/></td>',
        '</tr>',
        '<tr>',
        '<th>姓名</th>',
        '<td><input id="gov_contact" name="gov_contact"  type="text" value="{gov_contact}"/></td>',
        '<th>证件类型</th>',
        '<td><input id="gov_doctype" name="gov_doctype"  type="text" value="{gov_doctype}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职务</th>',
        '<td><input id="gov_psotion" name="gov_psotion"  type="text" value="{gov_psotion}"/></td>',
        '<th>证件号码</th>',
        '<td><input id="gov_docnum" name="gov_docnum"  type="text" value="{gov_docnum}"/></td>',
        '</tr>',
        '<tr>',
        '<th>手机</th>',
        '<td><input id="gov_phone" name="gov_phone"  type="text" value="{gov_phone}"/></td>',
        '<th>传真</th>',
        '<td><input id="gov_fax" name="gov_fax"  type="text" value="{gov_fax}"/></td>',
        '</tr>',
        '<tr>',
        '<th>E-mail</th>',
        '<td><input id="gov_email" name="gov_email"  type="text" value="{gov_email}"/></td>',
        '<th>QQ</th>',
        '<td><input id="gov_qq" name="gov_qq"  type="text" value="{gov_qq}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>微信号</th>'+
        '<td><input id="gov_webchat" name="gov_webchat"  type="text" value="{gov_webchat}"/></td>'+
        '<th>固话</th>',
        '<td><input id="gov_tel" name="gov_tel"  type="text" value="{gov_tel}"/></td>'+
        '</tr>'+
        '<tr>'+
        '<th>备注</th>'+
        '<td colspan="3"><textarea id="gov_remark" name="gov_remark"  type="text" value="{gov_remark}"></textarea></td>'+
        '</tr>'+
        '</table>',

        '<table class="enter_table" id="table_demand_rz">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;"  id="demand_rz"  type="checkbox" name="demand_rz" value="true" />融资需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">融资需求</th>',
        '</tr>',
        '<tr>',
        '<th>融资金额</th>',
        '<td><input id="refi_amounts" name="refi_amounts"  type="text" value="{refi_amounts}"/></td>',
        '<th>融资用途</th>',
        '<td><input id="refi_use" name="refi_use"  type="text" value="{refi_use}"/></td>',
        '</tr>',
        '<tr>',
        '<th>股份融资/债券融资</th>',
        '<td><input id="refi_financ" name="refi_financ"  type="text" value="{refi_financ}"/></td>',
        '<th>偿付保障</th>',
        '<td><input id="refi_security" name="refi_security"  type="text" value="{refi_security}"/></td>',
        '</tr>',
        '<tr>',
        '<th>可接受成本（%/年）</th>',
        '<td><input id="refi_acc_cost" name="refi_acc_cost"  type="text" value="{refi_acc_cost}"/></td>',
        '<th>融资期限</th>',
        '<td><input id="refi_deadline" name="refi_deadline"  type="text" value="{refi_deadline}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>融资用途详细说明</th>'+
        '<td colspan="3"><textarea id="refi_desc" name="refi_desc"  type="text" value="{refi_desc}"></textarea></td>'+
        '</tr>'+
        '</table>',


        '<table class="enter_table" id="table_demand_px">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_px"   type="checkbox" name="demand_px" value="true"/>培训需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">培训需求</th>',
        '</tr>',
        '<tr>',
        '<th>培训方式</th>',
        '<td colspan="3"><input id="retra_mode" name="retra_mode"  type="text" value="{retra_mode}"/></td>',
        '</tr>',
        '<tr>',
        '<th>有效时间</th>',
        '<td><input id="retra_dt" name="retra_dt"  type="date" value="{retra_dt}"/></td>',
        '<th>可接受成本</th>',
        '<td><input id="retra_acc_cost" name="retra_acc_cost"  type="text" value="{retra_acc_cost}"/></td>',
        '</tr>',
        '<tr>',
        '<th>培训内容</th>',
        '<td colspan="3"><textarea id="retra_content" name="retra_content"  type="text" value="{retra_content}"></textarea></td>'+
        '</tr>',
        '<tr>'+
        '<th>详细要求</th>'+
        '<td colspan="3"><textarea id="retra_requests" name="retra_requests"  type="text" value="{retra_requests}"></textarea></td>'+
        '</tr>'+
        '</table>',

        '<table class="enter_table" id="table_demand_rl">',
        '<tr>',
        '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_rl"  type="checkbox" name="demand_rl" value="true"/>人力需求&nbsp;&nbsp;</td>',
        '</tr>',
        '<tr>',
        '<th class="table_header" colspan="4">人力资源需求</th>',
        '</tr>',
        '<tr>',
        '<th>需求职位</th>',
        '<td><input id="rehr_post" name="rehr_post"  type="text" value="{rehr_post}"/></td>',
        '<th>职位人数</th>',
        '<td><input id="rehr_num" name="rehr_num"  type="text" value="{rehr_num}"/></td>',
        '</tr>',
        '<tr>',
        '<th>职位薪金</th>',
        '<td><input id="rehr_salary" name="rehr_salary"  type="text" value="{rehr_salary}"/></td>',
        '<th>性别要求</th>',
        '<td><input id="rehr_sex_req" name="rehr_sex_req"  type="text" value="{rehr_sex_req}"/></td>',
        '</tr>',
        '<tr>'+
        '<th>年龄要求</th>',
        '<td><input id="rehr_age_req" name="rehr_age_req"  type="text" value="{rehr_age_req}"/></td>',
        '<th>经验要求</th>',
        '<td><input id="rehr_requests" name="rehr_requests"  type="text" value="{rehr_requests}"/></td>',
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
    var corp_id;
    if(document.getElementById('apply_form')['buslicno'].value==null && document.getElementById('apply_form')['buslicno'].value==""){
        Ext.Msg.alert("提示", "请填写营业执照号码！");
        return;
    }else{
        Ext.Ajax.request({
            method: "POST",
            url: 'checked_corp_id_info',
            success: function (response,opts) {
                var obj=Ext.decode(response.responseText);

                if(obj.success)
                {
                    corp_id=parseInt(obj.name);
                }
                obt_corp_add(corp_id);
                obt_corp_contact_add(corp_id);
                obt_corp_shareholder_add(corp_id);
                obt_corp_finance_add(corp_id);
                obt_corp_maintain_add(corp_id);
                obt_corp_government_add(corp_id);
                obt_corp_investors_add(corp_id);
                obt_corp_service_add(corp_id);
                obt_corp_refinancing_add(corp_id);
                obt_corp_rehr_add(corp_id);
                obt_corp_retrain_add(corp_id);
            },
            failure: function(form, action){
                Ext.Msg.alert("失败", "企业ID检验失败!");
            }
        });
    }
}

function card_check_apply() {
    var form_obt_apply = document.getElementById("apply_form");
    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_apply['buslicno'].value,
            id : 0
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

}
