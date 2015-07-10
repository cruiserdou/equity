Ext.define('App.view.enterprise.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprisef_grid',
    store: 'corp_all',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise',
    listeners: {

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
                        corp_edit_con_tpl.append('corp_edit',record.data);
                        //setup();preselect('甘肃省');
                        setup_cl();preselect_cl('农、林、牧、渔业');
                        setup_zjh();type_zjh('农、林、牧、渔业');
                        setup_edit();preselect_edit(record.get("province"));

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
                        id: 'corp_edit_panel',
                        html: '<div id="corp_edit">' +
                        '</div>'
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        id: 'corp_edit_corp_panel',
                        html: '<div id="corp_edit_corp_div">' +
                        '<div style="position: fixed; top: 7em; right: 6em">'+
                        '<a href="#"   style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_edit()">关闭</a>'+
                        '<a href="#"   style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="corp_export({id})">导出</a>'+


                        '<ul>'+
                        '<li><a href="#table_corp_base" style="font-size:18px;">基本信息</a></li>' +
                        '<li><a href="#table_corp_sh"  style="font-size:18px;">股东名册</a></li>' +
                        '<li><a href="#table_corp_link"  style="font-size:18px;">法定代表人</a></li>' +
                        '<li><a href="#table_corp_acount"  style="font-size:18px;">行业分类</a></li>' +
                        '<li><a href="#table_corp_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                        '<li><a href="#table_corp_ocompay"  style="font-size:18px;">企业维护信息</a></li>' +
                        '<li><a href="#table_corp_assets_finance"  style="font-size:18px;">企业财务信息</a></li>' +
                        '<li><a href="#table_corp_service"  style="font-size:18px;">服务机构</a></li>' +
                        '<li><a href="#table_corp_investors"  style="font-size:18px;">投资人</a></li>' +
                        '<li><a href="#table_corp_govermt"  style="font-size:18px;">政府部门</a></li>' +
                        '<li><a href="#table_corp_demand_rz"  style="font-size:18px;">融资需求</a></li>' +
                        '<li><a href="#table_corp_demand_px"  style="font-size:18px;">培训需求</a></li>' +
                        '<li><a href="#table_corp_demand_rl"  style="font-size:18px;">人力资源需求</a></li>' +
                        '</ul>' +
                        '</div>'+

                        //{
                        //    checktype_demand_rl: function (demand_rl) {
                        //        return demand_rl == true;
                        //    },
                        //    checktype_demand_px: function (demand_px) {
                        //        return demand_px == true;
                        //    },
                        //    checktype_demand_rz: function (demand_rz) {
                        //        return demand_rz == true;
                        //    },
                        //    checktype_type_server: function (type_server) {
                        //        return type_server == true;
                        //    },
                        //    checktype_type_investors: function (type_investors) {
                        //        return type_investors == true;
                        //    },
                        //    checktype_type_govermt: function (type_govermt) {
                        //        return type_govermt == true;
                        //    }
                        //},
                        '</div>'
                    }
                ]
            });

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
            {text: '企业名称', width: 120, dataIndex: 'name'},
            {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
            {text: '单位类别', width: 120, dataIndex: 'unit'},
            {text: '法定代表人', width: 120, dataIndex: 'legrep'},
            {text: '省', width: 120, dataIndex: 'province', hidden: true},
            {text: '市', width: 120, dataIndex: 'city'},
            {text: '县',  width: 120, dataIndex: 'county', hidden: true},
            {text: '公司简称', width: 120, dataIndex: 'nos', hidden: true},
            {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
            {text: '企业性质', width: 120, dataIndex: 'nature', hidden: true},
            {text: '注册资本（万元）', width: 120, dataIndex: 'regcap'},
            {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
            {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
            {text: '注册日期', width: 120, dataIndex: 'regdt'},
            {text: '挂牌区域', width: 120, dataIndex: 'list_area', hidden: true},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode', hidden: true},
            {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice', hidden: true},
            {text: '挂牌日期', width: 120, dataIndex: 'listdt', hidden: true},
            {text: '推荐单位', width: 120, dataIndex: 'channels', hidden: true},
            {text: '微信号', width: 120, dataIndex: 'webchat', hidden: true},
            {text: '员工人数', width: 120, dataIndex: 'staffnum'},
            {text: '登记机关', width: 120, dataIndex: 'regist_organ'},
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
            {text: '行业一级分类', width: 120, dataIndex: 'indclass1'},
            {text: '行业二级分类', width: 120, dataIndex: 'indclass2', hidden: true},
            {text: '行业三级分类', width: 120, dataIndex: 'indclass3', hidden: true},
            {text: '行业四级分类', width: 120, dataIndex: 'indclass4', hidden: true},
            {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type1'},
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
            {text: '时间(初始)', width: 120, dataIndex: 'start_time', hidden: true},
            {text: '时间end', width: 120, dataIndex: 'end_time', hidden: true},
            {text: '货币资金(初始)', width: 120, dataIndex: 'st_money_fund', hidden: true},
            {text: '货币资金end', width: 120, dataIndex: 'end_money_fund', hidden: true},
            {text: '交易性金融资产(初始)', width: 120, dataIndex: 'st_jyxjr_assets', hidden: true},
            {text: '交易性金融资产end', width: 120, dataIndex: 'end_jyxjr_assets', hidden: true},
            {text: '应收票据(初始)', width: 120, dataIndex: 'st_ys_bill', hidden: true},
            {text: '应收票据end', width: 120, dataIndex: 'end_ys_bill', hidden: true},
            {text: '应收账款(初始)', width: 120, dataIndex: 'st_ys_account', hidden: true},
            {text: '应收账款end', width: 120, dataIndex: 'end_ys_account', hidden: true},
            {text: '预付款项(初始)', width: 120, dataIndex: 'st_yf_money', hidden: true},
            {text: '预付款项end', width: 120, dataIndex: 'end_yf_money', hidden: true},
            {text: '应收利息(初始)', width: 120, dataIndex: 'st_ys_interest', hidden: true},
            {text: '应收利息end', width: 120, dataIndex: 'end_ys_interest', hidden: true},
            {text: '应收股利(初始)', width: 120, dataIndex: 'st_ys_dividends', hidden: true},
            {text: '应收股利end', width: 120, dataIndex: 'end_ys_dividends', hidden: true},
            {text: '其他应收款(初始)', width: 120, dataIndex: 'st_other_ys_money', hidden: true},
            {text: '其他应收款end',width: 120, dataIndex: 'end_other_ys_money', hidden: true},
            {text: '存货(初始)', width: 120, dataIndex: 'st_inventory', hidden: true},
            {text: '存货end', width: 120, dataIndex: 'end_inventory', hidden: true},
            {text: '一年内到期的非流动资产(初始)', width: 120, dataIndex: 'st_ynndq_no_assets', hidden: true},
            {text: '一年内到期的非流动资产end', width: 120, dataIndex: 'end_ynndq_no_assets', hidden: true},
            {text: '其他流动资产(初始)', width: 120, dataIndex: 'st_other_assets', hidden: true},
            {text: '其他流动资产end',width: 120, dataIndex: 'end_other_assets', hidden: true},
            {text: '流动资产合计(初始)', width: 120, dataIndex: 'st_hj_assets', hidden: true},
            {text: '流动资产合计end', width: 120, dataIndex: 'end_hj_assets', hidden: true},
            {text: '可供出售金融资产(初始)',width: 120, dataIndex: 'st_kgcs_assets', hidden: true},
            {text: '可供出售金融资产end', width: 120, dataIndex: 'end_kgcs_assets', hidden: true},
            {text: '持有至到期投资(初始)',width: 120, dataIndex: 'st_cyzdq_investment', hidden: true},
            {text: '持有至到期投资end',width: 120, dataIndex: 'end_cyzdq_investment', hidden: true},
            {text: '长期应收款(初始)',width: 120, dataIndex: 'st_long_ys_money', hidden: true},
            {text: '长期应收款end', width: 120, dataIndex: 'end_long_ys_money', hidden: true},
            {text: '长期股权投资(初始)',width: 120, dataIndex: 'st_long_gq_investment', hidden: true},
            {text: '长期股权投资end',width: 120, dataIndex: 'end_long_gq_investment', hidden: true},
            {text: '投资性房地产(初始)', width: 120, dataIndex: 'st_invest_house', hidden: true},
            {text: '投资性房地产end',width: 120, dataIndex: 'end_invest_house', hidden: true},
            {text: '固定资产(初始)', width: 120, dataIndex: 'st_gd_assets'},
            {text: '固定资产end', width: 120, dataIndex: 'end_gd_assets', hidden: true},
            {text: '减：累计折旧(初始)',width: 120, dataIndex: 'st_accu_deprec', hidden: true},
            {text: '减：累计折旧end', width: 120, dataIndex: 'end_accu_deprec', hidden: true},
            {text: '固定资产净值(初始)', width: 120, dataIndex: 'st_gd_assets_jz', hidden: true},
            {text: '固定资产净值end',width: 120, dataIndex: 'end_gd_assets_jz', hidden: true},
            {text: '减：固定资产减值准备(初始)',width: 120, dataIndex: 'st_gd_assets_ready', hidden: true},
            {text: '减：固定资产减值准备end', width: 120, dataIndex: 'end_gd_assets_ready', hidden: true},
            {text: '固定资产净额(初始)', width: 120, dataIndex: 'st_gd_assets_je', hidden: true},
            {text: '固定资产净额end',width: 120, dataIndex: 'end_gd_assets_je', hidden: true},
            {text: '在建工程(初始)', width: 120, dataIndex: 'st_now_project', hidden: true},
            {text: '在建工程end', width: 120, dataIndex: 'end_now_project', hidden: true},
            {text: '工程物资(初始)', width: 120, dataIndex: 'st_project_material', hidden: true},
            {text: '工程物资end',width: 120, dataIndex: 'end_project_material', hidden: true},
            {text: '固定资产清理(初始)', width: 120, dataIndex: 'st_gd_assets_ql', hidden: true},
            {text: '固定资产清理end',width: 120, dataIndex: 'end_gd_assets_ql', hidden: true},
            {text: '生产性生物投资(初始)',width: 120, dataIndex: 'st_scx_investment', hidden: true},
            {text: '生产性生物投资end',width: 120, dataIndex: 'end_scx_investment', hidden: true},
            {text: '无形资产(初始)', width: 120, dataIndex: 'st_wx_assets', hidden: true},
            {text: '无形资产end', width: 120, dataIndex: 'end_wx_assets', hidden: true},
            {text: '商誉(初始)', width: 120, dataIndex: 'st_goodwill', hidden: true},
            {text: '商誉end', width: 120, dataIndex: 'end_goodwill', hidden: true},
            {text: '长期待摊费用(初始)', width: 120, dataIndex: 'st_cqdt_cost', hidden: true},
            {text: '长期待摊费用end', width: 120, dataIndex: 'end_cqdt_cost', hidden: true},
            {text: '递延所得税资产(初始)', width: 120, dataIndex: 'st_dysds_assets', hidden: true},
            {text: '递延所得税资产end', width: 120, dataIndex: 'end_dysds_assets', hidden: true},
            {text: '其他非流动资产(初始)',width: 120, dataIndex: 'st_other_no_assets', hidden: true},
            {text: '其他非流动资产end',width: 120, dataIndex: 'end_other_no_assets', hidden: true},
            {text: '非流动资产合计(初始)', width: 120, dataIndex: 'st_hj_no_asset', hidden: true},
            {text: '非流动资产合计end', width: 120, dataIndex: 'end_hj_no_asset', hidden: true},
            {text: '资产总计(初始)', width: 120, dataIndex: 'st_hj_total_asset'},
            {text: '资产总计end', width: 120, dataIndex: 'end_hj_total_asset', hidden: true},
            {text: '短期借款(初始)', width: 120, dataIndex: 'st_short_borrow', hidden: true},
            {text: '短期借款end', width: 120, dataIndex: 'end_short_borrow', hidden: true},
            {text: '交易性金融负债(初始)',width: 120, dataIndex: 'st_jyx_finance_fz', hidden: true},
            {text: '交易性金融负债end',width: 120, dataIndex: 'end_jyx_finance_fz', hidden: true},
            {text: '应付票据(初始)', width: 120, dataIndex: 'st_yf_bill', hidden: true},
            {text: '应付票据end', width: 120, dataIndex: 'end_yf_bill', hidden: true},
            {text: '应付账款(初始)', width: 120, dataIndex: 'st_yf_account', hidden: true},
            {text: '应付账款end', width: 120, dataIndex: 'end_yf_account', hidden: true},
            {text: '预收款项(初始)', width: 120, dataIndex: 'st_ys_money', hidden: true},
            {text: '预收款项end', width: 120, dataIndex: 'end_ys_money', hidden: true},
            {text: '应付职工薪酬(初始)', width: 120, dataIndex: 'st_yf_staff_pay', hidden: true},
            {text: '应付职工薪酬end',width: 120, dataIndex: 'end_yf_staff_pay', hidden: true},
            {text: '应交税费(初始)', width: 120, dataIndex: 'st_yj_tax', hidden: true},
            {text: '应交税费end', width: 120, dataIndex: 'end_yj_tax', hidden: true},
            {text: '应付利息(初始)', width: 120, dataIndex: 'st_yf_interest', hidden: true},
            {text: '应付利息end', width: 120, dataIndex: 'end_yf_interest', hidden: true},
            {text: '应付股利(初始)', width: 120, dataIndex: 'st_yf_dividends', hidden: true},
            {text: '应付股利end', width: 120, dataIndex: 'end_yf_dividends', hidden: true},
            {text: '其他应付款(初始)', width: 120, dataIndex: 'st_other_yf_money', hidden: true},
            {text: '其他应付款end',width: 120, dataIndex: 'end_other_yf_money', hidden: true},
            {text: '一年内到期的非流动负债(初始)',width: 120, dataIndex: 'st_ynndq_no_fz', hidden: true},
            {text: '一年内到期的非流动负债end', width: 120, dataIndex: 'end_ynndq_no_fz', hidden: true},
            {text: '其他流动负债(初始)', width: 120, dataIndex: 'st_other_fz', hidden: true},
            {text: '其他流动负债end', width: 120, dataIndex: 'end_other_fz', hidden: true},
            {text: '流动负债合计(初始)', width: 120, dataIndex: 'st_hj_fz', hidden: true},
            {text: '流动负债合计end', width: 120, dataIndex: 'end_hj_fz', hidden: true},
            {text: '长期借款(初始)', width: 120, dataIndex: 'st_long_borrow', hidden: true},
            {text: '长期借款end', width: 120, dataIndex: 'end_long_borrow', hidden: true},
            {text: '应付债券(初始)', width: 120, dataIndex: 'st_yf_bond', hidden: true},
            {text: '应付债券end', width: 120, dataIndex: 'end_yf_bond', hidden: true},
            {text: '长期应付款(初始)',width: 120, dataIndex: 'st_long_yf_money', hidden: true},
            {text: '长期应付款end', width: 120, dataIndex: 'end_long_yf_money', hidden: true},
            {text: '专项应付款(初始)', width: 120, dataIndex: 'st_zx_yf_money', hidden: true},
            {text: '专项应付款end', width: 120, dataIndex: 'end_zx_yf_money', hidden: true},
            {text: '预计负债(初始)', width: 120, dataIndex: 'st_yj_fz', hidden: true},
            {text: '预计负债end', width: 120, dataIndex: 'end_yj_fz', hidden: true},
            {text: '递延所得税负债(初始)', width: 120, dataIndex: 'st_dysds_fz', hidden: true},
            {text: '递延所得税负债end', width: 120, dataIndex: 'end_dysds_fz', hidden: true},
            {text: '其他非流动负债(初始)', width: 120, dataIndex: 'st_other_no_fz', hidden: true},
            {text: '其他非流动负债end', width: 120, dataIndex: 'end_other_no_fz', hidden: true},
            {text: '非流动负债合计(初始)', width: 120, dataIndex: 'st_hj_no_fz', hidden: true},
            {text: '非流动负债合计end', width: 120, dataIndex: 'end_hj_no_fz', hidden: true},
            {text: '负债合计(初始)', width: 120, dataIndex: 'st_hj_total_fz', hidden: true},
            {text: '负债合计end', width: 120, dataIndex: 'end_hj_total_fz', hidden: true},
            {text: '实收资本（或股本）(初始)',width: 120, dataIndex: 'st_paid_assets'},
            {text: '实收资本（或股本）end',width: 120, dataIndex: 'end_paid_assets', hidden: true},
            {text: '资本公积(初始)', width: 120, dataIndex: 'st_zb_reserve', hidden: true},
            {text: '资本公积end', width: 120, dataIndex: 'end_zb_reserve', hidden: true},
            {text: '减：库存股(初始)', width: 120, dataIndex: 'st_kc_stock', hidden: true},
            {text: '减：库存股end', width: 120, dataIndex: 'end_kc_stock', hidden: true},
            {text: '专项储备(初始)', width: 120, dataIndex: 'st_zx_reserve', hidden: true},
            {text: '专项储备end', width: 120, dataIndex: 'end_zx_reserve', hidden: true},
            {text: '盈余公积(初始)', width: 120, dataIndex: 'st_yy_reserve', hidden: true},
            {text: '盈余公积end', width: 120, dataIndex: 'end_yy_reserve', hidden: true},
            {text: '未分配利润(初始)', width: 120, dataIndex: 'st_wfp_profit', hidden: true},
            {text: '未分配利润end', width: 120, dataIndex: 'end_wfp_profit', hidden: true},
            {text: '所有者权益合计(初始)',width: 120, dataIndex: 'st_hj_owner_right', hidden: true},
            {text: '所有者权益合计end',width: 120, dataIndex: 'end_hj_owner_right', hidden: true},
            {text: '负债和所有者权益合计(初始)', width: 120, dataIndex: 'st_hj_fz_owner_right', hidden: true},
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

function addRow_edit(){
    var oTable = document.getElementById("table_corp_sh");
    var tBodies = oTable.tBodies;
    var tbody = tBodies[0];
    var tr = tbody.insertRow(tbody.rows.length);
    var td_1 = tr.insertCell(0);
    td_1.innerHTML = "";
    var td_2 = tr.insertCell(1);
    td_2.innerHTML = "";
    var td_3 = tr.insertCell(2);
    td_3.innerHTML = "";
    var td_4 = tr.insertCell(3);
    td_4.innerHTML = "";
    var td_5 = tr.insertCell(4);
    td_5.innerHTML = "";
    var td_6 = tr.insertCell(5);
    td_6.innerHTML = "";
    var td_7 = tr.insertCell(6);
    td_7.innerHTML = "";
    var td_8 = tr.insertCell(7);
    td_8.innerHTML = "";
    var td_9 = tr.insertCell(8);
    td_9.innerHTML = "";
    var td_10 = tr.insertCell(9);
    td_10.innerHTML = "";
    var td_11 = tr.insertCell(10);
    td_11.innerHTML = "";
    var td_12 = tr.insertCell(11);
    td_12.innerHTML = "";
    var td_13 = tr.insertCell(12);
    td_13.innerHTML = "";
    var td_14 = tr.insertCell(13);
    td_14.innerHTML = "";
    var td_15 = tr.insertCell(14);
    td_15.innerHTML = "";
    var td_16 = tr.insertCell(15);
    td_16.innerHTML = "<input type='button' onClick='delRow_edit();' style='font-size:16px;' value='-'/>";
}


function delRow_edit(){
    alert("33");
}


