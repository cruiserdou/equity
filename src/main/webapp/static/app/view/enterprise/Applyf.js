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
function k22() {

    var grid_corp_img_file = Ext.create('Ext.grid.Panel', {
        store: 'corp_img',
        id: 'grid_corp_img_id',
        selType: 'checkboxmodel',
        listeners: {
            afterrender: function () {
                Ext.getCmp('grid_corp_img_id').getStore().load(
                    {
                        params: {
                            img_corp_id: img_corp_id
                        }
                    }
                );
            }
        },

        columns: [

        ],
        columnLines: true,
        glyph: 0xf0c6,
        margin: '0 0 5 0'
    });


}

function corp_img_upload(id) {

    Ext.create('widget.window', {
        title: '企业',
        id: 'corp_find_window',
        width: 800,
        height: 600,
        modal: true,
        frame: true,
        border: false,
        layout: 'border',
        dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                border: true,
                items: [
                    {
                        text: '上传',
                        id: 'market_update_id',
                        listeners: {
                            click: function () {
                                Ext.create('widget.window', {
                                    title: '资料上传',
                                    width: 280,
                                    height: 160,
                                    modal: true,
                                    border: false,
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'form',
                                            frame: true,
                                            bodyPadding: 16,
                                            defaults: {
                                                labelWidth: 50
                                            },
                                            items: [
                                                {
                                                    xtype: 'filefield',
                                                    allowBlank: false,
                                                    fieldLabel: '文件',
                                                    name: 'file',
                                                    id: 'file',
                                                    anchor: '100%',
                                                    buttonText: '浏览...',
                                                    buttonConfig: {
                                                        iconCls: 'upload'
                                                    },
                                                    listeners: {
                                                        change: function (btn, value) {
                                                            //是否是规定的图片类型
                                                            var img_reg = /\.([jJ][pP][gG])$|\.([jJ][pP][eE][gG])$|\.([gG][iI][fF])小贝$|\.([pP][nN][gG])$|\.([bB][mM][pP])$/;
                                                            if (img_reg.test(value)) {
                                                                var img = Ext.getCmp('staffavatar');
                                                                var file = btn.fileInputEl.dom.files[0];
                                                                var url = URL.createObjectURL(file);
                                                                img.setSrc(url);
                                                            } else {
                                                                Ext.Msg.alert('提示', '请选择图片类型的文件！');
                                                                Ext.getCmp('file').reset();
                                                                return;
                                                            }
                                                        }
                                                    }
                                                },
                                                {
                                                    allowBlank: false,
                                                    xtype: 'combobox',
                                                    name: 'c_type',
                                                    fieldLabel: '类别',
                                                    store: 'market_dicts',
                                                    displayField: 'fieldvaldis',
                                                    valueField: 'fieldvaldis'
                                                }
                                            ],
                                            buttonAlign: "center",
                                            buttons: [
                                                {
                                                    text: '保存',
                                                    iconCls: 'icon_save',
                                                    handler: function () {
                                                        var form = this.up('form').getForm();
                                                        if (form.isValid()) {
                                                            form.submit({
                                                                url: 'add_market_annex_info',
                                                                params: {
                                                                    market_id: Ext.getCmp('market_survey_grid').getSelectionModel().getSelection()[0].get('id'),
                                                                    market_nm: Ext.getCmp('market_survey_grid').getSelectionModel().getSelection()[0].get('name'),
                                                                    c_type: ''
                                                                },
                                                                waitMsg: '正在保存数据...',
                                                                success: function (response, action) {
                                                                    Ext.Msg.alert("成功", "文件上传成功!");
                                                                    Ext.getCmp('grid_market_annex_id').getStore().reload();
                                                                },
                                                                failure: function (form, action) {
                                                                    Ext.Msg.alert("提示", "文件格式不正确，只能上传jpg,png格式的文件！");
                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }).show(Ext.get(market_update_id));
                            }
                        }
                    }
                ]
            }
        ],
        items: [
            {
                xtype: 'corp_img_gridf',
                region: 'center'
            }
        ]
    }).show(Ext.get('corp_find_window'));

};
