var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refi.refi_rop.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refi_ropf_grid',
    store: 'refi_rop',
    selModel: sm,
    id :'grid_refi_rop',

    listeners: {


        'itemdblclick': function (view, record, item, index, e) {
        var editForm = new Ext.form.FormPanel({
            frame: true,

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 90
            },
            defaults: {
                readOnly: true,
                xtype: 'textfield'
            },

            items: [
                {
                    hidden: 'true',
                    fieldLabel: 'ID',
                    name: 'id'
                },

                {
                    anchor: '100%',
                    fieldLabel: '活动主题',
                    name: 'theme'
                },

                {
                    xtype: 'datefield',
                    fieldLabel: '开始时间',
                    anchor: '100%',
                    name: 'starttime',
                    format: 'Y-m-d H:i:s',
                    allowBlank:false

                },
                {
                    xtype: 'datefield',
                    fieldLabel: '结束时间',
                    anchor: '100%',
                    name: 'endtime',
                    format: 'Y-m-d H:i:s',
                    allowBlank:false

                },
                {
                    anchor: '100%',
                    xtype: 'textarea',
                    fieldLabel: '活动内容',
                    name: 'content'
                },
                {
                    xtype: 'box',
                    id : 'logoPic',
                    width: 100,
                    height: 150,
                    name:'photo',
                    autoEl: {
                        id: 'show',
                        tag: 'img',
                        complete : 'off',
                        src: 'static/upload/activity/'+record.data['photo']
                    }
                },
                {
                    xtype: 'datefield',
                    fieldLabel: '录入时间',
                    anchor: '100%',
                    name: 'startdate',
                    format: 'Y-m-d H:i:s',
                    allowBlank:false

                },

                {
                    allowBlank: false,
                    anchor: '100%',
                    fieldLabel: '活动状态',
                    name: 'state'
                }

            ]

        });
        var editWindow = new Ext.Window({
            layout: 'fit',
            width: 300,
            height: 400,
            title: '融资进度',
            items: [editForm]
        });
        editWindow.show(Ext.get(''));
        editForm.getForm().loadRecord(record);
    }
    },

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