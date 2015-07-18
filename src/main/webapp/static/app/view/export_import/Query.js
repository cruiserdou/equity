Ext.define('App.view.export_import.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.export_importf_query',
    split: true,
    //height: 100,
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
                    id: 'corp_import',
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
                                                            url: 'import_corp_xls',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                Ext.getCmp('grid_export_import').getStore().reload();
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
                            }).show(Ext.get('corp_import'));
                        }
                    }
                },'-',
                {
                    id: 'corp_export',
                    text: '导出',
                    listeners: {
                        click: function () {
                            var sm = Ext.getCmp('grid_export_import').getSelectionModel();
                            var rows = sm.getSelection();
                            var id_list = "";
                            if (rows.length > 0) {
                                for (var i = 0; i < rows.length; i++) {
                                    var row = rows[i];
                                    id_list = id_list + ',' + row.get('id');
                                }
                                Ext.create('widget.window', {
                                    xtype: 'form',
                                    frame: true,
                                    modal: true,
                                    width: 200,
                                    height: 200,
                                    title: '导出',
                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch',
                                        pack: 'start'
                                    },
                                    items: [
                                        {
                                            xtype: 'panel',
                                            bodyPadding: '20',
                                            flex: 1,
                                            html: '<a onclick="corp_s_export(\'id_list\');"  href="#"><img style="height: 32px; margin-left: 50px;" />导出</a><br/>'
                                        },
                                        {
                                            xtype: 'panel',
                                            flex: 1,
                                            bodyPadding: '20',
                                            html: '<a href="static/upload/coprs.xls"><img style="width: 32px; margin-left: 50px;"  />下载</a>'
                                        }
                                    ]

                                }).show(Ext.get('corp_export'));

                            }else{
                                Ext.Msg.alert('提示', '请选择要导出数据！');
                            }
                        }
                    }
                },'-',

                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_export_import').getStore().load();
                        }
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
                    id: 'query_export_import_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_export_import_nos',
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
                    id: 'query_export_import_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂牌代码',
                    id: 'query_export_import_listcode',
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
                            var store = Ext.getCmp('grid_export_import').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_export_import_name').getValue(),
                                    nos: Ext.getCmp('query_export_import_nos').getValue(),
                                    buslicno: Ext.getCmp('query_export_import_buslicno').getValue(),
                                    listcode: Ext.getCmp('query_export_import_listcode').getValue()

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
                            Ext.getCmp('grid_export_import').getStore().load();
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