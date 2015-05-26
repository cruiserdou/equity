Ext.define('App.view.enterprise_query.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprise_queryf_query',
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
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_query').getStore().load();
                        }
                    }
                },
                {
                    text: '条件查询',
                    id: 'conditions_query_id',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '条件查询',
                                id:'conditions_query_win_id',
                                modal: true,
                                width: 280,
                                height: 290,
                                border: false,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 20,
                                        defaults: {
                                            labelWidth: 60,
                                            xtype: 'combobox'
                                        },
                                        items: [

                                            {
                                                fieldLabel: '注册资本（万元）',
                                                id :'query_regcap_id',
                                                xtype: 'numberfield',
                                                emptyText: '请输入数字',
                                                regex : /^[0-9]*$/,
                                                regexText : '请输入数字'
                                            }
                                            //{
                                            //    fieldLabel: '注册资本（万元）',
                                            //    id :'regcap_id',
                                            //    xtype: 'numberfield',
                                            //    emptyText: '请输入数字',
                                            //    regex : /^[0-9]*$/,
                                            //    regexText : '请输入数字'
                                            //}
                                            //{
                                            //    fieldLabel: '处理人',
                                            //    name: 'user_id',
                                            //    store: 'User',
                                            //    allowBlank: false,
                                            //    displayField: 'name',
                                            //    valueField: 'user_nm'
                                            //}

                                        ],
                                        buttonAlign: 'center',
                                        buttons: [
                                            {
                                                text: '确定',
                                                iconCls: 'icon_save',

                                                    listeners: {

                                                        click: function() {

                                                            var store = Ext.getCmp('grid_enterprise_query').getStore();
                                                            store.load({
                                                                params: {
                                                                    regcap: Ext.getCmp('query_regcap_id').getValue()
                                                                    //nos: Ext.getCmp('query_enterprise_query_nos').getValue(),
                                                                    //buslicno: Ext.getCmp('query_enterprise_query_buslicno').getValue(),
                                                                    //listcode: Ext.getCmp('query_enterprise_query_listcode').getValue()

                                                                }
                                                            });
                                                            Ext.getCmp('conditions_query_win_id').close();
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
                                    }
                                ]
                            }).show(Ext.get("conditions_query_id"));
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
                                id: 'query_enterprise_query_name',
                                emptyText: '公司名称'
                            },
                            {
                                allowBlank: true,
                                fieldLabel: '公司简称',
                                id: 'query_enterprise_query_nos',
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
                    id: 'query_enterprise_query_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂牌代码',
                    id: 'query_enterprise_query_listcode',
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
                    iconCls: 'icon_search',
                    text: '查找',
                    listeners: {
                        click: function() {
                            var store = Ext.getCmp('grid_enterprise_query').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_query_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_query_nos').getValue(),
                                    buslicno: Ext.getCmp('query_enterprise_query_buslicno').getValue(),
                                    listcode: Ext.getCmp('query_enterprise_query_listcode').getValue()

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
                    iconCls: 'icon_reset',
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_query').getStore().load();
                        }
                    }
                }
            ]
        }
    ],
    //items: [
    //    {
    //        xtype: 'panel',
    //        columnWidth: .4,
    //        border: false,
    //        defaultType: 'textfield',
    //        layout: {
    //            type: 'vbox',
    //            align: 'strech',
    //            pack: 'start'
    //        },
    //        items: [
    //            {
    //                allowBlank: true,
    //                fieldLabel: '公司名称',
    //                id: 'query_enterprise_query_name',
    //                emptyText: '公司名称'
    //            },
    //            {
    //                allowBlank: true,
    //                fieldLabel: '公司简称',
    //                id: 'query_enterprise_query_nos',
    //                emptyText: '公司简称'
    //            }
    //
    //        ]
    //    },
    //    {
    //        xtype: 'panel',
    //        columnWidth: .4,
    //        border: false,
    //        defaultType: 'textfield',
    //        layout: {
    //            type: 'vbox',
    //            align: 'strech',
    //            pack: 'start'
    //        },
    //        items: [
    //            {
    //                fieldLabel: '维护状态',
    //                id: 'query_enterprise_query_status',
    //                name: 'status',
    //                xtype: 'combobox',
    //                autoRender: true,
    //                autoShow: true,
    //                store: 'dicts_mtstate',
    //                displayField: 'fieldvaldis',
    //                valueField: 'fieldvaldis',
    //                emptyText: '维护状态'
    //            },
    //            {
    //                id: 'query_enterprise_query_reserve',
    //                fieldLabel: '所属后备库',
    //                name: 'reserve',
    //                xtype: 'combobox',
    //                autoRender: true,
    //                autoShow: true,
    //                store: 'dicts_reservedb',
    //                displayField: 'fieldvaldis',
    //                valueField: 'fieldvaldis',
    //                emptyText: '所属后备库'
    //            }
    //
    //        ]
    //    },
    //    {
    //        xtype: 'panel',
    //        border: false,
    //        items: [
    //            {
    //                xtype: 'button',
    //                iconCls: 'icon_search',
    //                text: '查找',
    //                listeners: {
    //                    click: function(){

    //                    }
    //                }
    //            },
    //            {
    //                xtype: 'panel',
    //                height: 10,
    //                border: false
    //            },
    //            {
    //                xtype: 'button',
    //                iconCls: 'icon_reset',
    //                text: '重置',
    //                listeners: {
    //                    click: function(_this){
    //                        _this.up('form').getForm().reset();
    //                        Ext.getCmp('grid_enterprise_query').getStore().load();
    //                    }
    //                }
    //            }
    //        ]
    //    }
    //],
    initComponent: function () {
        this.callParent(arguments);
    }
});
