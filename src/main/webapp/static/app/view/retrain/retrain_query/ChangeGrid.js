
Ext.define('App.view.retrain.retrain_query.ChangeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.retrain_query_change_grid',
    columnLines: true,
    enableLocking: true,
    animCollapse: true,
    store: 'corp_retrain_change',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_retrain_query_change',

    initComponent: function () {
        this.columns = [
            {text: 'ID', width: 60, dataIndex: 'id',hidden:true},
            {text: '数据ID', width: 60, dataIndex: 'retra_id',hidden:true},
            {text: '企业ID', width: 60, dataIndex: 'retra_corp_id',hidden:true},
            {text: '字段', width: 180, dataIndex: 'field',hidden:true},
            {text: '变更内容', width: 250, dataIndex: 'field_name'},
            {text: '变更前内容', width: 300, dataIndex: 'c_before'},
            {text: '变更后内容', width: 300, dataIndex: 'c_after'},
            {text: '变更人',  flex: 1, dataIndex: 'changer_id',hidden:true}
        ];
        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_retrain_change',
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

