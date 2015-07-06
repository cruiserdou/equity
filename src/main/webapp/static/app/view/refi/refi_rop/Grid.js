var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_rop.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refi_ropf_grid',
    store: 'refi_rop',
    selModel: sm,
    id :'grid_refi_rop',

    initComponent: function () {

        this.columns = [


            {text: '融资进度ID', width: 220, dataIndex: 'rop_id',hidden:true},
            {text: '融资服务ID',  width: 220, dataIndex: 'rop_mos_id',hidden:true},
            {text: '事项',  width: 220, dataIndex: 'rop_items'},
            {text: '具体内容', width: 220, dataIndex: 'rop_desc'},
            {text: '完成时间',  width: 220, dataIndex: 'rop_endt'},
            {text: '需解决问题', width: 220, dataIndex: 'rop_crb'},
            {text: '是否完成', width: 220, dataIndex: 'rop_stat'},
            {text: '备注', flex: 1, dataIndex: 'rop_remark'}
];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'refi_rop',
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