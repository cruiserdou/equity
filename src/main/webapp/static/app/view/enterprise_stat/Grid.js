Ext.define('App.view.enterprise_stat.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_statf_grid',
    store: 'corp_stat',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise_stat',


    initComponent: function () {
        this.columns = [

            {text: '企业数量',  flex: 1, dataIndex: 'corp_num' }
        ];
        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_stat',
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