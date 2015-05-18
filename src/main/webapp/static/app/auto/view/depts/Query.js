Ext.define('App.view.depts.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.deptf_query',
    split: true,
    height: 120,
    bodyPadding: 20,
    id: 'br_query',
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
                    id: 'depts_add',
                    text: '添加',
                    glyph: 0xf0f6,
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加部门信息',
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
                                                hidden: 'true',
                                                fieldLabel: '部门ID',
                                                name: 'id'
                                            },
                                            {
                                                anchor: '100%',
                                                readOnly:true,
                                                name: 'nos',
                                                fieldLabel: '部门编号',
                                                allowBlank:false,
                                                id:'nos_id',
                                                listeners: {
                                                    afterrender:function(){
                                                        Ext.Ajax.request({
                                                            method: "POST",
                                                            url: 'checked_depart_id_info',
                                                            success: function (response,opts) {
                                                                var obj=Ext.decode(response.responseText);

                                                                if(obj.success)
                                                                {
                                                                    Ext.getCmp('nos_id').setValue(obj.name);
                                                                }
                                                            },
                                                            failure: function(form, action){
                                                                Ext.Msg.alert("失败", "部门编号检验失败!");
                                                            }
                                                        });
                                                    }
                                                }
                                            },
                                            {
                                                anchor: '100%',
                                                fieldLabel: '部门名称',
                                                name: 'deptname',
                                                allowBlank:false
                                            },
                                            {
                                                anchor: '100%',
                                                xtype: 'combobox',
                                                allowBlank: false,
                                                fieldLabel: '部门主管',
                                                name: 'leader',
                                                store: 'syj_users',
                                                displayField: 'name',
                                                valueField: 'id',
                                                emptyText: '部门主管',
                                                listConfig: {
                                                    getInnerTpl: function () {
                                                        return '<div><span style="font-weight: bold">{id}' +
                                                            '</span><br><span style="color: green;">' + '({name})</span></div>'
                                                    }
                                                }
                                            },
                                            {
                                                allowBlank:false,
                                                anchor: '100%',
                                                xtype: 'textarea',
                                                fieldLabel: '部门描述',
                                                name: 'deptdesc'
                                            },
                                            {
                                                anchor: '100%',
                                                xtype: 'textarea',
                                                fieldLabel: '备&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp注',
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
                                                            url: 'add_depts_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_depts').getStore().reload();
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
                            }).show(Ext.get('depts_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'depts_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_depts').getSelectionModel();
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
                                    fieldLabel: '部门ID',
                                    name: 'id'
                                },
                                {
                                    anchor: '100%',
                                    readOnly:true,
                                    name: 'nos',
                                    fieldLabel: '部门编号',
                                    allowBlank:false,
                                    id:'nos_id'
                                },
                                {
                                    anchor: '100%',
                                    fieldLabel: '部门名称',
                                    name: 'deptname',
                                    allowBlank:false
                                },
                                {
                                    anchor: '100%',
                                    xtype: 'combobox',
                                    allowBlank: false,
                                    fieldLabel: '部门主管',
                                    name: 'leader',
                                    store: 'syj_users',
                                    displayField: 'name',
                                    valueField: 'id',
                                    emptyText: '部门主管',
                                    listConfig: {
                                        getInnerTpl: function () {
                                            return '<div><span style="font-weight: bold">{id}' +
                                                '</span><br><span style="color: green;">' + '({name})</span></div>'
                                        }
                                    }
                                },
                                {
                                    anchor: '100%',
                                    xtype: 'textarea',
                                    fieldLabel: '部门描述',
                                    name: 'deptdesc'
                                },
                                {
                                    anchor: '100%',
                                    xtype: 'textarea',
                                    fieldLabel: '备&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp注',
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
                                                url: 'update_depts_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_depts').getStore().reload();
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
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('depts_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
                {
                    text: '刷新',
                    glyph: 0xf021,
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_depts').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    glyph: 0xf014,
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_depts').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_depts_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_depts').getStore().reload();
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
                {
                    allowBlank: true,
                    fieldLabel: '部门编号',
                    id: 'query_deptnos',
                    emptyText: '部门编号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '部门名称',
                    id: 'query_deptname',
                    emptyText: '部门名称'
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
                            var store = Ext.getCmp('grid_depts').getStore();
                            store.load({
                                params: {
                                    nos: Ext.getCmp('query_deptnos').getValue(),
                                    deptname: Ext.getCmp('query_deptname').getValue()
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
                            Ext.getCmp('grid_depts').getStore().load();
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
