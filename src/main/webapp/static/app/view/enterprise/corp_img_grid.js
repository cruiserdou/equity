
Ext.define('App.view.enterprise.corp_img_grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.corp_img_gridf',
    store: 'corp_img',
    id: 'grid_corp_img',
    columnLines: true,
    enableLocking: true,
    listeners: {
        afterrender: function(){
            Ext.getCmp('grid_corp_img').getStore().load();
        }
    },
    initComponent: function () {
        this.columns = [
            {text: "文件名", flex: 1, dataIndex: 'img_name'},
            {text: "文件名", flex: 1, dataIndex: 'id', hidden: true},
            {text: "类别", flex: 1, dataIndex: 'img_type', hidden: true},
            {
                text: '删除', width: 50, dataIndex: 'id',
                renderer: function (val) {
                    return "<span style='color: #FF4444;' onclick='delete_corp_img(" + val + ")' >删除</span>";
                }
            },
            {
                text: '预览', width: 50, dataIndex: 'img_name',
                renderer: function (v, m, record) {
                    priview_file = "/equity/static/upload/annex/" + record.get('img_name');
                    return "<span style='color: #FF4444;' onclick='view_img(\"" + priview_file + "\")' >预览</span>"

                }
            },
            {
                text: '下载', width: 50, dataIndex: 'img_name',
                renderer: function (v, m, record) {

                    var s_file = "/equity/static/upload/annex/" + record.get('img_name');
                    return '<a target="_blank" href=' + s_file + ' >下载</a>'
                }
            }
        ];

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_img',
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

function view_img(file){
    Ext.create('widget.window', {
        title: '图片预览',
        width: 435,
        height: 450,
        modal: true,
        border: false,
        layout: 'fit',
        items: [
            {
                xtype: 'form',
                frame: true,
                bodyPadding: 16,
                defaults: {
                    labelWidth: 50
                },
                items: [
                    {
                        xtype: 'box', //或者xtype: 'component',
                        id: 'logoPic',
                        width: 380, //图片宽度
                        height: 380, //图片高度
                        align: 'center',
                        autoEl: {
                            id: 'show',
                            tag: 'img',    //指定为img标签
                            complete: 'off',
                            src: file    //指定url路径
                        }
                    }
                ]
            }
        ]
    }).show(Ext.get(corp_update_img_id));
}


function delete_corp_img(id){
    Ext.Ajax.request({
        url: 'delete_corp_img_info',
        params: {
            "id": id
        },
        waitMsg: '正在删除附件...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "删除成功!");
            Ext.getCmp('grid_corp_img').getStore().reload();
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "删除失败!");
        }
    });
}