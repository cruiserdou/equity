/**
 * Created by xwq on 6/20/15.
 */

var corp_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
     '<h2>企业信息查看</h2>',
     '<table class="enter_table" id="table_base">',
     '<tr>',
     '<th class="table_header" colspan="4">基本信息</th>',
     '</tr>',
     '<tr>',
     '<th>营业执照号码<span style="color: red">*</span></th>',
     '<td>{buslicno}</td>',
     '<th>企业名称</th>',
     '<td>{name}</td>',
     '</tr>',
     '<tr>',
     '<th>单位类别</th>',
     '<td>{unit}</td>',
     '<th>法定代表人</th>',
     '<td>{legrep}</td>',
     '</tr>',
     '<tr>',
     '<th>地域</th>',
     '<td>{province}{city}{county}</td>',
     '<th>公司简称</th>',
     '<td>{nos}</td>',
     '</tr>',
     '<tr>',
     '<th>邮政编码</th>',
     '<td>{postal}</td>',
     '<th>企业性质</th>',
     '<td>{nature}</td>',
     '</tr>',
     '<tr>',
     '<th>注册资本（万元）</th>',
     '<td>{regcap}</td>',
     '<th>注册日期</th>',
     '<td>{regdt}</td>',
     '</tr>',
     '<tr>',
     '<th>营业期限自</th>',
     '<td>{bustermfdt}</td>',
     '<th>营业期限至</th>',
     '<td>{bustremtdt}</td>',
     '</tr>',
     '<tr>'+
     '<th>挂牌区域</th>'+
     '<td>{list_area}</td>'+
     '<th>挂牌日期</th>'+
     '<td>{listdt}</td>'+
     '</tr>'+
     '<tr>',
     '<th>挂牌代码</th>'+
     '<td>{listcode}</td>'+
     '<th>挂牌价格<br>元/元出资(股)</th>'+
     '<td>{listprice}</td>'+
     '</tr>'+

     '<tr>'+
     '<th>企业微信号</th>',
     '<td>{webchat}</td>'+
     '<th>推荐单位</th>'+
     '<td>{channels}</td>'+
     '</tr>'+
     '<tr>'+
     '<th>登记机关</th>'+
     '<td>{regist_organ}</td>'+

     '<th>员工人数</th>'+
     '<td>{staffnum}</td>'+
     '</tr>'+
     '<tr>'+
     '<th>注册地址</th>'+
     '<td colspan="3">{regaddr}</td>'+
     '</tr>'+
     '<tr>'+
     '<th>办公地址</th>'+
     '<td colspan="3">{offaddr}</td>'+
     '</tr>'+
     '<tr>',
     '<th>经营范围</th>'+
     '<td colspan="3"><textarea disabled id="scope" name="scope"  type="text" value="{scope}">{scope}</textarea></td>'+
     '</tr>'+
     '<tr>'+
     '<th>主营业务</th>'+
     '<td colspan="3"><textarea disabled id="mbus" name="mbus"  type="text" value="{mbus}">{mbus}</textarea></td>'+
     '</tr>'+
     '<tr>'+
     '<th>企业简介</th>'+
     '<td colspan="3"><textarea disabled id="eprofile" name="eprofile"  type="text" value="{eprofile}">{eprofile}</textarea></td>'+
     '</tr>'+
     '<tr>',
     '<th>备注</th>',
     '<td colspan="3"><textarea disabled id="remark" name="remark"  type="text" value="{remark}">{remark}</textarea></td>',
     '</tr>',
     '<tr>',
     '<th>企业图文信息</th>',
     '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>',
     '</tr>',
     '</table>',
    '</div>'

);

var corp_shareholder_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_sh">',
    '<tr>',
    '<th class="table_header" colspan="8">股东名册</th>',
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
    '<td>{gd_shtype}</td>',
    '<td>{gd_shname}</td>',
    '<td>{gd_shdoctype}</td>',
    '<td>{gd_shdocnum}</td>',
    '<td>{gd_shareholdnum}</td>',
    '<td>{gd_currencynum}</td>',
    '<td>{gd_freezenum}</td>',
    '<td>{gd_remark}</td>',
    '</tr>',
    '</table>'
);



