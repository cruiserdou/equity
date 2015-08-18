Ext.define('App.view.enterprise_maintain.Enterprise_maintainf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.enterprise_maintainf',
    layout: 'border',
    border: false,
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise_maintain').getStore().load();
        }
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'enterprise_maintainf_query',
                region: 'north'
            },
            {
                xtype: 'enterprise_maintainf_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});