Ext.define('App.view.enterprise_query.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_queryf_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise_query',
    listeners: {
        itemclick: function (this_, record_) {
            var store = Ext.getCmp('enterprise_change_grid_id').getStore();
            store.load({
                params: {
                    id: record_.get('id')
                }
            })
        },
        'itemdblclick': function (view, record, item, index, e) {
            //创建模板
            var apply_edits = new Ext.XTemplate(
                '<div class="wrap_center">',
                '<h2>企业信息查看</h2>',
                '<table class="enter_table" id="table_base">',
                '<tr>',
                '<th class="table_header" colspan="4">基本信息</th>',
                '</tr>',
                '<tr>',
                '<th>营业执照号码</th>',
                '<td>{buslicno}</td>',
                '<th>企业名称</th>',
                '<td>{name}</td>',
                '</tr>',
                '<tr>',
                '<th>单位类别</th>',
                '<td>{unit}</td>',
                '<th>法定代表人</th>',
                '<td>{legrep}</td>',
                '</tr>',
                '<tr>',
                '<th>地域</th>',
                //'<td>{region}</td>',
                '<td>',
                '<select class="select" name="province" id="s1">',
                '<option >{province}</option>',
                ' </select>',
                ' <select class="select" name="city" id="s2">',
                '<option>{city}</option>',
                '</select>',
                '<select class="select" name="county" id="s3">',
                '<option>{county}</option>',
                '</select>',
                '</td>',
                '<th>公司简称</th>',
                '<td>{nos}</td>',
                '</tr>',
                '<tr>',
                '<th>邮政编码</th>',
                '<td>{postal}</td>',
                '<th>企业性质</th>',
                '<td>{nature}</td>',
                '</tr>',
                '<tr>',
                '<th>注册资本（万元）</th>',
                '<td>{regcap}</td>',
                '<th>注册日期</th>',
                '<td>{regdt}</td>',
                '</tr>',
                '<tr>',
                '<th>营业期限自</th>',
                '<td>{bustermfdt}</td>',
                '<th>营业期限至</th>',
                '<td>{bustremtdt}</td>',
                '</tr>',
                '<tr>',
                '<th>挂牌代码</th>'+
                '<td>{listcode}</td>'+
                '<th>挂牌价格</th>'+
                '<td>{listprice}</td>'+
                '</tr>'+
                '<tr>'+
                '<th>挂牌出资（元/元出资.股）</th>'+
                '<td>{list_contrib}</td>'+
                '<th>挂牌日期</th>'+
                '<td>{listdt}</td>'+
                '</tr>'+
                '<tr>'+
                '<th>企业微信号</th>',
                '<td>{webchat}</td>'+
                '<th>挂牌推荐人</th>'+
                '<td>{refer}</td>'+
                '</tr>'+
                '<tr>'+
                '<th>负责人</th>'+
                '<td>{liabler}</td>'+
                '<th>推荐单位</th>'+
                '<td>{channels}</td>'+
                '</tr>'+
                '<tr>'+
                '<th>注册地址</th>'+
                '<td>{regaddr}</td>'+
                '<th>员工人数</th>'+
                '<td>{staffnum}</td>'+
                '</tr>'+
                '<tr>'+
                '<th>办公地址</th>'+
                '<td>{offaddr}</td>'+
                '<th>证监会行业分类</th>'+
                '<td>{csrc_type}</td>'+
                '</tr>'+
                '<tr>',
                '<tr>',
                '<th>经营范围</th>'+
                '<td colspan="3"><textarea id="scope" name="scope"  type="text" value="{scope}">{scope}</textarea></td>'+
                '</tr>'+
                '<tr>'+
                '<th>登记机关</th>'+
                '<td colspan="3"><input id="regist_organ" name="regist_organ"  type="text" value="{regist_organ}"/></td>'+
                '</tr>'+
                '<tr>'+
                '<th>主营业务</th>'+
                '<td colspan="3"><textarea id="mbus" name="mbus"  type="text" value="{mbus}">{mbus}</textarea></td>'+
                '</tr>'+
                '<tr>'+
                '<th>企业简介</th>'+
                '<td colspan="3"><textarea id="eprofile" name="eprofile"  type="text" value="{eprofile}">{eprofile}</textarea> </td>'+
                '</tr>'+
                '<tr>',
                '<th>备注</th>',
                '<td colspan="3"><textarea id="bz" name="bz"  type="text" value="{bz}"></textarea></td>',
                '</tr>',
                '<tr>',
                '<th>企业照片资料</th>',
                '<td colspan="3">{phoinf}</td>',
                '</tr>',
                '</table>',
                    //<textarea disabled style="background:#FFFFFF" contenteditable="false" rows="3" name="remark"  type="text" value="""></textarea>

                '<table class="enter_table" id="table_sh">',
                '<tr>',
                '<th class="table_header" colspan="8">股东名册</th>',
                '</tr>',
                '<tr>',
                '<th>股东类型</th>',
                '<th>股东</th>',
                '<th>证照/证件类型</th>',
                '<th>证照/证件号码</th>',
                '<th>持股数量</th>',
                '<th>流通数量</th>',
                '<th>冻结数量</th>',
                '<th>详情</th>',
                '</tr>',
                '<tpl  for="list_sh">',
                '<tr>',
                '<td>{shtype}</td>',
                '<td>{shname}</td>',
                '<td>{shdoctype}</td>',
                '<td>{shdocnum}</td>',
                '<td>{shareholdnum}</td>',
                '<td>{currencynum}</td>',
                '<td>{freezenum}</td>',
                '<td>{remark}</td>',
                '</tr>',
                '</tpl>',
                '</table>',


                '<table class="enter_table" id="table_link">',
                '<tr>',
                '<th class="table_header" colspan="4">法定代表人基本信息<a href="legrep_details?id={id}" target="_blank">详细</a></th>',
                '</tr>',
                '<tr>',
                '<th>姓名</th>',
                '<td>{contact}</td>',
                '<th>证件类型</th>',
                '<td>{doctype}</td>',
                '</tr>',
                '<tr>',
                '<th>职务</th>',
                '<td>{post}</td>',
                '<th>证件号码</th>',
                '<td>{docnum}</td>',
                '</tr>',
                '<tr>',
                '<th>手机</th>',
                '<td>{phone}</td>',
                '<th>传真</th>',
                '<td>{fax}</td>',
                '</tr>',
                '<tr>',
                '<th>E-mail</th>',
                '<td>{email}</td>',
                '<th>QQ</th>',
                '<td>{qq}</td>',
                '</tr>',
                '</table>',


                '<table class="enter_table" id="table_acount">',
                '<tr>',
                '<th class="table_header" colspan="4">国民经济行业分类信息</th>',
                '</tr>',
                '<tr>',
                '<th>行业一级分类</th>',
                '<td>    ' +
                '<select class="select" name="indclass1" id="cl1">',
                '<option>{indclass1}</option>',
                ' </select>',
                '</td>',
                '<th>行业二级分类</th>',
                '<td>',
                '<select class="select" name="indclass2" id="cl2">',
                '<option>{indclass2}</option>',
                ' </select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<th>行业三级分类</th>',
                '<td>',
                '<select class="select" name="indclass3" id="cl3">',
                '<option>{indclass3}</option>',
                ' </select>',
                '</td>',
                '<th>行业四级分类</th>',
                '<td>',
                '<select class="select" name="indclass4" id="cl4">',
                '<option>{indclass4}</option>',
                ' </select>',
                '</td>',
                '</tr>',
                '</table>',


                '<table class="enter_table" id="table_csrc_type">',
                '<tr>',
                '<th class="table_header" colspan="4">证监会行业分类信息</th>',
                '</tr>',
                '<tr>',
                '<th>证监会行业一级分类</th>',
                '<td>' +
                '<select class="select" name="indclass1" id="cl1">',
                '<option>{csrc_type}</option>',
                ' </select>',
                '</td>',
                '<th>证监会行业二级分类</th>',
                '<td>',
                '<select class="select" name="indclass2" id="cl2">',
                '<option>{csrc_typ2}</option>',
                ' </select>',
                '</td>',
                '</tr>',
                '<tr>',
                '<th>证监会行业三级分类</th>',
                '<td>',
                '<select class="select" name="indclass3" id="cl3">',
                '<option>{csrc_typ3}</option>',
                ' </select>',
                '</td>',
                '<th>证监会行业四级分类</th>',
                '<td>',
                '<select class="select" name="indclass4" id="cl4">',
                '<option>{csrc_typ4}</option>',
                ' </select>',
                '</td>',
                '</tr>',
                '</table>',

                '<table  class="enter_table" id="table_ocompay">',
                '<tr>',
                '<th class="table_header" colspan="4">企业维护信息</th>',
                '</tr>',
                '<tr>',
                '<th>企业来源</th>',
                '<td>{esource}</td>',
                '<th>挂牌推荐人</th>',
                '<td>{referee}</td>',
                '</tr>',
                '<tr>',
                '<th>企业来源详情</th>',
                '<td colspan="3">{esourcedesc}</td>',
                '</tr>',
                '<tr>',
                '<th>推荐日期</th>',
                '<td>{recomdt}</td>',
                '<th>企业维护人</th>',
                '<td>{emaint}</td>',
                '</tr>',
                '<tr>',
                '<th>托管状态</th>',
                '<td>{trusteeship}</td>',
                '<th>挂牌状态</th>',
                '<td>{listst}</td>',
                '</tr>',
                '<tr>',
                '<th>企业等级</th>',
                '<td>{eclass}</td>',
                '<th>企业维护状态</th>',
                '<td>{maintain}</td>',
                '</tr>',
                '<tr>',
                '<th>所属后备库</th>',
                '<td>{reserve}</td>',
                '<th>联系人</th>',
                '<td>{contacter}</td>',
                '</tr>',
                '<tr>',
                '<th>部门</th>',
                '<td>{dept}</td>',
                '<th>职务</th>',
                '<td>{psotion}</td>',
                '</tr>',
                '<tr>',
                '<th>证件类型</th>',
                '<td>{edoctype}</td>',
                '<th>证件号码</th>',
                '<td>{edocnum}</td>',
                '</tr>',
                '<tr>',
                '<th>固定电话</th>',
                '<td>{etel}</td>',
                '<th>手机号码</th>',
                '<td>{ephone}</td>',
                '</tr>',
                '<tr>',
                '<th>传真</th>',
                '<td>{efax}</td>',
                '<th>E-mail</th>',
                '<td>{eemail}</td>',
                '</tr>',
                '<tr>',
                '<th>QQ</th>',
                '<td>{eqq}</td>',
                '<th>备注</th>',
                '<td>{remark}</td>',
                '</tr>',
                '</table>',


                '</div>',
                '<div style="position: fixed; top: 7em; right: 6em">',
                '<a href="#"   style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_ch()">关闭</a>',

                '<a  href="print_enterprise?id={id}" target="_blank" style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#1d13f2, #1e7fe1);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);">打印</a>',


                '<a  onclick="export_enterprise();"  href="#" style="font-size:18px;display: block;  margin-top: 26px;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#c5f21d, #50e11a);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);">导出</a>',



                '<ul>',
                '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>',
                '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>',
                '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>',
                '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>',
                '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>',
                '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</li>',
                '</ul>',
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
                id: 'enterprise_ch_id',
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
            {text: '省', width: 120, dataIndex: 'province', hidden: true},
            {text: '市', width: 120, dataIndex: 'city', hidden: true},
            {text: '县', width: 120, dataIndex: 'county', hidden: true},
            {text: '企业简称', width: 120, dataIndex: 'nos'},
            {text: '邮政编码', width: 120, dataIndex: 'postal', hidden: true},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '注册资本（万元）', width: 120, dataIndex: 'regcap'},
            {text: '营业期限自', width: 120, dataIndex: 'bustermfdt', hidden: true},
            {text: '营业期限至', width: 120, dataIndex: 'bustremtdt', hidden: true},
            {text: '注册日期', width: 120, dataIndex: 'regdt'},
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
            {text: '挂牌推荐人', width: 120, dataIndex: 'referee', hidden: true},
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

            {text: '企业微信号', width: 120, dataIndex: 'webchat', hidden: true},
            {text: '挂牌推荐人', width: 120, dataIndex: 'refer', hidden: true},
            {text: '负责人', width: 120, dataIndex: 'liabler', hidden: true},
            {text: '推荐单位', width: 120, dataIndex: 'channels', hidden: true},
            {text: '挂牌日期', width: 120, dataIndex: 'listdt', hidden: true},
            {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'list_contrib', hidden: true},
            {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type', hidden: true},
            {text: '证监会行业分类2', width: 120, dataIndex: 'csrc_type2', hidden: true},
            {text: '证监会行业分类3', width: 120, dataIndex: 'csrc_type3', hidden: true},
            {text: '证监会行业分类4', width: 120, dataIndex: 'csrc_type4', hidden: true},
            {text: '备注', width: 120, dataIndex: 'bz', hidden: true},
            {text: '登记机关', width: 120, dataIndex: 'regist_organ', hidden: true},
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


function win_close_ch() {
    Ext.getCmp('enterprise_ch_id').close();
}


function export_enterprise() {
    Ext.Ajax.request({
        url: 'export_enterprise_xls',
        params: {
            "fileName": 'enterprise.xls'
        },
        waitMsg: '正在导出数据...',
        success: function (form, action) {
            Ext.Msg.alert("成功", "导出成功!");
        },
        failure: function (form, action) {
            Ext.Msg.alert("失败", "导出失败!");
        }
    });

};