var corp_contact_tpl= new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_link">',
    '<tr>',
    '<th class="table_header" colspan="4">法定代表人基本信息</th>',
    '</tr>',
    '<tr>',
    '<th>姓名</th>',
    '<td>{cont_name}</td>',
    '<th>证件类型</th>',
    '<td>{cont_edoctype}</td>',
    '</tr>',
    '<tr>',
    '<th>职务</th>',
    '<td>{cont_psotion}</td>',
    '<th>证件号码</th>',
    '<td>{cont_edocnum}</td>',
    '</tr>',
    '<tr>',
    '<th>手机</th>',
    '<td>{cont_ephone}</td>',
    '<th>传真</th>',
    '<td>{cont_efax}</td>',
    '</tr>',
    '<tr>',
    '<th>E-mail</th>',
    '<td>{cont_eemail}</td>',
    '<th>QQ</th>',
    '<td>{cont_eqq}</td>',
    '</tr>',
    '<tr>'+
    '<th>微信号</th>'+
    '<td>{cont_webchat}</td>'+
    '<th>固话</th>',
    '<td>{cont_tel}</td>'+
    '</tr>'+
    '<tr>'+
    '<th>备注</th>'+
    '<td colspan="3"><textarea disabled id="cont_bz" name="cont_bz"  type="text" value="{cont_bz}">{cont_bz}</textarea></td>'+
    '</tr>'+
    '</table>',
     '</div>'
);

var corp_acount_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_acount">',
    '<tr>',
    '<th class="table_header" colspan="4">国民经济行业分类信息</th>',
    '</tr>',
    '<tr>',
    '<th>行业一级分类</th>',
    '<td>{indclass1}</td>',
    '<th>行业二级分类</th>',
    '<td>{indclass2}</td>',
    '</tr>',
    '<tr>',
    '<th>行业三级分类</th>',
    '<td>{indclass3}</td>',
    '<th>行业四级分类</th>',
    '<td>{indclass4}</td>',
    '</tr>',
    '</table>',
    '<table class="enter_table" id="table_csrc_type">',
    '<tr>',
    '<th class="table_header" colspan="4">证监会行业分类信息</th>',
    '</tr>',
    '<tr>',
    '<th>证监会行业一级分类</th>',
    '<td>{csrc_type1}</td>',
    '<th>证监会行业二级分类</th>',
    '<td>{csrc_type2}</td>',
    '</tr>',
    '</table>',
    '</div>'
);

var corp_maintain_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table  class="enter_table" id="table_ocompay">',
    '<tr>',
    '<th class="table_header" colspan="4">企业最近一次被关注信息</th>',
    '</tr>',
    '<tr>',
    '<th>更新日期</th>',
    '<td>{mai_changer_dt}</td>',
    '<th>更新人</th>',
    '<td>{mai_changer_id}</td>',
    '</tr>',
    '<tr>',
    '<th>更新单位</th>',
    '<td>{mai_changer_dept}</td>',
    '<th>推荐日期</th>',
    '<td>{mai_recomdt}</td>',
    '</tr>',
    '<tr>',
    '<th>托管状态</th>',
    '<td>{mai_trusteeship}</td>',
    '<th>挂牌状态</th>',
    '<td>{mai_listst}</td>',
    '</tr>',
    '<tr>',
    '<th>企业等级</th>',
    '<td>{mai_eclass}</td>',
    '<th>企业维护状态</th>',
    '<td>{mai_maintain}</td>',
    '</tr>',
    '<tr>',
    '<th>所属后备库</th>',
    '<td>{mai_reserve}</td>',
    '<th>企业接待人</th>',
    '<td>{mai_emaint}</td>',
    '</tr>',
    '<tr>',
    '<th>部门</th>',
    '<td>{mai_dept}</td>',
    '<th>职务</th>',
    '<td>{mai_post}</td>',
    '</tr>',
    '<tr>',
    '<th>固定电话</th>',
    '<td>{mai_tel}</td>',
    '<th>手机号码</th>',
    '<td>{mai_phone}</td>',
    '</tr>',
    '<tr>',
    '<th>传真</th>',
    '<td>{mai_fax}</td>',
    '<th>E-mail</th>',
    '<td>{mai_email}</td>',
    '</tr>',
    '<tr>',
    '<th>QQ</th>',
    '<td>{mai_qq}</td>',
    '<th>微信号</th>',
    '<td>{mai_webchat}</td>',
    '</tr>',
    '<tr>',
    '<th>备注</th>',
    '<td colspan="3"><textarea  disabled id="mai_bz" name="mai_bz"  type="text" value="{mai_bz}">{mai_bz}</textarea></td>'+
    '</tr>',
    '</table>',
    '</div>'
);






