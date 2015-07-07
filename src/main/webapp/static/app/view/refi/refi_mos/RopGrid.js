var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_mos.RopGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mos_rop_grid',
    store: 'refi_rop',
    id: 'grid_refi_mos_top',
    columnLines: true,
    enableLocking: true,
    selModel: sm,
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
                            //_this.up('form').getForm().reset();
                            Ext.getCmp('grid_refi_mos_top').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    handler: function () {
                        var sm = Ext.getCmp('grid_refi_mos_top').getSelectionModel();
                        var rows = sm.getSelection();
                        if (rows.length <= 0) {
                            Ext.Msg.alert('提示', '请选择要删除的记录');
                        } else{

                                Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                                    if (btn == 'yes') {
                                        var row = rows[0];
                                        var rop_id = row.get('rop_id');
                                        Ext.Ajax.request({
                                            url: 'delete_refi_rop_info',
                                            params: {
                                                "rop_id": rop_id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_refi_mos_top').getStore().reload();
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
            ]
        }
    ],

    initComponent: function () {
        this.columns = [
            {text: '融资进度ID', width: 220, dataIndex: 'rop_id',hidden:true},
            {text: '融资服务ID',  width: 220, dataIndex: 'rop_mos_id',hidden:true},
            {text: '事项',  width: 150, dataIndex: 'rop_items'},
            {text: '具体内容', width: 150, dataIndex: 'rop_desc'},
            {text: '完成时间',  width: 120, dataIndex: 'rop_endt'},
            {text: '需解决问题', width: 120, dataIndex: 'rop_crb'},
            {text: '是否完成', width: 100, dataIndex: 'rop_stat'},
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