Ext.define('App.store.corp_refinancing_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_refinancing_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_refinancing_change_info',
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