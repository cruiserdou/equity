/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.enterprise_sh', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        { name : 'enterprise_id'},
        { name : 'shtype'},
        { name : 'shname'},
        { name : 'shdoctype'},
        { name : 'shdocnum'},
        { name : 'shareholdnum'},
        { name : 'currencynum'},
        { name : 'freezenum'},
        { name : 'remark'}
    ]
});








