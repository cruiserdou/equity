Ext.define('App.view.retrain.retrain_query.Retrain_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.retrain_queryf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_retrain_query').getStore().load();
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
                xtype: 'retrain_queryf_query',
                region: 'north'
            },
            {
                xtype: 'retrain_queryf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 