var corp_finance_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_assets_finance">',
    '<tr>',
    '<th class="table_header" colspan="6">企业财务信息</th>',
    '</tr>',
    '<tr>',
    '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;始&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
    '<td>{start_time}</td>',
    '<th></th>',
    '<th>时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>',
    '<td>{end_time}</td>',
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
    '<td>{st_money_fund}</td>',
    '<td>{end_money_fund}</td>',
    '<th>短期借款</th>',
    '<td>{st_short_borrow}</td>',
    '<td>{end_short_borrow}</td>',
    '</tr>',
    '<tr>',
    '<th>交易性金融资产</th>',
    '<td>{st_jyxjr_assets}</td>',
    '<td>{end_jyxjr_assets}</td>',
    '<th>交易性金融负债</th>',
    '<td>{st_jyx_finance_fz}</td>',
    '<td>{end_jyx_finance_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>应收票据</th>',
    '<td>{st_ys_bill}</td>',
    '<td>{end_ys_bill}</td>',
    '<th>应付票据</th>',
    '<td>{st_yf_bill}</td>',
    '<td>{end_yf_bill}</td>',
    '</tr>',
    '<tr>',
    '<th>应收账款</th>',
    '<td>{st_ys_account}</td>',
    '<td>{end_ys_account}</td>',
    '<th>应付账款</th>',
    '<td>{st_yf_account}</td>',
    '<td>{end_yf_account}</td>',
    '</tr>',
    '<tr>',
    '<th>预付款项</th>',
    '<td>{st_yf_money}</td>',
    '<td>{end_yf_money}</td>',
    '<th>预收款项</th>',
    '<td>{st_ys_money}</td>',
    '<td>{end_ys_money}</td>',
    '</tr>',
    '<tr>',
    '<th>应收利息</th>',
    '<td>{st_ys_interest}</td>',
    '<td>{end_ys_interest}</td>',
    '<th>应付职工薪酬</th>',
    '<td>{st_yf_staff_pay}</td>',
    '<td>{end_yf_staff_pay}</td>',
    '</tr>',
    '<tr>',
    '<th>应收股利</th>',
    '<td>{st_ys_dividends}</td>',
    '<td>{end_ys_dividends}</td>',
    '<th>应交税费</th>',
    '<td>{st_yj_tax}</td>',
    '<td>{end_yj_tax}</td>',
    '</tr>',
    '<tr>',
    '<th>其他应收款</th>',
    '<td>{st_other_ys_money}</td>',
    '<td>{end_other_ys_money}</td>',
    '<th>应付利息</th>',
    '<td>{st_yf_interest}</td>',
    '<td>{end_yf_interest}</td>',
    '</tr>',
    '<tr>',
    '<th>存货</th>',
    '<td>{st_inventory}</td>',
    '<td>{end_inventory}</td>',
    '<th>应付股利</th>',
    '<td>{st_yf_dividends}</td>',
    '<td>{end_yf_dividends}</td>',
    '</tr>',
    '<tr>',
    '<th>一年内到期非流动资产</th>',
    '<td>{st_ynndq_no_assets}</td>',
    '<td>{end_ynndq_no_assets}</td>',
    '<th>其他应付款</th>',
    '<td>{st_other_yf_money}</td>',
    '<td>{end_other_yf_money}</td>',
    '</tr>',
    '<tr>',
    '<th>其他流动资产</th>',
    '<td>{st_other_assets}</td>',
    '<td>{end_other_assets}</td>',
    '<th>一年内到期的非流动负债</th>',
    '<td>{st_ynndq_no_fz}</td>',
    '<td>{end_ynndq_no_fz}</td>',
    '</tr>',
    '<tr>',
    '<th></th>',
    '<th></th>',
    '<th></th>',
    '<th>其他流动负债</th>',
    '<td>{st_other_fz}</td>',
    '<td>{end_other_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>流动资产合计</th>',
    '<td>{st_hj_assets}</td>',
    '<td>{end_hj_assets}</td>',
    '<th>流动负债合计</th>',
    '<td>{st_hj_fz}</td>',
    '<td>{end_hj_fz}</td>',
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
    '<td>{st_kgcs_assets}</td>',
    '<td>{end_kgcs_assets}</td>',
    '<th>长期借款</th>',
    '<td>{st_long_borrow}</td>',
    '<td>{end_long_borrow}</td>',
    '</tr>',
    '<tr>',
    '<th>持有至到期投资</th>',
    '<td>{st_cyzdq_investment}</td>',
    '<td>{end_cyzdq_investment}</td>',
    '<th>应付债券</th>',
    '<td>{st_yf_bond}</td>',
    '<td>{end_yf_bond}</td>',
    '</tr>',
    '<tr>',
    '<th>长期应收款</th>',
    '<td>{st_long_ys_money}</td>',
    '<td>{end_long_ys_money}</td>',
    '<th>长期应付款</th>',
    '<td>{st_long_yf_money}</td>',
    '<td>{end_long_yf_money}</td>',
    '</tr>',
    '<tr>',
    '<th>长期股权投资</th>',
    '<td>{st_long_gq_investment}</td>',
    '<td>{end_long_gq_investment}</td>',
    '<th>专项应付款</th>',
    '<td>{st_zx_yf_money}</td>',
    '<td>{end_zx_yf_money}</td>',
    '</tr>',
    '<tr>',
    '<th>投资性房地产</th>',
    '<td>{st_invest_house}</td>',
    '<td>{end_invest_house}</td>',
    '<th>预计负债</th>',
    '<td>{st_yj_fz}</td>',
    '<td>{end_yj_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>固定资产</th>',
    '<td>{st_gd_assets}</td>',
    '<td>{end_gd_assets}</td>',
    '<th>递延所得税负债</th>',
    '<td>{st_dysds_fz}</td>',
    '<td>{end_dysds_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>减：累计折旧</th>',
    '<td>{st_accu_deprec}</td>',
    '<td>{end_accu_deprec}</td>',
    '<th>其他非流动负债</th>',
    '<td>{st_other_no_fz}</td>',
    '<td>{end_other_no_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>固定资产净值</th>',
    '<td>{st_gd_assets_jz}</td>',
    '<td>{end_gd_assets_jz}</td>',
    '<th>非流动负债合计</th>',
    '<td>{st_hj_no_fz}</td>',
    '<td>{end_hj_no_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>减：固定资产减值准备</th>',
    '<td>{st_gd_assets_ready}</td>',
    '<td>{end_gd_assets_ready}</td>',
    '<th>负债合计</th>',
    '<td>{st_hj_total_fz}</td>',
    '<td>{end_hj_total_fz}</td>',
    '</tr>',
    '<tr>',
    '<th>固定资产净额</th>',
    '<td>{st_gd_assets_je}</td>',
    '<td>{end_gd_assets_je}</td>',
    '<th></th>',
    '<th></th>',
    '<th></th>',
    '</tr>',
    '<tr>',
    '<th>在建工程</th>',
    '<td>{st_now_project}</td>',
    '<td>{end_now_project}</td>',
    '<th>所有者权益(或股东权益)</th>',
    '<th></th>',
    '<th></th>',
    '</tr>',
    '<tr>',
    '<th>工程物资</th>',
    '<td>{st_project_material}</td>',
    '<td>{end_project_material}</td>',
    '<th>实收资本（或股本）</th>',
    '<td>{st_paid_assets}</td>',
    '<td>{end_paid_assets}</td>',
    '</tr>',
    '<tr>',
    '<th>固定资产清理</th>',
    '<td>{st_gd_assets_ql}</td>',
    '<td>{end_gd_assets_ql}</td>',
    '<th>资本公积</th>',
    '<td>{st_zb_reserve}</td>',
    '<td>{end_zb_reserve}</td>',
    '</tr>',
    '<tr>',
    '<th>生产性生物资产</th>',
    '<td>{st_scx_investment}</td>',
    '<td>{end_scx_investment}</td>',
    '<th>减：库存股</th>',
    '<td>{st_kc_stock}</td>',
    '<td>{end_kc_stock}</td>',
    '</tr>',
    '<tr>',
    '<th>无形资产</th>',
    '<td>{st_wx_assets}</td>',
    '<td>{end_wx_assets}</td>',
    '<th>专项储备</th>',
    '<td>{st_zx_reserve}</td>',
    '<td>{end_zx_reserve}</td>',
    '</tr>',
    '<tr>',
    '<th>商誉</th>',
    '<td>{st_goodwill}</td>',
    '<td>{end_goodwill}</td>',
    '<th>盈余公积</th>',
    '<td>{st_yy_reserve}</td>',
    '<td>{end_yy_reserve}</td>',
    '</tr>',
    '<tr>',
    '<th>长期待摊费用</th>',
    '<td>{st_cqdt_cost}</td>',
    '<td>{end_cqdt_cost}</td>',
    '<th>未分配利润</th>',
    '<td>{st_wfp_profit}</td>',
    '<td>{end_wfp_profit}</td>',
    '</tr>',
    '<tr>',
    '<th>递延所得税资产</th>',
    '<td>{st_dysds_assets}</td>',
    '<td>{end_dysds_assets}</td>',
    '<th>所有者权益合计</th>',
    '<td>{st_hj_owner_right}</td>',
    '<td>{end_hj_owner_right}</td>',
    '</tr>',
    '<tr>',
    '<th>其他非流动资产</th>',
    '<td>{st_other_no_assets}</td>',
    '<td>{end_other_no_assets}</td>',
    '<th></th>',
    '<th></th>',
    '<th></th>',
    '</tr>',
    '<tr>',
    '<th>非流动资产合计</th>',
    '<td>{st_hj_no_asset}</td>',
    '<td>{end_hj_no_asset}</td>',
    '<th></th>',
    '<th></th>',
    '<th></th>',
    '</tr>',
    '<tr>',
    '<th>资产总计</th>',
    '<td>{st_hj_total_asset}</td>',
    '<td>{end_hj_total_asset}</td>',
    '<th>负债和所有者权益合计</th>',
    '<td>{st_hj_fz_owner_right}</td>',
    '<td>{end_hj_fz_owner_right}</td>',
    '</tr>',
    '</table>',
    '</div>'
);



