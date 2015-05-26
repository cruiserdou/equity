Ext.define('App.view.enterprise_query.Enterprise_queryf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.enterprise_queryf',
    id :'enterprise_queryf_id',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise_query').getStore().load();
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
                xtype: 'enterprise_queryf_query',
                region: 'north'
            },
            {
                xtype: 'enterprise_queryf_grid',
                region: 'center'
            },
            {
                xtype: 'enterprise_change_grid',
                title: '维护记录',
                autoScroll: true,
                margin: '5 0 0 0',
                region: 'south',
                height: 200
            }
        ]
        this.callParent(arguments);
    }
});
 
 