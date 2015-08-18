Ext.define('App.view.enterprise_query.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprise_queryf_query',
    split: true,
    bodyPadding: 20,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [

                {
                    text: '刷新',
                    glyph: '',
                    listeners: {
                        click: function (_this) {
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
                                id: 'conditions_query_win_id',
                                modal: true,
                                width: 280,
                                height: 290,
                                border: false,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        defaults: {
                                            labelWidth: 60,
                                            xtype: 'combobox'
                                        },
                                        items: [

                                            {
                                                fieldLabel: '注册资本（万元）',
                                                id: 'query_regcap_id',
                                                xtype: 'numberfield',
                                                emptyText: '请输入数字',
                                                regex: /^[0-9]*$/,
                                                regexText: '请输入数字'
                                            }
                                        ],
                                        buttonAlign: 'center',
                                        buttons: [
                                            {
                                                text: '确定',

                                                listeners: {

                                                    click: function () {

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
            columnWidth: .4,
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
            columnWidth: .4,
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
            columnWith: 0.2,
            border: false,
            items: [
                {
                    xtype: 'button',
                    text: '查找',
                    listeners: {
                        click: function () {
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
                    height: 6,
                    border: false
                },
                {
                    xtype: 'button',
                    text: '重置',
                    listeners: {
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_query').getStore().load();
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