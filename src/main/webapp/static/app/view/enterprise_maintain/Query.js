Ext.define('App.view.enterprise_maintain.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprise_maintainf_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [

                {
                    text: '编辑',
                    id: 'enterprise_maintain_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_enterprise_maintain').getSelectionModel();
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
                                xtype: 'textfield',
                                anchor: '100%'
                            },
                            items: [
                                {
                                    hidden: 'true',
                                    fieldLabel: 'id',
                                    name: 'id'
                                },
                                {
                                    hidden: 'true',
                                    fieldLabel: 'enterid',
                                    name: 'enterid'
                                },
                                {
                                    hidden: 'true',
                                    fieldLabel: 'enterprise_id',
                                    name: 'enterprise_id'
                                },
                                {
                                    readOnly:true,
                                    fieldLabel: '公司编号',
                                    name: 'buslicno'
                                },
                                {
                                    readOnly:true,
                                    fieldLabel: '名称',
                                    name: 'name'
                                },
                                {
                                    fieldLabel: '接待人',
                                    name: 'receive_per'
                                },
                                {
                                    fieldLabel: '维护时间',
                                    name: 'maintain_date',
                                    xtype: 'datefield',
                                    value: new Date(),
                                    format: 'Y-m-d H:i:s'
                                },
                                {
                                    fieldLabel: '重要级别',
                                    name: 'important_level'
                                },
                                {
                                    fieldLabel: '维护内容',
                                    name: 'content'
                                },
                                {
                                    fieldLabel: '维护结果',
                                    name: 'result'
                                },
                                {
                                    fieldLabel: '下次维护计划',
                                    name: 'next_plan'
                                },
                                {
                                    fieldLabel: '下次维护时间',
                                    name: 'next_date',
                                    xtype: 'datefield',
                                    value: new Date(),
                                    format: 'Y-m-d H:i:s'
                                },
                                {
                                    fieldLabel: '下次维护内容',
                                    name: 'next_content'
                                },
                                {
                                    xtype:'filefield',
                                    labelAlign: 'right',
                                    fieldLabel:'上传照片',
                                    name:'phone_file',
                                    id:'phone_file',
                                    anchor: '97%',
                                    buttonText:'',
                                    buttonConfig:{
                                        iconCls:'upload'
                                    },
                                    listeners:{
                                        change:function(btn,value){
                                            //是否是规定的图片类型
                                            var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                            if (img_reg.test(value)) {
                                                var img = Ext.getCmp('staffavatar');
                                                var file = btn.fileInputEl.dom.files[0];
                                                var url = URL.createObjectURL(file);
                                                img.setSrc(url);
                                            } else {
                                                Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                                return ;
                                            }
                                        }
                                    }
                                },
                                {
                                    xtype: 'fieldset',
                                    title: '图片预览',
                                    defaults: {margin:'0 0 0 80', width: 100,height:100},
                                    items: [
                                        {

                                            xtype: 'image',
                                            id: 'staffavatar',
                                            border:1,
                                            src: 'static/upload/annex/'+record.data['phone_file'],
                                            style: {
                                                borderColor: 'blue',
                                                borderStyle: 'solid'
                                            }}
                                    ]
                                },
                                {
                                    fieldLabel: '详情',
                                    name: 'remark',
                                    xtype: 'textarea'
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
                                                url: 'add_enterprise_maintain_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_enterprise_maintain').getStore().reload();
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
                            width: 320,
                            height: 600,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('enterprise_maintain_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
                {
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise_maintain').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_enterprise_maintain').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_enterprise_maintain_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_enterprise_maintain').getStore().reload();
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
    bodyPadding: 20,
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
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
                    fieldLabel: '名称',
                    id: 'query_enterprise_username',
                    emptyText: '名称'
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
                            var store = Ext.getCmp('grid_enterprise_maintain').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_username').getValue()
                                }
                            });
                        }
                    }
                },
                {
                    xtype: 'button',
                    iconCls: 'icon_reset',
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_custs').getStore().load();
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