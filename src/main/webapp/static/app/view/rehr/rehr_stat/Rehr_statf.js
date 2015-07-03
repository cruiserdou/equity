Ext.define('App.view.rehr.rehr_stat.Rehr_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.rehr_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_rehr_stat').getStore().load();
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
                xtype: 'rehr_statf_query',
                region: 'north'
            },
            {
                xtype: 'rehr_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 