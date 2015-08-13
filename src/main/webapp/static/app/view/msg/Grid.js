
Ext.define('App.view.msg.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.msgf_grid',
    store: 'msg',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_msg',
    //listeners: {
    //    itemclick: function (this_, record_) {
    //        var depts_panel = Ext.getCmp('msgf_info');
    //        depts_panel.tpl.overwrite(depts_panel.body, record_.data);
    //    }
    //},
    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '状态', width: 100, dataIndex: 'stat'},
            {text: '接收人', width: 100, dataIndex: 'ruser_id',hidden:true},
            {text: '发送人', width: 80, dataIndex: 'user_id',hidden:true},
            {text: '发送人', width: 120, dataIndex: 'user_name'},
            {text: '内容', flex: 1, dataIndex: 'content'},
            {text: '期限', width: 100, dataIndex: 'deadline',hidden:true},
            {text: '发送时间', width: 200, dataIndex: 'rtdate'},
            {text: '类型', width: 100, dataIndex: 'type'},
            {text: '备注', width: 100, dataIndex: 'remark',hidden:true}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'msg',
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