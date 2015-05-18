var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.users.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usersf_grid',
    store: 'syj_users',
    selModel: sm,
    id :'grid_users',
    listeners: {
        itemclick: function (this_, record_) {
            var users_panel = Ext.getCmp('users_info');
            users_panel.tpl.overwrite(users_panel.body, record_.data);
        }
    },
    initComponent: function () {
        this.columns = [
            {text: '用户ID', width: 80, dataIndex: 'id', hidden:true},
            {text: '员工编号', width: 80, dataIndex: 'nos'},
            {text: '员工姓名', width: 90, dataIndex: 'name'},
            {text: '性别', width: 80, dataIndex: 'sex'},
            {text: '手机号', width: 100, dataIndex: 'phone'},
            {text: '部门', width: 100, dataIndex: 'deptid'},
            {text: '员工账号', width: 120, dataIndex: 'account', sortable: true},
            {text: '用户密码', width: 100, dataIndex: 'password',hidden:true},
            {text: '用户照片', width: 100, dataIndex: 'img',hidden:true},
            {text: '联系地址', width: 200, dataIndex: 'address'},
            {text: '备注',flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_users',
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