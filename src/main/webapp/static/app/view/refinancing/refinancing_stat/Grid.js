Ext.define('App.view.refinancing.refinancing_stat.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.refinancing_statf_grid',
        store: 'corp_refinancing_stat',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_refinancing_stat',

     
        initComponent: function () {

            this.columns = [

                {text: '融资需求企业数量',  flex: 1, dataIndex: 'corp_num' }
            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_refinancing_stat',
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

