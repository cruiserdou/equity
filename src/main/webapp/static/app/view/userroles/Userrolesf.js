Ext.define('App.view.userroles.Userrolesf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userrolesf',
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'userrolesf_query',
                region: 'north'
            },
            {
                xtype: 'userrolesf_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});