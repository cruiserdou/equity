Ext.define('App.store.change', {
    extend: 'Ext.data.Store',
    model: 'App.model.change',
    proxy: {
        type: 'ajax',
        url: 'obtain_change_info',
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