var corp_service_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_service">',
    '<tr>',
    '<th class="table_header" colspan="4">服务机构信息</th>',
    '</tr>',
    '<tr>',
    '<th>服务机构名称</th>',
    '<td>{srv_name}</td>',
    '<th>服务机构类别</th>',
    '<td>{srv_type}</td>',
    '</tr>',
    '<tr>',
    '<th>业务内容</th>',
    '<td>{srv_content}</td>',
    '<th>级别</th>',
    '<td>{srv_levels}</td>',
    '</tr>',
    '<tr>',
    '<th>惩罚记录</th>',
    '<td>{srv_penalty}</td>',
    '<th>专属领域</th>',
    '<td>{srv_domain}</td>',
    '</tr>',
    '<tr>',
    '<th>专审委员</th>',
    '<td>{srv_examiner}</td>',
    '<th>兼任职务</th>',
    '<td>{srv_post}</td>',
    '</tr>',
    '<tr>',
    '<th>简介</th>',
    '<td colspan="3"><textarea disabled id="srv_descs" name="srv_descs"  type="text" value="{srv_descs}">{srv_descs}</textarea></td>'+
    '</tr>',
    '<tr>',
    '<th>备注</th>',
    '<td colspan="3"><textarea disabled id="srv_remark" name="srv_remark"  type="text" value="{srv_remark}">{srv_remark}</textarea></td>'+
    '</tr>',
    '</table>',
    '</div>'
);


