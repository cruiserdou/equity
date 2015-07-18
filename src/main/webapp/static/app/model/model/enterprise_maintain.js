Ext.define('App.model.enterprise_maintain', {
    extend: 'Ext.data.Model',
    fields: [
         {name: 'id'},
        { name : 'enterprise_id'},
        { name : 'buslicno'},
        { name : 'enterid'},
        { name : 'name'},
        { name : 'receive_per'},
        { name : 'maintain_date'},
        { name : 'important_level'},
        { name : 'content'},
        { name : 'result'},
        { name : 'next_plan'},
        { name : 'next_date'},
        { name : 'next_content'},
        { name : 'phone_file'},
        { name : 'remark'}

    ]
});
