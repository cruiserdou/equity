Ext.define('App.controller.Tabitem', {
    extend: 'Ext.app.Controller',



    models: [
       'syj_users','syj_menu','syj_dicts'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg','enterprise','login_log','enterprise_sh','change'
        ,'service','financ','enterprise_assets_finance','enterprise_maintain','enterprise_maintain_info','enterprise_represent_info','enterprise_sh'
    ],



    stores: [
        'syj_users','syj_menu','syj_dicts'
        ,'dicts_service'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg','enterprise','login_log','change'
        ,'service','financ','enterprise_assets_finance','enterprise_maintain','enterprise_maintain_info','enterprise_represent_info','enterprise_sh'
    ],

    views: [

        'users.Usersf','users.Query', 'users.Grid',
        'dicts.Dictsf', 'dicts.Grid', 'dicts.Query',
        'roles.Rolesf', 'roles.Query', 'roles.Grid',
        'userroles.Userrolesf', 'userroles.Query', 'userroles.Grid',
        'menu.Policef', 'menu.Grid', 'menu.Query',
        'rolepermissions.Truckoutf', 'rolepermissions.Grid', 'rolepermissions.Query',
        'msg.Msgf','msg.Grid','msg.Query',
        'enterprise.Enterprisef','enterprise.Grid','enterprise.Query','enterprise.Applyf','enterprise.Enterprise_typef',
        'enterprise_query.Enterprise_queryf','enterprise_query.Grid','enterprise_query.Query','enterprise_query.ChangeGrid',
        'login_log.Login_logf','login_log.Grid','login_log.Query',
        'service.service_manage.Service_managef','service.service_manage.Grid','service.service_manage.Query',
        'service.service_query.Service_queryf','service.service_query.Grid','service.service_query.Query',
        'financ.financ_manage.Financ_managef','financ.financ_manage.Grid','financ.financ_manage.Query',
        'financ.financ_query.Financ_queryf','financ.financ_query.Grid','financ.financ_query.Query',
        'enterprise_maintain.Enterprise_maintainf','enterprise_maintain.Grid','enterprise_maintain.Query'
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
