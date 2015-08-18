/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.service', {
    extend: 'Ext.data.Store',
    model: 'App.model.service',
    proxy: {
        type: 'ajax',
        url: 'obtain_service_info',
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