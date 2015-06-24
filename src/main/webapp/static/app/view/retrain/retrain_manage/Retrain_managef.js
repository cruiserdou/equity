Ext.define('App.view.retrain.retrain_manage.Retrain_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.retrain_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_retrain_manage').getStore().load();
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
                xtype: 'retrain_managef_query',
                region: 'north'
            },
            {
                xtype: 'retrain_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 