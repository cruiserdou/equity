Ext.define('App.store.corp_refinancing', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_refinancing',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_refinancing_info',
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


