Ext.define('App.store.corp_contact', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_contact',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_contact_info',
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