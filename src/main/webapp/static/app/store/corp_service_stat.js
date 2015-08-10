Ext.define('App.store.corp_service_stat', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_stat',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_service_stat_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list'
        }
    },
    autoLoad: true
});


