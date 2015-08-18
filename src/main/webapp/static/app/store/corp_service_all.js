/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.corp_service_all', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_all',
    pageSize: 30,
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_service_all_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            root: 'list'
        }
    },
    autoLoad: false
});