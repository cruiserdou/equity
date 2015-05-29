Ext.define('App.view.financ.financ_manage.Financ_managef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.financ_managef',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_financ_manage').getStore().load();
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
                xtype: 'financ_managef_query',
                region: 'north'
            },
            {
                xtype: 'financ_managef_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 