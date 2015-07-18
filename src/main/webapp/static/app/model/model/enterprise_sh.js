Ext.define('App.model.enterprise_sh', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        { name : 'enterprise_id'},
        { name : 'enterprise_nm'},
        { name : 'business_num'},
        { name : 'shtype'},
        { name : 'sh_name'},
        { name : 'shdoctype'},
        { name : 'shdocnum'},
        { name : 'shareholdnum'},
        { name : 'currencynum'},
        { name : 'freezenum'},
        { name : 'sub_amount'},
        { name : 'paid_amount'},
        { name : 'sub_pay_type'},
        { name : 'sub_pay_amount'},
        { name : 'sub_pay_date'},
        { name : 'paid_pay_type'},
        { name : 'paid_pay_amount'},
        { name : 'paid_pay_date'},
        { name : 'remark'}

    ]
});