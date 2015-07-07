Ext.define('App.view.maintain_plan.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.maintain_planf_query',
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
                    id: 'maintain_plan_add',
                    text: '添加',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加计划',
                                modal: true,
                                width: 350,
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
                                        border: false,
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
                                                name: 'mp_corp_id',
                                                id:'corp_id',
                                                hidden:true
                                            },

                                            {
                                                xtype: "fieldcontainer", layout: "hbox",
                                                items: [
                                                    {
                                                        readOnly:true,
                                                        allowBlank:false,
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
                                                                        xtype: 'corp_basic_queryf',
                                                                        region: 'north'
                                                                    },
                                                                    {
                                                                        xtype: 'corp_basic_gridf',
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
                                                name: 'mp_listcode'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '省',
                                                name: 'mp_province'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '市',
                                                name: 'mp_city'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '县',
                                                name: 'mp_county'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '最好一次维护时间',
                                                name: 'mp_last_date',
                                                xtype: 'datefield',
                                                value: new Date(),
                                                format: 'Y-m-d H:i:s'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '维护内容',
                                                name: 'mp_content'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '维护结果',
                                                name: 'mp_result'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '历史记录',
                                                name: 'mp_hisdesc'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '备注',
                                                name: 'mp_remark'
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
                                                            url: 'add_maintain_plan_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_maintain_plan').getStore().reload();
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
                            }).show(Ext.get('maintain_plan_add'));
                        }
                    }
                },'-',
                //{
                //    text: '编辑',
                //    id: 'maintain_plan_edit',
                //    handler: function(){
                //        var sm = Ext.getCmp('grid_maintain_plan').getSelectionModel();
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
                //                labelAlign: 'left',
                //                labelWidth: 90
                //            },
                //
                //            defaults: {
                //                xtype: 'textfield'
                //            },
                //            items: [
                //
                //
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: 'ID',
                //                    name: 'mp_id'
                //                    ,hidden:true
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '企业ID',
                //                    name: 'mp_corp_id',
                //                    hidden:true
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '企业名称',
                //                    name: 'corp_name'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '挂牌代码',
                //                    name: 'mp_listcode'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '省',
                //                    name: 'mp_province'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '市',
                //                    name: 'mp_city'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '县',
                //                    name: 'mp_county'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '最后一次维护时间',
                //                    name: 'mp_last_date',
                //                    xtype: 'datefield',
                //                    value: new Date(),
                //                    format: 'Y-m-d H:i:s'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '维护内容',
                //                    name: 'mp_content'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '维护结果',
                //                    name: 'mp_result'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '历史记录',
                //                    name: 'mp_hisdesc'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '备注',
                //                    name: 'mp_remark'
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
                //                                url: 'update_maintain_plan_info',
                //                                waitMsg: '正在保存数据...',
                //                                success: function(form, action){
                //                                    Ext.Msg.alert("成功", "数据保存成功!");
                //                                    Ext.getCmp('grid_maintain_plan').getStore().reload();
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
                //            width: 300,
                //            height: 400,
                //            modal: true,
                //            border: false,
                //            defaults: {
                //                width: 150,
                //                allowBlank: false
                //            },
                //            title: '修改字典生',
                //            items: [editForm]
                //        });
                //        editWindow.show(Ext.get('maintain_plan_edit'));
                //        editForm.getForm().loadRecord(record);
                //    }
                //},'-',

                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_maintain_plan').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        var sm = Ext.getCmp('grid_maintain_plan').getSelectionModel();
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
                                            var mp_id = row.get('mp_id');
                                            Ext.Ajax.request({
                                                url: 'delete_maintain_plan_info',
                                                params: {
                                                    "mp_id": mp_id
                                                },
                                                waitMsg: '正在删除数据...',
                                                success: function (form, action) {
                                                    Ext.Msg.alert("成功", "数据删除成功!");
                                                    Ext.getCmp('grid_maintain_plan').getStore().reload();
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
                  fieldLabel: '企业名称',
                  id: 'query_maintain_plan_corp_name',
                  emptyText: '企业名称'
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
                            var store = Ext.getCmp('grid_maintain_plan').getStore();
                            store.load({
                                params: {
                                    corp_name: Ext.getCmp('query_maintain_plan_corp_name').getValue()
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
                            Ext.getCmp('grid_maintain_plan').getStore().load();
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