Ext.define('App.controller.Tabitem', {
    extend: 'Ext.app.Controller',



    models: [
        'syj_depts','syj_users','syj_menu','Dept_store','syj_dicts'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg'
    ],

    stores: [
        'syj_depts','syj_users','syj_menu','Dept_store','syj_dicts'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg'
    ],

    views: [

        'users.Usersf','users.Query', 'users.Grid',
        'depts.Deptf', 'depts.Grid', 'depts.Query',
        'dicts.Dictsf', 'dicts.Grid', 'dicts.Query',
        'roles.Rolesf', 'roles.Query', 'roles.Grid',
        'userroles.Userrolesf', 'userroles.Query', 'userroles.Grid',
        'menu.Policef', 'menu.Grid', 'menu.Query',
        'rolepermissions.Truckoutf', 'rolepermissions.Grid', 'rolepermissions.Query',
        'msg.Msgf','msg.Grid','msg.Query'
  ],

    refs: [
        {
            ref: 'panel',
            selector: 'detailPanel'
        },
        {
            ref: 'paneldata',
            selector: 'datacir_detailPanel'
        }
    ]
});
