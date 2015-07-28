Ext.define('App.view.refinancing.refinancing_query.Refinancing_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refinancing_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_refinancing_query').getStore().load();
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
                xtype: 'refinancing_queryf_query',
                region: 'north'
            },
            {
                xtype: 'refinancing_queryf_grid',
                region: 'center'
            },
            {
                xtype: 'refinancing_query_change_grid',
                title: '变更记录',
                autoScroll: true,
                margin: '5 0 0 0',
                region: 'south',
                height: 200
            }

        ]
        this.callParent(arguments);
    }
});

 