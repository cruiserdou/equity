/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_users', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'account'},
        {name: 'password'},
        {name: 'name'},
        {name: 'sex'},
        {name: 'phone'},
        {name: 'address'},
        {name: 'card'},
        {name: 'img'},
        {name: 'remark'}
    ]
});


