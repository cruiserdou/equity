/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.corp_service', {
    extend: 'Ext.data.Model',
    fields: [
        { name : 'srv_id'},
        { name : 'srv_corp_id'},
        { name : 'srv_name'},
        { name : 'srv_type'},
        { name : 'srv_content'},
        { name : 'srv_levels'},
        { name : 'srv_domain'},
        { name : 'srv_penalty'},
        { name : 'srv_examiner'},
        { name : 'srv_post'},
        { name : 'srv_descs'},
        { name : 'srv_remark'}
    ]
});




