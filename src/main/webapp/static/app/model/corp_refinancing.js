/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.corp_refinancing', {
    extend: 'Ext.data.Model',
    fields: [
        { name : 'refi_id'},
        { name : 'refi_corp_id'}, 
        { name : 'refi_amounts'},
        { name : 'refi_use'},
        { name : 'refi_financ'},
        { name : 'refi_security'},
        { name : 'refi_acc_cost'},
        { name : 'refi_deadline'},
        { name : 'refi_desc'}
    ]
});







