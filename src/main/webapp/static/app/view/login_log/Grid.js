
Ext.define('App.view.login_log.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.login_logf_grid',
    store: 'login_log',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_login_log',

    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'login_log_id',hidden:true},
            {text: '登录人', width: 200, dataIndex: 'user_id'},
            {text: 'IP', width: 200, dataIndex: 'ip'},
            {text: '登录日期',  flex: 1, dataIndex: 'login_datetime'}

        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'login_log',
                displayInfo: true,
                displaylogin_log: '第 {0} 到 {1} 条数据, 共{2}条',
                emptylogin_log: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });

        this.callParent(arguments);
    }
});