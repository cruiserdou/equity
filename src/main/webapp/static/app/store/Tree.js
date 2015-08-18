Ext.define('App.store.Tree', {
    extend: 'Ext.data.TreeStore',
    model: 'App.model.Tree',
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: 'ojson'
    }
});