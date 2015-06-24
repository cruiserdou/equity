Ext.define('App.store.corp_rehr_all', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_all',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_rehr_all_info',
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


