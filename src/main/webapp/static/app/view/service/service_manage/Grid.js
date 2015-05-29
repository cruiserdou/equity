
Ext.define('App.view.service.service_manage.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.service_managef_grid',
    store: 'service',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_service_manage',


    listeners: { 'itemdblclick': function (view, record, item, index, e) {
        editForm = new Ext.form.FormPanel({
            frame: true,
            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 70
            },
            defaults: {
                xtype: 'textfield'
            },
            items: [
                {
                    hidden: 'true',
                    fieldLabel: 'ID',
                    name: 'id'
                },
                {
                    allowBlank: false,
                    fieldLabel: '编号',
                    name: 'nos'
                },
                {
                    allowBlank: false,
                    fieldLabel: '机构名称',
                    name: 'name'
                },
                {
                    fieldLabel: '机构类别',
                    name: 'type',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store:'dicts_service',
                    triggerAction: 'all',
                    valueField: 'fieldvaldis',
                    displayField: 'fieldvaldis',
                    allowBlank:false
                },
                {
                    allowBlank: false,
                    fieldLabel: '级别',
                    name: 'levels'
                },
                {
                    allowBlank: false,
                    fieldLabel: '业务内容',
                    xtype: 'textarea',
                    name: 'content'
                },
                {
                    fieldLabel: '简介',
                    xtype: 'textarea',
                    name: 'descs'
                },
                {
                    fieldLabel: '领域',
                    name: 'domain'
                },
                {
                    fieldLabel: '惩罚记录',
                    xtype: 'textarea',
                    name: 'penalty'
                },
                {
                    fieldLabel: '备注',
                    xtype: 'textarea',
                    name: 'remark'
                }
            ],
            buttonAlign : "center",
            buttons: [
                {
                    text: '保存',
                    iconCls: 'icon_save',
                    handler: function(){
                        var form = this.up('form').getForm();
                        if (form.isValid()){
                            form.submit({
                                url: 'update_service_info',
                                waitMsg: '正在保存数据...',
                                success: function(form, action){
                                    Ext.Msg.alert("成功", "数据保存成功!");
                                    Ext.getCmp('grid_service_manage').getStore().reload();
                                },
                                failure: function(form, action){
                                    Ext.Msg.alert("失败", "数据保存失败!");
                                }
                            });
                        }
                    }
                },
                {
                    text: '重置',
                    iconCls: 'icon_reset',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                }
            ]
        });
        editWindow = new Ext.Window({
            layout: 'fit',
            width: 350,
            height: 500,
            title: '服务机构',
            items: [editForm]
        });
        editWindow.show(Ext.get('service_managef_query_id'));
        editForm.getForm().loadRecord(record);
    }},
    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '编号', width: 100, dataIndex: 'nos'},
            {text: '服务机构名称', width: 200, dataIndex: 'name'},
            {text: '服务机构类别', width: 200, dataIndex: 'type'},
            {text: '业务内容', width: 200, dataIndex: 'content'},
            {text: '级别', width: 100, dataIndex: 'levels'},
            {text: '简介', width: 200, dataIndex: 'descs'},
            {text: '领域', width: 200, dataIndex: 'domain'},
            {text: '惩罚记录', width: 200, dataIndex: 'penalty'},
            {text: '备注', flex: 1, dataIndex: 'remark'}

        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'service',
                displayInfo: true,
                displayMsg: '第 {0} 到 {1} 条数据, 共{2}条',
                emptyMsg: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });

        this.callParent(arguments);
    }
});