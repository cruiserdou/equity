Ext.define('App.store.corp_investors', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_investors',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_investors_info',
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