
Ext.define('App.view.enterprise_query.ChangeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_change_grid',
    columnLines: true,
    enableLocking: true,
    animCollapse: true,
    store: 'change',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'enterprise_change_grid_id',

    initComponent: function () {
        this.columns = [
            {text: 'ID', width: 60, dataIndex: 'id',hidden:true},
            {text: '数据ID', width: 60, dataIndex: 'enterprise_id',hidden:true},
            {text: '变更内容', width: 80, dataIndex: 'field'},
            {text: '变更前内容', width: 180, dataIndex: 'c_before'},
            {text: '变更后内容', width: 180, dataIndex: 'c_after'},
            {text: '变更时间', width: 80, dataIndex: 'rtdate', renderer: Ext.util.Format.dateRenderer('Y-m-d')},
            {text: '变更人', width: 100, dataIndex: 'user_id'}

        ];
        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'change',
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

