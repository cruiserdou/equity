var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain_info.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_infof_grid',
    store: 'maintain_info',
    selModel: sm,
    id :'grid_maintain_info',

    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 220, dataIndex: 'mi_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mi_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '挂牌代码', width: 150, dataIndex: 'mi_listcode'},
            {text: '省',  width: 100, dataIndex: 'mi_province'},
            {text: '市', width: 100, dataIndex: 'mi_city'},
            {text: '县',  width: 100, dataIndex: 'mi_county'},
            {text: '维护时间',  width: 150, dataIndex: 'mi_mt_date'},
            {text: '企业客户分级(A/B）', width: 220, dataIndex: 'mi_cust_type'},
            {text: '下次维护时间', width: 150, dataIndex: 'mi_next_date'},
            {text: '下次维护计划', width: 220, dataIndex: 'mi_next_plan'},
            {text: '备注', flex: 1, dataIndex: 'mi_remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'maintain_info',
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