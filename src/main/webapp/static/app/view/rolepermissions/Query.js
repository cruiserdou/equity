Ext.define('App.view.rolepermissions.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.truckuse_query',
    split: true,
    id: 'truck_query',
    bodyPadding: 20,
    frame: false,
    defaultType: 'textfield',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'rolepermissions_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加记录',
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
                                            {
                                                anchor: '100%',
                                                name: 'treeid',
                                                fieldLabel: '菜单',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store:'syj_menu',
                                                triggerAction: 'all',
                                                valueField: 'id',
                                                displayField: 'text',
                                                allowBlank:false
                                            }
                                        ],
                                        buttonAlign : "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                handler: function(){
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()){
                                                        form.submit({
                                                            url: 'add_rolepermissions_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_rolepermissions').getStore().reload();
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
                            }).show(Ext.get('rolepermissions_add'));
                        }
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_rolepermissions').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_rolepermissions').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var treeid = row.get('treeid');
                                        Ext.Ajax.request({
                                            url: 'delete_rolepermissions_info',
                                            params: {
                                                "treeid": treeid
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_rolepermissions').getStore().reload();
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
                },'-',
                {
                    text: '按钮权限',
                    id: 'perm_button',
                    handler: function () {


                        var button_grid = Ext.create('Ext.grid.Panel', {
                            store: 'rolepermbutton',
                            border: false,
                            id: 'grid_rolepermbutton',
                            selType: 'checkboxmodel',

                            listeners: {
                                afterrender:function(){
                                    Ext.getCmp('grid_rolepermbutton').getStore().load();

                                }
                            },
                            columns: [
                                {text: "角色ID", width: 105, dataIndex: 'roleid',hidden:true},
                                {text: "菜单ID", width: 290, dataIndex: 'treeid',hidden:true},
                                {text: "角色名称", width: 120, dataIndex: 'rolename', sortable: true},
                                {text: "菜单标题", width: 120, dataIndex: 'text', sortable: true},
                                {text: "按钮",  width: 100, dataIndex: 'button'},
                                {
                                    text: '删除', width: 50, dataIndex: 'id',
                                    renderer: function (val) {
                                        return "<span style='color: #FF4444;' onclick='delete_rolepermbutton(" + val + ")' >删除</span>";
                                    }
                                }
                            ],
                            columnLines: true,
                            margin: '0 0 5 0'
                        });



                        var editForm = null;
                        var editWindow = null;
                        editForm = new Ext.form.FormPanel({
                            frame: true,
                            items: [
                                {
                                    border: false,
                                    xtype: 'panel',
                                    frame: true,
                                    region: 'west',
                                    margin: '0 0 0 5',
                                    layout: 'fit',
                                    items: [
                                        button_grid

                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            dock: 'top',
                                            border: true,
                                            items: [
                                                {
                                                    text: '权限',
                                                    id:'rolepermbutton_add_id',
                                                    listeners: {
                                                        click: function () {
                                                            Ext.create('widget.window', {
                                                                title: '权限管理',
                                                                width: 300,
                                                                height: 300,
                                                                modal: true,
                                                                border: false,
                                                                layout: 'fit',
                                                                items: [
                                                                    {
                                                                        xtype: 'form',
                                                                        frame: true,
                                                                        bodyPadding: 16,
                                                                        defaults: {
                                                                            labelWidth: 50
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
                                                                            {
                                                                                anchor: '100%',
                                                                                name: 'treeid',
                                                                                fieldLabel: '菜单',
                                                                                xtype: 'combobox',
                                                                                autoRender: true,
                                                                                autoShow: true,
                                                                                store:'syj_menu',
                                                                                triggerAction: 'all',
                                                                                valueField: 'id',
                                                                                displayField: 'text',
                                                                                allowBlank:false
                                                                            },
                                                                            {
                                                                                fieldLabel: '按钮',
                                                                                anchor: '100%',
                                                                                name: 'button',
                                                                                xtype: 'combo',
                                                                                //value: '删除',
                                                                                autoRender: true,
                                                                                autoShow: true,
                                                                                store: Ext.create('Ext.data.Store',
                                                                                    {
                                                                                        fields: ['type'],
                                                                                        data: [
                                                                                            {'type': '添加'},
                                                                                            {'type': '编辑'},
                                                                                            {'type': '修改'},
                                                                                            {'type': '删除'},
                                                                                            {'type': '导入'},
                                                                                            {'type': '导出'}
                                                                                        ]
                                                                                    }
                                                                                ),
                                                                                displayField: 'type',
                                                                                valueField: 'type',
                                                                                allowBlank: false
                                                                            }
                                                                        ],
                                                                        buttonAlign : "center",
                                                                        buttons: [
                                                                            {
                                                                                text: '保存',
                                                                                handler: function(){
                                                                                    var form = this.up('form').getForm();
                                                                                    if (form.isValid()){
                                                                                        form.submit({
                                                                                            url: 'add_rolepermbutton_info',
                                                                                            waitMsg: '正在保存数据...',
                                                                                            success: function(form, action){
                                                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                                                //重新载入渠道信息
                                                                                                Ext.getCmp('grid_rolepermbutton').getStore().reload();
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
                                                            }).show(Ext.get(rolepermbutton_add_id));
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        });
                        editWindow = new Ext.Window({
                            layout: 'fit',
                            width: 600,
                            height: 500,
                            modal: true,
                            title: '按钮权限',
                            border: false,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('perm_button'));


                    }
                }
            ]
        }
    ],
    layout: 'column',
    items: [
        {
            xtype: 'panel',
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
                    name: 'rolename',
                    id: 'rm_query_rolename',
                    emptyText: '角色名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '菜单名',
                    name: 'text',
                    id: 'rm_query_text',
                    emptyText: '菜单名'
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
                            var store = Ext.getCmp('grid_rolepermissions').getStore();
                            store.load({
                                params: {
                                    rolename: Ext.getCmp('rm_query_rolename').getValue(),
                                    text: Ext.getCmp('rm_query_text').getValue()
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
                            Ext.getCmp('grid_rolepermissions').getStore().load();
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
