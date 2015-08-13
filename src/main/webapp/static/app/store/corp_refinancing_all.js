Ext.define('App.store.corp_refinancing_all', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_all',
    pageSize: 30,
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_refinancing_all_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            root: 'list'
        }
    },
    autoLoad: false
});


