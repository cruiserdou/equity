
Ext.define('App.view.enterprise_query.corp_gd_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.corp_shareholder_grid',
    store: 'corp_shareholder',
    id: 'grid_corp_shareholders',
    columnLines: true,
    enableLocking: true,
    //selModel: sm,

    initComponent: function () {
        this.columns = [
            {text: '企业股东ID',  width: 120, dataIndex: 'gd_id', hidden: true},
            {text: '企业ID',  width: 120, dataIndex: 'gd_corp_id', hidden: true},
            {text: '股东类型',  width: 120, dataIndex: 'gd_shtype'},
            {text: '股东',  width: 120, dataIndex: 'gd_shname'},
            {text: '证照/证件类型',  width: 120, dataIndex: 'gd_shdoctype'},
            {text: '证照/证件号码', width: 120, dataIndex: 'gd_shdocnum'},
            {text: '持股数量',  width: 120, dataIndex: 'gd_shareholdnum'},
            {text: '流通数量',  width: 120, dataIndex: 'gd_currencynum'},
            {text: '冻结数量',  width: 120, dataIndex: 'gd_freezenum'},
            {text: '职务',  width: 120, dataIndex: 'gd_psotion'},
            {text: '证件类型',  width: 120, dataIndex: 'gd_doctype'},
            {text: '证件号码',  width: 120, dataIndex: 'gd_docnum'},
            {text: '手机号码',  width: 120, dataIndex: 'gd_phone'},
            {text: '传真', width: 120, dataIndex: 'gd_fax'},
            {text: 'E-mail',  width: 120, dataIndex: 'gd_email'},
            {text: 'QQ',  width: 120, dataIndex: 'gd_qq'},
            {text: '个人微信号',  width: 120, dataIndex: 'gd_webchat'},
            {text: '固定电话',  width: 120, dataIndex: 'gd_tel'},
            {text: '备注',  width: 120, dataIndex: 'gd_remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };

        //Ext.apply(this, {
        //    bbar: Ext.create('Ext.PagingToolbar', {
        //        store: 'corp_shareholder',
        //        displayInfo: true,
        //        displayMsg: '第 {0} 到 {1} 条数据, 共{2}条',
        //        emptyMsg: '无数据'
        //    }),
        //    columnLines: true,
        //    enableLocking: true
        //});


        this.callParent(arguments);
    }
});