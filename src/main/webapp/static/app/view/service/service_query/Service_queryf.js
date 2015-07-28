Ext.define('App.view.service.service_query.Service_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.service_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_service_query').getStore().load();
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
                xtype: 'service_queryf_query',
                region: 'north'
            },
            {
                xtype: 'service_queryf_grid',
                region: 'center'
            },
            {
                xtype: 'service_query_change_grid',
                title: '变更记录',
                autoScroll: true,
                margin: '5 0 0 0',
                region: 'south',
                height: 200
            }

        ]
        this.callParent(arguments);
    }
});

 