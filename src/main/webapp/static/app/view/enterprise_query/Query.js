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
                    glyph: 0xf021,
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
                    fieldLabel: '维护状态',
                    id: 'query_enterprise_query_status',
                    name: 'status',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_mtstate',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '维护状态'
                },
                {
                    id: 'query_enterprise_query_reserve',
                    fieldLabel: '所属后备库',
                    name: 'reserve',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_reservedb',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '所属后备库'
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
                        click: function(){
                            var store = Ext.getCmp('grid_enterprise_query').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_query_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_query_nos').getValue(),
                                    reserve: Ext.getCmp('query_enterprise_query_reserve').getValue(),
                                    status: Ext.getCmp('query_enterprise_query_status').getValue()

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
    initComponent: function () {
        this.callParent(arguments);
    }
});
