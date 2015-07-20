Ext.define('App.view.enterprise.corp_list', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.corp_listf',
    layout: 'border',
    border: false,
    id: 'corp_listf_id',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise').getStore().load();
        }
    },
    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [

            {
                xtype: 'panel',
                title: '已入库企业列表',
                border: false,
                layout: 'border',
                items: [
                    {
                        xtype: 'enterprisef_query',
                        region: 'north'
                    },
                    {
                        xtype: 'enterprisef_grid',
                        region: 'center'
                    }
                ]
            }
        ]

        this.callParent(arguments);
    }
});