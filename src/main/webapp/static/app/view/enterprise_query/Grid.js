Ext.define('App.view.enterprise_query.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.enterprise_queryf_grid',
    store: 'enterprise',
    selModel: new Ext.selection.CheckboxModel({checkOnly: false}),
    id: 'grid_enterprise_query',
    listeners: {
        'itemdblclick': function (view, record, item, index, e) {
            //创建模板
            var apply_edits = new Ext.XTemplate(
                '<div>',
                '<div class="wrap_center">',
                '<h2>企业信息查看</h2>',
                '<table class="enter_table">',
                '<tr>',
                '<th class="table_header" colspan="4">基本信息</th>',
                '</tr>',
                '<tr>',
                '<th>公司中文简称</th>',
                '<td>中国石化</td>',
                '<th>成立日期</th>',
                '<td>1998-07-27</td>',
                '</tr>',
                '<tr>',
                '<th>英文名称</th>',
                '<td>China Petrochemical Corporation</td>',
                '<th>法人代表</th>',
                '<td>傅成玉</td>',
                '</tr>',
                '<tr>',
                '<th>英文名称缩写</th>',
                '<td>CHINA PETROCHEMICAL</td>',
                '<th>所属行业</th>',
                '<td>综合性天然气</td>',
                '</tr>',
                '<tr>',
                '<th>交易性质</th>',
                '<td>并购，债券</td>',
                '<th>注册地点</th>',
                '<td>北京朝阳区朝阳门北大街22号</td>',
                '</tr>',
                '<tr>',
                '<th>上市状态</th>',
                '<td>非上市企业</td>',
                '<th>注册资本</th>',
                '<td>23162058万元</td>',
                '</tr>',
                '<tr>',
                '<th>发行证券</th>',
                '<td>--</td>',
                '<th>所属集团系</th>',
                '<td>--</td>',
                '</tr>',
                '<tr>',
                '<th>工商注册ID</th>',
                '<td>100000000244</td>',
                '<th>员工人数</th>',
                '<td>1060000</td>',
                '</tr>',
                '<tr>',
                '<th>主营业务</th>',
                '<td></td>',
                '<th>公司简介</th>',
                '<td></td>',
                '</tr>',
                '</table>',


                '<table class="enter_table">',
                '<tr>',
                '<th class="table_header" colspan="4">联系方式</th>',
                '</tr>',
                '<tr>',
                '<th>国际</th>',
                '<td>中国</td>',
                '<th>省份</th>',
                '<td>北京</td>',
                '</tr>',
                '<tr>',
                '<th>城市</th>',
                '<td>北京</td>',
                '<th>公司地址</th>',
                '<td>北京市朝阳区朝阳门北大街22号</td>',
                '</tr>',
                '<tr>',
                '<th>公司网址</th>',
                '<td>www.sinopecgroup.cn</td>',
                '<th>邮编</th>',
                '<td>100728</td>',
                '</tr>',
                '<tr>',
                '<th>联系电话</th>',
                '<td>86-10-59969297</td>',
                '<th></th>',
                '<td></td>',
                '</tr>',
                '</table>',
                '</div>',
                '<div style="position: fixed; top: 7em; right: 6em">',
                '<ul>',
                '<li>基本信息</li><li>联系方式</li><li>主要股东</li>',
                '</ul>',
                '</div>',
                '</div>'
            );

            //呈现组件
            var mypanel = new Ext.form.FormPanel({
                id: "mypanel",
                width: 820,
                frame: false,
                height: 600,
                border: false,
                bodyStyle: 'overflow-x:hidden; overflow-y:scroll',
                renderTo: Ext.getBody()
            });


            //重写绑定模板
            apply_edits.overwrite(mypanel.body, record.data);
            var editWindow = new Ext.Window({
                layout: 'fit',
                width: 830,
                height: 650,
                modal: true,
                title: '企业信息',
                maximized: true,
                maximizable: true,
                items: [mypanel]
            });
            editWindow.show(Ext.get('body'));

        }
    },

    initComponent: function () {

        this.columns = [
            {text: 'ID', width: 80, dataIndex: 'id', hidden: true},
            {text: '企业名称', width: 200, dataIndex: 'name'},
            {text: '企业简称', width: 120, dataIndex: 'nos'},
            {text: '企业类型', width: 120, dataIndex: 'etype'},
            {text: '挂牌代码', width: 120, dataIndex: 'listcode'},
            {text: '挂牌价格', width: 120, dataIndex: 'listprice'},
            {text: '企业性质', width: 120, dataIndex: 'nature'},
            {text: '营业执照号', width: 120, dataIndex: 'buslic'},
            {text: '维护状态', width: 120, dataIndex: 'status'},
            {text: '所属后备库', width: 120, dataIndex: 'reserve'},
            {text: '注册时间', width: 120, dataIndex: 'regdate'},
            {text: '是否已标记', width: 120, dataIndex: 'markstat'},
            {text: '完成回访状态', width: 200, dataIndex: 'visitstat'},
            {text: '备注', flex: 1, dataIndex: 'remark'}


        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'enterprise',
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