Ext.define('App.view.userroles.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userrolesf_query',
    split: true,
    height: 120,
    bodyPadding: 20,
    id: 'datacir_query',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'userroles_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加用户角色信息',
                                modal: true,
                                width: 300,
                                height: 300,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 200,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 10,
                                        fieldDefaults: {
                                            labelAlign: 'left',
                                            labelWidth: 70
                                        },
                                        defaults: {
                                            labelAlign: 'right',
                                            xtype: 'textfield'
                                        },
                                        items: [
                                            {
                                                anchor: '100%',
                                                name: 'roleid',
                                                fieldLabel: '角色',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store:'syj_roles',
                                                triggerAction: 'all',
                                                valueField: 'id',
                                                displayField: 'rolename',
                                                allowBlank:false

                                            },
                                            //{
                                            //    anchor: '100%',
                                            //    name: 'userid',
                                            //    fieldLabel: '用户',
                                            //    xtype: 'combobox',
                                            //    autoRender: true,
                                            //    autoShow: true,
                                            //    store:'syj_users',
                                            //    triggerAction: 'all',
                                            //    valueField: 'id',
                                            //    displayField: 'name',
                                            //    allowBlank:false
                                            //}
                                            {
                                                anchor: '100%',
                                                xtype: 'combobox',
                                                allowBlank: false,
                                                fieldLabel: '用户',
                                                name: 'userid',
                                                store: 'syj_users',
                                                displayField: 'name',
                                                valueField: 'id',
                                                listConfig: {
                                                    getInnerTpl: function () {
                                                        return '<div><span style="color: green;">' + '({name})</span></div>'
                                                    }
                                                }
                                            },
                                      ],
                                        buttonAlign : "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                handler: function(){
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()){
                                                        form.submit({
                                                            url: 'add_userroles_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_userroles').getStore().reload();
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
                                                handler: function () {
                                                    this.up('form').getForm().reset();
                                                }
                                            }
                                        ]
                                    }

                                ]
                            }).show(Ext.get('userroles_add'));
                        }
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_userroles').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_userroles').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var userid = row.get('userid');
                                        Ext.Ajax.request({
                                            url: 'delete_userroles_info',
                                            params: {
                                                "userid": userid
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_userroles').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.Msg.alert('提示', '请选择要删除的记录');
                                }
                            }
                        });
                    }
                }
            ]
        }
    ],
    defaults: {
    },
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            id: 'datacir_query_panel1',
            columnWidth: .4,
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
                    fieldLabel: '角色名称',
                    id: 'ur_query_rolename',
                    name: 'rolename',
                    emptyText: '角色名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '用户名',
                    id: 'ur_query_username',
                    name: 'username',
                    emptyText: '用户名'
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
                        click: function(){
                            var store = Ext.getCmp('grid_userroles').getStore();
                            store.load({
                                params: {
                                    rolename: Ext.getCmp('ur_query_rolename').getValue(),
                                    username: Ext.getCmp('ur_query_username').getValue()
                                }
                            });
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_userroles').getStore().load();
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