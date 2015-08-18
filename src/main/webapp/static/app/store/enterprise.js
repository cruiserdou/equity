/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.enterprise', {
    extend: 'Ext.data.Store',
    model: 'App.model.enterprise',
    proxy: {
        type: 'ajax',
        url: 'obtain_enterprise_info',
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