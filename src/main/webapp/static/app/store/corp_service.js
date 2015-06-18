Ext.define('App.store.corp_service', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_service',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_service_info',
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


