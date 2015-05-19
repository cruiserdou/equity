Ext.define('App.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.tabPanel',
    border: false,
    id: 'tabPanel_id',
    sidebarChange:false,
    initComponent: function () {
        this.callParent(arguments);

    }
})