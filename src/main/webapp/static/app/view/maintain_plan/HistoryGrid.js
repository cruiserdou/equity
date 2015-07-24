var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain_plan.HistoryGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_planf_history_grid',
    store: 'maintain_planf_history',
    id: 'grid_maintain_planf_history',
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
                        anchor: '100%',
                        fieldLabel: 'ID',
                        name: 'mp_id'
                        ,hidden:true
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业ID',
                        name: 'mp_corp_id',
                        hidden:true
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '企业名称',
                        name: 'corp_name'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '挂牌代码',
                        name: 'mp_listcode'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '省',
                        name: 'mp_province'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '市',
                        name: 'mp_city'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '县',
                        name: 'mp_county'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '最后一次维护时间',
                        name: 'mp_last_date',
                        xtype: 'datefield',
                        value: new Date(),
                        format: 'Y-m-d H:i:s'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '维护内容',
                        name: 'mp_content'
                    },
                    {
                        hidden:true,
                        anchor: '100%',
                        fieldLabel: '维护结果',
                        name: 'mp_result'
                    },
                    {
                        hidden:true,
                        anchor: '100%',
                        fieldLabel: '历史记录',
                        name: 'mp_hisdesc'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '备注',
                        name: 'mp_remark'
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
                title: '维护计划',
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
                        var sm = Ext.getCmp('grid_maintain_planf_history').getSelectionModel();
                        var rows = sm.getSelection();
                        if (rows.length <= 0) {
                            Ext.Msg.alert('提示', '请选择要删除的记录');
                        } else{

                            Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                                if (btn == 'yes') {
                                    var row = rows[0];
                                    var mp_id = row.get('mp_id');
                                    Ext.Ajax.request({
                                        url: 'delete_maintain_plan_info',
                                        params: {
                                            "mp_id": mp_id
                                        },
                                        waitMsg: '正在删除数据...',
                                        success: function (form, action) {
                                            Ext.Msg.alert("成功", "数据删除成功!");
                                            Ext.getCmp('grid_maintain_planf_history').getStore().reload();
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
            {text: 'ID',  width: 220, dataIndex: 'mp_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mp_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '挂牌代码',  width: 150, dataIndex: 'mp_listcode'},
            {text: '省', width: 100, dataIndex: 'mp_province',hidden:true},
            {text: '市', width: 100, dataIndex: 'mp_city',hidden:true},
            {text: '县', width: 100, dataIndex: 'mp_county',hidden:true},
            {text: '最后一次维护时间', width: 150, dataIndex: 'mp_last_date'},
            {text: '维护内容', width: 220, dataIndex: 'mp_content'},
            {text: '维护结果', width: 220, dataIndex: 'mp_result',hidden:true},
            {text: '历史记录', width: 220, dataIndex: 'mp_hisdesc' ,hidden:true},
            {text: '备注',flex: 1, dataIndex: 'mp_remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'maintain_planf_history',
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