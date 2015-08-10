Ext.define('App.view.enterprise_stat.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprise_statf_query',
    split: true,
    bodyPadding: 20,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: false,
            items: [

                {
                    text: '刷新',
                    listeners: {
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_stat').getStore().load();
                        }
                    }
                }
            ]
        }
    ],

    initComponent: function () {
        this.callParent(arguments);
    }
});
