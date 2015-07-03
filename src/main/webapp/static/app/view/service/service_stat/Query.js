Ext.define('App.view.service.service_stat.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.service_statf_query',
    id:'service_statf_query_id',
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
                            Ext.getCmp('grid_service_stat').getStore().load();
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
                    id: 'query_service_stat_name',
                    emptyText: '机构名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '机构类别',
                    id: 'query_service_stat_type',
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
                            var store = Ext.getCmp('grid_service_stat').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_service_stat_name').getValue(),
                                    type: Ext.getCmp('query_service_stat_type').getValue()
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
                            Ext.getCmp('grid_service_stat').getStore().load();
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
