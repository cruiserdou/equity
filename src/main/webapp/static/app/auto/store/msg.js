/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.msg', {
    extend: 'Ext.data.Store',
    model: 'App.model.msg',
    proxy: {
        type: 'ajax',
        url: 'obtain_msg_info',
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




