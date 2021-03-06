Ext.define('App.store.corp_government_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_government_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_government_change_info',
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