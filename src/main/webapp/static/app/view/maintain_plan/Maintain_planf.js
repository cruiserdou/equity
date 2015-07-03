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
            }
        ]
        this.callParent(arguments);
    }
});