var corp_investors_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_investors">',
    '<tr>',
    '<th class="table_header" colspan="4">投资人信息</th>',
    '</tr>',
    '<tr>',
    '<th>投资领域</th>',
    '<td  colspan="3">{inv_domain}</td>',
    '</tr>',
    '<tr>',
    '<th>行业一级分类</th>',
    '<td>{inv_csrc_type1}</td>',
    '<th>行业二级分类</th>',
    '<td>{inv_csrc_type2}</td>',
    '</tr>',
    '<tr>',
    '<th>行业三级分类</th>',
    '<td>{inv_csrc_type3}</td>',
    '<th>行业四级分类</th>',
    '<td>{inv_csrc_type4}</td>',
    '</tr>',
    '<tr>',
    '<th>证监会行业一级分类</th>',
    '<td>{inv_indclass1}</td>',
    '<th>证监会行业二级分类</th>',
    '<td>{inv_indclass2}</td>',
    '</tr>',

    '<tr>',
    '<th>姓名</th>',
    '<td>{inv_contact}</td>',
    '<th>证件类型</th>',
    '<td>{inv_doctype}</td>',
    '</tr>',
    '<tr>',
    '<th>职务</th>',
    '<td>{inv_psotion}</td>',
    '<th>证件号码</th>',
    '<td>{inv_docnum}</td>',
    '</tr>',
    '<tr>',
    '<th>手机</th>',
    '<td>{inv_phone}</td>',
    '<th>传真</th>',
    '<td>{inv_fax}</td>',
    '</tr>',
    '<tr>',
    '<th>E-mail</th>',
    '<td>{inv_email}</td>',
    '<th>QQ</th>',
    '<td>{inv_qq}</td>',
    '</tr>',
    '<tr>'+
    '<th>微信号</th>'+
    '<td>{inv_webchat}</td>'+
    '<th>固话</th>',
    '<td>{inv_tel}</td>'+
    '</tr>'+
    '<tr>'+
    '<th>备注</th>'+
    '<td colspan="3"><textarea disabled id="inv_remark" name="inv_remark"  type="text" value="{inv_remark}">{inv_remark}</textarea></td>'+
    '</tr>'+
    '</table>',
    '</div>'
);


