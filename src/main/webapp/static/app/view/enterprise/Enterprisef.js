Ext.define('App.view.enterprise.Enterprisef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.enterprisef',
    id :'enterprisef_id',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise').getStore().load();
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
                xtype: 'enterprisef_query',
                region: 'north'
            },
            {
                xtype: 'enterprisef_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});

 