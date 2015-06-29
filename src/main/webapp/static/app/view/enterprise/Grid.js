Ext.define('App.view.enterprise.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprisef_grid',
    store: 'corp_all',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise',
    listeners: {
        'itemdblclick': function (view, record, item, index, e) {
            //创建模板
            var apply_edits = new Ext.XTemplate(
                '<div class="wrap_center">' +
                '<form id="apply_corp_form_edit">' +
                '<h2>企业信息</h2>' +
                '<table class="enter_table" id="table_base">' +
                '<tr>',
                '<th class="table_header" colspan="4">基本信息</th>',
                '</tr>',
                '<tr>',
                '<th>营业执照号码<span style="color: red">*</span></th>',
                '<td><input id="buslicno"  name="buslicno"  type="text"  value="{buslicno}"/></td>',
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
                '<td colspan="3"><textarea id="remark" name="remark"  type="text" value="{remark}">{remark}</textarea></td>',
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
                '<td colspan="3"><textarea id="cont_bz" name="cont_bz"  type="text" value="{cont_bz}">{cont_bz}</textarea></td>'+
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
                '<td colspan="3"><textarea id="mai_bz" name="mai_bz"  type="text" value="{mai_bz}">{mai_bz}</textarea></td>'+
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
                '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_server"  name="type_server"  type="checkbox" value="{type_server}" <tpl if="this.checktype_type_server(type_server)">checked="checked"</tpl> />服务机构&nbsp;&nbsp;</td>',
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
                '<td colspan="3"><textarea id="srv_descs" name="srv_descs"  type="text" value="{srv_descs}">{srv_descs}</textarea></td>'+
                '</tr>',
                '<tr>',
                '<th>备注</th>',
                '<td colspan="3"><textarea id="srv_remark" name="srv_remark"  type="text" value="{srv_remark}">{srv_remark}</textarea></td>'+
                '</tr>',
                '</table>',


                '<table class="enter_table" id="table_investors">',
                '<tr>',
                '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_investors" name="type_investors"  type="checkbox" value="{type_investors}" <tpl if="this.checktype_type_investors(type_investors)">checked="checked"</tpl>  />投资人&nbsp;&nbsp;</td>',
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
                '<td colspan="3"><textarea id="inv_remark" name="inv_remark"  type="text" value="{inv_remark}">{inv_remark}</textarea></td>'+
                '</tr>'+
                '</table>',



                '<table class="enter_table" id="table_govermt">',
                '<tr>',
                '<td  colspan="4"><input style="width:50px;height:14px;"  id="type_govermt"  name="type_govermt" type="checkbox" value="{type_govermt}" <tpl if="this.checktype_type_govermt(type_govermt)">checked="checked"</tpl> />政府机构&nbsp;&nbsp;</td>',
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
                '<td colspan="3"><textarea id="gov_remark" name="gov_remark"  type="text" value="{gov_remark}">{gov_remark}</textarea></td>'+
                '</tr>'+
                '</table>',

                '<table class="enter_table" id="table_demand_rz">',
                '<tr>',
                '<td  colspan="4"><input style="width:50px;height:14px;"  id="demand_rz"  type="checkbox" name="demand_rz" value="{demand_rz}" <tpl if="this.checktype_demand_rz(demand_rz)">checked="checked"</tpl>/>融资需求&nbsp;&nbsp;</td>',
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
                '<td><input id="refi_deadline" name="refi_deadline"  type="date" value="{refi_deadline}"/></td>',
                '</tr>',
                '<tr>'+
                '<th>融资用途详细说明</th>'+
                '<td colspan="3"><textarea id="refi_desc" name="refi_desc"  type="text" value="{refi_desc}">{refi_desc}</textarea></td>'+
                '</tr>'+
                '</table>',


                '<table class="enter_table" id="table_demand_px">',
                '<tr>',
                '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_px"   type="checkbox" name="demand_px" value="{demand_px}" <tpl if="this.checktype_demand_px(demand_px)">checked="checked"</tpl> />培训需求&nbsp;&nbsp;</td>',
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
                '<td colspan="3"><textarea id="retra_content" name="retra_content"  type="text" value="{retra_content}">{retra_content}</textarea></td>'+
                '</tr>',
                '<tr>'+
                '<th>详细要求</th>'+
                '<td colspan="3"><textarea id="retra_requests" name="retra_requests"  type="text" value="{retra_requests}">{retra_requests}</textarea></td>'+
                '</tr>'+
                '</table>',

                '<table class="enter_table" id="table_demand_rl">',
                '<tr>',
                '<td  colspan="4"><input style="width:50px;height:14px;" id="demand_rl"  type="checkbox" name="demand_rl" value="{demand_rl}" <tpl if="this.checktype_demand_rl(demand_rl)">checked="checked"</tpl> />人力需求&nbsp;&nbsp;</td>',
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

                '<a href="#"  style="font-size:18px;text-decoration: none;text-align: center;color: #ffffff;  margin: 1em auto;width: 8em;border-radius: 5px;  padding: 0.5em 0;background-color: #38AD5A; border: 1px solid #38AD5A;display: block;  "  onclick="save_corp_edit({id},{cont_id},{gd_id},{finid},{mai_id},{gov_id},{inv_id},{srv_id},{refi_id},{rehr_id},{retra_id})">保存</a>' +


                '</div>' +
                '<div style="position: fixed; top: 7em; right: 6em">' +
                '<ul>' +
                '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                '<li><a href="#table_service"  style="font-size:18px;">服务机构</a></li>' +
                '<li><a href="#table_investors"  style="font-size:18px;">投资人</a></li>' +
                '<li><a href="#table_govermt"  style="font-size:18px;">政府部门</a></li>' +
                '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                '<li><a href="#table_demand_px"  style="font-size:18px;">培训需求</a></li>' +
                '<li><a href="#table_demand_rl"  style="font-size:18px;">人力资源需求</a></li>' +

                '</ul>' +
                '<a href="#"  id="start_btn" style="font-size:18px;display: block;  margin-top: 26px; margin-left: 4em;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="corp_export({id})"><i class="fa fa-pencil"></i>导出</a>' +

                '<a href="#"  id="start_btn" style="font-size:18px;display: block;  margin-top: 26px; margin-left: 4em;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_edit()"><i class="fa fa-pencil"></i>关闭</a>' +
                '</form>' +
                '</div>',
                {
                    checktype_demand_rl: function (demand_rl) {
                        return demand_rl == true;
                    },
                    checktype_demand_px: function (demand_px) {
                        return demand_px == true;
                    },
                    checktype_demand_rz: function (demand_rz) {
                        return demand_rz == true;
                    },
                    checktype_type_server: function (type_server) {
                        return type_server == true;
                    },
                    checktype_type_investors: function (type_investors) {
                        return type_investors == true;
                    },
                    checktype_type_govermt: function (type_govermt) {
                        return type_govermt == true;
                    }
                }
            );

            //呈现组件
            var mypanel = new Ext.form.FormPanel({
                id: "mypanel",
                width: 820,
                frame: false,
                height: 600,
                border: false,
                bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                renderTo: Ext.getBody()
            });


            //重写绑定模板
            apply_edits.overwrite(mypanel.body, record.data);
            var editWindow = new Ext.Window({
                layout: 'fit',
                id: 'enterprise_edit_id',
                width: 830,
                height: 650,
                modal: true,
                title: '企业信息',
                maximized: true,
                maximizable: true,
                items: [mypanel]
            });
            editWindow.show(Ext.get('body'));



        }
    },
    initComponent: function () {

        this.columns = [

            {text: '企业ID',  width: 120, dataIndex: 'id', hidden: true},
            {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
            {text: '企业名称', width: 120, dataIndex: 'name'},
            {text: '单位类别', width: 120, dataIndex: 'unit'},
            {text: '法定代表人', width: 120, dataIndex: 'legrep'},
            {text: '省', width: 120, dataIndex: 'province'},
            {text: '市', width: 120, dataIndex: 'city'},
            {text: '县',  width: 120, dataIndex: 'county'},
            {text: '公司简称', width: 120, dataIndex: 'nos'},
            {text: '邮政编码', width: 120, dataIndex: 'postal'},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '注册资本（万元）', width: 120, dataIndex: 'regcap'},
            {text: '营业期限自', width: 120, dataIndex: 'bustermfdt'},
            {text: '营业期限至', width: 120, dataIndex: 'bustremtdt'},
            {text: '注册日期', width: 120, dataIndex: 'regdt'},
            {text: '挂牌区域', width: 120, dataIndex: 'list_area'},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
            {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice'},
            {text: '挂牌日期', width: 120, dataIndex: 'listdt'},
            {text: '推荐单位', width: 120, dataIndex: 'channels'},
            {text: '微信号', width: 120, dataIndex: 'webchat'},
            {text: '员工人数', width: 120, dataIndex: 'staffnum'},
            {text: '登记机关', width: 120, dataIndex: 'regist_organ'},
            {text: '注册地址', width: 120, dataIndex: 'regaddr'},
            {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
            {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
            {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
            {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
            {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
            {text: '备注', width: 120, dataIndex: 'remark'},
            {text: '企业股东ID',  width: 120, dataIndex: 'gd_id', hidden: true},
            {text: '企业ID',  width: 120, dataIndex: 'gd_corp_id', hidden: true},
            {text: '股东类型',  width: 120, dataIndex: 'gd_shtype', hidden: true},
            {text: '股东',  width: 120, dataIndex: 'gd_shname', hidden: true},
            {text: '证照/证件类型',  width: 120, dataIndex: 'gd_shdoctype', hidden: true},
            {text: '证照/证件号码', width: 120, dataIndex: 'gd_shdocnum', hidden: true},
            {text: '持股数量',  width: 120, dataIndex: 'gd_shareholdnum', hidden: true},
            {text: '流通数量',  width: 120, dataIndex: 'gd_currencynum', hidden: true},
            {text: '冻结数量',  width: 120, dataIndex: 'gd_freezenum', hidden: true},
            {text: '职务',  width: 120, dataIndex: 'gd_psotion', hidden: true},
            {text: '证件类型',  width: 120, dataIndex: 'gd_doctype', hidden: true},
            {text: '证件号码',  width: 120, dataIndex: 'gd_docnum', hidden: true},
            {text: '手机号码',  width: 120, dataIndex: 'gd_phone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'gd_fax', hidden: true},
            {text: 'E-mail',  width: 120, dataIndex: 'gd_email', hidden: true},
            {text: 'QQ',  width: 120, dataIndex: 'gd_qq', hidden: true},
            {text: '个人微信号',  width: 120, dataIndex: 'gd_webchat', hidden: true},
            {text: '固定电话',  width: 120, dataIndex: 'gd_tel', hidden: true},
            {text: '备注',  width: 120, dataIndex: 'gd_remark', hidden: true},
            {text: '行业一级分类', width: 120, dataIndex: 'indclass1', hidden: true},
            {text: '行业二级分类', width: 120, dataIndex: 'indclass2', hidden: true},
            {text: '行业三级分类', width: 120, dataIndex: 'indclass3', hidden: true},
            {text: '行业四级分类', width: 120, dataIndex: 'indclass4', hidden: true},
            {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type1', hidden: true},
            {text: '证监会行业分类2', width: 120, dataIndex: 'csrc_type2', hidden: true},
            {text: '证监会行业分类3', width: 120, dataIndex: 'csrc_type3', hidden: true},
            {text: '证监会行业分类4', width: 120, dataIndex: 'csrc_type4', hidden: true},
            {text: '一般企业', width: 120, dataIndex: 'type_enterp', hidden: true},
            {text: '服务机构', width: 120, dataIndex: 'type_server', hidden: true},
            {text: '投资人', width: 120, dataIndex: 'type_investors', hidden: true},
            {text: '政府机构', width: 120, dataIndex: 'type_govermt', hidden: true},
            {text: '融资需求', width: 120, dataIndex: 'demand_rz', hidden: true},
            {text: '培训需求', width: 120, dataIndex: 'demand_px', hidden: true},
            {text: '人力需求', width: 120, dataIndex: 'demand_rl', hidden: true},
            {text: '录入时间', width: 120, dataIndex: 'inputdt', hidden: true},
            {text: '法人联系人表ID', width: 120, dataIndex: 'cont_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'cont_corp_id', hidden: true},
            {text: '姓名', width: 120, dataIndex: 'cont_name', hidden: true},
            {text: '职务', width: 120, dataIndex: 'cont_psotion', hidden: true},
            {text: '证件类型', width: 120, dataIndex: 'cont_edoctype', hidden: true},
            {text: '证件号码', width: 120, dataIndex: 'cont_edocnum', hidden: true},
            {text: '手机号码', width: 120, dataIndex: 'cont_ephone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'cont_efax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'cont_eemail', hidden: true},
            {text: 'QQ', width: 120, dataIndex: 'cont_eqq', hidden: true},
            {text: '个人微信号', width: 120, dataIndex: 'cont_webchat', hidden: true},
            {text: '联系人固话', width: 120, dataIndex: 'cont_tel', hidden: true},
            {text: '备注（个人）', width: 120, dataIndex: 'cont_bz', hidden: true},
            {text: '财务ID', width: 120, dataIndex: 'finid', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'fin_corp_id', hidden: true},
            {text: '时间start', width: 120, dataIndex: 'start_time', hidden: true},
            {text: '时间end', width: 120, dataIndex: 'end_time', hidden: true},
            {text: '货币资金start', width: 120, dataIndex: 'st_money_fund', hidden: true},
            {text: '货币资金end', width: 120, dataIndex: 'end_money_fund', hidden: true},
            {text: '交易性金融资产start', width: 120, dataIndex: 'st_jyxjr_assets', hidden: true},
            {text: '交易性金融资产end', width: 120, dataIndex: 'end_jyxjr_assets', hidden: true},
            {text: '应收票据start', width: 120, dataIndex: 'st_ys_bill', hidden: true},
            {text: '应收票据end', width: 120, dataIndex: 'end_ys_bill', hidden: true},
            {text: '应收账款start', width: 120, dataIndex: 'st_ys_account', hidden: true},
            {text: '应收账款end', width: 120, dataIndex: 'end_ys_account', hidden: true},
            {text: '预付款项start', width: 120, dataIndex: 'st_yf_money', hidden: true},
            {text: '预付款项end', width: 120, dataIndex: 'end_yf_money', hidden: true},
            {text: '应收利息start', width: 120, dataIndex: 'st_ys_interest', hidden: true},
            {text: '应收利息end', width: 120, dataIndex: 'end_ys_interest', hidden: true},
            {text: '应收股利start', width: 120, dataIndex: 'st_ys_dividends', hidden: true},
            {text: '应收股利end', width: 120, dataIndex: 'end_ys_dividends', hidden: true},
            {text: '其他应收款start', width: 120, dataIndex: 'st_other_ys_money', hidden: true},
            {text: '其他应收款end',width: 120, dataIndex: 'end_other_ys_money', hidden: true},
            {text: '存货start', width: 120, dataIndex: 'st_inventory', hidden: true},
            {text: '存货end', width: 120, dataIndex: 'end_inventory', hidden: true},
            {text: '一年内到期的非流动资产start', width: 120, dataIndex: 'st_ynndq_no_assets', hidden: true},
            {text: '一年内到期的非流动资产end', width: 120, dataIndex: 'end_ynndq_no_assets', hidden: true},
            {text: '其他流动资产start', width: 120, dataIndex: 'st_other_assets', hidden: true},
            {text: '其他流动资产end',width: 120, dataIndex: 'end_other_assets', hidden: true},
            {text: '流动资产合计start', width: 120, dataIndex: 'st_hj_assets', hidden: true},
            {text: '流动资产合计end', width: 120, dataIndex: 'end_hj_assets', hidden: true},
            {text: '可供出售金融资产start',width: 120, dataIndex: 'st_kgcs_assets', hidden: true},
            {text: '可供出售金融资产end', width: 120, dataIndex: 'end_kgcs_assets', hidden: true},
            {text: '持有至到期投资start',width: 120, dataIndex: 'st_cyzdq_investment', hidden: true},
            {text: '持有至到期投资end',width: 120, dataIndex: 'end_cyzdq_investment', hidden: true},
            {text: '长期应收款start',width: 120, dataIndex: 'st_long_ys_money', hidden: true},
            {text: '长期应收款end', width: 120, dataIndex: 'end_long_ys_money', hidden: true},
            {text: '长期股权投资start',width: 120, dataIndex: 'st_long_gq_investment', hidden: true},
            {text: '长期股权投资end',width: 120, dataIndex: 'end_long_gq_investment', hidden: true},
            {text: '投资性房地产start', width: 120, dataIndex: 'st_invest_house', hidden: true},
            {text: '投资性房地产end',width: 120, dataIndex: 'end_invest_house', hidden: true},
            {text: '固定资产start', width: 120, dataIndex: 'st_gd_assets', hidden: true},
            {text: '固定资产end', width: 120, dataIndex: 'end_gd_assets', hidden: true},
            {text: '减：累计折旧start',width: 120, dataIndex: 'st_accu_deprec', hidden: true},
            {text: '减：累计折旧end', width: 120, dataIndex: 'end_accu_deprec', hidden: true},
            {text: '固定资产净值start', width: 120, dataIndex: 'st_gd_assets_jz', hidden: true},
            {text: '固定资产净值end',width: 120, dataIndex: 'end_gd_assets_jz', hidden: true},
            {text: '减：固定资产减值准备start',width: 120, dataIndex: 'st_gd_assets_ready', hidden: true},
            {text: '减：固定资产减值准备end', width: 120, dataIndex: 'end_gd_assets_ready', hidden: true},
            {text: '固定资产净额start', width: 120, dataIndex: 'st_gd_assets_je', hidden: true},
            {text: '固定资产净额end',width: 120, dataIndex: 'end_gd_assets_je', hidden: true},
            {text: '在建工程start', width: 120, dataIndex: 'st_now_project', hidden: true},
            {text: '在建工程end', width: 120, dataIndex: 'end_now_project', hidden: true},
            {text: '工程物资start', width: 120, dataIndex: 'st_project_material', hidden: true},
            {text: '工程物资end',width: 120, dataIndex: 'end_project_material', hidden: true},
            {text: '固定资产清理start', width: 120, dataIndex: 'st_gd_assets_ql', hidden: true},
            {text: '固定资产清理end',width: 120, dataIndex: 'end_gd_assets_ql', hidden: true},
            {text: '生产性生物投资start',width: 120, dataIndex: 'st_scx_investment', hidden: true},
            {text: '生产性生物投资end',width: 120, dataIndex: 'end_scx_investment', hidden: true},
            {text: '无形资产start', width: 120, dataIndex: 'st_wx_assets', hidden: true},
            {text: '无形资产end', width: 120, dataIndex: 'end_wx_assets', hidden: true},
            {text: '商誉start', width: 120, dataIndex: 'st_goodwill', hidden: true},
            {text: '商誉end', width: 120, dataIndex: 'end_goodwill', hidden: true},
            {text: '长期待摊费用start', width: 120, dataIndex: 'st_cqdt_cost', hidden: true},
            {text: '长期待摊费用end', width: 120, dataIndex: 'end_cqdt_cost', hidden: true},
            {text: '递延所得税资产start', width: 120, dataIndex: 'st_dysds_assets', hidden: true},
            {text: '递延所得税资产end', width: 120, dataIndex: 'end_dysds_assets', hidden: true},
            {text: '其他非流动资产start',width: 120, dataIndex: 'st_other_no_assets', hidden: true},
            {text: '其他非流动资产end',width: 120, dataIndex: 'end_other_no_assets', hidden: true},
            {text: '非流动资产合计start', width: 120, dataIndex: 'st_hj_no_asset', hidden: true},
            {text: '非流动资产合计end', width: 120, dataIndex: 'end_hj_no_asset', hidden: true},
            {text: '资产总计start', width: 120, dataIndex: 'st_hj_total_asset', hidden: true},
            {text: '资产总计end', width: 120, dataIndex: 'end_hj_total_asset', hidden: true},
            {text: '短期借款start', width: 120, dataIndex: 'st_short_borrow', hidden: true},
            {text: '短期借款end', width: 120, dataIndex: 'end_short_borrow', hidden: true},
            {text: '交易性金融负债start',width: 120, dataIndex: 'st_jyx_finance_fz', hidden: true},
            {text: '交易性金融负债end',width: 120, dataIndex: 'end_jyx_finance_fz', hidden: true},
            {text: '应付票据start', width: 120, dataIndex: 'st_yf_bill', hidden: true},
            {text: '应付票据end', width: 120, dataIndex: 'end_yf_bill', hidden: true},
            {text: '应付账款start', width: 120, dataIndex: 'st_yf_account', hidden: true},
            {text: '应付账款end', width: 120, dataIndex: 'end_yf_account', hidden: true},
            {text: '预收款项start', width: 120, dataIndex: 'st_ys_money', hidden: true},
            {text: '预收款项end', width: 120, dataIndex: 'end_ys_money', hidden: true},
            {text: '应付职工薪酬start', width: 120, dataIndex: 'st_yf_staff_pay', hidden: true},
            {text: '应付职工薪酬end',width: 120, dataIndex: 'end_yf_staff_pay', hidden: true},
            {text: '应交税费start', width: 120, dataIndex: 'st_yj_tax', hidden: true},
            {text: '应交税费end', width: 120, dataIndex: 'end_yj_tax', hidden: true},
            {text: '应付利息start', width: 120, dataIndex: 'st_yf_interest', hidden: true},
            {text: '应付利息end', width: 120, dataIndex: 'end_yf_interest', hidden: true},
            {text: '应付股利start', width: 120, dataIndex: 'st_yf_dividends', hidden: true},
            {text: '应付股利end', width: 120, dataIndex: 'end_yf_dividends', hidden: true},
            {text: '其他应付款start', width: 120, dataIndex: 'st_other_yf_money', hidden: true},
            {text: '其他应付款end',width: 120, dataIndex: 'end_other_yf_money', hidden: true},
            {text: '一年内到期的非流动负债start',width: 120, dataIndex: 'st_ynndq_no_fz', hidden: true},
            {text: '一年内到期的非流动负债end', width: 120, dataIndex: 'end_ynndq_no_fz', hidden: true},
            {text: '其他流动负债start', width: 120, dataIndex: 'st_other_fz', hidden: true},
            {text: '其他流动负债end', width: 120, dataIndex: 'end_other_fz', hidden: true},
            {text: '流动负债合计start', width: 120, dataIndex: 'st_hj_fz', hidden: true},
            {text: '流动负债合计end', width: 120, dataIndex: 'end_hj_fz', hidden: true},
            {text: '长期借款start', width: 120, dataIndex: 'st_long_borrow', hidden: true},
            {text: '长期借款end', width: 120, dataIndex: 'end_long_borrow', hidden: true},
            {text: '应付债券start', width: 120, dataIndex: 'st_yf_bond', hidden: true},
            {text: '应付债券end', width: 120, dataIndex: 'end_yf_bond', hidden: true},
            {text: '长期应付款start',width: 120, dataIndex: 'st_long_yf_money', hidden: true},
            {text: '长期应付款end', width: 120, dataIndex: 'end_long_yf_money', hidden: true},
            {text: '专项应付款start', width: 120, dataIndex: 'st_zx_yf_money', hidden: true},
            {text: '专项应付款end', width: 120, dataIndex: 'end_zx_yf_money', hidden: true},
            {text: '预计负债start', width: 120, dataIndex: 'st_yj_fz', hidden: true},
            {text: '预计负债end', width: 120, dataIndex: 'end_yj_fz', hidden: true},
            {text: '递延所得税负债start', width: 120, dataIndex: 'st_dysds_fz', hidden: true},
            {text: '递延所得税负债end', width: 120, dataIndex: 'end_dysds_fz', hidden: true},
            {text: '其他非流动负债start', width: 120, dataIndex: 'st_other_no_fz', hidden: true},
            {text: '其他非流动负债end', width: 120, dataIndex: 'end_other_no_fz', hidden: true},
            {text: '非流动负债合计start', width: 120, dataIndex: 'st_hj_no_fz', hidden: true},
            {text: '非流动负债合计end', width: 120, dataIndex: 'end_hj_no_fz', hidden: true},
            {text: '负债合计start', width: 120, dataIndex: 'st_hj_total_fz', hidden: true},
            {text: '负债合计end', width: 120, dataIndex: 'end_hj_total_fz', hidden: true},
            {text: '实收资本（或股本）start',width: 120, dataIndex: 'st_paid_assets', hidden: true},
            {text: '实收资本（或股本）end',width: 120, dataIndex: 'end_paid_assets', hidden: true},
            {text: '资本公积start', width: 120, dataIndex: 'st_zb_reserve', hidden: true},
            {text: '资本公积end', width: 120, dataIndex: 'end_zb_reserve', hidden: true},
            {text: '减：库存股start', width: 120, dataIndex: 'st_kc_stock', hidden: true},
            {text: '减：库存股end', width: 120, dataIndex: 'end_kc_stock', hidden: true},
            {text: '专项储备start', width: 120, dataIndex: 'st_zx_reserve', hidden: true},
            {text: '专项储备end', width: 120, dataIndex: 'end_zx_reserve', hidden: true},
            {text: '盈余公积start', width: 120, dataIndex: 'st_yy_reserve', hidden: true},
            {text: '盈余公积end', width: 120, dataIndex: 'end_yy_reserve', hidden: true},
            {text: '未分配利润start', width: 120, dataIndex: 'st_wfp_profit', hidden: true},
            {text: '未分配利润end', width: 120, dataIndex: 'end_wfp_profit', hidden: true},
            {text: '所有者权益合计start',width: 120, dataIndex: 'st_hj_owner_right', hidden: true},
            {text: '所有者权益合计end',width: 120, dataIndex: 'end_hj_owner_right', hidden: true},
            {text: '负债和所有者权益合计start', width: 120, dataIndex: 'st_hj_fz_owner_right', hidden: true},
            {text: '负债和所有者权益合计end',width: 120, dataIndex: 'end_hj_fz_owner_right', hidden: true},
            {text: '企业维护信息ID', width: 120, dataIndex: 'mai_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'mai_corp_id', hidden: true},
            {text: '更新人', width: 120, dataIndex: 'mai_changer_id', hidden: true},
            {text: '更新日期', width: 120, dataIndex: 'mai_changer_dt', hidden: true},
            {text: '更新单位', width: 120, dataIndex: 'mai_changer_dept', hidden: true},
            {text: '推荐日期', width: 120, dataIndex: 'mai_recomdt', hidden: true},
            {text: '托管状态', width: 120, dataIndex: 'mai_trusteeship', hidden: true},
            {text: '挂牌状态', width: 120, dataIndex: 'mai_listst', hidden: true},
            {text: '企业等级', width: 120, dataIndex: 'mai_eclass', hidden: true},
            {text: '企业维护状态', width: 120, dataIndex: 'mai_maintain', hidden: true},
            {text: '所属后备库', width: 120, dataIndex: 'mai_reserve', hidden: true},
            {text: '企业接待人', width: 120, dataIndex: 'mai_emaint', hidden: true},
            {text: '部门', width: 120, dataIndex: 'mai_dept', hidden: true},
            {text: '职务', width: 120, dataIndex: 'mai_post', hidden: true},
            {text: '固定电话', width: 120, dataIndex: 'mai_tel', hidden: true},
            {text: '手机', width: 120, dataIndex: 'mai_phone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'mai_fax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'mai_email', hidden: true},
            {text: 'QQ', width: 120, dataIndex: 'mai_qq', hidden: true},
            {text: '微信号', width: 120, dataIndex: 'mai_webchat', hidden: true},
            {text: '联系人备注', width: 120, dataIndex: 'mai_bz', hidden: true},
            {text: '服务机构ID', width: 120, dataIndex: 'srv_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'srv_corp_id', hidden: true},
            {text: '服务机构名称', width: 120, dataIndex: 'srv_name', hidden: true},
            {text: '服务机构类别', width: 120, dataIndex: 'srv_type', hidden: true},
            {text: '业务内容', width: 120, dataIndex: 'srv_content', hidden: true},
            {text: '级别', width: 120, dataIndex: 'srv_levels', hidden: true},
            {text: '专属领域', width: 120, dataIndex: 'srv_domain', hidden: true},
            {text: '惩罚记录', width: 120, dataIndex: 'srv_penalty', hidden: true},
            {text: '专审委员', width: 120, dataIndex: 'srv_examiner', hidden: true},
            {text: '兼任职务', width: 120, dataIndex: 'srv_post', hidden: true},
            {text: '简介', width: 120, dataIndex: 'srv_descs', hidden: true},
            {text: '备注 ', width: 120, dataIndex: 'srv_remark', hidden: true},
            {text: '政府部门ID', width: 120, dataIndex: 'gov_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'gov_corp_id', hidden: true},
            {text: '单位名称', width: 120, dataIndex: 'gov_domain', hidden: true},
            {text: '处/室', width: 120, dataIndex: 'gov_office', hidden: true},
            {text: '职能介绍', width: 120, dataIndex: 'gov_desc', hidden: true},
            {text: '联系人', width: 120, dataIndex: 'gov_contact', hidden: true},
            {text: '职务', width: 120, dataIndex: 'gov_psotion', hidden: true},
            {text: '证件类型', width: 120, dataIndex: 'gov_doctype', hidden: true},
            {text: '证件号码', width: 120, dataIndex: 'gov_docnum', hidden: true},
            {text: '手机号码', width: 120, dataIndex: 'gov_phone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'gov_fax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'gov_email', hidden: true},
            {text: 'QQ', width: 120, dataIndex: 'gov_qq', hidden: true},
            {text: '个人微信号', width: 120, dataIndex: 'gov_webchat', hidden: true},
            {text: '固定电话', width: 120, dataIndex: 'gov_tel', hidden: true},
            {text: '备注', width: 120, dataIndex: 'gov_remark', hidden: true},
            {text: '投资人ID', width: 120, dataIndex: 'inv_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'inv_corp_id', hidden: true},
            {text: '投资领域', width: 120, dataIndex: 'inv_domain', hidden: true},
            {text: '证监会行业分类1', width: 120, dataIndex: 'inv_csrc_type1', hidden: true},
            {text: '证监会行业分类2', width: 120, dataIndex: 'inv_csrc_type2', hidden: true},
            {text: '证监会行业分类3', width: 120, dataIndex: 'inv_csrc_type3', hidden: true},
            {text: '证监会行业分类4', width: 120, dataIndex: 'inv_csrc_type4', hidden: true},
            {text: '行业一级分类', width: 120, dataIndex: 'inv_indclass1', hidden: true},
            {text: '行业二级分类', width: 120, dataIndex: 'inv_indclass2', hidden: true},
            {text: '行业三级分类', width: 120, dataIndex: 'inv_indclass3', hidden: true},
            {text: '行业四级分类', width: 120, dataIndex: 'inv_indclass4', hidden: true},
            {text: '联系人', width: 120, dataIndex: 'inv_contact', hidden: true},
            {text: '职务', width: 120, dataIndex: 'inv_psotion', hidden: true},
            {text: '证件类型', width: 120, dataIndex: 'inv_doctype', hidden: true},
            {text: '证件号码', width: 120, dataIndex: 'inv_docnum', hidden: true},
            {text: '手机号码', width: 120, dataIndex: 'inv_phone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'inv_fax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'inv_email', hidden: true},
            {text: 'QQ',width: 120, dataIndex: 'inv_qq', hidden: true},
            {text: '个人微信号', width: 120, dataIndex: 'inv_webchat', hidden: true},
            {text: '固定电话', width: 120, dataIndex: 'inv_tel', hidden: true},
            {text: '备注', width: 120, dataIndex: 'inv_remark', hidden: true},
            {text: '融资需求ID', width: 120, dataIndex: 'refi_id'},
            {text: '企业ID', width: 120, dataIndex: 'refi_corp_id', hidden: true},
            {text: '融资金额', width: 120, dataIndex: 'refi_amounts', hidden: true},
            {text: '融资用途', width: 120, dataIndex: 'refi_use', hidden: true},
            {text: '股份融资/债券融资', width: 120, dataIndex: 'refi_financ', hidden: true},
            {text: '偿付保障', width: 120, dataIndex: 'refi_security', hidden: true},
            {text: '可接受成本（%/年）',width: 120, dataIndex: 'refi_acc_cost', hidden: true},
            {text: '融资期限', width: 120, dataIndex: 'refi_deadline', hidden: true},
            {text: '融资用途详细说明', width: 120, dataIndex: 'refi_desc', hidden: true},
            {text: '人力资源需求ID', width: 120, dataIndex: 'rehr_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'rehr_corp_id', hidden: true},
            {text: '需求职位', width: 120, dataIndex: 'rehr_post', hidden: true},
            {text: '职位人数', width: 120, dataIndex: 'rehr_num', hidden: true},
            {text: '职位薪金', width: 120, dataIndex: 'rehr_salary', hidden: true},
            {text: '性别要求', width: 120, dataIndex: 'rehr_sex_req', hidden: true},
            {text: '年龄要求', width: 120, dataIndex: 'rehr_age_req', hidden: true},
            {text: '经验要求', width: 120, dataIndex: 'rehr_requests', hidden: true},
            {text: '培训需求ID', width: 120, dataIndex: 'retra_id', hidden: true},
            {text: '企业ID', width: 120, dataIndex: 'retra_corp_id', hidden: true},
            {text: '培训方式', width: 120, dataIndex: 'retra_mode', hidden: true},
            {text: '培训内容', width: 120, dataIndex: 'retra_content', hidden: true},
            {text: '可接受成本', width: 120, dataIndex: 'retra_acc_cost', hidden: true},
            {text: '有效时间', width: 120, dataIndex: 'retra_dt', hidden: true},
            {text: '详细要求', width: 120, dataIndex: 'retra_requests', hidden: true}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_all',
                displayInfo: true,
                displayenterprise: '第 {0} 到 {1} 条数据, 共{2}条',
                emptyenterprise: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });

        this.callParent(arguments);
    }
});

function win_close_edit() {
    Ext.getCmp('enterprise_edit_id').close();

}

function obt_corp_update(corp_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            id :corp_id,
            buslicno : form_obt_edit['buslicno'].value,
            name : form_obt_edit['name'].value,
            unit : form_obt_edit['unit'].value,
            legrep : form_obt_edit['legrep'].value,
            province : form_obt_edit['province'].value,
            city : form_obt_edit['city'].value,
            county : form_obt_edit['county'].value,
            nos : form_obt_edit['nos'].value,
            postal : form_obt_edit['postal'].value,
            nature : form_obt_edit['nature'].value,
            regcap : form_obt_edit['regcap'].value,
            bustermfdt : form_obt_edit['bustermfdt'].value,
            bustremtdt : form_obt_edit['bustremtdt'].value,
            regdt : form_obt_edit['regdt'].value,
            list_area : form_obt_edit['list_area'].value,
            listcode : form_obt_edit['listcode'].value,
            listprice : form_obt_edit['listprice'].value,
            listdt : form_obt_edit['listdt'].value,
            channels : form_obt_edit['channels'].value,
            webchat : form_obt_edit['webchat'].value,
            staffnum : form_obt_edit['staffnum'].value,
            regist_organ : form_obt_edit['regist_organ'].value,
            regaddr : form_obt_edit['regaddr'].value,
            offaddr : form_obt_edit['offaddr'].value,
            scope : form_obt_edit['scope'].value,
            mbus : form_obt_edit['mbus'].value,
            eprofile : form_obt_edit['eprofile'].value,
            remark : form_obt_edit['remark'].value,
            phoinf : form_obt_edit['phoinf'].value,
            indclass1 : form_obt_edit['indclass1'].value,
            indclass2 : form_obt_edit['indclass2'].value,
            indclass3 : form_obt_edit['indclass3'].value,
            indclass4 : form_obt_edit['indclass4'].value,
            csrc_type1 : form_obt_edit['csrc_type1'].value,
            csrc_type2 : form_obt_edit['csrc_type2'].value,
            csrc_type3 : "",
            csrc_type4 : "",
            type_enterp : true,
            type_server : form_obt_edit['type_server'].checked,
            type_investors : form_obt_edit['type_investors'].checked,
            type_govermt : form_obt_edit['type_govermt'].checked,
            demand_rz : form_obt_edit['demand_rz'].checked,
            demand_px : form_obt_edit['demand_px'].checked,
            demand_rl : form_obt_edit['demand_rl'].checked
            //inputdt : form_obt_edit['inputdt'].value
        },
        url: 'update_corp_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_contact_update(corp_id,cont_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");

    Ext.Ajax.request({
        method: "POST",
        params: {
            cont_id : cont_id,
            cont_corp_id : corp_id,
            cont_name : form_obt_edit['cont_name'].value,
            cont_psotion : form_obt_edit['cont_psotion'].value,
            cont_edoctype : form_obt_edit['cont_edoctype'].value,
            cont_edocnum : form_obt_edit['cont_edocnum'].value,
            cont_ephone : form_obt_edit['cont_ephone'].value,
            cont_efax : form_obt_edit['cont_efax'].value,
            cont_eemail : form_obt_edit['cont_eemail'].value,
            cont_eqq : form_obt_edit['cont_eqq'].value,
            cont_webchat : form_obt_edit['cont_webchat'].value,
            cont_tel : form_obt_edit['cont_tel'].value,
            cont_bz : form_obt_edit['cont_bz'].value
        },
        url: 'update_corp_contact_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_shareholder_update(corp_id,gd_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            gd_id : gd_id,
            gd_corp_id : corp_id,
            gd_shtype : form_obt_edit['gd_shtype'].value,
            gd_shname : form_obt_edit['gd_shname'].value,
            gd_shdoctype : form_obt_edit['gd_shdoctype'].value,
            gd_shdocnum : form_obt_edit['gd_shdocnum'].value,
            gd_shareholdnum : form_obt_edit['gd_shareholdnum'].value,
            gd_currencynum : form_obt_edit['gd_currencynum'].value,
            gd_freezenum : form_obt_edit['gd_freezenum'].value,
            //gd_psotion : form_obt_edit['gd_psotion'].value,
            //gd_doctype : form_obt_edit['gd_doctype'].value,
            //gd_docnum : form_obt_edit['gd_docnum'].value,
            //gd_phone : form_obt_edit['gd_phone'].value,
            //gd_fax : form_obt_edit['gd_fax'].value,
            //gd_email : form_obt_edit['gd_email'].value,
            //gd_qq : form_obt_edit['gd_qq'].value,
            //gd_webchat : form_obt_edit['gd_webchat'].value,
            //gd_tel : form_obt_edit['gd_tel'].value,
            gd_remark : form_obt_edit['gd_remark'].value
        },
        url: 'update_corp_shareholder_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_finance_update(corp_id,finid) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            finid : finid,
            fin_corp_id : corp_id,
            start_time : form_obt_edit['start_time'].value,
            end_time : form_obt_edit['end_time'].value,
            st_money_fund : form_obt_edit['st_money_fund'].value,
            end_money_fund : form_obt_edit['end_money_fund'].value,
            st_jyxjr_assets : form_obt_edit['st_jyxjr_assets'].value,
            end_jyxjr_assets : form_obt_edit['end_jyxjr_assets'].value,
            st_ys_bill : form_obt_edit['st_ys_bill'].value,
            end_ys_bill : form_obt_edit['end_ys_bill'].value,
            st_ys_account : form_obt_edit['st_ys_account'].value,
            end_ys_account : form_obt_edit['end_ys_account'].value,
            st_yf_money : form_obt_edit['st_yf_money'].value,
            end_yf_money : form_obt_edit['end_yf_money'].value,
            st_ys_interest : form_obt_edit['st_ys_interest'].value,
            end_ys_interest : form_obt_edit['end_ys_interest'].value,
            st_ys_dividends : form_obt_edit['st_ys_dividends'].value,
            end_ys_dividends : form_obt_edit['end_ys_dividends'].value,
            st_other_ys_money : form_obt_edit['st_other_ys_money'].value,
            end_other_ys_money : form_obt_edit['end_other_ys_money'].value,
            st_inventory : form_obt_edit['st_inventory'].value,
            end_inventory : form_obt_edit['end_inventory'].value,
            st_ynndq_no_assets : form_obt_edit['st_ynndq_no_assets'].value,
            end_ynndq_no_assets : form_obt_edit['end_ynndq_no_assets'].value,
            st_other_assets : form_obt_edit['st_other_assets'].value,
            end_other_assets : form_obt_edit['end_other_assets'].value,
            st_hj_assets : form_obt_edit['st_hj_assets'].value,
            end_hj_assets : form_obt_edit['end_hj_assets'].value,
            st_kgcs_assets : form_obt_edit['st_kgcs_assets'].value,
            end_kgcs_assets : form_obt_edit['end_kgcs_assets'].value,
            st_cyzdq_investment : form_obt_edit['st_cyzdq_investment'].value,
            end_cyzdq_investment : form_obt_edit['end_cyzdq_investment'].value,
            st_long_ys_money : form_obt_edit['st_long_ys_money'].value,
            end_long_ys_money : form_obt_edit['end_long_ys_money'].value,
            st_long_gq_investment : form_obt_edit['st_long_gq_investment'].value,
            end_long_gq_investment : form_obt_edit['end_long_gq_investment'].value,
            st_invest_house : form_obt_edit['st_invest_house'].value,
            end_invest_house : form_obt_edit['end_invest_house'].value,
            st_gd_assets : form_obt_edit['st_gd_assets'].value,
            end_gd_assets : form_obt_edit['end_gd_assets'].value,
            st_accu_deprec : form_obt_edit['st_accu_deprec'].value,
            end_accu_deprec : form_obt_edit['end_accu_deprec'].value,
            st_gd_assets_jz : form_obt_edit['st_gd_assets_jz'].value,
            end_gd_assets_jz : form_obt_edit['end_gd_assets_jz'].value,
            st_gd_assets_ready : form_obt_edit['st_gd_assets_ready'].value,
            end_gd_assets_ready : form_obt_edit['end_gd_assets_ready'].value,
            st_gd_assets_je : form_obt_edit['st_gd_assets_je'].value,
            end_gd_assets_je : form_obt_edit['end_gd_assets_je'].value,
            st_now_project : form_obt_edit['st_now_project'].value,
            end_now_project : form_obt_edit['end_now_project'].value,
            st_project_material : form_obt_edit['st_project_material'].value,
            end_project_material : form_obt_edit['end_project_material'].value,
            st_gd_assets_ql : form_obt_edit['st_gd_assets_ql'].value,
            end_gd_assets_ql : form_obt_edit['end_gd_assets_ql'].value,
            st_scx_investment : form_obt_edit['st_scx_investment'].value,
            end_scx_investment : form_obt_edit['end_scx_investment'].value,
            st_wx_assets : form_obt_edit['st_wx_assets'].value,
            end_wx_assets : form_obt_edit['end_wx_assets'].value,
            st_goodwill : form_obt_edit['st_goodwill'].value,
            end_goodwill : form_obt_edit['end_goodwill'].value,
            st_cqdt_cost : form_obt_edit['st_cqdt_cost'].value,
            end_cqdt_cost : form_obt_edit['end_cqdt_cost'].value,
            st_dysds_assets : form_obt_edit['st_dysds_assets'].value,
            end_dysds_assets : form_obt_edit['end_dysds_assets'].value,
            st_other_no_assets : form_obt_edit['st_other_no_assets'].value,
            end_other_no_assets : form_obt_edit['end_other_no_assets'].value,
            st_hj_no_asset : form_obt_edit['st_hj_no_asset'].value,
            end_hj_no_asset : form_obt_edit['end_hj_no_asset'].value,
            st_hj_total_asset : form_obt_edit['st_hj_total_asset'].value,
            end_hj_total_asset : form_obt_edit['end_hj_total_asset'].value,
            st_short_borrow : form_obt_edit['st_short_borrow'].value,
            end_short_borrow : form_obt_edit['end_short_borrow'].value,
            st_jyx_finance_fz : form_obt_edit['st_jyx_finance_fz'].value,
            end_jyx_finance_fz : form_obt_edit['end_jyx_finance_fz'].value,
            st_yf_bill : form_obt_edit['st_yf_bill'].value,
            end_yf_bill : form_obt_edit['end_yf_bill'].value,
            st_yf_account : form_obt_edit['st_yf_account'].value,
            end_yf_account : form_obt_edit['end_yf_account'].value,
            st_ys_money : form_obt_edit['st_ys_money'].value,
            end_ys_money : form_obt_edit['end_ys_money'].value,
            st_yf_staff_pay : form_obt_edit['st_yf_staff_pay'].value,
            end_yf_staff_pay : form_obt_edit['end_yf_staff_pay'].value,
            st_yj_tax : form_obt_edit['st_yj_tax'].value,
            end_yj_tax : form_obt_edit['end_yj_tax'].value,
            st_yf_interest : form_obt_edit['st_yf_interest'].value,
            end_yf_interest : form_obt_edit['end_yf_interest'].value,
            st_yf_dividends : form_obt_edit['st_yf_dividends'].value,
            end_yf_dividends : form_obt_edit['end_yf_dividends'].value,
            st_other_yf_money : form_obt_edit['st_other_yf_money'].value,
            end_other_yf_money : form_obt_edit['end_other_yf_money'].value,
            st_ynndq_no_fz : form_obt_edit['st_ynndq_no_fz'].value,
            end_ynndq_no_fz : form_obt_edit['end_ynndq_no_fz'].value,
            st_other_fz : form_obt_edit['st_other_fz'].value,
            end_other_fz : form_obt_edit['end_other_fz'].value,
            st_hj_fz : form_obt_edit['st_hj_fz'].value,
            end_hj_fz : form_obt_edit['end_hj_fz'].value,
            st_long_borrow : form_obt_edit['st_long_borrow'].value,
            end_long_borrow : form_obt_edit['end_long_borrow'].value,
            st_yf_bond : form_obt_edit['st_yf_bond'].value,
            end_yf_bond : form_obt_edit['end_yf_bond'].value,
            st_long_yf_money : form_obt_edit['st_long_yf_money'].value,
            end_long_yf_money : form_obt_edit['end_long_yf_money'].value,
            st_zx_yf_money : form_obt_edit['st_zx_yf_money'].value,
            end_zx_yf_money : form_obt_edit['end_zx_yf_money'].value,
            st_yj_fz : form_obt_edit['st_yj_fz'].value,
            end_yj_fz : form_obt_edit['end_yj_fz'].value,
            st_dysds_fz : form_obt_edit['st_dysds_fz'].value,
            end_dysds_fz : form_obt_edit['end_dysds_fz'].value,
            st_other_no_fz : form_obt_edit['st_other_no_fz'].value,
            end_other_no_fz : form_obt_edit['end_other_no_fz'].value,
            st_hj_no_fz : form_obt_edit['st_hj_no_fz'].value,
            end_hj_no_fz : form_obt_edit['end_hj_no_fz'].value,
            st_hj_total_fz : form_obt_edit['st_hj_total_fz'].value,
            end_hj_total_fz : form_obt_edit['end_hj_total_fz'].value,
            st_paid_assets : form_obt_edit['st_paid_assets'].value,
            end_paid_assets : form_obt_edit['end_paid_assets'].value,
            st_zb_reserve : form_obt_edit['st_zb_reserve'].value,
            end_zb_reserve : form_obt_edit['end_zb_reserve'].value,
            st_kc_stock : form_obt_edit['st_kc_stock'].value,
            end_kc_stock : form_obt_edit['end_kc_stock'].value,
            st_zx_reserve : form_obt_edit['st_zx_reserve'].value,
            end_zx_reserve : form_obt_edit['end_zx_reserve'].value,
            st_yy_reserve : form_obt_edit['st_yy_reserve'].value,
            end_yy_reserve : form_obt_edit['end_yy_reserve'].value,
            st_wfp_profit : form_obt_edit['st_wfp_profit'].value,
            end_wfp_profit : form_obt_edit['end_wfp_profit'].value,
            st_hj_owner_right : form_obt_edit['st_hj_owner_right'].value,
            end_hj_owner_right : form_obt_edit['end_hj_owner_right'].value,
            st_hj_fz_owner_right : form_obt_edit['st_hj_fz_owner_right'].value,
            end_hj_fz_owner_right : form_obt_edit['end_hj_fz_owner_right'].value
        },
        url: 'update_corp_finance_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_maintain_update(corp_id,mai_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            mai_id : mai_id,
            mai_corp_id : corp_id,
            mai_changer_id : form_obt_edit['mai_changer_id'].value,
            mai_changer_dt : form_obt_edit['mai_changer_dt'].value,
            mai_changer_dept : form_obt_edit['mai_changer_dept'].value,
            mai_recomdt : form_obt_edit['mai_recomdt'].value,
            mai_trusteeship : form_obt_edit['mai_trusteeship'].value,
            mai_listst : form_obt_edit['mai_listst'].value,
            mai_eclass : form_obt_edit['mai_eclass'].value,
            mai_maintain : form_obt_edit['mai_maintain'].value,
            mai_reserve : form_obt_edit['mai_reserve'].value,
            mai_emaint : form_obt_edit['mai_emaint'].value,
            mai_dept : form_obt_edit['mai_dept'].value,
            mai_post : form_obt_edit['mai_post'].value,
            mai_tel : form_obt_edit['mai_tel'].value,
            mai_phone : form_obt_edit['mai_phone'].value,
            mai_fax : form_obt_edit['mai_fax'].value,
            mai_email : form_obt_edit['mai_email'].value,
            mai_qq : form_obt_edit['mai_qq'].value,
            mai_webchat : form_obt_edit['mai_webchat'].value,
            mai_bz : form_obt_edit['mai_bz'].value
        },
        url: 'update_corp_maintain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_government_update(corp_id,gov_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            gov_id : gov_id,
            gov_corp_id : corp_id,
            gov_domain : form_obt_edit['gov_domain'].value,
            gov_office : form_obt_edit['gov_office'].value,
            gov_desc : form_obt_edit['gov_desc'].value,
            gov_contact : form_obt_edit['gov_contact'].value,
            gov_psotion : form_obt_edit['gov_psotion'].value,
            gov_doctype : form_obt_edit['gov_doctype'].value,
            gov_docnum : form_obt_edit['gov_docnum'].value,
            gov_phone : form_obt_edit['gov_phone'].value,
            gov_fax : form_obt_edit['gov_fax'].value,
            gov_email : form_obt_edit['gov_email'].value,
            gov_qq : form_obt_edit['gov_qq'].value,
            gov_webchat : form_obt_edit['gov_webchat'].value,
            gov_tel : form_obt_edit['gov_tel'].value,
            gov_remark : form_obt_edit['gov_remark'].value
        },
        url: 'update_corp_government_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_investors_update(corp_id,inv_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            inv_id : inv_id,
            inv_corp_id :corp_id,
            inv_domain : form_obt_edit['inv_domain'].value,
            inv_csrc_type1 : form_obt_edit['inv_csrc_type1'].value,
            inv_csrc_type2 : form_obt_edit['inv_csrc_type2'].value,
            inv_csrc_type3 : form_obt_edit['inv_csrc_type3'].value,
            inv_csrc_type4 : form_obt_edit['inv_csrc_type4'].value,
            inv_indclass1 : form_obt_edit['inv_indclass1'].value,
            inv_indclass2 : form_obt_edit['inv_indclass2'].value,
            inv_indclass3 : "",
            inv_indclass4 : "",
            inv_contact : form_obt_edit['inv_contact'].value,
            inv_psotion : form_obt_edit['inv_psotion'].value,
            inv_doctype : form_obt_edit['inv_doctype'].value,
            inv_docnum : form_obt_edit['inv_docnum'].value,
            inv_phone : form_obt_edit['inv_phone'].value,
            inv_fax : form_obt_edit['inv_fax'].value,
            inv_email : form_obt_edit['inv_email'].value,
            inv_qq : form_obt_edit['inv_qq'].value,
            inv_webchat : form_obt_edit['inv_webchat'].value,
            inv_tel : form_obt_edit['inv_tel'].value,
            inv_remark : form_obt_edit['inv_remark'].value
        },
        url: 'update_corp_investors_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_service_update(corp_id,srv_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            srv_id : srv_id,
            srv_corp_id :corp_id,
            srv_name : form_obt_edit['srv_name'].value,
            srv_type : form_obt_edit['srv_type'].value,
            srv_content : form_obt_edit['srv_content'].value,
            srv_levels : form_obt_edit['srv_levels'].value,
            srv_domain : form_obt_edit['srv_domain'].value,
            srv_penalty : form_obt_edit['srv_penalty'].value,
            srv_examiner : form_obt_edit['srv_examiner'].value,
            srv_post : form_obt_edit['srv_post'].value,
            srv_descs : form_obt_edit['srv_descs'].value,
            srv_remark : form_obt_edit['srv_remark'].value
        },
        url: 'update_corp_service_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

function obt_corp_refinancing_update(corp_id,refi_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            refi_id : refi_id,
            refi_corp_id :corp_id,
            refi_amounts : form_obt_edit['refi_amounts'].value,
            refi_use : form_obt_edit['refi_use'].value,
            refi_financ : form_obt_edit['refi_financ'].value,
            refi_security : form_obt_edit['refi_security'].value,
            refi_acc_cost : form_obt_edit['refi_acc_cost'].value,
            refi_deadline : form_obt_edit['refi_deadline'].value,
            refi_desc : form_obt_edit['refi_desc'].value
        },
        url: 'update_corp_refinancing_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_rehr_update(corp_id,rehr_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            rehr_id : rehr_id,
            rehr_corp_id : corp_id,
            rehr_post : form_obt_edit['rehr_post'].value,
            rehr_num : form_obt_edit['rehr_num'].value,
            rehr_salary : form_obt_edit['rehr_salary'].value,
            rehr_sex_req : form_obt_edit['rehr_sex_req'].value,
            rehr_age_req : form_obt_edit['rehr_age_req'].value,
            rehr_requests : form_obt_edit['rehr_requests'].value
        },
        url: 'update_corp_rehr_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};
function obt_corp_retrain_update(corp_id,retra_id) {
    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    Ext.Ajax.request({
        method: "POST",
        params: {
            retra_id : retra_id,
            retra_corp_id : corp_id,
            retra_mode : form_obt_edit['retra_mode'].value,
            retra_content : form_obt_edit['retra_content'].value,
            retra_acc_cost : form_obt_edit['retra_acc_cost'].value,
            retra_dt : form_obt_edit['retra_dt'].value,
            retra_requests : form_obt_edit['retra_requests'].value
        },
        url: 'update_corp_retrain_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
};

 


function save_corp_edit(corp_id,cont_id,gd_id,finid,mai_id,gov_id,inv_id,srv_id,refi_id,rehr_id,retra_id) {

    var form_obt_edit = document.getElementById("apply_corp_form_edit");
    obt_corp_update(corp_id);
    obt_corp_contact_update(corp_id,cont_id);
    obt_corp_shareholder_update(corp_id,gd_id);
    obt_corp_finance_update(corp_id,finid);
    obt_corp_maintain_update(corp_id,mai_id);
    obt_corp_government_update(corp_id,gov_id);
    obt_corp_investors_update(corp_id,inv_id);
    obt_corp_service_update(corp_id,srv_id);
    obt_corp_refinancing_update(corp_id,refi_id);
    obt_corp_rehr_update(corp_id,rehr_id);
    obt_corp_retrain_update(corp_id,retra_id);

    Ext.getCmp('grid_enterprise').getStore().reload();
}


//function buslicno_check_edit() {
//    var form_obt_apply = document.getElementById("apply_form");
//    Ext.Ajax.request({
//        method: "POST",
//        params: {
//            buslicno: form_obt_apply['buslicno'].value,
//            id : 0
//        },
//        url: 'check_buslicno_info',
//        success: function (response,opts) {
//            var obj=Ext.decode(response.responseText);
//
//            if(!obj.success)
//            {
//                Ext.Msg.alert("提示", "该营业执照号码已用！");
//                document.getElementById('apply_form')['buslicno'].value="";
//            }
//        },
//        failure: function (response,opts) {
//            Ext.Msg.alert("提示", "错");
//        }
//    });
//
//}


function corp_export(id) {

    Ext.Ajax.request({
        url: 'export_corp_info',
        params: {
            "id": id
        },
        waitMsg: '正在导出数据...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "导出成功!");
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "导出失败!");
        }
    });
};