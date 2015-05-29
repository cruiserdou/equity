Ext.define('App.view.financ.financ_query.Financ_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.financ_queryf',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_financ_query').getStore().load();
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
                xtype: 'financ_queryf_query',
                region: 'north'
            },
            {
                xtype: 'financ_queryf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

 