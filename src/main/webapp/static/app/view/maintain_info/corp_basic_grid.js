
Ext.define('App.view.maintain_info.corp_basic_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.corp_basic_gridf',
    store: 'corp',
    id: 'grid_corp_basic',
    columnLines: true,
    enableLocking: true,
    listeners: {
        itemdblclick: function(this_, record_){
            Ext.getCmp('corp_name_id').setValue(record_.data["name"]);
            Ext.getCmp('corp_id').setValue(record_.data["id"]);

            Ext.getCmp('corp_listcode_id').setValue(record_.data["listcode"]);
            Ext.getCmp('corp_province_id').setValue(record_.data["province"]);
            Ext.getCmp('corp_city_id').setValue(record_.data["city"]);
            Ext.getCmp('corp_county_id').setValue(record_.data["county"]);

            Ext.getCmp('corp_find_window').close();

        }
        //afterrender: function(){
        //    Ext.getCmp('grid_corp_basic').getStore().load();
        //}
    },
    initComponent: function () {
        this.columns = [
            {text: '企业ID',  width: 120, dataIndex: 'id', hidden: true},
            {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
            {text: '企业名称', width: 120, dataIndex: 'name'},
            {text: '单位类别', width: 120, dataIndex: 'unit'},
            {text: '法定代表人', width: 120, dataIndex: 'legrep'},
            {text: '省', width: 120, dataIndex: 'province', hidden: true},
            {text: '市', width: 120, dataIndex: 'city', hidden: true},
            {text: '县',  width: 120, dataIndex: 'county', hidden: true},
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
        ];

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp',
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