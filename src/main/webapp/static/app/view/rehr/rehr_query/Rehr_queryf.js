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
            },
            {
                xtype: 'rehr_query_change_grid',
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

 