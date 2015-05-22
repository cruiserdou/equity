
Ext.define('App.view.enterprise_query.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_queryf_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id :'grid_enterprise_query',



        listeners: {
            'itemdblclick': function (view, record, item, index, e) {
                //创建模板
                var apply_edits = new Ext.XTemplate(
                    '<div class="wrap_center">',
                    '<form id="apply_edit_form">',
                    '<h2 align="center">经营性道路客货运输驾驶员从业资格考试申请表</h2>',
                    '<table id="appro_table">',
                    '<tr>',
                    '<td>姓名<span style="color: red">*</span></td><td><input id="apply_form_id_name" style="width:60px;" name="name"  type="text" value="{name}"/></td>',
                    '<td>性别<span style="color: red">*</span></td><td>' +
                    '<select id="apply_form_id_sex" name="sex"  size="1"  style=" width:100%;height:100%;font-size:13px;background:#FFFFFF">',
                    '<option name="sex" value="男"  >男</option>',
                    '<option name="sex" value="女"  <tpl if="this.checkSex_f(sex)">selected=""</tpl> >女</option>',
                    '</select>',
                    '</td>',
                    '<td>学历<span style="color: red">*</span></td><td><input id="apply_form_id_education" style="width:60px;" name="education"  type="text" value="{education}"/></td>',
                    '<td style="width:120px;" rowspan="4">',
                    '<img onclick="pub_upload_file(\'apply_form_img\')" id="apply_form_img" name="photo" value="{photo}"   style="width: 136px; height: 139px;" src="static/upload/{photo}" alt="点击上传照片"/>',
                    '</td></tr>',
                    '<tr>',
                    ' <td>住址<span style="color: red">*</span></td><td colspan="5"><input id="apply_form_id_address" placeholder="(电话)" style="width:90px;" name="address"  type="text" value="{address}"/></td>',
                    '</tr>',
                    '<tr>',
                    '<td>工作单位<span style="color: red">*</span></td><td colspan="5"><input id="apply_form_id_workunit" placeholder="(电话)" style="width:90px;" name="workunit"  type="text" value="{workunit}"/></td>',
                    '</tr>',
                    '<tr>',
                    '<td>身份证号<span style="color: red">*</span></td><td colspan="5"><span id="apply_form_id_card"  style="width:150px;" name="card"  type="text" value="{card}">{card}</span></td>' +
                    '<td><input style="visibility:hidden" id="apply_form_id_pxnum"  name="pxnum"  type="text" value="{pxnum}"/></td>',
                    '</tr>',
                    '<tr><td>驾驶证准驾车型<span style="color: red">*</span></td><td colspan="2">' +
                    '<select id="apply_form_id_lictype" name="lictype"  size="1"  style="width:100%;height:100%;font-size:13px;background:#FFFFFF">',
                    '<option name="lictype" value="A1" <tpl if="this.checktype_A1(lictype)">selected=""</tpl>>A1</option>',
                    '<option name="lictype" value="A2" <tpl if="this.checktype_A2(lictype)">selected=""</tpl>>A2</option>',
                    '<option name="lictype" value="A3" <tpl if="this.checktype_A3(lictype)">selected=""</tpl>>A3</option>',
                    '<option name="lictype" value="B1" <tpl if="this.checktype_B1(lictype)">selected=""</tpl>>B1</option>',
                    '<option name="lictype" value="B2" <tpl if="this.checktype_B2(lictype)">selected=""</tpl>>B2</option>',
                    '<option name="lictype" value="C1" <tpl if="this.checktype_C1(lictype)">selected=""</tpl>>C1</option>',
                    '<option name="lictype" value="C2" <tpl if="this.checktype_C2(lictype)">selected=""</tpl>>C2</option>',
                    '<option name="lictype" value="C3" <tpl if="this.checktype_C3(lictype)">selected=""</tpl>>C3</option>',
                    '</select>',
                    '</td>' +
                    '<td>初领驾驶证日期<span style="color: red">*</span></td><td colspan="3"><input style="width:160px;" name="licdt"  type="date" value="{licdt}"/></td>',
                    '</tr>',
                    '<tr>',
                    '<td>申请种类<span style="color: red">*</span></td><td colspan="3">',
                    '<input style="width:60px;" name="applytp"  type="radio" value="初领" <tpl if="this.checkapplytp_Y(applytp)">checked="true"</tpl>/>初领',
                    '<td style="border-left: none;" colspan="3"><input style="width:60px;" name="applytp"  type="radio" value="增驾" <tpl if="this.checkapplytp_N(applytp)">checked="true"</tpl>/>增驾',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    ' <td>原从业资格证件号</td><td colspan="6"><input style="width:98px;" name="qulfnum"  type="text" value="{qulfnum}"/></td>',
                    '</tr>',
                    ' <td>申请类别<span style="color: red">*</span></td><td colspan="6">',
                    '<input id="apply_form_id_licmd" type="checkbox" name="licmd" value="道路旅客运输" <tpl if="this.checklicmd_Y(licmd)">checked="true"</tpl>/>道路旅客运输&nbsp;',
                    '<input type="checkbox" name="licmd_goods" value="道路货物运输" <tpl if="this.checklicmd_N(licmd_goods)">checked="true"</tpl>/>道路货物运输&nbsp;',
                    '</td>',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    ' <td>材料清单<span style="color: red">*</span></td><td colspan="6">',
                    '<input type="checkbox" name="checklist1" value="身份证明原件" <tpl if="this.checkchecklist1(checklist1)">checked="true"</tpl>/>身份证明原件&nbsp;',
                    '<input type="checkbox" name="checklist2" value="身份证明复印件" <tpl if="this.checkchecklist2(checklist2)">checked="true"</tpl>/>身份证明复印件&nbsp;',
                    '<input type="checkbox" name="checklist3" value="驾驶证原件" <tpl if="this.checkchecklist3(checklist3)">checked="true"</tpl>/>驾驶证原件&nbsp;',
                    '<input type="checkbox" name="checklist4" value="驾驶证复印件" <tpl if="this.checkchecklist4(checklist4)">checked="true"</tpl>/>驾驶证复印件&nbsp;',
                    '<input type="checkbox" name="checklist5" value="无重大以上责任事故记录证明" <tpl if="this.checkchecklist5(checklist5)">checked="true"</tpl>/>无重大以上责任事故记录证明&nbsp;',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<td>承&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp诺<span style="color: red">*</span></td><td colspan="6"><p>本人承诺上述所有内容真实、有效、并承担由此产生的法律责任</p>',
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人签字：<input id="apply_form_id_promise" style="width:98px;" name="promise"  type="text" value="{promise}"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '日期：<input type="date" name="promisedt"  value="{promisedt}" />',
                    '</td>',
                    '</tr>',
                    '<tr>',
                    '<td rowspan="5">考试记录</td><td colspan="2">成绩</td><td colspan="2">考核员</td><td colspan="2">考核员</td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><input type="text" name="score1" /></td><td colspan="2"><input type="text" name="pa1"></td><td colspan="2"><input type="text" name="pa2"></td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><input type="text" name="score1" /></td><td colspan="2"><input type="text" name="pa2"></td><td colspan="2"><input type="text" name="pa2"></td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><input type="text" name="score1" /></td><td colspan="2"><input type="text" name="pa3"></td><td colspan="2"><input type="text" name="pa2"></td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><input type="text" name="score1" /></td><td colspan="2"><input type="text" name="pa4"></td><td colspan="2"><input type="text" name="pa2"></td>',
                    '</tr>',
                    '<tr>',
                    ' <td>道路运输管理机构意见</td><td colspan="6">（盖章）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" /></td>',
                    '</tr>',
                    '<tr>',
                    '<td rowspan="2">从业资格证发放</td>',
                    '<td>发放人（签字）</td><td colspan="2"><input type="text"></td><td>日期</td><td colspan="2"><input type="date" /></td>',
                    '</tr>',
                    '<tr>',
                    '<td>领取人（签字）</td><td colspan="2"><input type="text"></td><td>日期</td><td colspan="2"><input type="date" /></td>',
                    '</tr>',
                    '</table>',
                    '</form>',
                    '</div>',
                    {
                        checkSex_f: function (sex) {
                            return sex!="男";
                        },
                        checkSex_m: function (sex) {
                            return sex =="男";
                        },
                        checktype_C3: function (lictype) {
                            return lictype=="C3";
                        },
                        checktype_C2: function (lictype) {
                            return lictype=="C2";
                        },
                        checktype_C1: function (lictype) {
                            return lictype=="C1";
                        },
                        checktype_B2: function (lictype) {
                            return lictype=="B2";
                        },
                        checktype_B1: function (lictype) {
                            return lictype=="B1";
                        },
                        checktype_A3: function (lictype) {
                            return lictype=="A3";
                        },
                        checktype_A2: function (lictype) {
                            return lictype=="A2";
                        },
                        checktype_A1: function (lictype) {
                            return lictype=="A1";
                        },
                        checkapplytp_Y : function (applytp) {
                            return applytp =="初领";
                        },
                        checkapplytp_N : function (applytp) {
                            return applytp !="初领";
                        },
                        checklicmd_Y : function (licmd) {
                            return licmd == "道路旅客运输";
                        },
                        checklicmd_N : function (licmd_goods) {
                            return licmd_goods == "道路货物运输";
                        },
                        checkchecklist1 : function (checklist1) {
                            return checklist1=="true";
                        },
                        checkchecklist2 : function (checklist2) {
                            return checklist2=="true";
                        },
                        checkchecklist3 : function (checklist3) {
                            return checklist3=="true";
                        },
                        checkchecklist4 : function (checklist4) {
                            return checklist4=="true";
                        },
                        checkchecklist5 : function (checklist5) {
                            return checklist5=="true";
                        }
                    }
                );

                //呈现组件
                var mypanel = new Ext.form.FormPanel({
                    id: "mypanel",
                    width: 820,
                    frame: true,
                    height: 600,
                    bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
                    renderTo: Ext.getBody()
                });


                //重写绑定模板
                apply_edits.overwrite(mypanel.body, record.data);
                var editWindow = new Ext.Window({
                    layout: 'fit',
                    width: 830,
                    height: 650,
                    modal: true,
                    title: '查看考生信息',
//            bodyStyle : 'overflow-x:hidden; overflow-y:scroll',
                    items: [mypanel]
                });
                editWindow.show(Ext.get('examinees_query_id'));

            }},

    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '企业名称', width: 200, dataIndex: 'name'},
            {text: '企业简称', width: 120, dataIndex: 'nos'},
            {text: '企业类型', width: 120, dataIndex: 'etype'},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
            {text: '挂牌价格', width: 120, dataIndex: 'listprice'},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '营业执照号', width: 120, dataIndex: 'buslic'},
            {text: '维护状态', width: 120, dataIndex: 'status'},
            {text: '所属后备库', width: 120, dataIndex: 'reserve'},
            {text: '注册时间', width: 120, dataIndex: 'regdate'},
            {text: '是否已标记', width: 120, dataIndex: 'markstat'},
            {text: '完成回访状态', width: 200, dataIndex: 'visitstat'},
            {text: '备注', flex: 1, dataIndex: 'remark'}



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