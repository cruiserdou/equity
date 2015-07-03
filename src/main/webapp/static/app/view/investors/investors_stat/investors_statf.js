Ext.define('App.view.investors.investors_stat.investors_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.investors_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_investors_stat').getStore().load();
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
                xtype: 'investors_statf_query',
                region: 'north'
            },
            {
                xtype: 'investors_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 