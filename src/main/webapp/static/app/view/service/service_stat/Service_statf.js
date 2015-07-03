Ext.define('App.view.service.service_stat.Service_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.service_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_service_stat').getStore().load();
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
                xtype: 'service_statf_query',
                region: 'north'
            },
            {
                xtype: 'service_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 