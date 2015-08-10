Ext.define('App.view.government.government_stat.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.government_statf_grid',
        store: 'corp_government_stat',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_government_stat',

        initComponent: function () {

            this.columns = [

                {text: '政府部门数量',  flex: 1, dataIndex: 'corp_num' }
            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_service_all',
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

