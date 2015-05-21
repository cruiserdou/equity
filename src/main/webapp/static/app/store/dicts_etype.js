Ext.define('App.store.dicts_etype', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_dicts',
    proxy: {
        type: 'ajax',
        url: 'obtain_dicts_info',
        extraParams:{
            field: 'etype'
        },
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


