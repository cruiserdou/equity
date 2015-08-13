/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.corp_service_all', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_all',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_service_all_info',
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




