Ext.define('App.store.corp_finance', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_finance',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_finance_info',
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


