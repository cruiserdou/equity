Ext.define('App.view.enterprise_query.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_queryf_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise_query',
    listeners: {
        'itemdblclick': function (view, record, item, index, e) {
            //创建模板
            var apply_edits = new Ext.XTemplate(
                '<div class="wrap_center">' +
                '<h2>企业信息查看</h2>' +
                '<table class="enter_table" id="table_base">' +
                '<tr>' +
                '<th class="table_header" colspan="4">基本信息</th>' +
                '</tr>' +
                '<tr>' +
                '<th>营业执照号码</th>' +
                '<td>{buslicno}</td>' +
                '<th>企业名称</th>' +
                '<td>{name}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>单位类别</th>' +
                '<td>{unit}</td>' +
                '<th>法定代表人</th>' +
                '<td>{legrep}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>地域</th>' +
                '<td>{region}</td>' +
                '<th>公司简称</th>' +
                '<td>{nos}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>邮政编码</th>' +
                '<td>{postal}</td>' +
                '<th>企业性质</th>' +
                '<td>{nature}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>注册资本（万元）</th>' +
                '<td>{regcap}</td>' +
                '<th>注册日期</th>' +
                '<td>{regdt}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>营业期限自</th>' +
                '<td>{bustermfdt}</td>' +
                '<th>营业期限至</th>' +
                '<td>{bustremtdt}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>挂牌代码</th>' +
                '<td>{listcode}</td>' +
                '<th>挂牌价格</th>' +
                '<td>{listprice}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>注册地址</th>' +
                '<td>{regaddr}</td>' +
                '<th>员工人数</th>' +
                '<td>{staffnum}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>办公地址</th>' +
                '<td colspan="3">{offaddr}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>经营范围</th>' +
                '<td colspan="3">{scope}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>主营业务</th>' +
                '<td colspan="3">{mbus}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业简介</th>' +
                '<td colspan="3">{eprofile}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业照片资料</th>' +
                '<td colspan="3">{phoinf}</td>' +
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
                '<td>{post}</td>' +
                '<th>证件类型</th>' +
                '<td>{doctype}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>姓名</th>' +
                '<td>{contact}</td>' +
                '<th>证件号码</th>' +
                '<td>{docnum}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>手机</th>' +
                '<td>{phone}</td>' +
                '<th>传真</th>' +
                '<td>{fax}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>E-mail</th>' +
                '<td>{email}</td>' +
                '<th>QQ</th>' +
                '<td>{qq}</td>' +
                '</tr>' +
                '</table>' +


                '<table class="enter_table" id="table_acount">' +
                '<tr>' +
                '<th class="table_header" colspan="4">国民经济行业分类信息</th>' +
                '</tr>' +
                '<tr>' +
                '<th>行业一级分类</th>' +
                '<td>{indclass1}</td>' +
                '<th>行业二级分类</th>' +
                '<td>{indclass2}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>行业三级分类</th>' +
                '<td>{indclass3}</td>' +
                '<th>法人代表</th>' +
                '<td>{indclass4}</td>' +
                '</tr>' +
                '</table>' +



                '<table  class="enter_table" id="table_ocompay">' +
                '<tr>' +
                '<th class="table_header" colspan="4">企业维护信息</th>' +
                '</tr>' +
                '<tr>' +
                '<th>企业来源</th>' +
                '<td>{esource}</td>' +
                '<th>推荐人</th>' +
                '<td>{referee}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业来源详情</th>' +
                '<td colspan="3">{esourcedesc}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>推荐日期</th>' +
                '<td>{recomdt}</td>' +
                '<th>企业维护人</th>' +
                '<td>{emaint}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>托管状态</th>' +
                '<td>{trusteeship}</td>' +
                '<th>挂牌状态</th>' +
                '<td>{listst}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业等级</th>' +
                '<td>{eclass}</td>' +
                '<th>企业维护状态</th>' +
                '<td>{maintain}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>所属后备库</th>' +
                '<td>{reserve}</td>' +
                '<th>联系人</th>' +
                '<td>{contacter}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>部门</th>' +
                '<td>{dept}</td>' +
                '<th>职务</th>' +
                '<td>{psotion}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>证件类型</th>' +
                '<td>{edoctype}</td>' +
                '<th>证件号码</th>' +
                '<td>{edocnum}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>固定电话</th>' +
                '<td>{etel}</td>' +
                '<th>手机号码</th>' +
                '<td>{ephone}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>传真</th>' +
                '<td>{efax}</td>' +
                '<th>E-mail</th>' +
                '<td>{eemail}</td>' +
                '</tr>' +
                '<tr>' +
                '<th>QQ</th>' +
                '<td>{eqq}</td>' +
                '<th>备注</th>' +
                '<td>{remark}</td>' +
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


            //重写绑定模板
            apply_edits.overwrite(mypanel.body, record.data);
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
    },

    initComponent: function () {

        this.columns = [


            {text: 'ID', width: 120, dataIndex: 'id'},
            {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
            {text: '企业名称', width: 120, dataIndex: 'name'},
            {text: '单位类别', width: 120, dataIndex: 'unit', hidden: true},
            {text: '法定代表人', width: 120, dataIndex: 'legrep', hidden: true},
            {text: '地域', width: 120, dataIndex: 'region', hidden: true},
            {text: '企业简称', width: 120, dataIndex: 'nos'},
            {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '注册资本（万元）', width: 120, dataIndex: 'regcap'},
            {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
            {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
            {text: 'regdt', width: 120, dataIndex: 'regdt'},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
            {text: '注册地址', width: 120, dataIndex: 'regaddr', hidden: true},
            {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
            {text: '挂牌价格', width: 120, dataIndex: 'listprice'},
            {text: '员工人数', width: 120, dataIndex: 'staffnum', hidden: true},
            {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
            {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
            {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
            {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
            {text: '职务', width: 120, dataIndex: 'post', hidden: true},
            {text: '证件类型', width: 120, dataIndex: 'doctype', hidden: true},
            {text: '姓名', width: 120, dataIndex: 'contact', hidden: true},
            {text: '证件号码', width: 120, dataIndex: 'docnum', hidden: true},
            {text: '手机', width: 120, dataIndex: 'phone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'fax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'email', hidden: true},
            {text: 'QQ', width: 120, dataIndex: 'qq', hidden: true},
            {text: '行业一级分类', width: 120, dataIndex: 'indclass1', hidden: true},
            {text: '行业二级分类', width: 120, dataIndex: 'indclass2', hidden: true},
            {text: '行业三级分类', width: 120, dataIndex: 'indclass3', hidden: true},
            {text: '行业四级分类', width: 120, dataIndex: 'indclass4', hidden: true},
            {text: '企业来源', width: 120, dataIndex: 'esource', hidden: true},
            {text: '推荐人', width: 120, dataIndex: 'referee', hidden: true},
            {text: '企业来源详情', width: 120, dataIndex: 'esourcedesc', hidden: true},
            {text: '推荐日期', width: 120, dataIndex: 'recomdt', hidden: true},
            {text: '企业维护人', width: 120, dataIndex: 'emaint', hidden: true},
            {text: '托管状态', width: 120, dataIndex: 'trusteeship', hidden: true},
            {text: '挂牌状态', width: 120, dataIndex: 'listst', hidden: true},
            {text: '企业等级', width: 120, dataIndex: 'eclass', hidden: true},
            {text: '企业维护状态', width: 120, dataIndex: 'maintain', hidden: true},
            {text: '所属后备库', width: 120, dataIndex: 'reserve', hidden: true},
            {text: '联系人', width: 120, dataIndex: 'contacter', hidden: true},
            {text: '部门', width: 120, dataIndex: 'dept', hidden: true},
            {text: '职务', width: 120, dataIndex: 'psotion', hidden: true},
            {text: '证件类型', width: 120, dataIndex: 'edoctype', hidden: true},
            {text: '证件号码', width: 120, dataIndex: 'edocnum', hidden: true},
            {text: '固定电话', width: 120, dataIndex: 'etel', hidden: true},
            {text: '手机号码', width: 120, dataIndex: 'ephone', hidden: true},
            {text: '传真', width: 120, dataIndex: 'efax', hidden: true},
            {text: 'E-mail', width: 120, dataIndex: 'eemail', hidden: true},
            {text: 'QQ', width: 120, dataIndex: 'eqq', hidden: true},
            {text: '备注', width: 120, dataIndex: 'remark', hidden: true}

        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'enterprise',
                displayInfo: true,
                displayenterprise: '第 {0} 到 {1} 条数据, 共{2}条',
                emptyenterprise: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });

        this.callParent(arguments);
    }
});