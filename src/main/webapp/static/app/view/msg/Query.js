Ext.define('App.view.msg.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.msgf_query',
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
                {
                    id: 'msg_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加信息',
                                modal: true,
                                iconCls: 'icon_add',
                                width: 350,
                                height: 350,
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
                                        bodyPadding: 5,
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
                                                name: 'ruser_id',
                                                fieldLabel: '用户',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'syj_users',
                                                displayField: 'name',
                                                valueField: 'id',
                                                listConfig: {
                                                    getInnerTpl: function () {
                                                        return '<div><span style="color: green;">' + '({name})</span></div>'
                                                    }
                                                }
                                            },

                                            {
                                                hidden:true,
                                                xtype: 'datefield',
                                                fieldLabel: '期限',
                                                anchor: '100%',
                                                allowBlank: false,
                                                name: 'deadline',
                                                value: new Date(),
                                                format: 'Y-m-d H:i:s'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '内容',
                                                allowBlank: false,
                                                name: 'content'
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
                                                            url: 'add_msg_info',
                                                            params: {
                                                                "stat":'未阅'
                                                            },
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_msg').getStore().reload();

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
                                    }

                                ]
                            }).show(Ext.get('msg_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'msg_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_msg').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.Msg.alert('信息','请选择要编辑的数据');
                            return;
                        }
                        var record = sm.getSelection()[0];

                        var editForm = null;
                        var editWindow = null;
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
                                    anchor: '100%',
                                    name: 'ruser_id',
                                    fieldLabel: '用户',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'syj_users',
                                    displayField: 'name',
                                    valueField: 'id',
                                    listConfig: {
                                        getInnerTpl: function () {
                                            return '<div><span style="color: green;">' + '({name})</span></div>'
                                        }
                                    }
                                },

                                {
                                    hidden:true,
                                    xtype: 'datefield',
                                    fieldLabel: '期限',
                                    anchor: '100%',
                                    allowBlank: false,
                                    name: 'deadline',
                                    value: new Date(),
                                    format: 'Y-m-d H:i:s'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '内容',
                                    allowBlank: false,
                                    name: 'content'
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
                                                url: 'update_msg_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_msg').getStore().reload();
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
                            height: 350,
                            modal: true,
                            title: '修改信息',
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('msg_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_msg').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_msg').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_msg_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_msg').getStore().reload();
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
                    text: '已阅',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要已阅吗？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_msg').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'readed_msg_info',
                                            params: {
                                                "id": id,
                                                "stat":'已阅'
                                            },
                                            waitMsg: '正在已阅数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据已阅成功!");
                                                Ext.getCmp('grid_msg').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据已阅失败!");
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
                    fieldLabel: '资料类型',
                    id: 'query_msg_ctype',
                    emptyText: '资料类型'
                },
                {
                    allowBlank: true,
                    fieldLabel: '资料名称',
                    id: 'query_msg_file',
                    emptyText: '资料名称'
                }

            ]
        },
        {
            xtype: 'panel',
            border: false,
            items: [
                {
                    xtype: 'button',
                    iconCls: 'icon_search',
                    text: '查找',
                    listeners: {
                        click: function(){
                            var store = Ext.getCmp('grid_msg').getStore();
                            store.load({
                                params: {
                                    c_type: Ext.getCmp('query_msg_ctype').getValue(),
                                    file: Ext.getCmp('query_msg_file').getValue()
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
                    iconCls: 'icon_reset',
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_msg').getStore().load();
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
