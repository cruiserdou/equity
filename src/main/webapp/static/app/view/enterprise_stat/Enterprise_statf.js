Ext.define('App.view.enterprise_stat.Enterprise_statf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.enterprise_statf',
    id :'enterprise_statf_id',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise_stat').getStore().load();
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
                xtype: 'enterprise_statf_query',
                region: 'north'
            },
            {
                xtype: 'enterprise_statf_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});
 
 