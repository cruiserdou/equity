Ext.define('App.view.maintain_info.corp_basic_query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.corp_basic_queryf',
    split: true,
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
                    glyph: 0xf021,
                    listeners: {
                        click: function () {
                            Ext.getCmp('grid_corp_basic').getStore().reload();
                        }
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
            columnWidth: .5,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            defaults: {
                labelWidth: 80,
                labelAlign: 'right'
            },
            items: [
                {
                    allowBlank: true,
                    xtype: 'textfield',
                    fieldLabel: '营业执照号码',
                    id: 'corp_basic_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: '企业名称',
                    id: 'corp_basic_query_name',
                    emptyText: '企业名称'
                } 
            ]
        },
        //{
        //    xtype: 'panel',
        //    columnWidth: .3,
        //    border: false,
        //    defaultType: 'textfield',
        //    layout: {
        //        type: 'vbox',
        //        align: 'strech',
        //        pack: 'start'
        //    },
        //    defaults: {
        //        labelWidth: 60,
        //        labelAlign: 'right'
        //    },
        //    items: [
        //        {
        //            allowBlank: true,
        //            xtype: 'textfield',
        //            fieldLabel: '职位',
        //            id: 'busi_card_query_f_position',
        //            emptyText: '职位'
        //        },
        //        {
        //            xtype: 'textfield',
        //            fieldLabel: '电话(工作)',
        //            id: 'busi_card_query_f_jobpho',
        //            emptyText: '电话(工作)'
        //        }
        //
        //    ]
        //},
        //{
        //    xtype: 'panel',
        //    columnWidth: .3,
        //    border: false,
        //    defaultType: 'textfield',
        //    layout: {
        //        type: 'vbox',
        //        align: 'strech',
        //        pack: 'start'
        //    },
        //    defaults: {
        //        labelWidth: 60,
        //        labelAlign: 'right'
        //    },
        //    items: [
        //        {
        //            allowBlank: true,
        //            xtype: 'textfield',
        //            fieldLabel: '地址(工作)',
        //            id: 'busi_card_query_f_jobaddr',
        //            emptyText: '地址(工作)'
        //        },
        //        {
        //            xtype: 'textfield',
        //            fieldLabel: '电子邮件(工作)',
        //            id: 'busi_card_query_f_jobemail',
        //            emptyText: '电子邮件(工作)'
        //        }
        //    ]
        //},
        {
            xtype: 'panel',
            columnWidth: .1,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'button',
                    glyph: 0xf002,
                    text: '查找',
                    listeners: {
                        click: function () {
                            var store = Ext.getCmp('grid_corp_basic').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('corp_basic_query_name').getValue(),
                                    buslicno: Ext.getCmp('corp_basic_buslicno').getValue()

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
                    glyph: 0xf021,
                    text: '重置',
                    listeners: {
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_corp_basic').getStore().load();
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
