Ext.define('App.view.enterprise.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.enterprisef_query',
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
                    id: 'enterprise_new_add',
                    text: '添加',
                    glyph: 0xf0f6,
                    listeners: {
                        click: function () {

                                //创建模板
                            var apply_edits = new Ext.XTemplate(
                                '<div class="wrap_center">' +
                                '<h2>企业信息查看</h2>' +
                                '<table class="enter_table" id="table_base">' +
                                '<tr>' +
                                '<th class="table_header" colspan="4">基本信息</th>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>营业执照号码<span style="color: red">*</span></th>' +
                                '<td><input id="buslicno"  name="buslicno"  type="text" value="{buslicno}"/></td>' +
                                '<th>企业名称</th>' +
                                '<td><input id="name" name="name"  type="text" value="{name}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>单位类别</th>' +
                                '<td><input id="unit" name="unit"  type="text" value="{unit}"/></td>' +
                                '<th>法定代表人</th>' +
                                '<td><input id="legrep" name="legrep"  type="text" value="{legrep}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>地域</th>' +
                                '<td><input id="region" name="region"  type="text" value="{region}"/></td>' +
                                '<th>公司简称</th>' +
                                '<td><input id="nos" name="nos"  type="text" value="{nos}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>邮政编码</th>' +
                                '<td><input id="postal" name="postal"  type="text" value="{postal}"/></td>' +
                                '<th>企业性质</th>' +
                                '<td><input id="nature" name="nature"  type="text" value="{nature}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>注册资本（万元）</th>' +
                                '<td><input id="regcap" name="regcap"  type="text" value="{regcap}"/></td>' +
                                '<th>注册日期</th>' +
                                '<td><input id="regdt" name="regdt"  type="text" value="{regdt}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>营业期限自</th>' +
                                '<td><input id="bustermfdt" name="bustermfdt"  type="text" value="{bustermfdt}"/></td>' +
                                '<th>营业期限至</th>' +
                                '<td><input id="bustremtdt" name="bustremtdt"  type="text" value="{bustremtdt}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>挂牌代码</th>' +
                                '<td><input id="listcode" name="listcode"  type="text" value="{listcode}"/></td>' +
                                '<th>挂牌价格</th>' +
                                '<td><input id="listprice" name="listprice"  type="text" value="{listprice}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>注册地址</th>' +
                                '<td><input id="regaddr" name="regaddr"  type="text" value="{regaddr}"/></td>' +
                                '<th>员工人数</th>' +
                                '<td><input id="staffnum" name="staffnum"  type="text" value="{staffnum}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>办公地址</th>' +
                                '<td colspan="3"><input id="offaddr" name="offaddr"  type="text" value="{offaddr}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>经营范围</th>' +
                                '<td colspan="3"><textarea id="scope" name="scope"  type="text" value="{scope}"></textarea></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>主营业务</th>' +
                                '<td colspan="3"><textarea id="mbus" name="mbus"  type="text" value="{mbus}"></textarea></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>企业简介</th>' +
                                '<td colspan="3"><textarea id="eprofile" name="eprofile"  type="text" value="{eprofile}"></textarea></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>企业照片资料</th>' +
                                '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>' +
                                '</tr>' +
                                '</table>' +
                                    //<textarea disabled style="background:#FFFFFF" contenteditable="false" rows="3" name="remark"  type="text" value="""></textarea>

                                '<table class="enter_table" id="table_sh">' +
                                '<tr>' +
                                '<th class="table_header" colspan="8">股东信息</th>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>股东类型</th>' +
                                '<th>股东</th>' +
                                '<th>证照/证件类型</th>' +
                                '<th>证照/证件号码</th>' +
                                '<th>持股数量</th>' +
                                '<th>流通数量</th>' +
                                '<th>冻结数量</th>' +
                                '<th>详情</th>' +
                                '</tr>' +
                                '<tpl  for="list_sh">' +
                                '<tr>' +
                                '<td>{shtype}</td>' +
                                '<td>{shname}</td>' +
                                '<td>{shdoctype}</td>' +
                                '<td>{shdocnum}</td>' +
                                '<td>{shareholdnum}</td>' +
                                '<td>{currencynum}</td>' +
                                '<td>{freezenum}</td>' +
                                '<td>{remark}</td>' +
                                '</tr>' +
                                '</tpl>' +
                                '</table>' +



                                '<table class="enter_table" id="table_link">' +
                                '<tr>' +
                                '<th class="table_header" colspan="4">法定代表人基本信息</th>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>职务</th>' +
                                '<td><input id="post" name="post"  type="text" value="{post}"/></td>' +
                                '<th>证件类型</th>' +
                                '<td><input id="doctype" name="doctype"  type="text" value="{doctype}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>姓名</th>' +
                                '<td><input id="contact" name="contact"  type="text" value="{contact}"/></td>' +
                                '<th>证件号码</th>' +
                                '<td><input id="docnum" name="docnum"  type="text" value="{docnum}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>手机</th>' +
                                '<td><input id="phone" name="phone"  type="text" value="{phone}"/></td>' +
                                '<th>传真</th>' +
                                '<td><input id="fax" name="fax"  type="text" value="{fax}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>E-mail</th>' +
                                '<td><input id="email" name="email"  type="text" value="{email}"/></td>' +
                                '<th>QQ</th>' +
                                '<td><input id="qq" name="qq"  type="text" value="{qq}"/></td>' +
                                '</tr>' +
                                '</table>' +


                                '<table class="enter_table" id="table_acount">' +
                                '<tr>' +
                                '<th class="table_header" colspan="4">国民经济行业分类信息</th>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>行业一级分类</th>' +
                                '<td><input id="indclass1" name="indclass1"  type="text" value="{indclass1}"/></td>' +
                                '<th>行业二级分类</th>' +
                                '<td><input id="indclass2" name="indclass2"  type="text" value="{indclass2}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>行业三级分类</th>' +
                                '<td><input id="indclass3" name="indclass3"  type="text" value="{indclass3}"/></td>' +
                                '<th>法人代表</th>' +
                                '<td><input id="indclass4" name="indclass4"  type="text" value="{indclass4}"/></td>' +
                                '</tr>' +
                                '</table>' +



                                '<table  class="enter_table" id="table_ocompay">' +
                                '<tr>' +
                                '<th class="table_header" colspan="4">企业维护信息</th>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>企业来源</th>' +
                                '<td><input id="esource" name="esource"  type="text" value="{esource}"/></td>' +
                                '<th>推荐人</th>' +
                                '<td><input id="referee" name="referee"  type="text" value="{referee}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>企业来源详情</th>' +
                                '<td colspan="3"><input id="esourcedesc" name="esourcedesc"  type="text" value="{esourcedesc}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>推荐日期</th>' +
                                '<td><input id="recomdt" name="recomdt"  type="text" value="{recomdt}"/></td>' +
                                '<th>企业维护人</th>' +
                                '<td><input id="emaint" name="emaint"  type="text" value="{emaint}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>托管状态</th>' +
                                '<td><input id="trusteeship" name="trusteeship"  type="text" value="{trusteeship}"/></td>' +
                                '<th>挂牌状态</th>' +
                                '<td><input id="listst" name="listst"  type="text" value="{listst}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>企业等级</th>' +
                                '<td><input id="eclass" name="eclass"  type="text" value="{eclass}"/></td>' +
                                '<th>企业维护状态</th>' +
                                '<td><input id="maintain" name="maintain"  type="text" value="{maintain}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>所属后备库</th>' +
                                '<td><input id="reserve" name="reserve"  type="text" value="{reserve}"/></td>' +
                                '<th>联系人</th>' +
                                '<td><input id="contacter" name="contacter"  type="text" value="{contacter}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>部门</th>' +
                                '<td><input id="dept" name="dept"  type="text" value="{dept}"/></td>' +
                                '<th>职务</th>' +
                                '<td><input id="psotion" name="psotion"  type="text" value="{psotion}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>证件类型</th>' +
                                '<td><input id="edoctype" name="edoctype"  type="text" value="{edoctype}"/></td>' +
                                '<th>证件号码</th>' +
                                '<td><input id="edocnum" name="edocnum"  type="text" value="{edocnum}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>固定电话</th>' +
                                '<td><input id="etel" name="etel"  type="text" value="{etel}"/></td>' +
                                '<th>手机号码</th>' +
                                '<td><input id="ephone" name="ephone"  type="text" value="{ephone}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>传真</th>' +
                                '<td><input id="efax" name="efax"  type="text" value="{efax}"/></td>' +
                                '<th>E-mail</th>' +
                                '<td><input id="eemail" name="eemail"  type="text" value="{eemail}"/></td>' +
                                '</tr>' +
                                '<tr>' +
                                '<th>QQ</th>' +
                                '<td><input id="eqq" name="eqq"  type="text" value="{eqq}"/></td>' +
                                '<th>备注</th>' +
                                '<td><input id="remark" name="remark"  type="text" value="{remark}"/></td>' +
                                '</tr>' +
                                '</table>' +


                                '</div>' +
                                '<div style="position: fixed; top: 7em; right: 6em">' +
                                '<ul>' +
                                '<li><a href="#table_base">基本信息</a></li>' +
                                '<li><a href="#table_sh">主要股东</a></li>' +
                                '<li><a href="#table_link">法人信息</a></li>' +
                                '<li><a href="#table_acount">行业分类</a></li>' +
                                '<li><a href="#table_ocompay">企业维护信息</li>' +
                                '</ul>' +
                                '</div>'+

                                '</div>' +
                                '<a href="#"  onclick="obt_apply_update(\'{card}\')">保存</a>'+
                            '</div>'
                            //'<a href="#" onclick="cust_save()" class="xwq_btn">保存</a>'
                            );
                                //呈现组件
                                var mypanel = new Ext.form.FormPanel({
                                    id: "mypanel",
                                    width: 820,
                                    frame: false,
                                    height: 600,
                                    border: false,
                                    bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                                    renderTo: Ext.getBody()
                                });
                            apply_edits.overwrite(mypanel.body, {});
                                var editWindow = new Ext.Window({
                                    layout: 'fit',
                                    width: 830,
                                    height: 650,
                                    modal: true,
                                    title: '企业信息',
                                    maximized: true,
                                    maximizable: true,
                                    items: [mypanel],

                                });
                                editWindow.show(Ext.get('body'));

                            }
                        }
                }, '-',
                //{
                //    text: '编辑',
                //    id: 'enterprise_edit',
                //    glyph: 0xf044,
                //    handler: function(){
                //        var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                //        var record = sm.getSelection()[0];
                //
                //        if(!record){
                //            Ext.enterprise.alert('信息','请选择要编辑的数据');
                //            return;
                //        }
                //        var record = sm.getSelection()[0];
                //
                //        var editForm = null;
                //        var editWindow = null;
                //        editForm = new Ext.form.FormPanel({
                //            frame: true,
                //            fieldDefaults: {
                //                labelAlign: 'right',
                //                labelWidth: 70
                //            },
                //            defaults: {
                //                xtype: 'textfield'
                //            },
                //            items: [
                //                {
                //                    hidden: 'true',
                //                    fieldLabel: 'ID',
                //                    name: 'id'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '企业名称',
                //                    name: 'name'
                //                },
                //                {
                //                    fieldLabel: '企业简称',
                //                    name: 'nos'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '企业类型',
                //                    name: 'etype'
                //                },
                //                {
                //                    fieldLabel: '挂牌代码',
                //                    name: 'listcode'
                //                },
                //                {
                //                    fieldLabel: '挂牌价格',
                //                    name: 'listprice'
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '企业性质',
                //                    name: 'nature',
                //                    xtype: 'combobox',
                //                    autoRender: true,
                //                    autoShow: true,
                //                    store: 'dicts_etype',
                //                    displayField: 'fieldvaldis',
                //                    valueField: 'fieldvaldis',
                //                    emptyText: '企业性质',
                //                },
                //                {
                //                    allowBlank: false,
                //                    fieldLabel: '营业执照号',
                //                    name: 'buslic'
                //                },
                //                {
                //                    fieldLabel: '维护状态',
                //                    name: 'status',
                //                    xtype: 'combobox',
                //                    autoRender: true,
                //                    autoShow: true,
                //                    store: 'dicts_mtstate',
                //                    displayField: 'fieldvaldis',
                //                    valueField: 'fieldvaldis',
                //                    emptyText: '维护状态',
                //                },
                //                {
                //                    fieldLabel: '所属后备库',
                //                    name: 'reserve',
                //                    xtype: 'combobox',
                //                    autoRender: true,
                //                    autoShow: true,
                //                    store: 'dicts_reservedb',
                //                    displayField: 'fieldvaldis',
                //                    valueField: 'fieldvaldis',
                //                    emptyText: '所属后备库'
                //                },
                //                {
                //                    xtype: 'datefield',
                //                    fieldLabel: '注册时间',
                //                    allowBlank: false,
                //                    name: 'regdate',
                //                    value: new Date(),
                //                    format: 'Y-m-d'
                //                },
                //                {
                //                    fieldLabel: '是否已标记',
                //                    name: 'markstat'
                //                },
                //                {
                //                    fieldLabel: '完成回访状态',
                //                    name: 'visitstat'
                //                },
                //                {
                //                    fieldLabel: '备注',
                //                    name: 'remark'
                //                }
                //            ],
                //            buttonAlign : "center",
                //            buttons: [
                //                {
                //                    text: '保存',
                //                    iconCls: 'icon_save',
                //                    handler: function(){
                //                        var form = this.up('form').getForm();
                //                        if (form.isValid()){
                //                            form.submit({
                //                                url: 'update_enterprise_info',
                //                                waitenterprise: '正在保存数据...',
                //                                success: function(form, action){
                //                                    Ext.Msg.alert("成功", "数据保存成功!");
                //                                    Ext.getCmp('grid_enterprise').getStore().reload();
                //                                },
                //                                failure: function(form, action){
                //                                    Ext.Msg.alert("失败", "数据保存失败!");
                //                                }
                //                            });
                //                        }
                //                    }
                //                },
                //                {
                //                    text: '重置',
                //                    iconCls: 'icon_reset',
                //                    handler: function () {
                //                        this.up('form').getForm().reset();
                //                    }
                //                }
                //            ]
                //        });
                //        editWindow = new Ext.Window({
                //            layout: 'fit',
                //            width: 300,
                //            height: 450,
                //            modal: true,
                //            title: '修改信息',
                //            items: [editForm]
                //        });
                //        editWindow.show(Ext.get('enterprise_edit'));
                //        editForm.getForm().loadRecord(record);
                //    }
                //},'-',
                {
                    text: '刷新',
                    glyph: 0xf021,
                    listeners: {
                        click: function(_this){
                            _this.up('form').getForm().reset();
                            Ext.getCmp('grid_enterprise').getStore().load();
                        }
                    }
                },'-',
                {
                    text: '删除',
                    glyph: 0xf014,
                    handler: function () {
                        Ext.enterprise.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_enterprise_info',
                                            params: {
                                                "id": id
                                            },
                                            waitenterprise: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_enterprise').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.enterprise.alert('提示', '请选择要删除的记录');
                                }
                            }
                        });
                    }
                }
            ]
        }
    ],
    //items: [
    //    {
    //        xtype: 'panel',
    //        columnWidth: .4,
    //        border: false,
    //        defaultType: 'textfield',
    //        layout: {
    //            type: 'vbox',
    //            align: 'strech',
    //            pack: 'start'
    //        },
    //        items: [
    //            {
    //                allowBlank: true,
    //                fieldLabel: '公司名称',
    //                id: 'query_enterprise_name',
    //                emptyText: '公司名称'
    //            },
    //            {
    //                allowBlank: true,
    //                fieldLabel: '公司简称',
    //                id: 'query_enterprise_nos',
    //                emptyText: '公司简称'
    //            }
    //
    //        ]
    //    },
    //    {
    //        xtype: 'panel',
    //        columnWidth: .4,
    //        border: false,
    //        defaultType: 'textfield',
    //        layout: {
    //            type: 'vbox',
    //            align: 'strech',
    //            pack: 'start'
    //        },
    //        items: [
    //            {
    //                fieldLabel: '维护状态',
    //                id: 'query_enterprise_status',
    //                name: 'status',
    //                xtype: 'combobox',
    //                autoRender: true,
    //                autoShow: true,
    //                store: 'dicts_mtstate',
    //                displayField: 'fieldvaldis',
    //                valueField: 'fieldvaldis',
    //                emptyText: '维护状态'
    //            },
    //            {
    //                id: 'query_enterprise_reserve',
    //                fieldLabel: '所属后备库',
    //                name: 'reserve',
    //                xtype: 'combobox',
    //                autoRender: true,
    //                autoShow: true,
    //                store: 'dicts_reservedb',
    //                displayField: 'fieldvaldis',
    //                valueField: 'fieldvaldis',
    //                emptyText: '所属后备库'
    //            }
    //
    //        ]
    //    }
    //    //{
    //    //    xtype: 'panel',
    //    //    border: false,
    //    //    items: [
    //    //        {
    //    //            xtype: 'button',
    //    //            iconCls: 'icon_search',
    //    //            text: '查找',
    //    //            listeners: {
    //    //                click: function(){
    //    //                    var store = Ext.getCmp('grid_enterprise').getStore();
    //    //                    store.load({
    //    //                        params: {
    //    //                            name: Ext.getCmp('query_enterprise_name').getValue(),
    //    //                            nos: Ext.getCmp('query_enterprise_nos').getValue(),
    //    //                            reserve: Ext.getCmp('query_enterprise_reserve').getValue(),
    //    //                            status: Ext.getCmp('query_enterprise_status').getValue()
    //    //
    //    //                        }
    //    //                    });
    //    //                }
    //    //            }
    //    //        },
    //    //        {
    //    //            xtype: 'panel',
    //    //            height: 10,
    //    //            border: false
    //    //        },
    //    //        {
    //    //            xtype: 'button',
    //    //            iconCls: 'icon_reset',
    //    //            text: '重置',
    //    //            listeners: {
    //    //                click: function(_this){
    //    //                    _this.up('form').getForm().reset();
    //    //                    Ext.getCmp('grid_enterprise').getStore().load();
    //    //                }
    //    //            }
    //    //        }
    //    //    ]
    //    //}
    //],


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
                    fieldLabel: '公司名称',
                    id: 'query_enterprise_name',
                    emptyText: '公司名称'
                },
                {
                    allowBlank: true,
                    fieldLabel: '公司简称',
                    id: 'query_enterprise_nos',
                    emptyText: '公司简称'
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
                        click: function() {
                            var store = Ext.getCmp('grid_enterprise').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_nos').getValue()
                                    //reserve: Ext.getCmp('query_enterprise_reserve').getValue(),
                                    //status: Ext.getCmp('query_enterprise_status').getValue()

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
                            Ext.getCmp('grid_enterprise').getStore().load();
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



//function pub_upload_file(id) {
//
//
//
//    Ext.create('widget.window', {
//        title: '上传照片',
//        modal: true,
//        iconCls: 'icon_add',
//        id:'uploadpic_windows',
//        width: 270,
//        height: 120,
//        border: false,
//        layout: 'fit',
//        defaults: {
//            width: 200,
//            allowBlank: false
//        },
//        items: [
//            {
//                xtype: 'form',
//                frame: true,
//                bodyPadding: 10,
//                fieldDefaults: {
//                    labelAlign: 'left',
//                    labelWidth: 70
//                },
//                defaults: {
//                    labelAlign: 'right',
//                    xtype: 'textfield'
//                },
//                items: [
//                    {
//                        xtype: 'filefield',
//                        labelWidth: 60,
//                        name: 'file',
//                        fieldLabel: '照片上传',
//                        buttonText: '选择文件'
//                    }
//                ],
//                buttonAlign: "center",
//                buttons: [
//                    {
//                        text: '保存',
//                        iconCls: 'icon_save',
//                        handler: function () {
//                            var cust_id = document.getElementById('apply_form_id_card').value;
//                            if (cust_id != "") {
//                                var form = this.up('form').getForm();
//                                if (form.isValid()) {
//                                    form.submit({
//                                        url: 'upload_file_xwq',
//                                        method: 'POST',
//                                        params: {
//                                            card_id: cust_id
//                                        },
//                                        waitMsg: '正在保存...',
//                                        success: function (form, action) {
//                                            Ext.Msg.alert("成功", "保存成功!");
//                                            document.getElementById('apply_form_img').src = 'static/upload/'
//                                            + action.result.message;
//                                            photo_file=action.result.message;
//                                            Ext.getCmp('uploadpic_windows').close();
//                                        },
//                                        failure: function (form, action) {
//                                            Ext.Msg.alert("失败", "保存失败!");
//                                        }
//                                    });
//                                }
//                            } else {
//                                Ext.Msg.alert("提示", "请先输入身份证号！");
//                            }
//                        }
//                    },
//                    {
//                        text: '重置',
//                        iconCls: 'icon_reset',
//                        handler: function () {
//                            this.up('form').getForm().reset();
//                        }
//                    }
//                ]
//            }
//
//        ]
//    }).show(Ext.get(id));
//};
