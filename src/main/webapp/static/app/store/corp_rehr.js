Ext.define('App.store.corp_rehr', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_rehr',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_rehr_info',
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