var corp_government_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_govermt">',
    '<tr>',
    '<th class="table_header" colspan="4">政府部门信息</th>',
    '</tr>',
    '<tr>',
    '<th>单位名称</th>',
    '<td>{gov_domain}</td>',
    '<th>处/室</th>',
    '<td>{gov_office}</td>',
    '</tr>',
    '<tr>',
    '<th>职能介绍</th>',
    '<td colspan="3">{gov_desc}</td>',
    '</tr>',
    '<tr>',
    '<th>姓名</th>',
    '<td>{gov_contact}</td>',
    '<th>证件类型</th>',
    '<td>{gov_doctype}</td>',
    '</tr>',
    '<tr>',
    '<th>职务</th>',
    '<td>{gov_psotion}</td>',
    '<th>证件号码</th>',
    '<td>{gov_docnum}</td>',
    '</tr>',
    '<tr>',
    '<th>手机</th>',
    '<td>{gov_phone}</td>',
    '<th>传真</th>',
    '<td>{gov_fax}</td>',
    '</tr>',
    '<tr>',
    '<th>E-mail</th>',
    '<td>{gov_email}</td>',
    '<th>QQ</th>',
    '<td>{gov_qq}</td>',
    '</tr>',
    '<tr>'+
    '<th>微信号</th>'+
    '<td>{gov_webchat}</td>'+
    '<th>固话</th>',
    '<td>{gov_tel}</td>'+
    '</tr>'+
    '<tr>'+
    '<th>备注</th>'+
    '<td colspan="3"><textarea disabled id="gov_remark" name="gov_remark"  type="text" value="{gov_remark}">{gov_remark}</textarea></td>'+
    '</tr>'+
    '</table>',
    '</div>'
);


