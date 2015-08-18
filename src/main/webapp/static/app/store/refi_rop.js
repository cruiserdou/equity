/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.refi_rop', {
    extend: 'Ext.data.Store',
    model: 'App.model.refi_rop',
    proxy: {
        type: 'ajax',
        url: 'obtain_refi_rop_info',
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