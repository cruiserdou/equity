/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.enterprise_assets_finance', {
    extend: 'Ext.data.Store',
    model: 'App.model.enterprise_assets_finance',
    proxy: {
        type: 'ajax',
        url: 'obtain_enterprise_maintain_info',
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






