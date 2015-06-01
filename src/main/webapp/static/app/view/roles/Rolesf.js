Ext.define('App.view.roles.Rolesf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rolesf',
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'rolesf_query',
                region: 'north'
            },
            {
                xtype: 'rolesf_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});