Ext.define('App.view.rehr.rehr_query.Rehr_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.rehr_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_rehr_query').getStore().load();
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
                xtype: 'rehr_queryf_query',
                region: 'north'
            },
            {
                xtype: 'rehr_queryf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 