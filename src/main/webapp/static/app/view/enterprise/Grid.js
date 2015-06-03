Ext.define('App.view.enterprise.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprisef_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise',
    listeners: {
        'itemdblclick': function (view, record, item, index, e) {
            //创建模板
            var apply_edits = new Ext.XTemplate(
                '<div class="wrap_center">' +
                '<form id="apply_form">' +
                '<h2>企业信息查看</h2>' +
                '<table class="enter_table" id="table_base">' +
                '<tr>' +
                '<th class="table_header" colspan="4">基本信息</th>' +
                    //'<td><input id="id"  name="id"  type="text" value="{id}"/></td>' +
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
                '<td colspan="3"><input  id="scope" name="scope"  type="text" value="{scope}"/></td>' +
                '</tr>' +
                '<tr>' +
                '<th>主营业务</th>' +
                '<td colspan="3"><input id="mbus" name="mbus"  type="text" value="{mbus}"/><</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业简介</th>' +
                '<td colspan="3"><input id="eprofile" name="eprofile"  type="text" value="{eprofile}"/><</td>' +
                '</tr>' +
                '<tr>' +
                '<th>企业照片资料</th>' +
                '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>' +
                '</tr>' +
                '</table>' +
                    //<textarea disabled style="background:#FFFFFF" contenteditable="false" rows="3" name="remark"  type="text" value="""></textarea>

                '<table class="enter_table" id="table_sh">' +
                '<tr>' +
                '<th class="table_header" colspan="8">股东名册</th>' +
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



                '<table class="enter_table" id="table_server">' +
                '<tr>' +
                '<th class="table_header" colspan="4">服务机构</th>' +
                '</tr>' +
                '<tr>' +
                '<th>服务机构名称</th>' +
                '<td><input id="name" name="name"  type="text" value="{name}"/></td>' +
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


                '<a href="#"  style="font-size:18px;text-decoration: none;text-align: center;color: #ffffff;  margin: 1em auto;width: 8em;border-radius: 5px;  padding: 0.5em 0;background-color: #38AD5A; border: 1px solid #38AD5A;display: block;  "  onclick="save_enterprise_edit({id})">保存</a>' +


                '</div>' +
                '<div style="position: fixed; top: 7em; right: 6em">' +

                '<ul>' +
                '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</li>' +
                '<li><a href="#table_server"  style="font-size:18px;">服务机构</li>' +
                '</ul>' +
                '<a href="#"  id="start_btn" style="font-size:18px;display: block;  margin-top: 26px; margin-left: 4em;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="win_close_edit()"><i class="fa fa-pencil"></i>关闭</a>' +
                '</form>' +
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
                id: 'enterprise_edit_id',
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

function win_close_edit() {
    Ext.getCmp('enterprise_edit_id').close();

}

function save_enterprise_edit(id) {
    //Ext.Msg.alert("提示", id);
    var form_obt_apply = document.getElementById("apply_form");
    Ext.Ajax.request({
        method: "POST",
        params: {
            id: id,
            buslicno: form_obt_apply['buslicno'].value,
            name: form_obt_apply['name'].value,
            unit: form_obt_apply['unit'].value,
            legrep: form_obt_apply['legrep'].value,
            region: form_obt_apply['region'].value,
            nos: form_obt_apply['nos'].value,
            postal: form_obt_apply['postal'].value,
            nature: form_obt_apply['nature'].value,
            regcap: form_obt_apply['regcap'].value,
            bustermfdt: form_obt_apply['bustermfdt'].value,
            bustremtdt: form_obt_apply['bustremtdt'].value,
            regdt: form_obt_apply['regdt'].value,
            listcode: form_obt_apply['listcode'].value,
            regaddr: form_obt_apply['regaddr'].value,
            offaddr: form_obt_apply['offaddr'].value,
            listprice: form_obt_apply['listprice'].value,
            staffnum: form_obt_apply['staffnum'].value,
            scope: form_obt_apply['scope'].value,
            mbus: form_obt_apply['mbus'].value,
            eprofile: form_obt_apply['eprofile'].value,
            phoinf: form_obt_apply['phoinf'].value,
            post: form_obt_apply['post'].value,
            doctype: form_obt_apply['doctype'].value,
            contact: form_obt_apply['contact'].value,
            docnum: form_obt_apply['docnum'].value,
            phone: form_obt_apply['phone'].value,
            fax: form_obt_apply['fax'].value,
            email: form_obt_apply['email'].value,
            qq: form_obt_apply['qq'].value,
            indclass1: form_obt_apply['indclass1'].value,
            indclass2: form_obt_apply['indclass2'].value,
            indclass3: form_obt_apply['indclass3'].value,
            indclass4: form_obt_apply['indclass4'].value,
            esource: form_obt_apply['esource'].value,
            referee: form_obt_apply['referee'].value,
            esourcedesc: form_obt_apply['esourcedesc'].value,
            recomdt: form_obt_apply['recomdt'].value,
            emaint: form_obt_apply['emaint'].value,
            trusteeship: form_obt_apply['trusteeship'].value,
            listst: form_obt_apply['listst'].value,
            eclass: form_obt_apply['eclass'].value,
            maintain: form_obt_apply['maintain'].value,
            reserve: form_obt_apply['reserve'].value,
            contacter: form_obt_apply['contacter'].value,
            dept: form_obt_apply['dept'].value,
            psotion: form_obt_apply['psotion'].value,
            edoctype: form_obt_apply['edoctype'].value,
            edocnum: form_obt_apply['edocnum'].value,
            etel: form_obt_apply['etel'].value,
            ephone: form_obt_apply['ephone'].value,
            efax: form_obt_apply['efax'].value,
            eemail: form_obt_apply['eemail'].value,
            eqq: form_obt_apply['eqq'].value,
            remark: form_obt_apply['remark'].value


        },
        url: 'update_enterprise_info',
        success: function () {
            Ext.Msg.alert("提示", "保存成功！");
            Ext.getCmp('grid_enterprise').getStore().load();
        },
        failure: function () {
            Ext.Msg.alert("提示", "保存失败！");
        }
    });
}