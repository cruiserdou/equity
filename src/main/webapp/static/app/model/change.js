/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.change', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'enterprise_id'},
        {name: 'field'},
        {name: 'c_before'},
        {name: 'c_after'},
        {name: 'user_id'},
        {name: 'rtdate'}
    ]
    //belongsTo:'enterprise'
});





