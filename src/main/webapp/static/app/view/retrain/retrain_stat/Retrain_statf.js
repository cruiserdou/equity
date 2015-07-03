Ext.define('App.view.retrain.retrain_stat.Retrain_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.retrain_statf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_retrain_stat').getStore().load();
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
                xtype: 'retrain_statf_query',
                region: 'north'
            },
            {
                xtype: 'retrain_statf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 