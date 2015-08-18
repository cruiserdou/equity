/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.refi_mos', {
    extend: 'Ext.data.Store',
    model: 'App.model.refi_mos',
    proxy: {
        type: 'ajax',
        url: 'obtain_refi_mos_info',
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