Ext.define('App.view.refinancing.refinancing_manage.Refinancing_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refinancing_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_refinancing_manage').getStore().load();
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
                xtype: 'refinancing_managef_query',
                region: 'north'
            },
            {
                xtype: 'refinancing_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 