Ext.define('App.view.refi.refi_rop.Refi_ropf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refi_ropf',
    layout: 'border',
    //listeners: {
    //    activate: function () {
    //        Ext.getCmp('grid_refi_rop').getStore().load();
    //    }
    //},
    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [
            {
                xtype: 'refi_ropf_query',
                region: 'north'
            },
            {
                xtype: 'refi_ropf_grid',
                region: 'center'
            },
            {
                xtype: 'refi_ropf_grid',
                region: 'center'
            }

        ]
        this.callParent(arguments);
    }
});

