Ext.define('App.view.financ.financ_query.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.financ_queryf_query',
    id:'financ_queryf_query_id',
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
                            Ext.getCmp('grid_financ_query').getStore().load();
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


                //{
                //    allowBlank: true,
                //    fieldLabel: '机构名称',
                //    id: 'query_financ_query_name',
                //    emptyText: '机构名称'
                //},
                {
                    allowBlank: true,
                    fieldLabel: '融资用途',
                    id: 'query_financ_query_fuse',
                    emptyText: '融资用途'
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
                            var store = Ext.getCmp('grid_financ_queryf').getStore();
                            store.load({
                                params: {
                                    //name: Ext.getCmp('query_financ_query_name').getValue(),
                                    fuse: Ext.getCmp('query_financ_query_fuse').getValue()
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
                            Ext.getCmp('grid_financ_queryf').getStore().load();
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
