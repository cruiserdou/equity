Ext.define('App.view.financ.financ_manage.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.financ_managef_query',
    id:'financ_managef_query_id',
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
                    id: 'financ_manage_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加信息',
                                modal: true,
                                iconCls: 'icon_add',
                                width: 350,
                                height: 530,
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
                                                fieldLabel: '融资金额',
                                                name:'famount',
                                                xtype: 'numberfield',
                                                emptyText: '请输入数字',
                                                regex : /^[0-9]*$/,
                                                regexText : '请输入数字',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '融资方式',
                                                xtype: 'textarea',
                                                name:'fmode',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '融资用途',
                                                xtype: 'textarea',
                                                name:'fuse'
                                            },
                                            {
                                                fieldLabel: '融资期限',
                                                name:'ftermdt',
                                                xtype: 'datefield',
                                                value: new Date(),
                                                format: 'Y-m-d H:i:s',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '融资成本',
                                                name:'fcosts',
                                                xtype: 'numberfield',
                                                emptyText: '请输入数字',
                                                regex : /^[0-9]*$/,
                                                regexText : '请输入数字',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '偿付计划',
                                                xtype: 'textarea',
                                                name:'payment_pl'
                                            },
                                            {
                                                fieldLabel: '偿付保障',
                                                xtype: 'textarea',
                                                name:'payment_gt'
                                            },
                                            {
                                                fieldLabel: '资金供给方',
                                                name:'supply_sd',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '供给方式',
                                                name:'supply_md',
                                                allowBlank: false
                                            },
                                            {
                                                fieldLabel: '成本',
                                                name:'costs',
                                                xtype: 'numberfield',
                                                emptyText: '请输入数字',
                                                regex : /^[0-9]*$/,
                                                regexText : '请输入数字',
                                                allowBlank: false
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
                                                            url: 'add_financ_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_financ_manage').getStore().reload();
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
                            }).show(Ext.get('financ_manage_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'financ_manage_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_financ_manage').getSelectionModel();
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
                                    fieldLabel: '融资金额',
                                    name:'famount',
                                    xtype: 'numberfield',
                                    emptyText: '请输入数字',
                                    regex : /^[0-9]*$/,
                                    regexText : '请输入数字',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '融资方式',
                                    xtype: 'textarea',
                                    name:'fmode',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '融资用途',
                                    xtype: 'textarea',
                                    name:'fuse'
                                },
                                {
                                    fieldLabel: '融资期限',
                                    name:'ftermdt',
                                    xtype: 'datefield',
                                    value: new Date(),
                                    format: 'Y-m-d H:i:s',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '融资成本',
                                    name:'fcosts',
                                    xtype: 'numberfield',
                                    emptyText: '请输入数字',
                                    regex : /^[0-9]*$/,
                                    regexText : '请输入数字',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '偿付计划',
                                    xtype: 'textarea',
                                    name:'payment_pl'
                                },
                                {
                                    fieldLabel: '偿付保障',
                                    xtype: 'textarea',
                                    name:'payment_gt'
                                },
                                {
                                    fieldLabel: '资金供给方',
                                    name:'supply_sd',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '供给方式',
                                    name:'supply_md',
                                    allowBlank: false
                                },
                                {
                                    fieldLabel: '成本',
                                    name:'costs',
                                    xtype: 'numberfield',
                                    emptyText: '请输入数字',
                                    regex : /^[0-9]*$/,
                                    regexText : '请输入数字',
                                    allowBlank: false
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
                                                url: 'update_financ_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_financ_manage').getStore().reload();
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
                            height: 530,
                            modal: true,
                            title: '修改信息',
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('financ_manage_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_financ_manage').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_financ_manage').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_financ_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_financ_manage').getStore().reload();
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
                //{
                //    allowBlank: true,
                //    fieldLabel: '机构名称',
                //    id: 'query_financ_manage_name',
                //    emptyText: '机构名称'
                //},
                {
                    allowBlank: true,
                    fieldLabel: '融资用途',
                    id: 'query_financ_manage_fuse',
                    emptyText: '融资用途'
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
                            var store = Ext.getCmp('grid_financ_manage').getStore();
                            store.load({
                                params: {
                                    //name: Ext.getCmp('query_financ_manage_name').getValue(),
                                    fuse: Ext.getCmp('query_financ_manage_fuse').getValue()
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
                            Ext.getCmp('grid_financ_manage').getStore().load();
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
