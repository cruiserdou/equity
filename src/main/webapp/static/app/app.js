Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.container.Viewport');
Ext.require([
    'Ext.chart.*',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.form.*',
    'Ext.selection.CheckboxModel'
]);


/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('app.view.main.region.Top', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.maintop', // 定义了这个组件的xtype类型为maintop
    initComponent: function () {
        Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
        this.callParent(arguments);
    },

    height: 40,

    items: [

        {
            text: '甘肃中小企业信息管理系统'
        },
        {
            text: '首页',
            glyph: 0xf015
        },
        {
            text: '帮助',
            glyph: 0xf059
        },
        {
            text: '关于',
            id: 'main-bar-about',
            glyph: 0xf06a,
            handler: function () {
                Ext.create('widget.window', {
                    title: '关于',
                    modal: true,
                    glyph: 0xf06a,
                    width: 380,
                    height: 240,
                    border: false,
                    layout: 'fit',
                    defaults: {
                        width: 200,
                        allowBlank: false
                    },
                    items: [
                        {
                            xtype: 'panel'
                        }
                    ]
                }).show(Ext.get('main-bar-about'));
            }
        },

        {
            xtype: 'label',
            width: 170,
            id: 'login_info_dept_id',
            listeners: {
                afterrender: function () {
                    var myStore = Ext.create('Ext.data.Store', {
                        model: 'App.model.syj_users',
                        proxy: {
                            type: 'ajax',
                            url: 'obtain_login_user',
                            actionMethods: {
                                read: 'POST'
                            },
                            reader: {
                                type: 'json',
                                root: 'list'
                            }
                        },
                        autoLoad: false
                    });

                    myStore.load({
                        callback: function (records, operation, success) {
                            if (success) {
                                Ext.getCmp('login_info_dept_id').setText("【用户：" + records[0].get("name") + "】");
                            }
                        }
                    });
                }
            }
        },
        {
            xtype: 'label',
            text: ' 【 ' + Ext.Date.format(new Date(), 'Y年m月d日') + ' 】 '
        },
        '->',
        {
            text: '修改密码',
            id: 'main-bar-password',
            glyph: 0xf084,
            handler: function () {
                var channel_update = Ext.create('Ext.form.Panel', {
                    frame: true,
                    bodyPadding: 10,
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
                            name: 'old_pass',
                            fieldLabel: '原密码',
                            inputType: 'password',
                            emptyText: '必填',
                            allowBlank: false
                        },
                        {
                            id: 'm_p_1',
                            name: 'new_pass1',
                            fieldLabel: '输入新密码',
                            inputType: 'password',
                            emptyText: '必填',
                            allowBlank: false
                        },
                        {
                            id: 'm_p_2',
                            name: 'new_pass2',
                            fieldLabel: '新密码确认',
                            inputType: 'password',
                            emptyText: '必填',
                            allowBlank: false
                        }
                    ],
                    buttonAlign: "center",
                    buttons: [
                        {
                            text: '确定',
                            iconCls: 'icon_save',
                            handler: function () {
                                if (Ext.getCmp('m_p_1').getValue() != Ext.getCmp('m_p_2').getValue()) {
                                    Ext.Msg.alert("提示", "新密码输入不一致！请重新输入。");
                                    return;
                                }
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        method: 'POST',
                                        url: 'update_pass',
                                        waitMsg: '正在保存...',
                                        success: function () {
                                            Ext.Msg.alert("成功", "密码修改成功!");
                                            form.reset();
                                        },
                                        failure: function () {
                                            Ext.Msg.alert("失败", "密码修改失败!</br>原密码输入错误。");
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
                Ext.create('widget.window', {
                    title: '修改登录密码',
                    modal: true,
                    glyph: 0xf084,
                    width: 270,
                    height: 170,
                    border: false,
                    layout: 'fit',
                    defaults: {
                        width: 200,
                        allowBlank: false
                    },
                    items: [channel_update]
                }).show(Ext.get('main-bar-password'));
            }
        },
        {
            text: '注销',
            glyph: 0xf011,
            handler: function () {
                //定义Ajax请求，删除session

                window.history.back(-1);
            }
        }
    ]

});

var detailsPanel = {
    id: 'details-panel',
    iconCls: "User",
    collapsible: true, // 是否折叠
    title: '信息',
    region: 'center',
    bodyStyle: 'padding-bottom:15px;background:#eee;',
    autoScroll: true,
    html: '<p class="details-info">用户名:江江<br />部&nbsp;&nbsp;&nbsp;门：管理部<br />登录IP：156.15.26.101</p>'
};


//var buildTree = function(json) {
//    return Ext.create('Ext.tree.Panel', {
//        rootVisible : false,
//        border : false,
//        lines:false,
//        autoScroll:true,
//        store : Ext.create('Ext.data.TreeStore', {
//            model : model_tree,
//            root : {
//                expanded : true,
//                children : json.children
//            }
//        }),
//        listeners : {
//            'itemclick' : function(view, record, item, index, e) {
//                var leaf = record.get('leaf');
//                //var typeId = record.get("TYPE_ID");
//                var text = record.get('text');
//                var icon = record.get('iconCls');
//                var url = record.get('url');
//                if (leaf) { //判断是否点中
//                    var panel = Ext.create('Ext.panel.Panel',{
//                        title : text,
//                        closable : true,
//                        iconCls : icon,
//                        html : '<iframe width="100%" height="100%" frameborder="0" src='+url+'></iframe>'
//                    });
//                    rightPanel.add(panel);
//                    rightPanel.setActiveTab(panel);
//                }
//            },
//            scope : this
//        }
//    });
//};

//var tree = Ext.create("Ext.panel.Panel", {
//    height : '70%',
//    region : 'north',
//    layout : {
//        // layout-specific configs go here
//        type : 'accordion',
//        titleCollapse : true,
//        animate : true,// 动画切换效果
//        activeOnTop : false
//        // 折叠展开是否改变菜单顺序
//    },
//    layoutConfig : {
//        animate : true
//    },
//    split : true
//});

Ext.application({
    name: 'App',
    appFolder: 'static/app',
    initComponent: function () {
        Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
        this.callParent(arguments);
    },
    controllers: ['Tabitem', 'Frame'],
    launch: function () {


        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'maintop',
                    margin: '0 0 3 0',
                    region: 'north' // 把他放在最顶上
                },
                {
                    xtype: 'navPanel',
                    region: 'west',
                    collapsible: true,
                    width: 200

                },
                //{
                //    layout : 'border',
                //    title : '菜单',
                //    id : 'layout-browser',
                //    region : 'west',
                //    border : false,
                //    split : true,
                //    margins : '2 0 5 5',
                //    width : 200,
                //    minSize : 100,
                //    maxSize : 500,
                //    autoScroll : false,
                //    collapsible : true, // 是否折叠
                //    //iconCls : "Application",
                //    items : [ tree, detailsPanel ]
                //},
                {
                    forceFit: true,
                    xtype: 'tabPanel',
                    region: 'center',
                    layout: 'border'
                }
            ]
            //listeners : {
            //    afterrender : function() {
            //        Ext.getBody().mask('正在加载系统菜单....');
            //        Ext.Ajax.request({
            //            url:'../../menu/showMenu',
            //            success : function(response) {
            //                Ext.getBody().unmask();
            //                var json = Ext.JSON.decode(response.responseText);
            //                if(json.code == 'OK'){
            //                    Ext.each(json.data, function(el) {
            //                        var panel = Ext.create('Ext.panel.Panel', {
            //                            id : el.id,
            //                            title : el.text,
            //                            iconCls:el.iconCls,
            //                            leaf	:el.leaf,
            //                            layout : 'fit'
            //                        });
            //                        panel.add(buildTree(el));
            //                        tree.add(panel);
            //                    });
            //                }else{}
            //            },failure : function(request) {
            //                Ext.MessageBox.show({
            //                    title : '操作提示',
            //                    msg : "连接服务器失败",
            //                    buttons : Ext.MessageBox.OK,
            //                    icon : Ext.MessageBox.ERROR
            //                });
            //            },
            //            method : 'post'
            //        });
            //    }
            //}
        });
    }
});