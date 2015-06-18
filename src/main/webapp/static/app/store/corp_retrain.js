Ext.define('App.store.corp_retrain', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_retrain',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_retrain_info',
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


