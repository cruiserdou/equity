Ext.define('App.store.corp_service_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_service_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_service_change_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list'
        }
    },
    autoLoad: false
});


