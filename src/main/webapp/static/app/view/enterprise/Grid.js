
Ext.define('App.view.enterprise.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprisef_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_enterprise',
    listeners: {
        itemclick: function (this_, record_) {
            var depts_panel = Ext.getCmp('enterprisef_info');
            depts_panel.tpl.overwrite(depts_panel.body, record_.data);
        }
    },
    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '发送人', width: 80, dataIndex: 'user_id',hidden:true},
            {text: '状态', width: 100, dataIndex: 'stat'},
            {text: '类型', width: 100, dataIndex: 'type'},
            {text: '接收人', width: 100, dataIndex: 'ruser_id'},
            {text: '内容', width: 100, dataIndex: 'content'},
            {text: '期限', width: 100, dataIndex: 'deadline'},
            {text: '发送时间', width: 200, dataIndex: 'rtdate'},
            {text: '备注', flex: 1, dataIndex: 'remark'}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'enterprise',
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