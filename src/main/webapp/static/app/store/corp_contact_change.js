/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.corp_contact_change', {
    extend: 'Ext.data.Store',
    model: 'App.model.corp_contact_change',
    proxy: {
        type: 'ajax',
        url: 'obtain_corp_contact_change_info',
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