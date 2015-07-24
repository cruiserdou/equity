Ext.define('App.view.maintain_info.Maintain_infof', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.maintain_infof',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_maintain_info').getStore().load();
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
                xtype: 'maintain_infof_query',
                region: 'north'
            },
            {
                xtype: 'maintain_infof_grid',
                region: 'center'
            },
            {
                xtype: 'maintain_info_history_grid',
                autoScroll: true,
                margin: '5 0 0 0',
                region: 'east',
                width: 600,
                split: true,
                collapseMode: 'mini'
            }
        ]
        this.callParent(arguments);
    }
});


