Ext.define('App.view.refi.refi_mos.Refi_mosf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refi_mosf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_refi_mos').getStore().load();
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
                xtype: 'refi_mosf_query',
                region: 'north'
            },
            {
                xtype: 'refi_mosf_grid',
                region: 'center',
                width: 600
            },
            {
                xtype: 'mos_rop_grid',
                autoScroll: true,
                margin: '5 0 0 0',
                region: 'east',
                width: 600,
                split: true,
                collapseMode: 'mini'
            },

        ]
        this.callParent(arguments);
    }
});


