Ext.define('App.view.refinancing.refinancing_query.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.refinancing_queryf_query',
    id:'refinancing_queryf_query_id',
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
                            Ext.getCmp('grid_refinancing_query').getStore().load();
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
                    fieldLabel: '机构名称',
                    id: 'query_refinancing_query_name',
                    emptyText: '机构名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '机构类别',
                    id: 'query_refinancing_query_type',
                    emptyText: '机构类别'
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
                        click: function(){
                            var store = Ext.getCmp('grid_refinancing_query').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_refinancing_query_name').getValue(),
                                    type: Ext.getCmp('query_refinancing_query_type').getValue()
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
                            Ext.getCmp('grid_refinancing_query').getStore().load();
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
