var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain_plan.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_planf_grid',
    store: 'maintain_plan',
    selModel: sm,
    id :'grid_maintain_plan',

    initComponent: function () {

        this.columns = [
            {text: 'ID',  width: 220, dataIndex: 'mp_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mp_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '挂牌代码',  width: 220, dataIndex: 'mp_listcode'},
            {text: '省', width: 220, dataIndex: 'mp_province'},
            {text: '市', width: 220, dataIndex: 'mp_city'},
            {text: '县', width: 220, dataIndex: 'mp_county'},
            {text: '最好一次维护时间', width: 220, dataIndex: 'mp_last_date'},
            {text: '维护内容', width: 220, dataIndex: 'mp_content'},
            {text: '维护结果', width: 220, dataIndex: 'mp_result'},
            {text: '历史记录', width: 220, dataIndex: 'mp_hisdesc'},
            {text: '备注',flex: 1, dataIndex: 'mp_remark'}
];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'maintain_plan',
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