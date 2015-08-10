Ext.define('App.view.service.service_stat.Grid', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.service_statf_grid',
        store: 'corp_service_stat',
        selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
        id :'grid_service_stat',

      
        initComponent: function () {

            this.columns = [

                {text: '服务机构数量',  flex: 1, dataIndex: 'corp_num' }
            ];

            this.viewConfig = {
                forceFit: true
            };
            Ext.apply(this, {
                bbar: Ext.create('Ext.PagingToolbar', {
                store: 'corp_service_stat',
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

