/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.corp_shareholder', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_shareholder',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_shareholder_info',
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





