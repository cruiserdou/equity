function showa() {
    var window = Ext.create('Ext.window.Window', {
        title: '新增企业',
        height: 600,
        width: 1100,
        layout: 'fit',
        constrain: true,
        items: {  // Let's put an empty grid in just to illustrate fit layout
            //xtype: 'grid',
            //border: false,
            //columns: [{header: 'World'}],                 // One header just for show. There's no data,
            //store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
            xtype: 'panel',
            title: '新增企业入口',
            border: false,
            layout: 'border',
            items: [

                {
                    border: true,
                    width: 1000,
                    xtype: 'applyf',
                    region: 'center'
                }
            ]
        }
    }).show(Ext.get('a_add_href'));
};

function showb() {
    var window = Ext.create('Ext.window.Window', {
        title: '已入库企业',
        height: 600,
        width: 1100,
        layout: 'fit',
        constrain: true,
        items: {

            xtype: 'panel',
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
    }).show(Ext.get('a_dis_href'));
};

var work_plan_tpl = [
    '<div id="enter_mgr" style="padding: 1.6em;">' ,
    '<div><a id="a_add_href" href="#" onclick="showa()">新增企业</a></div>' ,
    '<div><a id="a_dis_href" href="#" onclick="showb()">已入库企业</a></div>' ,
    '</div>'
];

Ext.define('App.view.enterprise.Enterprisef', {
    extend: 'Ext.tab.Panel',
    border: false,
    alias: 'widget.enterprisef',
    id: 'enterprisef_id',
    layout: 'border',
    listeners: {
        activate: function () {
            Ext.getCmp('grid_enterprise').getStore().load();
        },
        afterrender: function () {
        }
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',

                id: 'enterprisef_panel',
                region: 'center',
                autoScroll: true,
                split: true,
                collapseMode: 'mini',
                html: '<div>数据丢失，联系管理员！</div>',
                listeners: {
                    afterrender: function (_this) {
                        var data = {};
                        _this.updateDetail(data);
                    }
                },
                tpl: Ext.create('Ext.XTemplate', work_plan_tpl),
                updateDetail: function (data) {
                    this.tpl.overwrite(this.body, data);
                }
            },
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
            },
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