Ext.define('App.view.service.service_manage.Service_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.service_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_service_manage').getStore().load();
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
                xtype: 'service_managef_query',
                region: 'north'
            },
            {
                xtype: 'service_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 