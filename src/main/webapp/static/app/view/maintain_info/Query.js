Ext.define('App.view.maintain_info.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.maintain_infof_query',
    split: true,
    height: 100,
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
                    id: 'maintain_info_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加',
                                modal: true,
                                width: 400,
                                height: 400,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 150,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 10,
                                        fieldDefaults: {
                                            labelAlign: 'left',
                                            labelWidth: 90
                                        },
                                        defaults: {
                                            labelAlign: 'right',
                                            xtype: 'textfield'
                                        },
                                        items: [
                                            {
                                                anchor: '100%',
                                                fieldLabel: '企业ID',
                                                name: 'mi_corp_id',
                                                hidden:true
                                            },
                                            {
                                                xtype: "fieldcontainer", layout: "hbox",
                                                items: [
                                                    {

                                                        fieldLabel: '企业名称',
                                                        name: 'corp_name',
                                                        xtype: 'textfield',
                                                        labelAlign: 'right',
                                                        id: 'corp_name_id'
                                                    },
                                                    {
                                                        xtype: "button", text: "...",
                                                        handler: function () {

                                                            Ext.create('widget.window', {
                                                                title: '企业',
                                                                id: 'corp_find_window',
                                                                width: 800,
                                                                height: 600,
                                                                iconCls: 'icon_search',
                                                                modal: true,
                                                                border: false,
                                                                layout: 'border',
                                                                items: [

                                                                    {
                                                                        xtype: 'export_importf_query',
                                                                        region: 'north'
                                                                    },
                                                                    {
                                                                        xtype: 'export_importf_grid',
                                                                        region: 'center',
                                                                        height: 120
                                                                    }
                                                                ]
                                                            }).show(Ext.get('corp_name_id'));
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '挂牌代码',
                                                name: 'mi_listcode'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '省',
                                                name: 'mi_province'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '市',
                                                name: 'mi_city'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '县',
                                                name: 'mi_county'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '维护时间',
                                                name: 'mi_mt_date'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '企业客户分级(A/B）',
                                                name: 'mi_cust_type'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '下次维护时间',
                                                name: 'mi_next_date'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '下次维护计划',
                                                name: 'mi_next_plan'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '备注',
                                                name: 'mi_remark'
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
                                                            url: 'add_maintain_info_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_maintain_info').getStore().reload();
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
                            }).show(Ext.get('maintain_info_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'maintain_info_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_maintain_info').getSelectionModel();
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
                                labelAlign: 'left',
                                labelWidth: 90
                            },

                            defaults: {
                                xtype: 'textfield'
                            },
                            items: [
                                {
                                    hidden: 'true',
                                    fieldLabel: 'ID',
                                    name: 'mi_id'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '企业ID',
                                    name: 'mi_corp_id',
                                    hidden:true
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '企业名称',
                                    name: 'corp_name'
                                },
                                //{
                                //    xtype: "fieldcontainer", layout: "hbox",
                                //    items: [
                                //        {
                                //
                                //            fieldLabel: '企业名称',
                                //            name: 'corp_name',
                                //            xtype: 'textfield',
                                //            labelAlign: 'right',
                                //            id: 'corp_name_id'
                                //        },
                                //        {
                                //            xtype: "button", text: "...",
                                //            handler: function () {
                                //
                                //                Ext.create('widget.window', {
                                //                    title: '企业',
                                //                    id: 'corp_find_window',
                                //                    width: 800,
                                //                    height: 600,
                                //                    iconCls: 'icon_search',
                                //                    modal: true,
                                //                    border: false,
                                //                    layout: 'border',
                                //                    items: [
                                //
                                //                        {
                                //                            xtype: 'export_importf_query',
                                //                            region: 'north'
                                //                        },
                                //                        {
                                //                            xtype: 'export_importf_grid',
                                //                            region: 'center',
                                //                            height: 120
                                //                        }
                                //                    ]
                                //                }).show(Ext.get('corp_name_id'));
                                //
                                //
                                //            }
                                //        }
                                //    ]
                                //},
                                {
                                    anchor: '100%',
                                    fieldLabel: '挂牌代码',
                                    name: 'mi_listcode'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '省',
                                    name: 'mi_province'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '市',
                                    name: 'mi_city'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '县',
                                    name: 'mi_county'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '维护时间',
                                    name: 'mi_mt_date'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '企业客户分级(A/B）',
                                    name: 'mi_cust_type'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '下次维护时间',
                                    name: 'mi_next_date'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '下次维护计划',
                                    name: 'mi_next_plan'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '备注',
                                    name: 'mi_remark'
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
                                                url: 'update_maintain_info_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_maintain_info').getStore().reload();
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
                        });
                        editWindow = new Ext.Window({
                            layout: 'fit',
                            width: 300,
                            height: 400,
                            modal: true,
                            border: false,
                            defaults: {
                                width: 150,
                                allowBlank: false
                            },
                            title: '修改',
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('maintain_info_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',

                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_maintain_info').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        var sm = Ext.getCmp('grid_maintain_info').getSelectionModel();
                        var rows = sm.getSelection();
                        if (rows.length <= 0) {
                            Ext.Msg.alert('提示', '请选择要删除的记录');
                        } else{

                                if (rows.length > 1) {
                                    Ext.Msg.alert('提示', '每次只能删除一条！');
                                } else {
                                    Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                                        if (btn == 'yes') {
                                            var row = rows[0];
                                            var mi_id = row.get('mi_id');
                                            Ext.Ajax.request({
                                                url: 'delete_maintain_info_info',
                                                params: {
                                                    "mi_id": mi_id
                                                },
                                                waitMsg: '正在删除数据...',
                                                success: function (form, action) {
                                                    Ext.Msg.alert("成功", "数据删除成功!");
                                                    Ext.getCmp('grid_maintain_info').getStore().reload();
                                                },
                                                failure: function (form, action) {
                                                    Ext.Msg.alert("失败", "数据删除失败!");
                                                }
                                            });
                                        }
                                    });
                                }
                            }
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
                  fieldLabel: '字段名称',
                  id: 'query_fieldnm',
                  name: 'fieldnm',
                  emptyText: '字段名称'
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
                            var store = Ext.getCmp('grid_maintain_info').getStore();
                            store.load({
                                params: {
                                    fieldnm: Ext.getCmp('query_fieldnm').getValue()
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
                            Ext.getCmp('grid_maintain_info').getStore().load();
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