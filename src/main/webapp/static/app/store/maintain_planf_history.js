/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.maintain_planf_history', {
    extend: 'Ext.data.Store',
    model: 'App.model.maintain_plan',
    proxy: {
        type: 'ajax',
        url: 'obtain_maintain_plan_history_info',
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