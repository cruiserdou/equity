Ext.define('App.view.login_log.Login_logf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.login_logf',
    id :'login_logf_id',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_login_log').getStore().load();
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
                xtype: 'login_logf_query',
                region: 'north'
            },
            {
                xtype: 'login_logf_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});

 