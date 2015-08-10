Ext.define('App.view.retrain.retrain_stat.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.retrain_statf_grid',
        store: 'corp_retrain_stat',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_retrain_stat',

   
        initComponent: function () {

            this.columns = [

                {text: '培训需求企业数量',  flex: 1, dataIndex: 'corp_num' }
            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_retrain_stat',
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


