Ext.define('App.model.enterprise_represent_info', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        { name : 'enterprise_id'},
        { name : 'positions'},
        { name : 'document_type'},
        { name : 'name'},
        { name : 'document_num'},
        { name : 'phone'},
        { name : 'fax'},
        { name : 'email'},
        { name : 'qq'},
        { name : 'wechat_id'},
        { name : 'remark'}
    ]
});