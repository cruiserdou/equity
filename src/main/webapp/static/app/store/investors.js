/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.investors', {
    extend: 'Ext.data.Store',
    model: 'App.model.investors',
    proxy: {
        type: 'ajax',
        url: 'obtain_investors_info',
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



