//var str = "static/upload/";

Ext.define('App.view.enterprise.Applyf', {
    extend: 'Ext.form.FormPanel',
    alias: 'widget.applyf', 
    layout: 'fit',
    listeners: {
        afterrender: function () {
            setup();preselect('甘肃省');
            setup_cl();preselect_cl('农、林、牧、渔业');
            setup_zjh();type_zjh('农、林、牧、渔业');
            setup_cl_investors();preselect_cl_investors('农、林、牧、渔业');
            setup_zjh_investors();type_zjh('农、林、牧、渔业');
        }
    },

    border: false,
    id: 'image-upload',
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
                id: 'applyf_panel',
                autoScroll: true,
                listeners: {
                    afterrender: function () {
                        var obtain_panel = Ext.getCmp('applyf_panel');
                        corp_apply_con_tpl.overwrite(obtain_panel.body, {});
                    }
                },
                dockedItems: [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        border: true,
                        items: [
                            {
                                text: '新建',
                                handler: function () {
                                    document.getElementById('apply_form').reset();
                                }
                            },
                            '-',
                            {
                                text: '保存',
                                handler: function () {
                                    //if (document.getElementById("apply_form_id_licmd").value == "") {
                                    //    Ext.Msg.alert("提示", "<span style='color: red;'>申请类别不能为空！</span>")
                                    //    return;
                                    //} 
                                    save_cust_add()
                                }
                            }
 
                        ]
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});

function NumberCheck(num)
{
    var regex = /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/;
    return regex.exec(num) != null;
}

function win_close() {
    Ext.getCmp('cust_add_id').close();
}

function save_cust_add() {
    var corp_id;
    if(document.getElementById('apply_form')['buslicno'].value==null && document.getElementById('apply_form')['buslicno'].value==""){
        Ext.Msg.alert("提示", "请填写营业执照号码！");
        return;
    }else{
        Ext.Ajax.request({
            method: "POST",
            url: 'checked_corp_id_info',
            success: function (response,opts) {
                var obj=Ext.decode(response.responseText);

                if(obj.success)
                {
                    corp_id=parseInt(obj.name);
                }
                obt_corp_add(corp_id);
                obt_corp_contact_add(corp_id);
                obt_corp_shareholder_add(corp_id);
                obt_corp_finance_add(corp_id);
                obt_corp_maintain_add(corp_id);
                obt_corp_government_add(corp_id);
                obt_corp_investors_add(corp_id);
                obt_corp_service_add(corp_id);
                obt_corp_refinancing_add(corp_id);
                obt_corp_rehr_add(corp_id);
                obt_corp_retrain_add(corp_id);
            },
            failure: function(form, action){
                Ext.Msg.alert("失败", "企业ID检验失败!");
            }
        });
    }
}

function card_check_apply() {
    var form_obt_apply = document.getElementById("apply_form");
    Ext.Ajax.request({
        method: "POST",
        params: {
            buslicno: form_obt_apply['buslicno'].value,
            id : 0
        },
        url: 'check_buslicno_info',
        success: function (response,opts) {
            var obj=Ext.decode(response.responseText);

            if(!obj.success)
            {
                Ext.Msg.alert("提示", "该营业执照号码已用！");
                document.getElementById('apply_form')['buslicno'].value="";
            }
        },
        failure: function (response,opts) {
            Ext.Msg.alert("提示", "错");
        }
    });
}

function addRow()
{
}
