Ext.define('App.view.msg.Msgf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.msgf',
    id :'msgf_id',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_msg').getStore().load();
        }
        //afterrender: function () {
        //    Ext.getCmp('grid_msg').getStore().load(
        //        {
        //            callback: function (records, operation, success) {
        //                if (success) {
        //                    var myarray = new Array();
        //                    for (var i = 0; i < Ext.getCmp('grid_msg').getStore().getCount(); i++) {
        //                        myarray[i] = Ext.getCmp('grid_msg').getStore().getAt(i).getData();
        //                    }
        //                    var msg_panel = Ext.getCmp('msgf_info');
        //                    msg_panel.tpl = Ext.create('Ext.XTemplate', msg_tpl);
        //                    msg_panel.tpl.overwrite(msg_panel.body, myarray[0]);
        //                }
        //            }
        //        }
        //    );
        //}
    },
    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [
            {
                xtype: 'msgf_query',
                region: 'north'
            },
            {
                xtype: 'msgf_grid',
                region: 'center'
            }
            //{
            //    xtype: 'panel',
            //    id: 'msgf_info',
            //    autoScroll: true,
            //    region: 'east',
            //    width: 500,
            //    split: true,
            //    collapseMode: 'mini',
            //    html: '<div>数据丢失，联系管理员！</div>',
            //    listeners: {
            //        afterrender: function (_this) {
            //            var data = {};
            //            _this.updateDetail(data);
            //        }
            //    },
            //    tpl: Ext.create('Ext.XTemplate', msg_tpl),
            //    updateDetail: function (data) {
            //        this.tpl.overwrite(this.body, data);
            //    }
            //}
        ]
        this.callParent(arguments);
    }
});

//var msg_tpl = [
//    '<div id="main_msg" style="padding: 2em;">' +
//    '<h2 style="margin-top: 0; color: #666699;">请假条<span style="margin-left: 2em;">({stat})</span><h2><hr>' +
//    "<tpl for='.'>" +
//    '<div class="workplan_content" style="border-bottom: 1px solid #ccc; margin: 10px 0 10px 0;padding: 0 0 10px 0;">' +
//    '<h3 style="color: #C43926;font-size: 16px;">{title}</h3>' +
//    '<div style="font-size: 14px; color: #66cccc; border: 2px solid #66cccc;border-radius: 1em;text-align: center; padding: 0.3em 0;">开始：{fdate}<span style="margin-left: 1em;">结束：{edate}</span></div>' +
//    '<h3 style="color: #cc6699;font-size: 16px;">请假类型:</h3><p style="font-size: 14px;">{type}</p>' +
//    '<h3 style="color: #99cc99;font-size: 16px;">请假事由:</h3><p style="font-weight: normal; font-size: 14px; color: #999999;">{reason}</p>' +
//    '<h3 style="color: #ff9999;font-size: 16px;">状态:</h3>{stat}' +
//    '<h3 style="color: #99cccc;font-size: 16px;">备注:</h3>{remark}<br/>' +
//    '<div style="color: #999999;font-size: 14px; margin: 10px 0 0 0;">录入日期：{rtdate}' +
//    '<a style="margin:0 10px"> | 录入人：{user_id}</a>' +
//    '</div>' +
//    '</div>' +
//    "</tpl>" +
//    '</div>'
//]
 