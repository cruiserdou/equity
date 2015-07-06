var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_mos.RopGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mos_rop_grid',
    store: 'refi_rop',
    //id: 'tell_list_grid',
    columnLines: true,
    enableLocking: true,
    selModel: sm,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
//                {
//                    id: 'call_records_add',
//                    text: '新增通话记录',
//                    glyph: 0xf14c,
//                    handler: function () {
//                        var sm = Ext.getCmp('tel_sell_grid').getSelectionModel();
//
//                        var record = sm.getSelection()[0];
//                        if (!record) {
//                            Ext.Msg.alert('信息', '请选择要操作的数据');
//                            return;
//                        }
//
//                        Ext.create('widget.window', {
//                            title: '新增通话记录',
//                            modal: true,
//                            iconCls: 'icon_add',
//                            width: 300,
//                            height: 300,
//                            border: false,
//                            layout: 'fit',
//                            defaults: {
//                                width: 200,
//                                allowBlank: false
//                            },
//                            items: [
//                                {
//                                    xtype: 'form',
//                                    frame: true,
//                                    bodyPadding: 10,
//                                    fieldDefaults: {
//                                        labelAlign: 'left',
//                                        labelWidth: 70
//                                    },
//                                    defaults: {
//                                        labelAlign: 'right',
//                                        xtype: 'textfield'
//                                    },
//                                    items: [
//                                        {
//                                            hidden: 'true',
//                                            anchor: '100%',
//                                            fieldLabel: 'ID',
//                                            name: 'id',
//                                            id: 'id'
//                                        },
//                                        {
//                                            xtype: 'combobox',
//                                            name: 'endcodefirst',
//                                            fieldLabel: '结束码',
//                                            store: 'dicts_endcodeft',
//                                            displayField: 'fieldvaldis',
//                                            valueField: 'fieldvaldis',
//                                            id: 'endcodefirst'
////                                            listeners: {
////                                                "change": function(field){
////                                                    var store = Ext.getCmp('endcodesec').getStore();
////                                                    store.load({
////                                                        params: {
////                                                            endcodefirst: field.getValue()
////                                                        }
////                                                    });
////                                                    alert(field.getValue());
////                                                }
////                                            }
//                                        },
//                                        {
//                                            xtype: 'combobox',
//                                            name: 'endcodesec',
//                                            id: 'endcodesec',
//                                            fieldLabel: '二级结束码',
//                                            store: 'endcode',
//                                            displayField: 'endcodesecond',
//                                            valueField: 'endcodesecond',
//                                            listeners: {
//                                                'focus': function () {
//                                                    Ext.getCmp('endcodesec').getStore().load(
//                                                        {
//                                                            callback: function (records, operation, success) {
//                                                                var store = Ext.getCmp('endcodesec').getStore();
//                                                                store.load({
//                                                                    params: {
//                                                                        endcodefirst: Ext.getCmp('endcodefirst').getValue()
//                                                                    }
//                                                                });
//                                                            }
//                                                        }
//                                                    );
//                                                  }
//                                              }
//                                        },
//                                        {
//                                            anchor: '100%',
//                                            xtype: 'textarea',
//                                            fieldLabel: '备注',
//                                            id: 'remark',
//                                            name: 'remark'
//                                        },
//
//                                        {
//                                            hidden: 'true',
//                                            anchor: '100%',
//                                            fieldLabel: 'phone',
//                                            id: 'recipientsmobilephone',
//                                            name: 'recipientsmobilephone'//,
//                                            //regex: /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/,
//                                            //regexText: '输入正确的电话号码'
//                                        },
//                                        {
//                                            hidden: 'true',
//                                            xtype: 'datefield',
//                                            fieldLabel: '通话开始时间',
//                                            anchor: '100%',
//                                            id: 'startcalltime',
//                                            name: 'startcalltime',
//                                            value: new Date(),
//                                            format: 'Y-m-d H:i:s'
//                                        },
//                                        {
//                                            hidden: 'true',
//                                            xtype: 'datefield',
//                                            fieldLabel: '通话结束时间',
//                                            anchor: '100%',
//                                            id: 'endcalltime',
//                                            name: 'endcalltime',
//                                            value: new Date(),
//                                            format: 'Y-m-d H:i:s'
//                                        },
//                                        {
//                                            hidden: 'true',
//                                            anchor: '100%',
//                                            fieldLabel: '通话时长',
//                                            id: 'timelength',
//                                            name: 'timelength',
//                                            xtype: 'numberfield',
//                                            regex: /^[0-9]*$/,
//                                            regexText: '请输入数字',
//                                            value: 0
//                                        },
//                                        {
//                                            hidden: 'true',
//                                            anchor: '100%',
//                                            fieldLabel: '客户编号',
//                                            id: 'custbh',
//                                            name: 'custbh',
//                                            value: Ext.getCmp('tel_sell_grid').getSelectionModel().getSelection()[0].get('id')
//                                        }
//                                    ],
//                                    buttonAlign: "center",
//                                    buttons: [
//                                        {
//                                            text: '保存',
//                                            iconCls: 'icon_save',
//                                            handler: function () {
//                                                //var form = this.up('form').getForm();
//                                                //if (form.isValid()) {
//                                                //    form.submit({
//                                                //        url: 'add_call_record_info',
//                                                //        //params: {
//                                                //        //    "id_list": id_list
//                                                //        //},
//                                                //        waitMsg: '正在保存数据...',
//                                                //        success: function (form, action) {
//                                                //            Ext.Msg.alert("成功", "发送成功!");
//                                                //            Ext.getCmp('tell_list_grid').getStore().reload();
//                                                //        },
//                                                //        failure: function (form, action) {
//                                                //            Ext.Msg.alert("失败", "发送失败!");
//                                                //        }
//                                                //    });
//                                                //}
//                                                Ext.Ajax.request({
//                                                    url: 'add_call_record_info',
//                                                    params: {
//                                                        "id": Ext.getCmp('id').value,
//                                                        "phone": Ext.getCmp('recipientsmobilephone').value,
//                                                        "endcodefirst": Ext.getCmp('endcodefirst').value,
//                                                        "endcodesec": Ext.getCmp('endcodesec').value,
//                                                        "startcalltime": Ext.getCmp('startcalltime').value,
//                                                        "endcalltime": Ext.getCmp('endcalltime').value,
//                                                        "timelength": Ext.getCmp('timelength').value,
//                                                        "remark": Ext.getCmp('remark').value,
//                                                        "custbh": Ext.getCmp('custbh').value
//                                                    },
//                                                    waitMsg: '正在标注数据...',
//                                                    success: function (form, action) {
//                                                        Ext.Msg.alert("成功", "发送成功!");
//                                                        Ext.getCmp('tell_list_grid').getStore().reload();
//                                                        Ext.getCmp('tel_sell_grid').getStore().reload();
//                                                    },
//                                                    failure: function (form, action) {
//                                                        Ext.Msg.alert("成功", "发送成功!");
//                                                    }
//                                                });
//                                            }
//                                        },
//                                        {
//                                            text: '重置',
//                                            iconCls: 'icon_reset',
//                                            handler: function () {
//                                                this.up('form').getForm().reset();
//                                            }
//                                        }
//                                    ]
//                                }
//
//                            ]
//                        }).show(Ext.get('call_records_add'));
//
//
//                    }
//                }
            ]
        }
    ],

    initComponent: function () {
        this.columns = [
            {text: '融资进度ID', width: 220, dataIndex: 'rop_id',hidden:true},
            {text: '融资服务ID',  width: 220, dataIndex: 'rop_mos_id',hidden:true},
            {text: '事项',  width: 220, dataIndex: 'rop_items'},
            {text: '具体内容', width: 220, dataIndex: 'rop_desc'},
            {text: '完成时间',  width: 220, dataIndex: 'rop_endt'},
            {text: '需解决问题', width: 220, dataIndex: 'rop_crb'},
            {text: '是否完成', width: 220, dataIndex: 'rop_stat'},
            {text: '备注', flex: 1, dataIndex: 'rop_remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'refi_rop',
                displayInfo: true,
                displayMsg: '第 {0} 到 {1} 条数据, 共{2}条',
                emptyMsg: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });


        this.callParent(arguments);
    }
});