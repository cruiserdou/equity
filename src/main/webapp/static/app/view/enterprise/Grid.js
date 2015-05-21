
Ext.define('App.view.enterprise.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprisef_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_enterprise',
    //listeners: {
    //    itemclick: function (this_, record_) {
    //        var depts_panel = Ext.getCmp('enterprisef_info');
    //        depts_panel.tpl.overwrite(depts_panel.body, record_.data);
    //    }
    //},
    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '企业名称', width: 200, dataIndex: 'name'},
            {text: '企业简称', width: 120, dataIndex: 'nos'},
            {text: '企业类型', width: 120, dataIndex: 'etype'},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
            {text: '挂牌价格', width: 120, dataIndex: 'listprice'},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '营业执照号', width: 120, dataIndex: 'buslic'},
            {text: '维护状态', width: 120, dataIndex: 'status'},
            {text: '所属后备库', width: 120, dataIndex: 'reserve'},
            {text: '注册时间', width: 120, dataIndex: 'regdate'},
            {text: '是否已标记', width: 120, dataIndex: 'markstat'},
            {text: '完成回访状态', width: 200, dataIndex: 'visitstat'},
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