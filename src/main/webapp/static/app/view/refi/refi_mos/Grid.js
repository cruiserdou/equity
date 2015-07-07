var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_mos.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refi_mosf_grid',
    store: 'refi_mos',
    selModel: sm,
    id :'grid_refi_mos',

    initComponent: function () {

        this.columns = [

            {text: '融资服务ID',  width: 220, dataIndex: 'mos_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mos_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '融资产品',  width: 200, dataIndex: 'mos_cots'},
            {text: '融资金额', width: 200, dataIndex: 'mos_amounts'},
            {text: '项目经理', width: 200, dataIndex: 'mos_mop'},
            {text: '融资进度',flex: 1, dataIndex: 'mos_rop'}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'refi_mos',
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