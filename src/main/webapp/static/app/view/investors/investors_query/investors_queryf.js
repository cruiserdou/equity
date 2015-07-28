Ext.define('App.view.investors.investors_query.investors_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.investors_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_investors_query').getStore().load();
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
                xtype: 'investors_queryf_query',
                region: 'north'
            },
            {
                xtype: 'investors_queryf_grid',
                region: 'center'
            },
            {
                xtype: 'investors_query_change_grid',
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

 