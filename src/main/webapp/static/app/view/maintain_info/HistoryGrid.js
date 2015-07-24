var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain_info.HistoryGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_info_history_grid',
    store: 'maintain_info_history',
    id: 'grid_maintain_info_history',
    columnLines: true,
    enableLocking: true,
    selModel: sm,
    listeners: {

        'itemdblclick': function (view, record, item, index, e) {
            var editForm = new Ext.form.FormPanel({
                frame: true,

                bodyPadding: 10,
                border: false,
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 90
                },
                defaults: {
                    readOnly: true,
                    labelAlign: 'right',
                    xtype: 'textfield'
                },

                items: [
                    {
                        hidden: 'true',
                        fieldLabel: 'ID',
                        name: 'mi_id'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业ID',
                        name: 'mi_corp_id',
                        hidden:true
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业ID',
                        name: 'mi_corp_id',
                        hidden:true,
                        id: 'corp_id'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业名称',
                        name: 'corp_name'
                    },

                    {
                        anchor: '100%',
                        fieldLabel: '挂牌代码',
                        name: 'mi_listcode'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '省',
                        name: 'mi_province'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '市',
                        name: 'mi_city'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '县',
                        name: 'mi_county'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '维护时间',
                        name: 'mi_mt_date',
                        xtype: 'datefield',
                        format: 'Y-m-d'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业客户分级(A/B）',
                        name: 'mi_cust_type'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '下次维护时间',
                        name: 'mi_next_date',
                        xtype: 'datefield',
                        format: 'Y-m-d'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '下次维护计划',
                        name: 'mi_next_plan'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '维护结果',
                        name: 'mi_remark'
                    }
                ]

            });
            var editWindow = new Ext.Window({
                width: 350,
                height: 400,
                border: false,
                layout: 'fit',
                defaults: {
                    width: 150,
                    allowBlank: false
                },
                title: '维护信息',
                items: [editForm]
            });
            editWindow.show(Ext.get(''));
            editForm.getForm().loadRecord(record);
        }
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    text: '删除',
                    handler: function () {
                        var sm = Ext.getCmp('grid_maintain_info_history').getSelectionModel();
                        var rows = sm.getSelection();
                        if (rows.length <= 0) {
                            Ext.Msg.alert('提示', '请选择要删除的记录');
                        } else{

                            Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                                if (btn == 'yes') {
                                    var row = rows[0];
                                    var mi_id = row.get('mi_id');
                                    Ext.Ajax.request({
                                        url: 'delete_maintain_info',
                                        params: {
                                            "mi_id": mi_id
                                        },
                                        waitMsg: '正在删除数据...',
                                        success: function (form, action) {
                                            Ext.Msg.alert("成功", "数据删除成功!");
                                            Ext.getCmp('grid_maintain_info_history').getStore().reload();
                                        },
                                        failure: function (form, action) {
                                            Ext.Msg.alert("失败", "数据删除失败!");
                                        }
                                    });
                                }
                            });
                        }
                    }
                }
            ]
        }
    ],
    initComponent: function () {
        this.columns = [
            {text: 'ID', width: 220, dataIndex: 'mi_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mi_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '挂牌代码', width: 100, dataIndex: 'mi_listcode'},
            {text: '省',  width: 100, dataIndex: 'mi_province',hidden:true},
            {text: '市', width: 100, dataIndex: 'mi_city',hidden:true},
            {text: '县',  width: 100, dataIndex: 'mi_county',hidden:true},
            {text: '维护时间',  width: 150, dataIndex: 'mi_mt_date'},
            {text: '企业客户分级(A/B）', width: 220, dataIndex: 'mi_cust_type'},
            {text: '下次维护时间', width: 150, dataIndex: 'mi_next_date'},
            {text: '下次维护计划', width: 220, dataIndex: 'mi_next_plan'},
            {text: '维护结果', flex: 1, dataIndex: 'mi_remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'maintain_info_history',
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