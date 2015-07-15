var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_mos.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refi_mosf_grid',
    store: 'refi_mos',
    selModel: sm,
    id :'grid_refi_mos',
    listeners: {
        itemclick: function (this_, record_) {
            var store = Ext.getCmp('grid_refi_mos_top').getStore();
            store.load({
                params: {
                    rop_mos_id: record_.get('mos_id')
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
                            name: 'mos_id'
                            ,hidden:true
                        },
                        {
                            fieldLabel: '企业ID',
                            anchor: '100%',
                            name: 'mos_corp_id',
                            id:'corp_id',
                            hidden:true
                        },
                        {
                            anchor: '100%',
                            fieldLabel: '企业名称',
                            name: 'corp_name'
                        },

                        {
                            fieldLabel: '融资产品',
                            anchor: '100%',
                            name: 'mos_cots'
                        },
                        {
                            fieldLabel: '融资金额',
                            anchor: '100%',
                            name: 'mos_amounts'
                        },
                        {
                            fieldLabel: '项目经理',
                            anchor: '100%',
                            name: 'mos_mop'
                        },
                        {
                            fieldLabel: '融资进度',
                            anchor: '100%',
                            name: 'mos_rop'
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
                    title: '融资服务',
                    items: [editForm]
                });
                editWindow.show(Ext.get(''));
                editForm.getForm().loadRecord(record);
            }

    },
    initComponent: function () {

        this.columns = [

            {text: '融资服务ID',  width: 220, dataIndex: 'mos_id',hidden:true},
            {text: '企业ID',  width: 220, dataIndex: 'mos_corp_id',hidden:true},
            {text: '企业名称',  width: 220, dataIndex: 'corp_name'},
            {text: '融资产品',  width: 200, dataIndex: 'mos_cots'},
            {text: '融资金额', width: 150, dataIndex: 'mos_amounts'},
            {text: '项目经理', width: 150, dataIndex: 'mos_mop'},
            {text: '融资进度', width: 150 , dataIndex: 'mos_rop'},
            {
                text: '添加进度',flex: 1, dataIndex: 'mos_id',
                renderer: function (v, m, record) {

                        return "<span style='color: green; cursor: hand;' onclick='add_refi_rop(\"" + v + "\")' >添加</span>"

                }
            }


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'refi_mos',
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


function add_refi_rop(id) {


    Ext.create('widget.window', {
        title: '添加进度',
        modal: true,
        id:'add_refi_rop_windows',
        width: 370,
        height: 500,
        border: false,
        layout: 'fit',
        defaults: {
            width: 200,
            allowBlank: false
        },
        items: [
            {
                xtype: 'form',
                frame: true,
                bodyPadding: 10,
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 70
                },
                defaults: {
                    labelAlign: 'left',
                    xtype: 'textfield'
                },
                items: [

                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '事项',
                        name: 'rop_items'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '具体内容',
                        name: 'rop_desc'
                    },
                    {
                        anchor: '100%',
                        fieldLabel: '完成时间',
                        name: 'rop_endt',
                        xtype: 'datefield',
                        value: new Date(),
                        format: 'Y-m-d H:i:s'
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '需解决问题',
                        name: 'rop_crb'
                    },
                    {
                        xtype: 'container',
                        anchor: '100%',
                        layout: 'column',
                        items: [

                            {
                                xtype: "panel",
                                layout: "column",
                                fieldLabel: '是否完成',
                                xtype: 'radiogroup', anchor: '220%', columns: 20, items: [
                                {boxLabel: "是", name: 'rop_stat', inputValue: '是',checked: true},
                                {boxLabel: "否", name: 'rop_stat', inputValue: '否'}
                            ]
                            }
                        ]
                    },
                    {
                        xtype: 'textarea',
                        anchor: '100%',
                        fieldLabel: '备注',
                        name: 'rop_remark'
                    }
                ],
                buttonAlign: "center",
                buttons: [
                    {
                        text: '保存',
                        iconCls: 'icon_save',
                        handler: function () {

                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        url: 'add_refi_rop_info',
                                        method: 'POST',
                                        params: {
                                            rop_mos_id: id
                                        },
                                        waitMsg: '正在保存...',
                                        success: function (form, action) {
                                            Ext.Msg.alert("成功", "保存成功!");
                                            Ext.getCmp('add_refi_rop_windows').close();
                                        },
                                        failure: function (form, action) {
                                            Ext.Msg.alert("失败", "保存失败!");
                                        }
                                    });
                                }

                        }
                    },
                    {
                        text: '重置',
                        iconCls: 'icon_reset',
                        handler: function () {
                            this.up('form').getForm().reset();
                        }
                    }
                ]
            }

        ]
    }).show(Ext.get(id));
};

