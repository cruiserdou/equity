


Ext.define('App.view.enterprise.Enterprisef', {
    extend: 'Ext.panel.Panel',
    border: false,
    frame: true,
    alias: 'widget.enterprisef',
    id :'enterprisef_id',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
                margin: '0 0 0 5',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'panel',
                        border: false,
                        flex: 0.2

                    },
                    {
                        xtype: 'panel',
                        border: false,
                        height: 200,
                        width: 200,
                        //flex: 0.6,
                        html:'<div>' +
                        '<a href="#"  style="font-size:18px;   margin-top: 26px;  width: 200px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="corp_export({id})">导出</a>'+
                        '<a href="#"  style="font-size:18px;   margin-top: 26px;  width: 200px;  font-size: 14px;  border: 1px solid #ffffff;  border-radius: 8px;  padding: 4px 25px;  cursor: hand;  color: #fff;  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 1px 0px;  background-image: linear-gradient(#f27809, #e14100);  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);" onclick="corp_export({id})">导出</a>'+

                        '</div>'
                    },
                    {
                        xtype: 'panel',
                        border: false,
                        flex: 0.2
                    }



                ],
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});

//var p= new Ext.Panel({
//    title: 'Hello',
//    width: 500,
//    height: 500,
//    renderTo: Ext.getBody(),
//    collapsible: true
//});

//var f= 1;
//var b= new Ext.({
//    text: '嘿嘿',
//    renderTo:document.body,
//    handler: function() {
//        if (f=== 1) {
//            p.collapse();  //panel收缩
//            f= 0;  //修改公共变量值
//        } else {
//            p.expand();  //panel展开
//            f= 1;  //修改公共变量值
//        }
//    }
//});

 