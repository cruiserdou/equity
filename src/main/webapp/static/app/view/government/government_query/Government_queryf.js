Ext.define('App.view.government.government_query.Government_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.government_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_government_query').getStore().load();
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
                xtype: 'government_queryf_query',
                region: 'north'
            },
            {
                xtype: 'government_queryf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 