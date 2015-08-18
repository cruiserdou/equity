Ext.define('App.store.corp_img', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_img',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_img_info',
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