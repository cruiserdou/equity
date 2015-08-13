/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.msg', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'user_id'},
        {name: 'ruser_id'},
        {name: 'deadline'},
        {name: 'content'},
        {name: 'stat'},
        {name: 'rtdate'},
        {name: 'type'},
        {name: 'remark'},
        {name: 'user_name'}
    ]
});





