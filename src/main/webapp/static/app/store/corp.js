Ext.define('App.store.corp', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp',
    pageSize: 20,
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_info',
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