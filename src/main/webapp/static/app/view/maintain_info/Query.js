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
                                width: 350,
                                height: 400,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 170,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 10,
                                        fieldDefaults: {
                                            labelAlign: 'left',
                                            labelWidth: 100
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
                                                hidden:true,
                                                id: 'corp_id'
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
                                                readOnly:true,
                                                anchor: '100%',
                                                fieldLabel: '挂牌代码',
                                                name: 'mi_listcode',
                                                id: 'corp_listcode_id'
                                            },
                                            {
                                                readOnly:true,
                                                anchor: '100%',
                                                fieldLabel: '省',
                                                name: 'mi_province',
                                                id:'corp_province_id'
                                            },
                                            {
                                                readOnly:true,
                                                anchor: '100%',
                                                fieldLabel: '市',
                                                name: 'mi_city',
                                                id:'corp_city_id'
                                            },
                                            {
                                                readOnly:true,
                                                anchor: '100%',
                                                fieldLabel: '县',
                                                name: 'mi_county',
                                                id:'corp_county_id'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '维护时间',
                                                name: 'mi_mt_date',
                                                xtype: 'datefield',
                                                value: new Date(),
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '企业客户分级(A/B）',
                                                name: 'mi_cust_type',
                                                anchor: '100%',
                                                xtype: 'combo',
                                                autoRender: true,
                                                autoShow: true,
                                                store:Ext.create('Ext.data.Store',
                                                    {
                                                        fields:['type'],
                                                        data:
                                                            [
                                                                {'type':'A'},
                                                                {'type':'B'}
                                                            ]
                                                    }
                                                ),
                                                displayField:'type',
                                                valueField:'type'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '下次维护时间',
                                                name: 'mi_next_date',
                                                xtype: 'datefield',
                                                value: new Date(),
                                                format: 'Y-m-d'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '下次维护计划',
                                                name: 'mi_next_plan'
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '维护结果',
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
                                                            url: 'add_maintain_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_maintain_info').getStore().reload();
                                                                Ext.getCmp('grid_maintain_info_history').getStore().reload();
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
                //{
                //    text: '编辑',
                //    id: 'maintain_info_edit',
                //    handler: function(){
                //        var sm = Ext.getCmp('grid_maintain_info').getSelectionModel();
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
                //
                //
                //            frame: true,
                //            bodyPadding: 10,
                //            fieldDefaults: {
                //                labelAlign: 'left',
                //                labelWidth: 100
                //            },
                //            defaults: {
                //                labelAlign: 'right',
                //                xtype: 'textfield'
                //            },
                //
                //            items: [
                //                {
                //                    hidden: 'true',
                //                    fieldLabel: 'ID',
                //                    name: 'mi_id'
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '企业ID',
                //                    name: 'mi_corp_id',
                //                    hidden:true
                //                },
                //                {
                //                    anchor: '100%',
                //                    fieldLabel: '企业ID',
                //                    name: 'mi_corp_id',
                //                    hidden:true,
                //                    id: 'corp_id'
                //                },
                //                {
                //                    xtype: "fieldcontainer", layout: "hbox",
                //                    items: [
                //                        {
                //                            readOnly:true,
                //                            allowBlank:false,
                //                            fieldLabel: '企业名称',
                //                            name: 'corp_name',
                //                            xtype: 'textfield',
                //                            labelAlign: 'right',
                //                            id: 'corp_name_id'
                //                        },
                //                        {
                //                            xtype: "button", text: "...",
                //                            handler: function () {
                //
                //                                Ext.create('widget.window', {
                //                                    title: '企业',
                //                                    id: 'corp_find_window',
                //                                    width: 800,
                //                                    height: 600,
                //                                    iconCls: 'icon_search',
                //                                    modal: true,
                //                                    border: false,
                //                                    layout: 'border',
                //                                    items: [
                //
                //                                        {
                //                                            xtype: 'corp_basic_queryf',
                //                                            region: 'north'
                //                                        },
                //                                        {
                //                                            xtype: 'corp_basic_gridf',
                //                                            region: 'center',
                //                                            height: 120
                //                                        }
                //                                    ]
                //                                }).show(Ext.get('corp_name_id'));
                //                            }
                //                        }
                //                    ]
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '挂牌代码',
                //                    name: 'mi_listcode'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '省',
                //                    name: 'mi_province'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '市',
                //                    name: 'mi_city'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '县',
                //                    name: 'mi_county'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '维护时间',
                //                    name: 'mi_mt_date',
                //                    xtype: 'datefield',
                //                    value: new Date(),
                //                    format: 'Y-m-d'
                //                },
                //                {
                //                    fieldLabel: '企业客户分级(A/B）',
                //                    name: 'mi_cust_type',
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    xtype: 'combo',
                //                    autoRender: true,
                //                    autoShow: true,
                //                    store:Ext.create('Ext.data.Store',
                //                        {
                //                            fields:['type'],
                //                            data:
                //                                [
                //                                    {'type':'A'},
                //                                    {'type':'B'}
                //                                ]
                //                        }
                //                    ),
                //                    displayField:'type',
                //                    valueField:'type'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '下次维护时间',
                //                    name: 'mi_next_date',
                //                    xtype: 'datefield',
                //                    value: new Date(),
                //                    format: 'Y-m-d'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '下次维护计划',
                //                    name: 'mi_next_plan'
                //                },
                //                {
                //                    allowBlank:false,
                //                    anchor: '100%',
                //                    fieldLabel: '备注',
                //                    name: 'mi_remark'
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
                //                                url: 'update_maintain_info',
                //                                waitMsg: '正在保存数据...',
                //                                success: function(form, action){
                //                                    Ext.Msg.alert("成功", "数据保存成功!");
                //                                    Ext.getCmp('grid_maintain_info').getStore().reload();
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
                //            height: 400,
                //            modal: true,
                //            border: false,
                //            defaults: {
                //                width: 170,
                //                allowBlank: false
                //            },
                //            title: '修改',
                //            items: [editForm]
                //        });
                //        editWindow.show(Ext.get('maintain_info_edit'));
                //        editForm.getForm().loadRecord(record);
                //    }
                //},'-',

                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_maintain_info').getStore().load();
                            Ext.getCmp('grid_maintain_info_history').getStore().reload();
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
                                                url: 'delete_maintain_info',
                                                params: {
                                                    "mi_id": mi_id
                                                },
                                                waitMsg: '正在删除数据...',
                                                success: function (form, action) {
                                                    Ext.Msg.alert("成功", "数据删除成功!");
                                                    Ext.getCmp('grid_maintain_info').getStore().reload();
                                                    Ext.getCmp('grid_maintain_info_history').getStore().reload();
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
                  fieldLabel: '企业名称',
                  id: 'query_maintain_info_corp_name',
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
                            var store = Ext.getCmp('grid_maintain_info').getStore();
                            store.load({
                                params: {
                                    corp_name: Ext.getCmp('query_maintain_info_corp_name').getValue()
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
                            Ext.getCmp('grid_maintain_info_history').getStore().reload();
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