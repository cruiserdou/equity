Ext.define('App.view.service.service_query.Service_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.service_queryf',
    "iconCls": "icon_edit_find_replace",
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
            }

        ]
        this.callParent(arguments);
    }
});

 