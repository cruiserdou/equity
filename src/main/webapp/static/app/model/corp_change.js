/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.corp_change', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        //{name: 'corp_id'},
        {name: 'changer_id'},
        {name: 'changer_dt'},
        {name: 'field'},
        {name: 'c_before'},
        {name: 'c_after'},
        {name: 'field_name'}
    ]
});