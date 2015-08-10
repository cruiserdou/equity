Ext.define('App.view.investors.investors_stat.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.investors_statf_grid',
        store: 'corp_investors_stat',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_investors_stat',
 
        initComponent: function () {

            this.columns = [

                {text: '投资人数量',  flex: 1, dataIndex: 'corp_num' }
            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                    store: 'corp_investors_stat',
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