var corp_refinancing_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_demand_rz">',
    '<tr>',
    '<th class="table_header" colspan="4">融资需求</th>',
    '</tr>',
    '<tr>',
    '<th>融资金额</th>',
    '<td>{refi_amounts}</td>',
    '<th>融资用途</th>',
    '<td>{refi_use}</td>',
    '</tr>',
    '<tr>',
    '<th>股份融资/债券融资</th>',
    '<td>{refi_financ}</td>',
    '<th>偿付保障</th>',
    '<td>{refi_security}</td>',
    '</tr>',
    '<tr>',
    '<th>可接受成本（%/年）</th>',
    '<td>{refi_acc_cost}</td>',
    '<th>融资期限</th>',
    '<td>{refi_deadline}</td>',
    '</tr>',
    '<tr>'+
    '<th>融资用途详细说明</th>'+
    '<td colspan="3"><textarea disabled id="refi_desc" name="refi_desc"  type="text" value="{refi_desc}">{refi_desc}</textarea></td>'+
    '</tr>'+
    '</table>',
    '</div>'
);


var corp_retrain_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_demand_px">',
    '<tr>',
    '<th class="table_header" colspan="4">培训需求</th>',
    '</tr>',
    '<tr>',
    '<th>培训方式</th>',
    '<td colspan="3">{retra_mode}</td>',
    '</tr>',
    '<tr>',
    '<th>有效时间</th>',
    '<td>{retra_dt}</td>',
    '<th>可接受成本</th>',
    '<td>{retra_acc_cost}</td>',
    '</tr>',
    '<tr>',
    '<th>培训内容</th>',
    '<td colspan="3"><textarea disabled id="retra_content" name="retra_content"  type="text" value="{retra_content}">{retra_content}</textarea></td>'+
    '</tr>',
    '<tr>'+
    '<th>详细要求</th>'+
    '<td colspan="3"><textarea disabled id="retra_requests" name="retra_requests"  type="text" value="{retra_requests}">{retra_requests}</textarea></td>'+
    '</tr>'+
    '</table>',
    '</div>'
);


var corp_rehr_tpl = new Ext.XTemplate(
    '<div class="wrap_center">',
    '<table class="enter_table" id="table_demand_rl">',
    '<tr>',
    '<th class="table_header" colspan="4">人力资源需求</th>',
    '</tr>',
    '<tr>',
    '<th>需求职位</th>',
    '<td>{rehr_post}</td>',
    '<th>职位人数</th>',
    '<td>{rehr_num}</td>',
    '</tr>',
    '<tr>',
    '<th>职位薪金</th>',
    '<td>{rehr_salary}</td>',
    '<th>性别要求</th>',
    '<td>{rehr_sex_req}</td>',
    '</tr>',
    '<tr>'+
    '<th>年龄要求</th>',
    '<td>{rehr_age_req}</td>',
    '<th>经验要求</th>',
    '<td>{rehr_requests}</td>',
    '</tr>'+
    '</table>',
     '</div>'
);