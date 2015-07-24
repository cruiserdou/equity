Ext.define('App.view.maintain_plan.Maintain_planf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.maintain_planf',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_maintain_plan').getStore().load();
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
                xtype: 'maintain_planf_query',
                region: 'north'
            },
            {
                xtype: 'maintain_planf_grid',
                region: 'center'
            },
            {
                xtype: 'maintain_planf_history_grid',
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

