/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.corp_service_change', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'srv_corp_id'},
        {name: 'changer_id'},
        {name: 'changer_dt'},
        {name: 'changer_ip'},
        {name: 'field'},
        {name: 'c_before'},
        {name: 'c_after'},
        {name: 'field_name'},
        {name: 'srv_id'}
    ]
});






