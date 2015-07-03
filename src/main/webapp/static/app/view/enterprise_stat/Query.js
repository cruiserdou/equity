Ext.define('App.view.enterprise_stat.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprise_statf_query',
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
                    listeners: {
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_stat').getStore().load();
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
                    id: 'query_enterprise_stat_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_enterprise_stat_nos',
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
                    id: 'query_enterprise_stat_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂牌代码',
                    id: 'query_enterprise_stat_listcode',
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
                        click: function () {
                            var store = Ext.getCmp('grid_enterprise_stat').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_stat_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_stat_nos').getValue(),
                                    buslicno: Ext.getCmp('query_enterprise_stat_buslicno').getValue(),
                                    listcode: Ext.getCmp('query_enterprise_stat_listcode').getValue()

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
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_stat').getStore().load();
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
