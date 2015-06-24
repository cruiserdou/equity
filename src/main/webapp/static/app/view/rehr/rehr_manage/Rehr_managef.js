Ext.define('App.view.rehr.rehr_manage.Rehr_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.rehr_managef',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_rehr_manage').getStore().load();
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
                xtype: 'rehr_managef_query',
                region: 'north'
            },
            {
                xtype: 'rehr_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 