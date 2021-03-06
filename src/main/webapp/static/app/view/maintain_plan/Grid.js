var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain_plan.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_planf_grid',
    store: 'maintain_plan',
    selModel: sm,
    id :'grid_maintain_plan',
    listeners: {
        itemclick: function (this_, record_) {
            var store = Ext.getCmp('grid_maintain_planf_history').getStore();
            store.load({
                params: {
                    mp_corp_id: record_.get('mp_corp_id')
                }
            })
        },

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
                                        readOnly: false,
                                        anchor: '100%',
                                        fieldLabel: '最后一次维护时间',
                                        name: 'mp_last_date',
                                        xtype: 'datefield',
                                        value: new Date(),
                                        format: 'Y-m-d H:i:s'
                                    },
                                    {
                                        readOnly: false,
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
                                        readOnly: false,
                                        anchor: '100%',
                                        fieldLabel: '备注',
                                        name: 'mp_remark'
                                    }

                ],
                buttonAlign : "center",
                            buttons: [
                                {
                                    text: '保存',
                                    handler: function(){
                                        var form = this.up('form').getForm();
                                        if (form.isValid()){
                                            form.submit({
                                                url: 'add_maintain_plan_info_new',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_maintain_plan').getStore().reload();
                                                    Ext.getCmp('grid_maintain_planf_history').getStore().reload();
                                                },
                                                failure: function(form, action){
                                                    Ext.Msg.alert("失败", "数据保存失败!");
                                                }
                                            });
                                        }
                                    }
                                },
                                {
                                    text: '重置',
                                    handler: function () {
                                        this.up('form').getForm().reset();
                                    }
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
    initComponent: function () {

        this.columns = [
            {text: 'ID',  width: 220, dataIndex: 'mp_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mp_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '挂牌代码',  width: 100, dataIndex: 'mp_listcode'},
            {text: '省', width: 80, dataIndex: 'mp_province'},
            {text: '市', width: 80, dataIndex: 'mp_city'},
            {text: '县', width: 80, dataIndex: 'mp_county'},
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