Ext.define('App.view.government.government_manage.Government_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.government_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_government_manage').getStore().load();
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
                xtype: 'government_managef_query',
                region: 'north'
            },
            {
                xtype: 'government_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 