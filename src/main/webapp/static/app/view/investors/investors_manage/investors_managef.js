Ext.define('App.view.investors.investors_manage.investors_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.investors_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_investors_manage').getStore().load();
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
                xtype: 'investors_managef_query',
                region: 'north'
            },
            {
                xtype: 'investors_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 