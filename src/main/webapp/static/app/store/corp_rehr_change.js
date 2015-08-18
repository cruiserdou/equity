Ext.define('App.store.corp_rehr_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_rehr_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_rehr_change_info',
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