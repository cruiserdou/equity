Ext.define('App.store.rolepermbutton', {
    extend: 'Ext.data.Store',
    model: 'App.model.rolepermbutton',
    proxy: {
        type: 'ajax',
        url: 'obtain_rolepermbutton_info',
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


