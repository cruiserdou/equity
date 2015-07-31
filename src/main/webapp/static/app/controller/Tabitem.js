Ext.define('App.controller.Tabitem', {
    extend: 'Ext.app.Controller',



    models: [
       'syj_users','syj_menu','syj_dicts'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg','enterprise','login_log','enterprise_sh','change'
        ,'service','financ','enterprise_assets_finance','enterprise_maintain','enterprise_maintain_info','enterprise_represent_info','enterprise_sh'
        ,'investors','corp_all','corp_shareholder_list','corp_img'
        ,'corp','corp_contact','corp_finance','corp_government','corp_investors','corp_maintain','corp_refinancing','corp_rehr','corp_retrain','corp_service','corp_shareholder'
        ,'maintain_plan','maintain_info','refi_mos','refi_rop'
        ,'corp_change','corp_contact_change','corp_rehr_change','corp_retrain_change','corp_refinancing_change','corp_government_change','corp_service_change','corp_investors_change'
    ],



    stores: [
        'syj_users','syj_menu','syj_dicts'
        ,'dicts_service'
        ,'syj_roles','syj_userroles','syj_rolepermissions'
        ,'msg','enterprise','login_log','change','corp_img'
        ,'service','financ','enterprise_assets_finance','enterprise_maintain','enterprise_maintain_info','enterprise_represent_info','enterprise_sh'
        ,'investors','corp_all','corp_service_all','corp_investors_all','corp_government_all','corp_refinancing_all','corp_rehr_all','corp_retrain_all'
        ,'corp','corp_contact','corp_finance','corp_government','corp_investors','corp_maintain','corp_refinancing','corp_rehr','corp_retrain','corp_service','corp_shareholder'
        ,'maintain_plan','maintain_info','refi_mos','refi_rop','maintain_planf_history','maintain_info_history'
        ,'corp_change','corp_contact_change','corp_rehr_change','corp_retrain_change','corp_refinancing_change','corp_government_change','corp_service_change','corp_investors_change'
    ],

    views: [

        'users.Usersf','users.Query', 'users.Grid',
        'dicts.Dictsf', 'dicts.Grid', 'dicts.Query',
        'roles.Rolesf', 'roles.Query', 'roles.Grid',
        'userroles.Userrolesf', 'userroles.Query', 'userroles.Grid',
        'menu.Policef', 'menu.Grid', 'menu.Query',
        'rolepermissions.Truckoutf', 'rolepermissions.Grid', 'rolepermissions.Query',
        'msg.Msgf','msg.Grid','msg.Query',
        'enterprise.Enterprisef','enterprise.Grid','enterprise.Query','enterprise.Applyf','enterprise.Enterprise_typef','enterprise.corp_list','enterprise.corp_img_grid',
        'enterprise_query.Enterprise_queryf','enterprise_query.Grid','enterprise_query.Query','enterprise_query.ChangeGrid',
        'enterprise_stat.Enterprise_statf', 'enterprise_stat.Grid', 'enterprise_stat.Query',
        'login_log.Login_logf','login_log.Grid','login_log.Query',
        'service.service_manage.Service_managef','service.service_manage.Grid','service.service_manage.Query',
        'service.service_query.Service_queryf','service.service_query.Grid','service.service_query.Query','service.service_query.ChangeGrid',
        'service.service_stat.Service_statf','service.service_stat.Grid','service.service_stat.Query',
        'financ.financ_manage.Financ_managef','financ.financ_manage.Grid','financ.financ_manage.Query',
        'financ.financ_query.Financ_queryf','financ.financ_query.Grid','financ.financ_query.Query',
        'enterprise_maintain.Enterprise_maintainf','enterprise_maintain.Grid','enterprise_maintain.Query',
        'investors.investors_manage.investors_managef','investors.investors_manage.Grid','investors.investors_manage.Query',
        'investors.investors_query.investors_queryf','investors.investors_query.Grid','investors.investors_query.Query','investors.investors_query.ChangeGrid',
        'investors.investors_stat.investors_statf','investors.investors_stat.Grid','investors.investors_stat.Query',
        'government.government_manage.Government_managef','government.government_manage.Grid','government.government_manage.Query',
        'government.government_query.Government_queryf','government.government_query.Grid','government.government_query.Query','government.government_query.ChangeGrid',
        'government.government_stat.Government_statf','government.government_stat.Grid','government.government_stat.Query',
        'refinancing.refinancing_query.Refinancing_queryf','refinancing.refinancing_query.Grid','refinancing.refinancing_query.Query','refinancing.refinancing_query.ChangeGrid',
        'refinancing.refinancing_manage.Refinancing_managef','refinancing.refinancing_manage.Grid','refinancing.refinancing_manage.Query',
        'refinancing.refinancing_stat.Refinancing_statf','refinancing.refinancing_stat.Grid','refinancing.refinancing_stat.Query',
        'rehr.rehr_query.Rehr_queryf','rehr.rehr_query.Grid','rehr.rehr_query.Query','rehr.rehr_query.ChangeGrid',
        'rehr.rehr_manage.Rehr_managef','rehr.rehr_manage.Grid','rehr.rehr_manage.Query',
        'rehr.rehr_stat.Rehr_statf','rehr.rehr_stat.Grid','rehr.rehr_stat.Query',
        'retrain.retrain_manage.Retrain_managef','retrain.retrain_manage.Grid','retrain.retrain_manage.Query',
        'retrain.retrain_query.Retrain_queryf','retrain.retrain_query.Grid','retrain.retrain_query.Query','retrain.retrain_query.ChangeGrid',
        'retrain.retrain_stat.Retrain_statf', 'retrain.retrain_stat.Grid', 'retrain.retrain_stat.Query',
        'maintain_plan.Maintain_planf', 'maintain_plan.Grid', 'maintain_plan.Query','maintain_plan.HistoryGrid','maintain_info.HistoryGrid',
        'maintain_info.Maintain_infof','maintain_info.Grid','maintain_info.Query','maintain_info.corp_basic_grid','maintain_info.corp_basic_query',
        'refi.refi_mos.Refi_mosf','refi.refi_mos.Grid','refi.refi_mos.Query','refi.refi_mos.RopGrid',
        'refi.refi_rop.Refi_ropf','refi.refi_rop.Grid','refi.refi_rop.Query',
        'export_import.Export_importf','export_import.Grid','export_import.Query',
        'enterprise_query.corp_gd_grid'

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
