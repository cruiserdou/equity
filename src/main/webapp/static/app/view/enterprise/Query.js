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
                                    '<td colspan="3"><input id="scope" name="scope"  type="text" value="{scope}"/></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td colspan="3"><input id="mbus" name="mbus"  type="text" value="{mbus}"/></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>企业简介</th>' +
                                    '<td colspan="3"><input id="eprofile" name="eprofile"  type="text" value="{eprofile}"/></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>企业照片资料</th>' +
                                    '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>' +
                                    '</tr>' +
                                    '</table>' +


                                    '<table class="enter_table" id="table_link">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">联系方式</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>国际</th>' +
                                    '<td>中国</td>' +
                                    '<th>省份</th>' +
                                    '<td>北京</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>城市</th>' +
                                    '<td>北京</td>' +
                                    '<th>公司地址</th>' +
                                    '<td>北京市朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司网址</th>' +
                                    '<td>www.sinopecgroup.cn</td>' +
                                    '<th>邮编</th>' +
                                    '<td>100728</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>联系电话</th>' +
                                    '<td>86-10-59969297</td>' +
                                    '<th></th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '<table class="enter_table" id="table_ocompay">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">主要股东</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司中文简称</th>' +
                                    '<td>中国石化</td>' +
                                    '<th>成立日期</th>' +
                                    '<td>1998-07-27</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称</th>' +
                                    '<td>China Petrochemical Corporation</td>' +
                                    '<th>法人代表</th>' +
                                    '<td>傅成玉</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称缩写</th>' +
                                    '<td>CHINA PETROCHEMICAL</td>' +
                                    '<th>所属行业</th>' +
                                    '<td>综合性天然气</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>交易性质</th>' +
                                    '<td>并购，债券</td>' +
                                    '<th>注册地点</th>' +
                                    '<td>北京朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>上市状态</th>' +
                                    '<td>非上市企业</td>' +
                                    '<th>注册资本</th>' +
                                    '<td>23162058万元</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>发行证券</th>' +
                                    '<td>--</td>' +
                                    '<th>所属集团系</th>' +
                                    '<td>--</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>工商注册ID</th>' +
                                    '<td>100000000244</td>' +
                                    '<th>员工人数</th>' +
                                    '<td>1060000</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td></td>' +
                                    '<th>公司简介</th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '<table class="enter_table" id="table_acount">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">财务信息</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司中文简称</th>' +
                                    '<td>中国石化</td>' +
                                    '<th>成立日期</th>' +
                                    '<td>1998-07-27</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称</th>' +
                                    '<td>China Petrochemical Corporation</td>' +
                                    '<th>法人代表</th>' +
                                    '<td>傅成玉</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称缩写</th>' +
                                    '<td>CHINA PETROCHEMICAL</td>' +
                                    '<th>所属行业</th>' +
                                    '<td>综合性天然气</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>交易性质</th>' +
                                    '<td>并购，债券</td>' +
                                    '<th>注册地点</th>' +
                                    '<td>北京朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>上市状态</th>' +
                                    '<td>非上市企业</td>' +
                                    '<th>注册资本</th>' +
                                    '<td>23162058万元</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>发行证券</th>' +
                                    '<td>--</td>' +
                                    '<th>所属集团系</th>' +
                                    '<td>--</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>工商注册ID</th>' +
                                    '<td>100000000244</td>' +
                                    '<th>员工人数</th>' +
                                    '<td>1060000</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td></td>' +
                                    '<th>公司简介</th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '<table id="abc" class="enter_table">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">控参股公司</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司中文简称</th>' +
                                    '<td>中国石化</td>' +
                                    '<th>成立日期</th>' +
                                    '<td>1998-07-27</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称</th>' +
                                    '<td>China Petrochemical Corporation</td>' +
                                    '<th>法人代表</th>' +
                                    '<td>傅成玉</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称缩写</th>' +
                                    '<td>CHINA PETROCHEMICAL</td>' +
                                    '<th>所属行业</th>' +
                                    '<td>综合性天然气</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>交易性质</th>' +
                                    '<td>并购，债券</td>' +
                                    '<th>注册地点</th>' +
                                    '<td>北京朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>上市状态</th>' +
                                    '<td>非上市企业</td>' +
                                    '<th>注册资本</th>' +
                                    '<td>23162058万元</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>发行证券</th>' +
                                    '<td>--</td>' +
                                    '<th>所属集团系</th>' +
                                    '<td>--</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>工商注册ID</th>' +
                                    '<td>100000000244</td>' +
                                    '<th>员工人数</th>' +
                                    '<td>1060000</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td></td>' +
                                    '<th>公司简介</th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '<table id="abc" class="enter_table">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">所属行业融资</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司中文简称</th>' +
                                    '<td>中国石化</td>' +
                                    '<th>成立日期</th>' +
                                    '<td>1998-07-27</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称</th>' +
                                    '<td>China Petrochemical Corporation</td>' +
                                    '<th>法人代表</th>' +
                                    '<td>傅成玉</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称缩写</th>' +
                                    '<td>CHINA PETROCHEMICAL</td>' +
                                    '<th>所属行业</th>' +
                                    '<td>综合性天然气</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>交易性质</th>' +
                                    '<td>并购，债券</td>' +
                                    '<th>注册地点</th>' +
                                    '<td>北京朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>上市状态</th>' +
                                    '<td>非上市企业</td>' +
                                    '<th>注册资本</th>' +
                                    '<td>23162058万元</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>发行证券</th>' +
                                    '<td>--</td>' +
                                    '<th>所属集团系</th>' +
                                    '<td>--</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>工商注册ID</th>' +
                                    '<td>100000000244</td>' +
                                    '<th>员工人数</th>' +
                                    '<td>1060000</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td></td>' +
                                    '<th>公司简介</th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '<table id="table_anay" class="enter_table">' +
                                    '<tr>' +
                                    '<th class="table_header" colspan="4">同行分析</th>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>公司中文简称</th>' +
                                    '<td>中国石化</td>' +
                                    '<th>成立日期</th>' +
                                    '<td>1998-07-27</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称</th>' +
                                    '<td>China Petrochemical Corporation</td>' +
                                    '<th>法人代表</th>' +
                                    '<td>傅成玉</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>英文名称缩写</th>' +
                                    '<td>CHINA PETROCHEMICAL</td>' +
                                    '<th>所属行业</th>' +
                                    '<td>综合性天然气</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>交易性质</th>' +
                                    '<td>并购，债券</td>' +
                                    '<th>注册地点</th>' +
                                    '<td>北京朝阳区朝阳门北大街22号</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>上市状态</th>' +
                                    '<td>非上市企业</td>' +
                                    '<th>注册资本</th>' +
                                    '<td>23162058万元</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>发行证券</th>' +
                                    '<td>--</td>' +
                                    '<th>所属集团系</th>' +
                                    '<td>--</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>工商注册ID</th>' +
                                    '<td>100000000244</td>' +
                                    '<th>员工人数</th>' +
                                    '<td>1060000</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<th>主营业务</th>' +
                                    '<td></td>' +
                                    '<th>公司简介</th>' +
                                    '<td></td>' +
                                    '</tr>' +
                                    '</table>' +

                                    '</div>' +
                                    '<div style="position: fixed; top: 7em; right: 6em">' +
                                    '<ul>' +
                                    '<li><a href="#table_base">基本信息</a></li><li><a href="#table_link">联系方式</a></li>' +
                                    '<li><a href="#abc">主要股东</a></li>' +
                                    '<li><a href="#table_acount">财务信息</a></li><li><a href="#table_ocompay">控参股公司</li>' +
                                    '<li><a href="#abc">所属行业融资</a></li>' +
                                    '<li><a href="#table_anay">同业分析</a></li></li>' +
                                    '</ul>' +
                                    '</div>'
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
                                    items: [mypanel]
                                });
                                editWindow.show(Ext.get('body'));

                            }
                        }
                },
                {
                    id: 'enterprise_add',
                    text: '添加',
                    glyph: 0xf0f6,
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加信息',
                                modal: true,
                                iconCls: 'icon_add',
                                width: 300,
                                height: 450,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 200,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 5,
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
                                                allowBlank: false,
                                                fieldLabel: '企业名称',
                                                name: 'name'
                                            },
                                            {
                                                fieldLabel: '企业简称',
                                                name: 'nos'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '企业类型',
                                                name: 'etype'
                                            },
                                            {
                                                fieldLabel: '挂牌代码',
                                                name: 'listcode'
                                            },
                                            {
                                                fieldLabel: '挂牌价格',
                                                name: 'listprice'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '企业性质',
                                                name: 'nature',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_etype',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '企业性质'
                                            },
                                            {
                                                allowBlank: false,
                                                fieldLabel: '营业执照号',
                                                name: 'buslic'
                                            },
                                            {
                                                fieldLabel: '维护状态',
                                                name: 'status',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_mtstate',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '维护状态'
                                            },
                                            {
                                                fieldLabel: '所属后备库',
                                                name: 'reserve',
                                                xtype: 'combobox',
                                                autoRender: true,
                                                autoShow: true,
                                                store: 'dicts_reservedb',
                                                displayField: 'fieldvaldis',
                                                valueField: 'fieldvaldis',
                                                emptyText: '所属后备库'
                                            },
                                            {
                                                xtype: 'datefield',
                                                fieldLabel: '注册时间',
                                                allowBlank: false,
                                                name: 'regdate',
                                                value: new Date(),
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '是否已标记',
                                                name: 'markstat'
                                            },
                                            {
                                                fieldLabel: '完成回访状态',
                                                name: 'visitstat'
                                            },
                                            {
                                                fieldLabel: '备注',
                                                name: 'remark'
                                            }
                                        ],
                                        buttonAlign : "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                iconCls: 'icon_save',
                                                handler: function(){
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()){
                                                        form.submit({
                                                            url: 'add_enterprise_info',
                                                            waitenterprise: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_enterprise').getStore().reload();
                                                            },
                                                            failure: function(form, action){
                                                                Ext.Msg.alert("失败", "数据保存失败!");
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
                                    }

                                ]
                            }).show(Ext.get('enterprise_add'));
                        }
                    }
                },'-',
                {
                    text: '编辑',
                    id: 'enterprise_edit',
                    glyph: 0xf044,
                    handler: function(){
                        var sm = Ext.getCmp('grid_enterprise').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.enterprise.alert('信息','请选择要编辑的数据');
                            return;
                        }
                        var record = sm.getSelection()[0];

                        var editForm = null;
                        var editWindow = null;
                        editForm = new Ext.form.FormPanel({
                            frame: true,
                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 70
                            },
                            defaults: {
                                xtype: 'textfield'
                            },
                            items: [
                                {
                                    hidden: 'true',
                                    fieldLabel: 'ID',
                                    name: 'id'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '企业名称',
                                    name: 'name'
                                },
                                {
                                    fieldLabel: '企业简称',
                                    name: 'nos'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '企业类型',
                                    name: 'etype'
                                },
                                {
                                    fieldLabel: '挂牌代码',
                                    name: 'listcode'
                                },
                                {
                                    fieldLabel: '挂牌价格',
                                    name: 'listprice'
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '企业性质',
                                    name: 'nature',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_etype',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '企业性质',
                                },
                                {
                                    allowBlank: false,
                                    fieldLabel: '营业执照号',
                                    name: 'buslic'
                                },
                                {
                                    fieldLabel: '维护状态',
                                    name: 'status',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_mtstate',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '维护状态',
                                },
                                {
                                    fieldLabel: '所属后备库',
                                    name: 'reserve',
                                    xtype: 'combobox',
                                    autoRender: true,
                                    autoShow: true,
                                    store: 'dicts_reservedb',
                                    displayField: 'fieldvaldis',
                                    valueField: 'fieldvaldis',
                                    emptyText: '所属后备库'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '注册时间',
                                    allowBlank: false,
                                    name: 'regdate',
                                    value: new Date(),
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '是否已标记',
                                    name: 'markstat'
                                },
                                {
                                    fieldLabel: '完成回访状态',
                                    name: 'visitstat'
                                },
                                {
                                    fieldLabel: '备注',
                                    name: 'remark'
                                }
                            ],
                            buttonAlign : "center",
                            buttons: [
                                {
                                    text: '保存',
                                    iconCls: 'icon_save',
                                    handler: function(){
                                        var form = this.up('form').getForm();
                                        if (form.isValid()){
                                            form.submit({
                                                url: 'update_enterprise_info',
                                                waitenterprise: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_enterprise').getStore().reload();
                                                },
                                                failure: function(form, action){
                                                    Ext.Msg.alert("失败", "数据保存失败!");
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
                        editWindow = new Ext.Window({
                            layout: 'fit',
                            width: 300,
                            height: 450,
                            modal: true,
                            title: '修改信息',
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('enterprise_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },'-',
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
                    fieldLabel: '维护状态',
                    id: 'query_enterprise_status',
                    name: 'status',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_mtstate',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '维护状态'
                },
                {
                    id: 'query_enterprise_reserve',
                    fieldLabel: '所属后备库',
                    name: 'reserve',
                    xtype: 'combobox',
                    autoRender: true,
                    autoShow: true,
                    store: 'dicts_reservedb',
                    displayField: 'fieldvaldis',
                    valueField: 'fieldvaldis',
                    emptyText: '所属后备库'
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
                        click: function(){
                            var store = Ext.getCmp('grid_enterprise').getStore();
                            store.load({
                                params: {
                                    name: Ext.getCmp('query_enterprise_name').getValue(),
                                    nos: Ext.getCmp('query_enterprise_nos').getValue(),
                                    reserve: Ext.getCmp('query_enterprise_reserve').getValue(),
                                    status: Ext.getCmp('query_enterprise_status').getValue()

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



function pub_upload_file(id) {



    Ext.create('widget.window', {
        title: '上传照片',
        modal: true,
        iconCls: 'icon_add',
        id:'uploadpic_windows',
        width: 270,
        height: 120,
        border: false,
        layout: 'fit',
        defaults: {
            width: 200,
            allowBlank: false
        },
        items: [
            {
                xtype: 'form',
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
                        xtype: 'filefield',
                        labelWidth: 60,
                        name: 'file',
                        fieldLabel: '照片上传',
                        buttonText: '选择文件'
                    }
                ],
                buttonAlign: "center",
                buttons: [
                    {
                        text: '保存',
                        iconCls: 'icon_save',
                        handler: function () {
                            var cust_id = document.getElementById('apply_form_id_card').value;
                            if (cust_id != "") {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        url: 'upload_file_xwq',
                                        method: 'POST',
                                        params: {
                                            card_id: cust_id
                                        },
                                        waitMsg: '正在保存...',
                                        success: function (form, action) {
                                            Ext.Msg.alert("成功", "保存成功!");
                                            document.getElementById('apply_form_img').src = 'static/upload/'
                                            + action.result.message;
                                            photo_file=action.result.message;
                                            Ext.getCmp('uploadpic_windows').close();
                                        },
                                        failure: function (form, action) {
                                            Ext.Msg.alert("失败", "保存失败!");
                                        }
                                    });
                                }
                            } else {
                                Ext.Msg.alert("提示", "请先输入身份证号！");
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
            }

        ]
    }).show(Ext.get(id));
};
