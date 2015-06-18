Ext.define('App.store.corp_maintain', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_maintain',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_maintain_info',
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


