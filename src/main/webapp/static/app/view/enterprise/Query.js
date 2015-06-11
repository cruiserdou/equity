Ext.define('App.view.enterprise.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprisef_query',
    split: true,
    height: 120,
    bodyPadding: 20,
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'enterprise_import',
                    text: '导入',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '导入企业信息',
                                modal: true,
                                width: 300,
                                height: 200,
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
                                            labelAlign: 'right',
                                            xtype: 'textfield'
                                        },
                                        items: [
                                            {
                                                anchor: '100%',
                                                xtype: 'filefield',
                                                fieldLabel: '导入文件',
                                                buttonText:'选择文件',
                                                name: 'file',
                                                allowBlank:false
                                            }
                                        ],
                                        buttonAlign : "center",
                                        buttons: [
                                            {
                                                text: '导入',
                                                handler: function(){
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()){
                                                        form.submit({
                                                            url: 'import_enterprise_xls',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                Ext.getCmp('grid_enterprise').getStore().reload();
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
                                                glyph: 0xf021,
                                                handler: function () {
                                                    this.up('form').getForm().reset();
                                                }
                                            }
                                        ]
                                    }

                                ]
                            }).show(Ext.get('enterprise_import'));
                        }
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_enterprise_info',
                                            params: {
                                                "id": id
                                            },
                                            waitenterprise: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_enterprise').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.enterprise.alert('提示', '请选择要删除的记录');
                                }
                            }
                        });
                    }
                }
            ]
        }
    ],



    items: [
        {
            xtype: 'panel',
            columnWidth: .3,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '公司名称',
                    id: 'query_enterprise_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_enterprise_nos',
                    emptyText: '公司简称'
                }

            ]
        },
        {
            xtype: 'panel',
            columnWidth: .3,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '营业执照号码',
                    id: 'query_enterprise_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂牌代码',
                    id: 'query_enterprise_listcode',
                    emptyText: '挂牌代码'
                }

            ]
        },
        {
            xtype: 'panel',
            border: false,
            items: [
                {
                    xtype: 'button',
                    text: '查找',
                    listeners: {
                        click: function() {
                            var store = Ext.getCmp('grid_enterprise').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_nos').getValue(),
                                    buslicno: Ext.getCmp('query_enterprise_buslicno').getValue(),
                                    listcode: Ext.getCmp('query_enterprise_listcode').getValue()

                                }
                            });
                        }
                    }
                },
                {
                    xtype: 'panel',
                    height: 10,
                    border: false
                },
                {
                    xtype: 'button',
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise').getStore().load();
                        }
                    }
                }
            ]
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});

