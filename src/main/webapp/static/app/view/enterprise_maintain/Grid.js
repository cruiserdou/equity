var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.enterprise_maintain.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_maintainf_grid',
    store: 'enterprise_maintain',
    selModel: sm,
    id :'grid_enterprise_maintain',

    initComponent: function () {
        this.columns = [
            {text: 'id', width: 80, dataIndex: 'id', hidden:true},
            {text: 'enterprise_id', width: 80, dataIndex: 'enterprise_id', hidden:true},
            {text: 'enterid', width: 80, dataIndex: 'enterid', hidden:true},
            {text: '公司编号', width: 150, dataIndex: 'buslicno'},
            {text: '名称', width: 150, dataIndex: 'name'},
            {text: '接待人', width: 150, dataIndex: 'receive_per'},
            {text: '维护时间', width: 150, dataIndex: 'maintain_date'},
            {text: '重要级别', width: 150, dataIndex: 'important_level'},
            {text: '维护内容', width: 150, dataIndex: 'content'},
            {text: '维护结果', width: 150, dataIndex: 'result'},
            {text: '下次维护计划', width: 150, dataIndex: 'next_plan'},
            {text: '下次维护时间', width: 150, dataIndex: 'next_date'},
            {text: '下次维护内容', width: 150, dataIndex: 'next_content'},
            {text: '照片', width: 100, dataIndex: 'phone_file',hidden:true},
            {text: '详情',flex: 1, dataIndex: 'remark'}

        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'enterprise_maintain',
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