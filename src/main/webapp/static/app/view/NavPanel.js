Ext.define('App.view.NavPanel', {
    extend: 'Ext.tree.Panel',
    title: '系统菜单',
    alias: 'widget.navPanel',
    iconCls: 'icon_menu_tool',
    requires: [
        'Ext.tree.*',
        'Ext.data.*'
    ],
    split: true,
    rootVisible: false,
    //layout:'accordion',
    //extend: 'Ext.panel.Panel',
    //layout: 'accordion', //手风琴布局
    //layoutConfig: {
    //    titleCollapse: false,
    //    animate: true,
    //    activeOnTop: true
    //},
    initComponent: function () {
        this.store = 'Tree';
        this.callParent(arguments);

    }
})









