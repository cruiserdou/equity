Ext.define('App.view.refinancing.refinancing_query.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.refinancing_queryf_grid',
        store: 'corp_refinancing_all',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_refinancing_query',

        listeners: {
            itemclick: function (this_, record_) {
                var store = Ext.getCmp('grid_refinancing_query_change').getStore();
                store.load({
                    params: {
                        refi_id: record_.get('refi_id')
                    }
                })
            },
            'itemdblclick': function (view, record, item, index, e) {

                //呈现组件
                var mypanel = new Ext.form.FormPanel({
                    id: "mypanel",
                    width: 820,
                    frame: false,
                    height: 600,
                    border: false,
                    bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                    listeners: {
                        afterrender: function (_this){
                            corp_tpl.append('refinancing_query_corp',record.data);
                            corp_contact_tpl.append('refinancing_query_corp_contact',record.data);
                            corp_shareholder_tpl.append('refinancing_query_corp_shareholder',record.data);
                            corp_acount_tpl.append('refinancing_query_corp_acount',record.data);
                            corp_maintain_tpl.append('refinancing_query_corp_maintain',record.data);
                            corp_finance_tpl.append('refinancing_query_corp_finance',record.data); 
                            corp_refinancing_tpl.append('refinancing_query_corp_refinancing',record.data); 

                        }
                    },
                    autoScroll: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'start'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_panel',
                            html: '<div id="refinancing_query_corp">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_shareholder_panel',
                            html: '<div id="refinancing_query_corp_shareholder">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_contact_panel',
                            html: '<div id="refinancing_query_corp_contact">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_acount_panel',
                            html: '<div id="refinancing_query_corp_acount">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_maintain_panel',
                            html: '<div id="refinancing_query_corp_maintain">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_finance_panel',
                            html: '<div id="refinancing_query_corp_finance">' +
                            '</div>'
                        },
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_finance_panel',
                            html: '<div id="refinancing_query_corp_finance">' +
                            '</div>'
                        }, 
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'corp_refinancing_panel',
                            html: '<div id="refinancing_query_corp_refinancing">' +
                            '</div>'
                        }, 
                        {
                            xtype: 'panel',
                            border: false,
                            id: 'refinancing_query_corp_panel',
                            html: '<div id="refinancing_query_corp_div">' +
                            '<div style="position: fixed; top: 7em; right: 6em">'+
                            '<a href="#"   style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="refinancing_query_close()">关闭</a>'+

                            '<a  href="print_enterprise?id={id}" target="_blank" style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#1d13f2, #1e7fe1);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);">打印</a>'+

                            '<a  onclick="export_enterprise();"  href="#" style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#c5f21d, #50e11a);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);">导出</a>'+

                            '<ul>'+
                            '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                            '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                            '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                            '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                            '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                            '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                            '<li><a href="#table_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' + 
                            '<li><a href="#table_demand_rz"  style="font-size:18px;">融资需求</a></li>' + 
                            '</ul>' +
                            '</div>'
                        }
                    ]
                });
                
                var editWindow = new Ext.Window({
                    layout: 'fit',
                    id: 'refinancing_query_id',
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
                {text: '单位类别', width: 120, dataIndex: 'unit', hidden: true},
                {text: '法定代表人', width: 120, dataIndex: 'legrep', hidden: true},
                {text: '省', width: 120, dataIndex: 'province', hidden: true},
                {text: '市', width: 120, dataIndex: 'city', hidden: true},
                {text: '县',  width: 120, dataIndex: 'county', hidden: true},
                {text: '公司简称', width: 120, dataIndex: 'nos'},
                {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
                {text: '企业性质', width: 120, dataIndex: 'nature', hidden: true},
                {text: '注册资本（万元）', width: 120, dataIndex: 'regcap', hidden: true},
                {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
                {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
                {text: '注册日期', width: 120, dataIndex: 'regdt', hidden: true},
                {text: '挂牌区域', width: 120, dataIndex: 'list_area', hidden: true},
                {text: '挂牌代码', width: 120, dataIndex: 'listcode', hidden: true},
                {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice', hidden: true},
                {text: '挂牌日期', width: 120, dataIndex: 'listdt', hidden: true},
                {text: '推荐单位', width: 120, dataIndex: 'channels', hidden: true},
                {text: '微信号', width: 120, dataIndex: 'webchat', hidden: true},
                {text: '员工人数', width: 120, dataIndex: 'staffnum', hidden: true},
                {text: '登记机关', width: 120, dataIndex: 'regist_organ', hidden: true},
                {text: '注册地址', width: 120, dataIndex: 'regaddr', hidden: true},
                {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
                {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
                {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
                {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
                {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
                {text: '备注', width: 120, dataIndex: 'remark', hidden: true},
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
                {text: '融资需求ID', width: 120, dataIndex: 'refi_id', hidden: true},
                {text: '企业ID', width: 120, dataIndex: 'refi_corp_id', hidden: true},
                {text: '融资金额', width: 120, dataIndex: 'refi_amounts'},
                {text: '融资用途', width: 120, dataIndex: 'refi_use'},
                {text: '股份融资/债券融资', width: 120, dataIndex: 'refi_financ'},
                {text: '偿付保障', width: 120, dataIndex: 'refi_security'},
                {text: '可接受成本（%/年）',width: 120, dataIndex: 'refi_acc_cost'},
                {text: '融资期限', width: 120, dataIndex: 'refi_deadline'},
                {text: '融资用途详细说明', flex: 1, dataIndex: 'refi_desc'},
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
                store: 'corp_refinancing_all',
                    displayInfo: true,
                    displayMsg: '第 {0} 到 {1} 条数据, 共{2}条',
                    emptyMsg: '无数据'
                }),
                columnLines: true,
                enableLocking: true
            });

            this.callParent(arguments);
        }
    });

function refinancing_query_close() {
    Ext.getCmp('refinancing_query_id').close();

}
