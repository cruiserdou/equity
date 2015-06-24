Ext.define('App.view.government.government_manage.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.government_managef_query',
    id:'government_managef_query_id',
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
                            Ext.getCmp('grid_government_manage').getStore().load();
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
                    id: 'query_government_manage_name',
                    emptyText: '机构名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '机构类别',
                    id: 'query_government_manage_type',
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
                            var store = Ext.getCmp('grid_government_manage').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_government_manage_name').getValue(),
                                    type: Ext.getCmp('query_government_manage_type').getValue()
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
                            Ext.getCmp('grid_government_manage').getStore().load();
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
