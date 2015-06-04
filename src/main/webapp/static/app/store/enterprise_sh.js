/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.enterprise_sh', {
    extend: 'Ext.data.Store',
    model: 'App.model.enterprise_sh',
    proxy: {
        type: 'ajax',
        url: 'obtain_enterprise_sh_info',
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






