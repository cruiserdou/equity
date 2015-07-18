/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.enterprise_maintain_info', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'enterprise_id'},
        {name: 'enterprise_source'},
        {name: 'referee'},
        {name: 'enterprise_source_info'},
        {name: 'referee_date'},
        {name: 'maintain_per'},
        {name: 'manage_state'},
        {name: 'list_status'},
        {name: 'enterprise_rank'},
        {name: 'maintain_state'},
        {name: 'belong_back'},
        {name: 'link_per'},
        {name: 'positions'},
        {name: 'document_type'},
        {name: 'document_num'},
        {name: 'fix_phone'},
        {name: 'mobile_phone'},
        {name: 'fax'},
        {name: 'email'},
        {name: 'qq'},
        {name: 'wechat_id'},
        {name: 'position_record'},
        {name: 'remark'}
    ]
});