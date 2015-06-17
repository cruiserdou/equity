Ext.define('App.view.investors.investors_query.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.investors_queryf_grid',
        store: 'investors',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_investors_query',

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
                    '<td>' +
                    '<select class="select" name="province" id="s1">' +
                    '<option >{province}</option>' +
                    ' </select>' +
                    ' <select class="select" name="city" id="s2">' +
                    '<option>{city}</option>' +
                    '</select>' +
                    '<select class="select" name="county" id="s3">' +
                    '<option>{county}</option>' +
                    '</select>' +
                    '</td>',
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
                    '<td><input id="bustermfdt" name="bustermfdt"  type="date" value="{bustermfdt}"/></td>' +
                    '<th>营业期限至</th>' +
                    '<td><input id="bustremtdt" name="bustremtdt"  type="date" value="{bustremtdt}"/></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>挂牌代码</th>'+
                    '<td><input id="listcode" name="listcode"  type="text" value="{listcode}"/></td>'+
                    '<th>挂牌价格<br>元/元出资(股)</th>'+
                    '<td><input id="listprice" name="listprice"  type="text" value="{listprice}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>挂牌日期</th>'+
                    '<td><input id="listdt" name="listdt"  type="date" value="{listdt}"/></td>'+
                    '<th>挂牌推荐人</th>'+
                    '<td><input id="refer" name="refer"  type="text" value="{refer}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>企业微信号</th>',
                    '<td><input id="webchat" name="webchat"  type="text" value="{webchat}"/></td>'+
                    '<th>推荐单位</th>'+
                    '<td><input id="channels" name="channels"  type="text" value="{channels}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>融资负责人</th>'+
                    '<td><input id="rz_charge" name="rz_charge"  type="text" value="{rz_charge}"/></td>'+
                    '<th>维护负责人</th>'+
                    '<td><input id="wh_charge" name="wh_charge"  type="text" value="{wh_charge}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>挂牌区域</th>'+
                    '<td><input id="list_area" name="list_area"  type="text" value="{list_area}"/></td>'+
                    '<th>员工人数</th>'+
                    '<td><input id="staffnum" name="staffnum"  type="text" value="{staffnum}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>注册地址</th>'+
                    '<td colspan="3"><input id="regaddr" name="regaddr"  type="text" value="{regaddr}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>办公地址</th>'+
                    '<td colspan="3"><input id="offaddr" name="offaddr"  type="text" value="{offaddr}"/></td>'+
                    '</tr>'+
                    '<tr>' +
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
                    '<td colspan="3"><textarea id="eprofile" name="eprofile"  type="text" value="{eprofile}">{eprofile}</textarea></td>'+
                    '</tr>'+
                    '<tr>',
                    '<th>备注</th>',
                    '<td colspan="3"><textarea id="bz" name="bz"  type="text" value="{bz}"></textarea></td>',
                    '</tr>',
                    '<tr>' +
                    '<th>企业照片资料</th>' +
                    '<td colspan="3"><img onclick="pub_upload_file(\'phoinf\')" id="phoinf" name="phoinf" value="{phoinf}" src=""   alt="点击上传照片"/> </td>' +
                    '</tr>' +
                    '</table>' +

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
                    '<th>姓名</th>' +
                    '<td><input id="contact" name="contact"  type="text" value="{contact}"/></td>' +
                    '<th>证件类型</th>' +
                    '<td><input id="doctype" name="doctype"  type="text" value="{doctype}"/></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>职务</th>' +
                    '<td><input id="post" name="post"  type="text" value="{post}"/></td>' +
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
                    '<tr>'+
                    '<th>微信号</th>'+
                    '<td><input id="webchat_gr" name="webchat_gr"  type="text" value="{webchat_gr}"/></td>'+
                    '<th>固话</th>',
                    '<td><input id="tel_gr" name="tel_gr"  type="text" value="{tel_gr}"/></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<th>备注</th>'+
                    '<td colspan="3"><textarea id="bz_gr" name="bz_gr"  type="text" value="{bz_gr}"></textarea></td>'+
                    '</tr>'+
                    '</table>'+


                    '<table class="enter_table" id="table_acount">' +
                    '<tr>' +
                    '<th class="table_header" colspan="4">国民经济行业分类信息</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>行业一级分类</th>',
                    '<td> ' +
                    '<select class="select" name="indclass1" id="cl1">' +
                    '<option>{indclass1}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>行业二级分类</th>',
                    '<td>' +
                    '<select class="select" name="indclass2" id="cl2">' +
                    '<option>{indclass2}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>行业三级分类</th>',
                    '<td>' +
                    '<select class="select" name="indclass3" id="cl3">' +
                    '<option>{indclass3}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>行业四级分类</th>',
                    '<td>' +
                    '<select class="select" name="indclass4" id="cl4">' +
                    '<option>{indclass4}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '</table>' +

                    '<table class="enter_table" id="table_csrc_type">' +
                    '<tr>' +
                    '<th class="table_header" colspan="4">证监会行业分类信息</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>证监会行业一级分类</th>' +
                    '<td>    ' +
                    '<select class="select" name="csrc_type" id="csrc1">' +
                    '<option>{csrc_type}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>证监会行业二级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ2" id="csrc2">' +
                    '<option>{csrc_typ2}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>证监会行业三级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ3" id="csrc3">' +
                    '<option>{csrc_typ3}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>证监会行业四级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ4" id="csrc4">' +
                    '<option>{csrc_typ4}</option>' +
                    ' </select>' +
                    '</td>' +
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


                    '<table class="enter_table" id="table_investors">' +
                    '<tr>' +
                    '<th class="table_header" colspan="4">投资人信息</th>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>服务机构名称</th>' +
                    '<td><input id="servicename" name="servicename"  type="text" value="{servicename}"/></td>' +
                    '<th>服务机构类别</th>' +
                    '<td><input id="servicetype" name="servicetype"  type="text" value="{servicetype}"/></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>行业一级分类</th>' +
                    '<td>' +
                    '<select class="select" name="indclass1" id="cl1">' +
                    '<option>{indclass1}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>行业二级分类</th>' +
                    '<td>' +
                    '<select class="select" name="indclass2" id="cl2">' +
                    '<option>{indclass2}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>行业三级分类</th>' +
                    '<td>' +
                    '<select class="select" name="indclass3" id="cl3">' +
                    '<option>{indclass3}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>行业四级分类</th>' +
                    '<td>' +
                    '<select class="select" name="indclass4" id="cl4">' +
                    '<option>{indclass4}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>证监会行业一级分类</th>' +
                    '<td>    ' +
                    '<select class="select" name="csrc_type" id="csrc1">' +
                    '<option>{csrc_type}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>证监会行业二级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ2" id="csrc2">' +
                    '<option>{csrc_typ2}</option>' +
                    ' </select>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<th>证监会行业三级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ3" id="csrc3">' +
                    '<option>{csrc_typ3}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<th>证监会行业四级分类</th>' +
                    '<td>' +
                    '<select class="select" name="csrc_typ4" id="csrc4">' +
                    '<option>{csrc_typ4}</option>' +
                    ' </select>' +
                    '</td>' +
                    '<tr>' +
                    '<th>备注</th>' +
                    '<td colspan="3"><textarea id="serviceremark" name="serviceremark"  type="text" value="{serviceremark}"></textarea></td>'+
                    '</tr>' +
                    '</table>' +



                    '</div>' +
                    '<div style="position: fixed; top: 7em; right: 6em">' +

                    '<ul>' +
                    '<li><a href="#table_base" style="font-size:18px;">基本信息</a></li>' +
                    '<li><a href="#table_sh"  style="font-size:18px;">股东名册</a></li>' +
                    '<li><a href="#table_link"  style="font-size:18px;">法定代表人</a></li>' +
                    '<li><a href="#table_acount"  style="font-size:18px;">行业分类</a></li>' +
                    '<li><a href="#table_csrc_type"  style="font-size:18px;">证监会行业分类</a></li>' +
                    '<li><a href="#table_ocompay"  style="font-size:18px;">企业维护信息</li>' +
                    '<li><a href="#table_investors"  style="font-size:18px;">投资人信息</li>' +
                    '</ul>' +
                    '<a href="#"  id="start_btn" style="font-size:18px;display: block;  margin-top: 26px; margin-left: 4em;  width: 120px;  font-size: 14px;  border: 1px solid #ffffff;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="investors_close_edit()"><i class="fa fa-pencil"></i>关闭</a>' +
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
                    id: 'investors_edit_id',
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
                {text: '企业ID', width: 120, dataIndex: 'id', hidden: true},
                {text: '营业执照号码', width: 120, dataIndex: 'buslicno'},
                {text: '企业名称', width: 120, dataIndex: 'name'},
                {text: '单位类别', width: 120, dataIndex: 'unit'},
                {text: '法定代表人', width: 120, dataIndex: 'legrep'},
                {text: '省', width: 120, dataIndex: 'province'},
                {text: '市', width: 120, dataIndex: 'city'},
                {text: '县', width: 120, dataIndex: 'county'},
                {text: '公司简称', width: 120, dataIndex: 'nos'},
                {text: '邮政编码', width: 120, dataIndex: 'postal'},
                {text: '企业性质', width: 120, dataIndex: 'nature'},
                {text: '注册资本（万元）', width: 120, dataIndex: 'regcap'},
                {text: '营业期限自', width: 120, dataIndex: 'bustermfdt'},
                {text: '营业期限至', width: 120, dataIndex: 'bustremtdt'},
                {text: '注册日期', width: 120, dataIndex: 'regdt'},
                {text: '挂牌区域', width: 120, dataIndex: 'list_area'},
                {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
                {text: '挂牌出资（元/元出资.股）', width: 120, dataIndex: 'listprice'},
                {text: '挂牌日期', width: 120, dataIndex: 'listdt'},
                {text: '推荐单位', width: 120, dataIndex: 'channels'},
                {text: '微信号', width: 120, dataIndex: 'webchat'},
                {text: '员工人数', width: 120, dataIndex: 'staffnum'},
                {text: '登记机关', width: 120, dataIndex: 'regist_organ'},
                {text: '注册地址', width: 120, dataIndex: 'regaddr', hidden: true},
                {text: '办公地址', width: 120, dataIndex: 'offaddr', hidden: true},
                {text: '经营范围', width: 120, dataIndex: 'scope', hidden: true},
                {text: '主营业务', width: 120, dataIndex: 'mbus', hidden: true},
                {text: '企业简介', width: 120, dataIndex: 'eprofile', hidden: true},
                {text: '企业照片资料', width: 120, dataIndex: 'phoinf', hidden: true},
                {text: '备注', width: 120, dataIndex: 'remark'},
                {text: '姓名', width: 120, dataIndex: 'gr_contact', hidden: true},
                {text: '职务', width: 120, dataIndex: 'gr_psotion', hidden: true},
                {text: '证件类型', width: 120, dataIndex: 'gr_edoctype', hidden: true},
                {text: '证件号码', width: 120, dataIndex: 'gr_edocnum', hidden: true},
                {text: '手机号码', width: 120, dataIndex: 'gr_ephone', hidden: true},
                {text: '传真', width: 120, dataIndex: 'gr_efax', hidden: true},
                {text: 'E-mail', width: 120, dataIndex: 'gr_eemail', hidden: true},
                {text: 'QQ', width: 120, dataIndex: 'gr_eqq', hidden: true},
                {text: '个人微信号', width: 120, dataIndex: 'gr_webchat', hidden: true},
                {text: '联系人固话', width: 120, dataIndex: 'gr_tel', hidden: true},
                {text: '备注（个人）', width: 120, dataIndex: 'gr_bz', hidden: true},
                {text: '行业一级分类',  width: 120, dataIndex: 'indclass1', hidden: true},
                {text: '行业二级分类',  width: 120, dataIndex: 'indclass2', hidden: true},
                {text: '行业三级分类',  width: 120, dataIndex: 'indclass3', hidden: true},
                {text: '行业四级分类',  width: 120, dataIndex: 'indclass4', hidden: true},
                {text: '证监会行业分类', width: 120, dataIndex: 'csrc_type1', hidden: true},
                {text: '证监会行业分类2',  width: 120, dataIndex: 'csrc_type2', hidden: true},
                {text: '证监会行业分类3',  width: 120, dataIndex: 'csrc_type3', hidden: true},
                {text: '证监会行业分类4',  width: 120, dataIndex: 'csrc_type4', hidden: true},
                {text: '更新人', width: 120, dataIndex: 'changer_id', hidden: true},
                {text: '更新日期', width: 120, dataIndex: 'changer_dt', hidden: true},
                {text: '更新单位', width: 120, dataIndex: 'changer_dept', hidden: true},
                {text: '推荐日期', width: 120, dataIndex: 'recomdt', hidden: true},
                {text: '托管状态', width: 120, dataIndex: 'trusteeship', hidden: true},
                {text: '挂牌状态', width: 120, dataIndex: 'listst', hidden: true},
                {text: '企业等级', width: 120, dataIndex: 'eclass', hidden: true},
                {text: '企业维护状态', width: 120, dataIndex: 'maintain', hidden: true},
                {text: '所属后备库', width: 120, dataIndex: 'reserve', hidden: true},
                {text: '企业接待人', width: 120, dataIndex: 'emaint', hidden: true},
                {text: '部门', width: 120, dataIndex: 'dept', hidden: true},
                {text: '职务', width: 120, dataIndex: 'post', hidden: true},
                {text: '固定电话', width: 120, dataIndex: 'tel', hidden: true},
                {text: '手机', width: 120, dataIndex: 'phone', hidden: true},
                {text: '传真',  width: 120, dataIndex: 'fax', hidden: true},
                {text: 'E-mail', width: 120, dataIndex: 'email', hidden: true},
                {text: 'QQ',  width: 120, dataIndex: 'qq', hidden: true},
                {text: '微信号', width: 120, dataIndex: 'webchat_wh', hidden: true},
                {text: '联系人备注', width: 120, dataIndex: 'bz_wh', hidden: true},
                {text: '一般企业', width: 120, dataIndex: 'type_enterp', hidden: true},
                {text: '服务机构', width: 120, dataIndex: 'type_server', hidden: true},
                {text: '投资人', width: 120, dataIndex: 'type_investors', hidden: true},
                {text: '政府机构', width: 120, dataIndex: 'type_govermt', hidden: true},
                {text: '融资需求', width: 120, dataIndex: 'demand_rz', hidden: true},
                {text: '培训需求', width: 120, dataIndex: 'demand_px', hidden: true},
                {text: '人力需求', width: 120, dataIndex: 'demand_rl', hidden: true},
                {text: '录入时间', width: 120, dataIndex: 'inputdt', hidden: true},
                {text: '时间start', width: 120, dataIndex: 'start_time', hidden: true},
                {text: '时间end', width: 120, dataIndex: 'end_time', hidden: true},
                {text: '货币资金start', width: 120, dataIndex: 'st_money_fund', hidden: true},
                {text: '货币资金end',  width: 120, dataIndex: 'end_money_fund', hidden: true},
                {text: '交易性金融资产start', width: 120, dataIndex: 'st_jyxjr_assets', hidden: true},
                {text: '交易性金融资产end', width: 120, dataIndex: 'end_jyxjr_assets', hidden: true},
                {text: '应收票据start',  width: 120, dataIndex: 'st_ys_bill', hidden: true},
                {text: '应收票据end', width: 120, dataIndex: 'end_ys_bill', hidden: true},
                {text: '应收账款start', width: 120, dataIndex: 'st_ys_account', hidden: true},
                {text: '应收账款end',  width: 120, dataIndex: 'end_ys_account', hidden: true},
                {text: '预付款项start', width: 120, dataIndex: 'st_yf_money', hidden: true},
                {text: '预付款项end',  width: 120, dataIndex: 'end_yf_money', hidden: true},
                {text: '应收利息start',  width: 120, dataIndex: 'st_ys_interest', hidden: true},
                {text: '应收利息end', width: 120, dataIndex: 'end_ys_interest', hidden: true},
                {text: '应收股利start', width: 120, dataIndex: 'st_ys_dividends', hidden: true},
                {text: '应收股利end',  width: 120, dataIndex: 'end_ys_dividends', hidden: true},
                {text: '其他应收款start',  width: 120, dataIndex: 'st_other_ys_money', hidden: true},
                {text: '其他应收款end', width: 120, dataIndex: 'end_other_ys_money', hidden: true},
                {text: '存货start',  width: 120, dataIndex: 'st_inventory', hidden: true},
                {text: '存货end', width: 120, dataIndex: 'end_inventory', hidden: true},
                {text: '一年内到期的非流动资产start', width: 120, dataIndex: 'st_ynndq_no_assets', hidden: true},
                {text: '一年内到期的非流动资产end',  width: 120, dataIndex: 'end_ynndq_no_assets', hidden: true},
                {text: '其他流动资产start',  width: 120, dataIndex: 'st_other_assets', hidden: true},
                {text: '其他流动资产end', width: 120, dataIndex: 'end_other_assets', hidden: true},
                {text: '流动资产合计start',  width: 120, dataIndex: 'st_hj_assets', hidden: true},
                {text: '流动资产合计end', width: 120, dataIndex: 'end_hj_assets', hidden: true},
                {text: '可供出售金融资产start',  width: 120, dataIndex: 'st_kgcs_assets', hidden: true},
                {text: '可供出售金融资产end', width: 120, dataIndex: 'end_kgcs_assets', hidden: true},
                {text: '持有至到期投资start', width: 120, dataIndex: 'st_cyzdq_investment', hidden: true},
                {text: '持有至到期投资end',  width: 120, dataIndex: 'end_cyzdq_investment', hidden: true},
                {text: '长期应收款start', width: 120, dataIndex: 'st_long_ys_money', hidden: true},
                {text: '长期应收款end', width: 120, dataIndex: 'end_long_ys_money', hidden: true},
                {text: '长期股权投资start', width: 120, dataIndex: 'st_long_gq_investment', hidden: true},
                {text: '长期股权投资end',  width: 120, dataIndex: 'end_long_gq_investment', hidden: true},
                {text: '投资性房地产start',  width: 120, dataIndex: 'st_invest_house', hidden: true},
                {text: '投资性房地产end', width: 120, dataIndex: 'end_invest_house', hidden: true},
                {text: '固定资产start',  width: 120, dataIndex: 'st_gd_assets', hidden: true},
                {text: '固定资产end', width: 120, dataIndex: 'end_gd_assets', hidden: true},
                {text: '减：累计折旧start', width: 120, dataIndex: 'st_accu_deprec', hidden: true},
                {text: '减：累计折旧end', width: 120, dataIndex: 'end_accu_deprec', hidden: true},
                {text: '固定资产净值start',  width: 120, dataIndex: 'st_gd_assets_jz', hidden: true},
                {text: '固定资产净值end', width: 120, dataIndex: 'end_gd_assets_jz', hidden: true},
                {text: '减：固定资产减值准备start', width: 120, dataIndex: 'st_gd_assets_ready', hidden: true},
                {text: '减：固定资产减值准备end',  width: 120, dataIndex: 'end_gd_assets_ready', hidden: true},
                {text: '固定资产净额start',  width: 120, dataIndex: 'st_gd_assets_je', hidden: true},
                {text: '固定资产净额end', width: 120, dataIndex: 'end_gd_assets_je', hidden: true},
                {text: '在建工程start',  width: 120, dataIndex: 'st_now_project', hidden: true},
                {text: '在建工程end', width: 120, dataIndex: 'end_now_project', hidden: true},
                {text: '工程物资start',  width: 120, dataIndex: 'st_project_material', hidden: true},
                {text: '工程物资end', width: 120, dataIndex: 'end_project_material', hidden: true},
                {text: '固定资产清理start',  width: 120, dataIndex: 'st_gd_assets_ql', hidden: true},
                {text: '固定资产清理end', width: 120, dataIndex: 'end_gd_assets_ql', hidden: true},
                {text: '生产性生物投资start', width: 120, dataIndex: 'st_scx_investment', hidden: true},
                {text: '生产性生物投资end',  width: 120, dataIndex: 'end_scx_investment', hidden: true},
                {text: '无形资产start',  width: 120, dataIndex: 'st_wx_assets', hidden: true},
                {text: '无形资产end', width: 120, dataIndex: 'end_wx_assets', hidden: true},
                {text: '商誉start', width: 120, dataIndex: 'st_goodwill', hidden: true},
                {text: '商誉end', width: 120, dataIndex: 'end_goodwill', hidden: true},
                {text: '长期待摊费用start',  width: 120, dataIndex: 'st_cqdt_cost', hidden: true},
                {text: '长期待摊费用end', width: 120, dataIndex: 'end_cqdt_cost', hidden: true},
                {text: '递延所得税资产start', width: 120, dataIndex: 'st_dysds_assets', hidden: true},
                {text: '递延所得税资产end', width: 120, dataIndex: 'end_dysds_assets', hidden: true},
                {text: '其他非流动资产start',  width: 120, dataIndex: 'st_other_no_assets', hidden: true},
                {text: '其他非流动资产end', width: 120, dataIndex: 'end_other_no_assets', hidden: true},
                {text: '非流动资产合计start', width: 120, dataIndex: 'st_hj_no_asset', hidden: true},
                {text: '非流动资产合计end',  width: 120, dataIndex: 'end_hj_no_asset', hidden: true},
                {text: '资产总计start', width: 120, dataIndex: 'st_hj_total_asset', hidden: true},
                {text: '资产总计end',  width: 120, dataIndex: 'end_hj_total_asset', hidden: true},
                {text: '短期借款start', width: 120, dataIndex: 'st_short_borrow', hidden: true},
                {text: '短期借款end',  width: 120, dataIndex: 'end_short_borrow', hidden: true},
                {text: '交易性金融负债start', width: 120, dataIndex: 'st_jyx_finance_fz', hidden: true},
                {text: '交易性金融负债end',  width: 120, dataIndex: 'end_jyx_finance_fz', hidden: true},
                {text: '应付票据start',  width: 120, dataIndex: 'st_yf_bill', hidden: true},
                {text: '应付票据end', width: 120, dataIndex: 'end_yf_bill', hidden: true},
                {text: '应付账款start', width: 120, dataIndex: 'st_yf_account', hidden: true},
                {text: '应付账款end',  width: 120, dataIndex: 'end_yf_account', hidden: true},
                {text: '预收款项start', width: 120, dataIndex: 'st_ys_money', hidden: true},
                {text: '预收款项end',  width: 120, dataIndex: 'end_ys_money', hidden: true},
                {text: '应付职工薪酬start',  width: 120, dataIndex: 'st_yf_staff_pay', hidden: true},
                {text: '应付职工薪酬end', width: 120, dataIndex: 'end_yf_staff_pay', hidden: true},
                {text: '应交税费start', width: 120, dataIndex: 'st_yj_tax', hidden: true},
                {text: '应交税费end',  width: 120, dataIndex: 'end_yj_tax', hidden: true},
                {text: '应付利息start',  width: 120, dataIndex: 'st_yf_interest', hidden: true},
                {text: '应付利息end', width: 120, dataIndex: 'end_yf_interest', hidden: true},
                {text: '应付股利start', width: 120, dataIndex: 'st_yf_dividends', hidden: true},
                {text: '应付股利end',  width: 120, dataIndex: 'end_yf_dividends', hidden: true},
                {text: '其他应付款start',  width: 120, dataIndex: 'st_other_yf_money', hidden: true},
                {text: '其他应付款end', width: 120, dataIndex: 'end_other_yf_money', hidden: true},
                {text: '一年内到期的非流动负债start', width: 120, dataIndex: 'st_ynndq_no_fz', hidden: true},
                {text: '一年内到期的非流动负债end', width: 120, dataIndex: 'end_ynndq_no_fz', hidden: true},
                {text: '其他流动负债start', width: 120, dataIndex: 'st_other_fz', hidden: true},
                {text: '其他流动负债end',  width: 120, dataIndex: 'end_other_fz', hidden: true},
                {text: '流动负债合计start',  width: 120, dataIndex: 'st_hj_fz', hidden: true},
                {text: '流动负债合计end', width: 120, dataIndex: 'end_hj_fz', hidden: true},
                {text: '长期借款start',  width: 120, dataIndex: 'st_long_borrow', hidden: true},
                {text: '长期借款end', width: 120, dataIndex: 'end_long_borrow', hidden: true},
                {text: '应付债券start',  width: 120, dataIndex: 'st_yf_bond', hidden: true},
                {text: '应付债券end', width: 120, dataIndex: 'end_yf_bond', hidden: true},
                {text: '长期应付款start', width: 120, dataIndex: 'st_long_yf_money', hidden: true},
                {text: '长期应付款end', width: 120, dataIndex: 'end_long_yf_money', hidden: true},
                {text: '专项应付款start',  width: 120, dataIndex: 'st_zx_yf_money', hidden: true},
                {text: '专项应付款end', width: 120, dataIndex: 'end_zx_yf_money', hidden: true},
                {text: '预计负债start',  width: 120, dataIndex: 'st_yj_fz', hidden: true},
                {text: '预计负债end', width: 120, dataIndex: 'end_yj_fz', hidden: true},
                {text: '递延所得税负债start', width: 120, dataIndex: 'st_dysds_fz', hidden: true},
                {text: '递延所得税负债end',  width: 120, dataIndex: 'end_dysds_fz', hidden: true},
                {text: '其他非流动负债start', width: 120, dataIndex: 'st_other_no_fz', hidden: true},
                {text: '其他非流动负债end',  width: 120, dataIndex: 'end_other_no_fz', hidden: true},
                {text: '非流动负债合计start', width: 120, dataIndex: 'st_hj_no_fz', hidden: true},
                {text: '非流动负债合计end',  width: 120, dataIndex: 'end_hj_no_fz', hidden: true},
                {text: '负债合计start',  width: 120, dataIndex: 'st_hj_total_fz', hidden: true},
                {text: '负债合计end', width: 120, dataIndex: 'end_hj_total_fz', hidden: true},
                {text: '实收资本（或股本）start',  width: 120, dataIndex: 'st_paid_assets', hidden: true},
                {text: '实收资本（或股本）end', width: 120, dataIndex: 'end_paid_assets', hidden: true},
                {text: '资本公积start', width: 120, dataIndex: 'st_zb_reserve', hidden: true},
                {text: '资本公积end',  width: 120, dataIndex: 'end_zb_reserve', hidden: true},
                {text: '减：库存股start', width: 120, dataIndex: 'st_kc_stock', hidden: true},
                {text: '减：库存股end',  width: 120, dataIndex: 'end_kc_stock', hidden: true},
                {text: '专项储备start', width: 120, dataIndex: 'st_zx_reserve', hidden: true},
                {text: '专项储备end',  width: 120, dataIndex: 'end_zx_reserve', hidden: true},
                {text: '盈余公积start', width: 120, dataIndex: 'st_yy_reserve', hidden: true},
                {text: '盈余公积end',  width: 120, dataIndex: 'end_yy_reserve', hidden: true},
                {text: '未分配利润start', width: 120, dataIndex: 'st_wfp_profit', hidden: true},
                {text: '未分配利润end',  width: 120, dataIndex: 'end_wfp_profit', hidden: true},
                {text: '所有者权益合计start', width: 120, dataIndex: 'st_hj_owner_right', hidden: true},
                {text: '所有者权益合计end',  width: 120, dataIndex: 'end_hj_owner_right', hidden: true},
                {text: '负债和所有者权益合计start', width: 120, dataIndex: 'st_hj_fz_owner_right', hidden: true},
                {text: '负债和所有者权益合计end',  width: 120, dataIndex: 'end_hj_fz_owner_right', hidden: true},
                {text: '服务机构名称',  width: 120, dataIndex: 'server_name', hidden: true},
                {text: '服务机构类别',  width: 120, dataIndex: 'server_type', hidden: true},
                {text: '业务内容', width: 120, dataIndex: 'server_content', hidden: true},
                {text: '级别', width: 120, dataIndex: 'server_levels', hidden: true},
                {text: '专属领域',  width: 120, dataIndex: 'server_domain', hidden: true},
                {text: '惩罚记录', width: 120, dataIndex: 'server_penalty', hidden: true},
                {text: '专审委员',  width: 120, dataIndex: 'server_examiner', hidden: true},
                {text: '兼任职务', width: 120, dataIndex: 'server_post', hidden: true},
                {text: '简介', width: 120, dataIndex: 'server_descs', hidden: true},
                {text: '备注 ', width: 120, dataIndex: 'server_remark', hidden: true},
                {text: '投资领域', width: 120, dataIndex: 'inv_domain', hidden: true},
                {text: '证监会行业分类1',  width: 120, dataIndex: 'inv_csrc_type1', hidden: true},
                {text: '证监会行业分类2',  width: 120, dataIndex: 'inv_csrc_type2', hidden: true},
                {text: '证监会行业分类3',  width: 120, dataIndex: 'inv_csrc_type3', hidden: true},
                {text: '证监会行业分类4',  width: 120, dataIndex: 'inv_csrc_type4', hidden: true},
                {text: '行业一级分类',  width: 120, dataIndex: 'inv_indclass1', hidden: true},
                {text: '行业二级分类',  width: 120, dataIndex: 'inv_indclass2', hidden: true},
                {text: '行业三级分类',  width: 120, dataIndex: 'inv_indclass3', hidden: true},
                {text: '行业四级分类',  width: 120, dataIndex: 'inv_indclass4', hidden: true},
                {text: '联系人', width: 120, dataIndex: 'inv_contact', hidden: true},
                {text: '职务', width: 120, dataIndex: 'inv_psotion', hidden: true},
                {text: '证件类型', width: 120, dataIndex: 'inv_doctype', hidden: true},
                {text: '证件号码', width: 120, dataIndex: 'inv_docnum', hidden: true},
                {text: '手机号码', width: 120, dataIndex: 'inv_phone', hidden: true},
                {text: '传真', width: 120, dataIndex: 'inv_fax', hidden: true},
                {text: 'E-mail', width: 120, dataIndex: 'inv_email', hidden: true},
                {text: 'QQ', width: 120, dataIndex: 'inv_qq', hidden: true},
                {text: '个人微信号',  width: 120, dataIndex: 'inv_webchat', hidden: true},
                {text: '固定电话', width: 120, dataIndex: 'inv_tel', hidden: true},
                {text: '备注', width: 120, dataIndex: 'inv_remark', hidden: true},
                {text: '单位名称', width: 120, dataIndex: 'gov_domain', hidden: true},
                {text: '处/室', width: 120, dataIndex: 'gov_office', hidden: true},
                {text: '职能介绍', width: 120, dataIndex: 'gov_desc', hidden: true},
                {text: '联系人', width: 120, dataIndex: 'gov_contact', hidden: true},
                {text: '职务', width: 120, dataIndex: 'gov_psotion', hidden: true},
                {text: '证件类型', width: 120, dataIndex: 'gov_doctype', hidden: true},
                {text: '证件号码', width: 120, dataIndex: 'gov_docnum', hidden: true},
                {text: '手机号码', width: 120, dataIndex: 'gov_phone', hidden: true},
                {text: '传真', width: 120, dataIndex: 'gov_fax', hidden: true},
                {text: 'E-mail', width: 120, dataIndex: 'gov_email', hidden: true},
                {text: 'QQ', width: 120, dataIndex: 'gov_qq', hidden: true},
                {text: '个人微信号',  width: 120, dataIndex: 'gov_webchat', hidden: true},
                {text: '固定电话', width: 120, dataIndex: 'gov_tel', hidden: true},
                {text: '备注', width: 120, dataIndex: 'gov_remark', hidden: true},
                {text: '融资金额', width: 120, dataIndex: 'rz_amounts', hidden: true},
                {text: '融资用途', width: 120, dataIndex: 'rz_use', hidden: true},
                {text: '股份融资/债券融资', width: 120, dataIndex: 'rz_financ', hidden: true},
                {text: '偿付保障', width: 120, dataIndex: 'rz_security', hidden: true},
                {text: '可接受成本（%/年）',  width: 120, dataIndex: 'rz_acc_cost', hidden: true},
                {text: '融资期限', width: 120, dataIndex: 'rz_deadline', hidden: true},
                {text: '融资用途详细说明',  width: 120, dataIndex: 'rz_desc', hidden: true},
                {text: '培训方式', width: 120, dataIndex: 'px_mode', hidden: true},
                {text: '培训内容', width: 120, dataIndex: 'px_content', hidden: true},
                {text: '可接受成本',  width: 120, dataIndex: 'px_acc_cost', hidden: true},
                {text: '有效时间', width: 120, dataIndex: 'px_dt', hidden: true},
                {text: '详细要求', width: 120, dataIndex: 'px_requests', hidden: true},
                {text: '需求职位', width: 120, dataIndex: 'hr_post', hidden: true},
                {text: '职位人数', width: 120, dataIndex: 'hr_num', hidden: true},
                {text: '职位薪金', width: 120, dataIndex: 'hr_salary', hidden: true},
                {text: '性别要求', width: 120, dataIndex: 'hr_sex_req', hidden: true},
                {text: '年龄要求', width: 120, dataIndex: 'hr_age_req', hidden: true},
                {text: '经验要求', width: 120, dataIndex: 'hr_requests', hidden: true},

            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                    store: 'investors',
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

function investors_close_edit() {
    Ext.getCmp('investors_edit_id').close();

}
