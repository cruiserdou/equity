Ext.define('App.store.corp_retrain_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_retrain_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_retrain_change_info',
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


