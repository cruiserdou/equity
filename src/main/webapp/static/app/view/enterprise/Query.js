Ext.define('App.view.enterprise.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprisef_query',
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
                    id: 'enterprise_add',
                    text: '添加',
                    glyph: 0xf0f6,
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加信息',
                                modal: true,
                                iconCls: 'icon_add',
                                width: 300,
                                height: 450,
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
                                                allowBlank: false,
                                                fieldLabel: '企业名称',
                                                name: 'name'
                                            },
                                            {
                                                fieldLabel: '企业简称',
                                                name: 'nos'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '企业类型',
                                                name: 'etype'
                                            },
                                            {
                                                fieldLabel: '挂牌代码',
                                                name: 'listcode'
                                            },
                                            {
                                                fieldLabel: '挂牌价格',
                                                name: 'listprice'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '企业性质',
                                                name: 'nature',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_etype',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '企业性质'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '营业执照号',
                                                name: 'buslic'
                                            },
                                            {
                                                fieldLabel: '维护状态',
                                                name: 'status',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_mtstate',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '维护状态'
                                            },
                                            {
                                                fieldLabel: '所属后备库',
                                                name: 'reserve',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_reservedb',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '所属后备库'
                                            },
                                            {
                                                xtype: 'datefield',
                                                fieldLabel: '注册时间',
                                                allowBlank: false,
                                                name: 'regdate',
                                                value: new Date(),
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '是否已标记',
                                                name: 'markstat'
                                            },
                                            {
                                                fieldLabel: '完成回访状态',
                                                name: 'visitstat'
                                            },
                                            {
                                                fieldLabel: '备注',
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
                                                            url: 'add_enterprise_info',
                                                            waitenterprise: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_enterprise').getStore().reload();
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
                            }).show(Ext.get('enterprise_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'enterprise_edit',
                    glyph: 0xf044,
                    handler: function(){
                        var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.enterprise.alert('信息','请选择要编辑的数据');
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
                                    allowBlank: false,
                                    fieldLabel: '企业名称',
                                    name: 'name'
                                },
                                {
                                    fieldLabel: '企业简称',
                                    name: 'nos'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '企业类型',
                                    name: 'etype'
                                },
                                {
                                    fieldLabel: '挂牌代码',
                                    name: 'listcode'
                                },
                                {
                                    fieldLabel: '挂牌价格',
                                    name: 'listprice'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '企业性质',
                                    name: 'nature',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_etype',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '企业性质',
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '营业执照号',
                                    name: 'buslic'
                                },
                                {
                                    fieldLabel: '维护状态',
                                    name: 'status',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_mtstate',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '维护状态',
                                },
                                {
                                    fieldLabel: '所属后备库',
                                    name: 'reserve',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_reservedb',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '所属后备库',
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '注册时间',
                                    allowBlank: false,
                                    name: 'regdate',
                                    value: new Date(),
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '是否已标记',
                                    name: 'markstat'
                                },
                                {
                                    fieldLabel: '完成回访状态',
                                    name: 'visitstat'
                                },
                                {
                                    fieldLabel: '备注',
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
                                                url: 'update_enterprise_info',
                                                waitenterprise: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_enterprise').getStore().reload();
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
                            width: 300,
                            height: 450,
                            modal: true,
                            title: '修改信息',
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('enterprise_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
                {
                    text: '刷新',
                    glyph: 0xf021,
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    glyph: 0xf014,
                    handler: function () {
                        Ext.enterprise.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_enterprise_info',
                                            params: {
                                                "id": id
                                            },
                                            waitenterprise: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_enterprise').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.enterprise.alert('提示', '请选择要删除的记录');
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
                    fieldLabel: '公司名称',
                    id: 'query_enterprise_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_enterprise_nos',
                    emptyText: '公司简称'
                }

            ]
        },
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
                    fieldLabel: '维护状态',
                    id: 'query_enterprise_status',
                    name: 'status',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_mtstate',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '维护状态'
                },
                {
                    id: 'query_enterprise_reserve',
                    fieldLabel: '所属后备库',
                    name: 'reserve',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_reservedb',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '所属后备库'
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
                            var store = Ext.getCmp('grid_enterprise').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_nos').getValue(),
                                    reserve: Ext.getCmp('query_enterprise_reserve').getValue(),
                                    status: Ext.getCmp('query_enterprise_status').getValue()

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
                            Ext.getCmp('grid_enterprise').getStore().load();
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
