/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.financ', {
    extend: 'Ext.data.Store',
    model: 'App.model.financ',
    proxy: {
        type: 'ajax',
        url: 'obtain_financ_info',
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






