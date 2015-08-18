/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.login_log', {
    extend: 'Ext.data.Store',
    model: 'App.model.login_log',
    proxy: {
        type: 'ajax',
        url: 'obtain_login_log_info',
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