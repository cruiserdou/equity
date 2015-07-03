Ext.define('App.view.government.government_stat.Government_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.government_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_government_stat').getStore().load();
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
                xtype: 'government_statf_query',
                region: 'north'
            },
            {
                xtype: 'government_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 