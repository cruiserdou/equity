//var work_plan_tpl = [
//    '<div id="enter_mgr" style="padding: 1.6em;">' +
//        '<div><a href="#">新增企业</a></div>' +
//        '<div><a href="#">已入库企业</a></div>' +
//    '</div>'
//];

Ext.define('App.view.enterprise.Enterprisef', {
    extend: 'Ext.tab.Panel',
    border: false,
    alias: 'widget.enterprisef',
    id :'enterprisef_id',
    layout: 'border',
    listeners: {
        activate: function () {
            //Ext.getCmp('grid_enterprise').getStore().load();
        },
        afterrender: function(){
        }
    },
    initComponent: function () {
            this.items = [
                //{
                //    xtype: 'panel',
                //    id: 'enterprisef_panel',
                //    region: 'center',
                //    autoScroll: true,
                //    split: true,
                //    collapseMode: 'mini',
                //    html: '<div>数据丢失，联系管理员！</div>',
                //    listeners: {
                //        afterrender: function (_this) {
                //            var data = {};
                //            _this.updateDetail(data);
                //        }
                //    },
                //    tpl: Ext.create('Ext.XTemplate', work_plan_tpl),
                //    updateDetail: function (data) {
                //        this.tpl.overwrite(this.body, data);
                //    }
                //}

                {
                    xtype: 'panel',
                    title: '新增企业入口',
                    border: false,
                    layout: 'border',
                    items: [

                        {
                            border: true,
                            xtype: 'applyf',
                            region: 'center'
                        }
                    ]
                }
                ,
                {
                    xtype: 'panel',
                    title: '已入库企业列表',
                    border: false,
                    layout: 'border',
                    items: [
                        {
                            xtype: 'enterprisef_query',
                            region: 'north'
                        },
                        {
                            xtype: 'enterprisef_grid',
                            region: 'center'
                        }
                    ]
                }
            ]
        this.callParent(arguments);
    }
});