Ext.define('App.store.corp', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_info',
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


