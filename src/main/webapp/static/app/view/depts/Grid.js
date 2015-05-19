var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.depts.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.deptf_grid',
    store: 'syj_depts',
    selModel: sm,
    id :'grid_depts',
    listeners: {
        itemclick: function (this_, record_) {
            var depts_panel = Ext.getCmp('depts_info');
            depts_panel.tpl.overwrite(depts_panel.body, record_.data);
        }
    },
    initComponent: function () {

        this.columns = [
            {text: '部门ID', width: 80, dataIndex: 'id',hidden:true},
            {text: '部门编号', width: 100, dataIndex: 'nos'},
            {text: '部门名称', width: 100, dataIndex: 'deptname'},
            {text: '部门描述', width: 200, dataIndex: 'deptdesc'},
            {
                text: '部门主管', width: 100, dataIndex: 'leader',
                renderer: function (val) {
                //
                //    var rstore = Ext.create('Ext.data.Store', {
                //        storeId:'RitemComboStore',
                //        model: 'App.model.syj_users',
                //        proxy: {
                //            type: 'ajax',
                //            url : 'obtain_users_info',
                //            actionMethods : 'post',
                //            reader: {
                //                type: 'json'
                //            }
                //        },
                //        autoLoad:true
                //    });
                //
                    //var rstore = Ext.data.StoreManager.get('dict_user_id');

                    var index = rstore.find('id',value);
                    alert(index);
                    if(index==-1)  {
                        alert("11");
                        //当store中找不到对应id得时候,index为-1
                        return null;
                    }
                    else{
                        alert("22");
                        var record = rstore.getAt(index).get('name');
                        return record;
                    }
                }},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_depts',
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

