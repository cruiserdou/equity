/**
 * Created by xwq on 6/20/15.
 */
var corp_contact_tpl= new Ext.XTemplate(


    '<h2>dd</h2>',
    '<table class="enter_table" id="table_link">',
    '<tr>',
    '<th class="table_header" colspan="4">法定代表人基本信息</th>',
    '</tr>',
    '<tr>',
    '<th>姓名</th>',
    '<td>{cont_name}</td>',
    '<th>证件类型</th>',
    '<td>{cont_edoctype}</td>',
    '</tr>',
    '<tr>',
    '<th>职务</th>',
    '<td>{cont_psotion}</td>',
    '<th>证件号码</th>',
    '<td>{cont_edocnum}</td>',
    '</tr>',
    '<tr>',
    '<th>手机</th>',
    '<td>{cont_ephone}</td>',
    '<th>传真</th>',
    '<td>{cont_efax}</td>',
    '</tr>',
    '<tr>',
    '<th>E-mail</th>',
    '<td>{cont_eemail}</td>',
    '<th>QQ</th>',
    '<td>{cont_eqq}</td>',
    '</tr>',
    '<tr>'+
    '<th>微信号</th>'+
    '<td>{cont_webchat}</td>'+
    '<th>固话</th>',
    '<td>{cont_tel}</td>'+
    '</tr>'+
    '<tr>'+
    '<th>备注</th>'+
    '<td colspan="3"><textarea disabled id="cont_bz" name="cont_bz"  type="text" value="{cont_bz}">{cont_bz}</textarea></td>'+
    '</tr>'+
    '</table>'
);


var corp_maintain_tpl= new Ext.XTemplate(
    '<table  class="enter_table" id="table_ocompay">',
    '<tr>',
    '<th class="table_header" colspan="4">企业最近一次被关注信息</th>',
    '</tr>',
    '<tr>',
    '<th>更新日期</th>',
    '<td>{mai_changer_dt}</td>',
    '<th>更新人</th>',
    '<td>{mai_changer_id}</td>',
    '</tr>',
    '<tr>',
    '<th>更新单位</th>',
    '<td>{mai_changer_dept}</td>',
    '<th>推荐日期</th>',
    '<td>{mai_recomdt}</td>',
    '</tr>',
    '<tr>',
    '<th>托管状态</th>',
    '<td>{mai_trusteeship}</td>',
    '<th>挂牌状态</th>',
    '<td>{mai_listst}</td>',
    '</tr>',
    '<tr>',
    '<th>企业等级</th>',
    '<td>{mai_eclass}</td>',
    '<th>企业维护状态</th>',
    '<td>{mai_maintain}</td>',
    '</tr>',
    '<tr>',
    '<th>所属后备库</th>',
    '<td>{mai_reserve}</td>',
    '<th>企业接待人</th>',
    '<td>{mai_emaint}</td>',
    '</tr>',
    '<tr>',
    '<th>部门</th>',
    '<td>{mai_dept}</td>',
    '<th>职务</th>',
    '<td>{mai_post}</td>',
    '</tr>',
    '<tr>',
    '<th>固定电话</th>',
    '<td>{mai_tel}</td>',
    '<th>手机号码</th>',
    '<td>{mai_phone}</td>',
    '</tr>',
    '<tr>',
    '<th>传真</th>',
    '<td>{mai_fax}</td>',
    '<th>E-mail</th>',
    '<td>{mai_email}</td>',
    '</tr>',
    '<tr>',
    '<th>QQ</th>',
    '<td>{mai_qq}</td>',
    '<th>微信号</th>',
    '<td>{mai_webchat}</td>',
    '</tr>',
    '<tr>',
    '<th>备注</th>',
    '<td colspan="3"><textarea  disabled id="mai_bz" name="mai_bz"  type="text" value="{mai_bz}">{mai_bz}</textarea></td>'+
    '</tr>',
    '</table>'
);