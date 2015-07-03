Ext.define('App.view.refinancing.refinancing_stat.Refinancing_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refinancing_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_refinancing_stat').getStore().load();
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
                xtype: 'refinancing_statf_query',
                region: 'north'
            },
            {
                xtype: 'refinancing_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 