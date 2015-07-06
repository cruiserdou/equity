Ext.define('App.view.export_import.Export_importf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.export_importf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_export_import').getStore().load();
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
                xtype: 'export_importf_query',
                region: 'north'
            },
            {
                xtype: 'export_importf_grid',
                region: 'center'
            } 

        ]
        this.callParent(arguments);
    }
});

