Ext.define('App.store.corp_government', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_government',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_government_info',
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


