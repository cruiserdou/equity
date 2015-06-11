Ext.define('App.view.login_log.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login_logf_query',
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
                    text: '刷新',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_login_log').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        Ext.login_log.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_login_log').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('login_log_id');
                                        Ext.Ajax.request({
                                            url: 'delete_login_log_info',
                                            params: {
                                                "login_log_id": id
                                            },
                                            waitlogin_log: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.login_log.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_login_log').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.login_log.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.login_log.alert('提示', '请选择要删除的记录');
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
                    id: 'query_login_log_ctype',
                    emptyText: '资料类型'
                },
                {
                    allowBlank: true,
                    fieldLabel: '资料名称',
                    id: 'query_login_log_file',
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
                    text: '查找',
                    listeners: {
                        click: function(){
                            var store = Ext.getCmp('grid_login_log').getStore();
                            store.load({
                                params: {
                                    c_type: Ext.getCmp('query_login_log_ctype').getValue(),
                                    file: Ext.getCmp('query_login_log_file').getValue()
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
                    text: '重置',
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_login_log').getStore().load();
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
