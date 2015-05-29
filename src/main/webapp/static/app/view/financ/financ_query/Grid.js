
Ext.define('App.view.financ.financ_query.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.financ_queryf_grid',
    store: 'financ',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_financ_query',
    listeners: { 'itemdblclick': function (view, record, item, index, e) {
        editForm = new Ext.form.FormPanel({
            frame: true,

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90
            },
            defaults: {
                readOnly: true,
                xtype: 'textfield'
            },
            items: [
                {
                    hidden: 'true',
                    fieldLabel: 'ID',
                    name: 'id'
                },
                {
                    fieldLabel: '融资金额',
                    name:'famount',
                    xtype: 'numberfield',
                    emptyText: '请输入数字',
                    regex : /^[0-9]*$/,
                    regexText : '请输入数字',
                    allowBlank: false
                },
                {
                    fieldLabel: '融资方式',
                    xtype: 'textarea',
                    name:'fmode',
                    allowBlank: false
                },
                {
                    fieldLabel: '融资用途',
                    xtype: 'textarea',
                    name:'fuse'
                },
                {
                    fieldLabel: '融资期限',
                    name:'ftermdt',
                    xtype: 'datefield',
                    value: new Date(),
                    format: 'Y-m-d H:i:s',
                    allowBlank: false
                },
                {
                    fieldLabel: '融资成本',
                    name:'fcosts',
                    xtype: 'numberfield',
                    emptyText: '请输入数字',
                    regex : /^[0-9]*$/,
                    regexText : '请输入数字',
                    allowBlank: false
                },
                {
                    fieldLabel: '偿付计划',
                    xtype: 'textarea',
                    name:'payment_pl'
                },
                {
                    fieldLabel: '偿付保障',
                    xtype: 'textarea',
                    name:'payment_gt'
                },
                {
                    fieldLabel: '资金供给方',
                    name:'supply_sd',
                    allowBlank: false
                },
                {
                    fieldLabel: '供给方式' ,
                    name:'supply_md',
                    allowBlank: false
                },
                {
                    fieldLabel: '成本',
                    name:'costs',
                    xtype: 'numberfield',
                    emptyText: '请输入数字',
                    regex : /^[0-9]*$/,
                    regexText : '请输入数字',
                    allowBlank: false
                }
            ]

        });
        editWindow = new Ext.Window({
            layout: 'fit',
            width: 350,
            height: 530,
            title: '企业融资需求',
            items: [editForm]
        });
        editWindow.show(Ext.get('financ_queryf_query_id'));
        editForm.getForm().loadRecord(record);
    }},
    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '融资金额', width: 100, dataIndex: 'famount'},
            {text: '融资方式', width: 200, dataIndex: 'fmode'},
            {text: '融资用途', width: 200, dataIndex: 'fuse'},
            {text: '融资期限', width: 200, dataIndex: 'ftermdt'},
            {text: '融资成本', width: 100, dataIndex: 'fcosts'},
            {text: '偿付计划', width: 200, dataIndex: 'payment_pl'},
            {text: '偿付保障', width: 200, dataIndex: 'payment_gt'},
            {text: '资金供给方', width: 200, dataIndex: 'supply_sd'},
            {text: '供给方式', width: 200, dataIndex: 'supply_md'},
            {text: '成本', flex: 1, dataIndex: 'costs'}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'financ',
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