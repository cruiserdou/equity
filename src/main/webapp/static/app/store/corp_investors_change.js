Ext.define('App.store.corp_investors_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_investors_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_investors_change_info',
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


