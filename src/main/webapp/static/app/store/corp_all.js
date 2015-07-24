Ext.define('App.store.corp_all', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_all',
    pageSize: 3,
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_all_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            root: 'list'
        }
    },
    autoLoad: true
});