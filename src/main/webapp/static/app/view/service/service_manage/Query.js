Ext.define('App.view.service.service_manage.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.service_managef_query',
    id:'service_managef_query_id',
    split: true,
    height: 120,
    bodyPadding: 20,
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                //{
                //    id: 'service_manage_add',
                //    text: '添加',
                //    listeners: {
                //        click: function () {
                //            Ext.create('widget.window', {
                //                title: '添加信息',
                //                modal: true,
                //                width: 350,
                //                height: 500,
                //                border: false,
                //                layout: 'fit',
                //                defaults: {
                //                    width: 200,
                //                    allowBlank: false
                //                },
                //                items: [
                //                    {
                //                        xtype: 'form',
                //                        frame: true,
                //                        bodyPadding: 5,
                //                        fieldDefaults: {
                //                            labelAlign: 'left',
                //                            labelWidth: 70
                //                        },
                //                        defaults: {
                //                            labelAlign: 'right',
                //                            xtype: 'textfield'
                //                        },
                //                        items: [
                //                            {
                //                                allowBlank: false,
                //                                fieldLabel: '编号',
                //                                name: 'nos'
                //                            },
                //                            {
                //                                allowBlank: false,
                //                                fieldLabel: '机构名称',
                //                                name: 'name'
                //                            },
                //                            {
                //                                fieldLabel: '机构类别',
                //                                name: 'type',
                //                                xtype: 'combobox',
                //                                autoRender: true,
                //                                autoShow: true,
                //                                store:'dicts_service',
                //                                triggerAction: 'all',
                //                                valueField: 'fieldvaldis',
                //                                displayField: 'fieldvaldis',
                //                                allowBlank:false
                //                            },
                //                            {
                //                                allowBlank: false,
                //                                fieldLabel: '级别',
                //                                name: 'levels'
                //                            },
                //                            {
                //                                allowBlank: false,
                //                                fieldLabel: '业务内容',
                //                                xtype: 'textarea',
                //                                name: 'content'
                //                            },
                //                            {
                //                                fieldLabel: '简介',
                //                                xtype: 'textarea',
                //                                name: 'descs'
                //                            },
                //                            {
                //                                fieldLabel: '领域',
                //                                name: 'domain'
                //                            },
                //                            {
                //                                fieldLabel: '惩罚记录',
                //                                xtype: 'textarea',
                //                                name: 'penalty'
                //                            },
                //                            {
                //                                fieldLabel: '备注',
                //                                xtype: 'textarea',
                //                                name: 'remark'
                //                            }
                //
                //                        ],
                //                        buttonAlign : "center",
                //                        buttons: [
                //                            {
                //                                text: '保存',
                //                                handler: function(){
                //                                    var form = this.up('form').getForm();
                //                                    if (form.isValid()){
                //                                        form.submit({
                //                                            url: 'add_service_info',
                //                                            waitMsg: '正在保存数据...',
                //                                            success: function(form, action){
                //                                                Ext.Msg.alert("成功", "数据保存成功!");
                //                                                //重新载入渠道信息
                //                                                Ext.getCmp('grid_service_manage').getStore().reload();
                //                                            },
                //                                            failure: function(form, action){
                //                                                Ext.Msg.alert("失败", "数据保存失败!");
                //                                            }
                //                                        });
                //                                    }
                //                                }
                //                            },
                //                            {
                //                                text: '重置',
                //                                handler: function () {
                //                                    this.up('form').getForm().reset();
                //                                }
                //                            }
                //                        ]
                //                    }
                //
                //                ]
                //            }).show(Ext.get('service_manage_add'));
                //        }
                //    }
                //},'-',
                //{
                //    text: '编辑',
                //    id: 'service_manage_edit',
                //    handler: function(){
                //        var sm = Ext.getCmp('grid_service_manage').getSelectionModel();
                //        var record = sm.getSelection()[0];
                //
                //        if(!record){
                //            Ext.Msg.alert('信息','请选择要编辑的数据');
                //            return;
                //        }
                //        var record = sm.getSelection()[0];
                //
                //        var editForm = null;
                //        var editWindow = null;
                //        editForm = new Ext.form.FormPanel({
                //            frame: true,
                //            fieldDefaults: {
                //                labelAlign: 'right',
                //                labelWidth: 70
                //            },
                //            defaults: {
                //                xtype: 'textfield'
                //            },
                //            items: [
                //                {
                //                    hidden: 'true',
                //                    fieldLabel: 'ID',
                //                    name: 'id'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '编号',
                //                    name: 'nos'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '机构名称',
                //                    name: 'name'
                //                },
                //                {
                //                    fieldLabel: '机构类别',
                //                    name: 'type',
                //                    xtype: 'combobox',
                //                    autoRender: true,
                //                    autoShow: true,
                //                    store:'dicts_service',
                //                    triggerAction: 'all',
                //                    valueField: 'fieldvaldis',
                //                    displayField: 'fieldvaldis',
                //                    allowBlank:false
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '级别',
                //                    name: 'levels'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '业务内容',
                //                    xtype: 'textarea',
                //                    name: 'content'
                //                },
                //                {
                //                    fieldLabel: '简介',
                //                    xtype: 'textarea',
                //                    name: 'descs'
                //                },
                //                {
                //                    fieldLabel: '领域',
                //                    name: 'domain'
                //                },
                //                {
                //                    fieldLabel: '惩罚记录',
                //                    xtype: 'textarea',
                //                    name: 'penalty'
                //                },
                //                {
                //                    fieldLabel: '备注',
                //                    xtype: 'textarea',
                //                    name: 'remark'
                //                }
                //            ],
                //            buttonAlign : "center",
                //            buttons: [
                //                {
                //                    text: '保存',
                //                    handler: function(){
                //                        var form = this.up('form').getForm();
                //                        if (form.isValid()){
                //                            form.submit({
                //                                url: 'update_service_info',
                //                                waitMsg: '正在保存数据...',
                //                                success: function(form, action){
                //                                    Ext.Msg.alert("成功", "数据保存成功!");
                //                                    Ext.getCmp('grid_service_manage').getStore().reload();
                //                                },
                //                                failure: function(form, action){
                //                                    Ext.Msg.alert("失败", "数据保存失败!");
                //                                }
                //                            });
                //                        }
                //                    }
                //                },
                //                {
                //                    text: '重置',
                //                    handler: function () {
                //                        this.up('form').getForm().reset();
                //                    }
                //                }
                //            ]
                //        });
                //        editWindow = new Ext.Window({
                //            layout: 'fit',
                //            width: 350,
                //            height: 500,
                //            modal: true,
                //            title: '修改信息',
                //            items: [editForm]
                //        });
                //        editWindow.show(Ext.get('service_manage_edit'));
                //        editForm.getForm().loadRecord(record);
                //    }
                //},'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_service_manage').getStore().load();
                        }
                    }
                }
                //{
                //    text: '删除',
                //    handler: function () {
                //        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                //            if (btn == 'yes') {
                //                var sm = Ext.getCmp('grid_service_manage').getSelectionModel();
                //                var rows = sm.getSelection();
                //
                //                if (rows.length > 0) {
                //                    for (var i = 0; i < rows.length; i++) {
                //                        var row = rows[i];
                //                        var id = row.get('id');
                //                        Ext.Ajax.request({
                //                            url: 'delete_service_info',
                //                            params: {
                //                                "id": id
                //                            },
                //                            waitMsg: '正在删除数据...',
                //                            success: function (form, action) {
                //                                Ext.Msg.alert("成功", "数据删除成功!");
                //                                Ext.getCmp('grid_service_manage').getStore().reload();
                //                            },
                //                            failure: function (form, action) {
                //                                Ext.Msg.alert("失败", "数据删除失败!");
                //                            }
                //                        });
                //                    }
                //                } else {
                //                    Ext.Msg.alert('提示', '请选择要删除的记录');
                //                }
                //            }
                //        });
                //    }
                //}
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
            columnWidth: .3,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '公司名称',
                    id: 'query_service_manage_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_service_manage_nos',
                    emptyText: '公司简称'
                }

            ]
        },
        {
            xtype: 'panel',
            columnWidth: .3,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '营业执照号码',
                    id: 'query_service_manage_buslicno',
                    emptyText: '营业执照号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂牌代码',
                    id: 'query_service_manage_listcode',
                    emptyText: '挂牌代码'
                }

            ]
        },
        {
            xtype: 'panel',
            border: false,
            items: [
                {
                    xtype: 'button',
                    text: '查找',
                    listeners: {
                        click: function () {
                            var store = Ext.getCmp('grid_service_manage').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_service_manage_name').getValue(),
                                    nos: Ext.getCmp('query_service_manage_nos').getValue(),
                                    buslicno: Ext.getCmp('query_service_manage_buslicno').getValue(),
                                    listcode: Ext.getCmp('query_service_manage_listcode').getValue()

                                }
                            });
                        }
                    }
                },
                {
                    xtype: 'panel',
                    height: 10,
                    border: false
                },
                {
                    xtype: 'button',
                    text: '重置',
                    listeners: {
                        click: function (_this) {
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_service_manage').getStore().load();
                        }
                    }
                }
            ]
        } 
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});
