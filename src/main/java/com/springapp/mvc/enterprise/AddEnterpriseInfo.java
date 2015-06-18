//package com.springapp.mvc.enterprise;
//
///**
// * Created by xwq on 14-4-15.
// */
//
//import com.xwq.common.model.DataShop;
//import com.xwq.common.util.DBInfo;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import javax.servlet.http.HttpSession;
//import java.math.BigDecimal;
//import java.sql.*;
//
//@Controller
//@RequestMapping("/add_enterprise_info")
//public class AddEnterpriseInfo {
//
//    @RequestMapping(method = RequestMethod.POST)
//    public
//    @ResponseBody
//    DataShop getShopInJSON(
//            HttpSession session,
//
//
////            @RequestParam(value = "id", required = false) Integer id,
////            @RequestParam(value = "buslicno", required = false) String buslicno,
////            @RequestParam(value = "name", required = false) String name,
////            @RequestParam(value = "unit", required = false) String unit,
////            @RequestParam(value = "legrep", required = false) String legrep,
////            @RequestParam(value = "province", required = false) String province,
////            @RequestParam(value = "city", required = false) String city,
////            @RequestParam(value = "county", required = false) String county,
////            @RequestParam(value = "nos", required = false) String nos,
////            @RequestParam(value = "postal", required = false) String postal,
//            @RequestParam(value = "nature", required = false) String nature,
//            @RequestParam(value = "regcap", required = false) String regcap,
//            @RequestParam(value = "bustermfdt", required = false) String bustermfdt,
//            @RequestParam(value = "bustremtdt", required = false) String bustremtdt,
//            @RequestParam(value = "regdt", required = false) String regdt,
//            @RequestParam(value = "list_area", required = false) String list_area,
//            @RequestParam(value = "listcode", required = false) String listcode,
//            @RequestParam(value = "listprice", required = false) String listprice,
//            @RequestParam(value = "listdt", required = false) String listdt,
//            @RequestParam(value = "channels", required = false) String channels,
//            @RequestParam(value = "webchat", required = false) String webchat,
//            @RequestParam(value = "staffnum", required = false) String staffnum,
//            @RequestParam(value = "regist_organ", required = false) String regist_organ,
//            @RequestParam(value = "regaddr", required = false) String regaddr,
//            @RequestParam(value = "offaddr", required = false) String offaddr,
//            @RequestParam(value = "scope", required = false) String scope,
//            @RequestParam(value = "mbus", required = false) String mbus,
//            @RequestParam(value = "eprofile", required = false) String eprofile,
//            @RequestParam(value = "phoinf", required = false) String phoinf,
//            @RequestParam(value = "remark", required = false) String remark,
//            @RequestParam(value = "gr_contact", required = false) String gr_contact,
//            @RequestParam(value = "gr_psotion", required = false) String gr_psotion,
//            @RequestParam(value = "gr_edoctype", required = false) String gr_edoctype,
//            @RequestParam(value = "gr_edocnum", required = false) String gr_edocnum,
//            @RequestParam(value = "gr_ephone", required = false) String gr_ephone,
//            @RequestParam(value = "gr_efax", required = false) String gr_efax,
//            @RequestParam(value = "gr_eemail", required = false) String gr_eemail,
//            @RequestParam(value = "gr_eqq", required = false) String gr_eqq,
//            @RequestParam(value = "gr_webchat", required = false) String gr_webchat,
//            @RequestParam(value = "gr_tel", required = false) String gr_tel,
//            @RequestParam(value = "gr_bz", required = false) String gr_bz,
//            @RequestParam(value = "indclass1", required = false) String indclass1,
//            @RequestParam(value = "indclass2", required = false) String indclass2,
//            @RequestParam(value = "indclass3", required = false) String indclass3,
//            @RequestParam(value = "indclass4", required = false) String indclass4,
//            @RequestParam(value = "csrc_type1", required = false) String csrc_type1,
//            @RequestParam(value = "csrc_type2", required = false) String csrc_type2,
//            @RequestParam(value = "csrc_type3", required = false) String csrc_type3,
//            @RequestParam(value = "csrc_type4", required = false) String csrc_type4,
//            @RequestParam(value = "changer_id", required = false) Integer changer_id,
//            @RequestParam(value = "changer_dt", required = false) String changer_dt,
//            @RequestParam(value = "changer_dept", required = false) String changer_dept,
//            @RequestParam(value = "recomdt", required = false) String recomdt,
//            @RequestParam(value = "trusteeship", required = false) String trusteeship,
//            @RequestParam(value = "listst", required = false) String listst,
//            @RequestParam(value = "eclass", required = false) String eclass,
//            @RequestParam(value = "maintain", required = false) String maintain,
//            @RequestParam(value = "reserve", required = false) String reserve,
//            @RequestParam(value = "emaint", required = false) String emaint,
//            @RequestParam(value = "dept", required = false) String dept,
//            @RequestParam(value = "post", required = false) String post,
//            @RequestParam(value = "tel", required = false) String tel,
//            @RequestParam(value = "phone", required = false) String phone,
//            @RequestParam(value = "fax", required = false) String fax,
//            @RequestParam(value = "email", required = false) String email,
//            @RequestParam(value = "qq", required = false) String qq,
//            @RequestParam(value = "webchat_wh", required = false) String webchat_wh,
//            @RequestParam(value = "bz_wh", required = false) String bz_wh,
//            @RequestParam(value = "type_enterp", required = false) Boolean type_enterp,
//            @RequestParam(value = "type_server", required = false) Boolean type_server,
//            @RequestParam(value = "type_investors", required = false) Boolean type_investors,
//            @RequestParam(value = "type_govermt", required = false) Boolean type_govermt,
//            @RequestParam(value = "demand_rz", required = false) Boolean demand_rz,
//            @RequestParam(value = "demand_px", required = false) Boolean demand_px,
//            @RequestParam(value = "demand_rl", required = false) Boolean demand_rl,
//            @RequestParam(value = "inputdt", required = false) String inputdt,
//            @RequestParam(value = "start_time", required = false) String start_time,
//            @RequestParam(value = "end_time", required = false) String end_time,
//            @RequestParam(value = "st_money_fund", required = false) BigDecimal st_money_fund,
//            @RequestParam(value = "end_money_fund", required = false) BigDecimal end_money_fund,
//            @RequestParam(value = "st_jyxjr_assets", required = false) BigDecimal st_jyxjr_assets,
//            @RequestParam(value = "end_jyxjr_assets", required = false) BigDecimal end_jyxjr_assets,
//            @RequestParam(value = "st_ys_bill", required = false) BigDecimal st_ys_bill,
//            @RequestParam(value = "end_ys_bill", required = false) BigDecimal end_ys_bill,
//            @RequestParam(value = "st_ys_account", required = false) BigDecimal st_ys_account,
//            @RequestParam(value = "end_ys_account", required = false) BigDecimal end_ys_account,
//            @RequestParam(value = "st_yf_money", required = false) BigDecimal st_yf_money,
//            @RequestParam(value = "end_yf_money", required = false) BigDecimal end_yf_money,
//            @RequestParam(value = "st_ys_interest", required = false) BigDecimal st_ys_interest,
//            @RequestParam(value = "end_ys_interest", required = false) BigDecimal end_ys_interest,
//            @RequestParam(value = "st_ys_dividends", required = false) BigDecimal st_ys_dividends,
//            @RequestParam(value = "end_ys_dividends", required = false) BigDecimal end_ys_dividends,
//            @RequestParam(value = "st_other_ys_money", required = false) BigDecimal st_other_ys_money,
//            @RequestParam(value = "end_other_ys_money", required = false) BigDecimal end_other_ys_money,
//            @RequestParam(value = "st_inventory", required = false) BigDecimal st_inventory,
//            @RequestParam(value = "end_inventory", required = false) BigDecimal end_inventory,
//            @RequestParam(value = "st_ynndq_no_assets", required = false) BigDecimal st_ynndq_no_assets,
//            @RequestParam(value = "end_ynndq_no_assets", required = false) BigDecimal end_ynndq_no_assets,
//            @RequestParam(value = "st_other_assets", required = false) BigDecimal st_other_assets,
//            @RequestParam(value = "end_other_assets", required = false) BigDecimal end_other_assets,
//            @RequestParam(value = "st_hj_assets", required = false) BigDecimal st_hj_assets,
//            @RequestParam(value = "end_hj_assets", required = false) BigDecimal end_hj_assets,
//            @RequestParam(value = "st_kgcs_assets", required = false) BigDecimal st_kgcs_assets,
//            @RequestParam(value = "end_kgcs_assets", required = false) BigDecimal end_kgcs_assets,
//            @RequestParam(value = "st_cyzdq_investment", required = false) BigDecimal st_cyzdq_investment,
//            @RequestParam(value = "end_cyzdq_investment", required = false) BigDecimal end_cyzdq_investment,
//            @RequestParam(value = "st_long_ys_money", required = false) BigDecimal st_long_ys_money,
//            @RequestParam(value = "end_long_ys_money", required = false) BigDecimal end_long_ys_money,
//            @RequestParam(value = "st_long_gq_investment", required = false) BigDecimal st_long_gq_investment,
//            @RequestParam(value = "end_long_gq_investment", required = false) BigDecimal end_long_gq_investment,
//            @RequestParam(value = "st_invest_house", required = false) BigDecimal st_invest_house,
//            @RequestParam(value = "end_invest_house", required = false) BigDecimal end_invest_house,
//            @RequestParam(value = "st_gd_assets", required = false) BigDecimal st_gd_assets,
//            @RequestParam(value = "end_gd_assets", required = false) BigDecimal end_gd_assets,
//            @RequestParam(value = "st_accu_deprec", required = false) BigDecimal st_accu_deprec,
//            @RequestParam(value = "end_accu_deprec", required = false) BigDecimal end_accu_deprec,
//            @RequestParam(value = "st_gd_assets_jz", required = false) BigDecimal st_gd_assets_jz,
//            @RequestParam(value = "end_gd_assets_jz", required = false) BigDecimal end_gd_assets_jz,
//            @RequestParam(value = "st_gd_assets_ready", required = false) BigDecimal st_gd_assets_ready,
//            @RequestParam(value = "end_gd_assets_ready", required = false) BigDecimal end_gd_assets_ready,
//            @RequestParam(value = "st_gd_assets_je", required = false) BigDecimal st_gd_assets_je,
//            @RequestParam(value = "end_gd_assets_je", required = false) BigDecimal end_gd_assets_je,
//            @RequestParam(value = "st_now_project", required = false) BigDecimal st_now_project,
//            @RequestParam(value = "end_now_project", required = false) BigDecimal end_now_project,
//            @RequestParam(value = "st_project_material", required = false) BigDecimal st_project_material,
//            @RequestParam(value = "end_project_material", required = false) BigDecimal end_project_material,
//            @RequestParam(value = "st_gd_assets_ql", required = false) BigDecimal st_gd_assets_ql,
//            @RequestParam(value = "end_gd_assets_ql", required = false) BigDecimal end_gd_assets_ql,
//            @RequestParam(value = "st_scx_investment", required = false) BigDecimal st_scx_investment,
//            @RequestParam(value = "end_scx_investment", required = false) BigDecimal end_scx_investment,
//            @RequestParam(value = "st_wx_assets", required = false) BigDecimal st_wx_assets,
//            @RequestParam(value = "end_wx_assets", required = false) BigDecimal end_wx_assets,
//            @RequestParam(value = "st_goodwill", required = false) BigDecimal st_goodwill,
//            @RequestParam(value = "end_goodwill", required = false) BigDecimal end_goodwill,
//            @RequestParam(value = "st_cqdt_cost", required = false) BigDecimal st_cqdt_cost,
//            @RequestParam(value = "end_cqdt_cost", required = false) BigDecimal end_cqdt_cost,
//            @RequestParam(value = "st_dysds_assets", required = false) BigDecimal st_dysds_assets,
//            @RequestParam(value = "end_dysds_assets", required = false) BigDecimal end_dysds_assets,
//            @RequestParam(value = "st_other_no_assets", required = false) BigDecimal st_other_no_assets,
//            @RequestParam(value = "end_other_no_assets", required = false) BigDecimal end_other_no_assets,
//            @RequestParam(value = "st_hj_no_asset", required = false) BigDecimal st_hj_no_asset,
//            @RequestParam(value = "end_hj_no_asset", required = false) BigDecimal end_hj_no_asset,
//            @RequestParam(value = "st_hj_total_asset", required = false) BigDecimal st_hj_total_asset,
//            @RequestParam(value = "end_hj_total_asset", required = false) BigDecimal end_hj_total_asset,
//            @RequestParam(value = "st_short_borrow", required = false) BigDecimal st_short_borrow,
//            @RequestParam(value = "end_short_borrow", required = false) BigDecimal end_short_borrow,
//            @RequestParam(value = "st_jyx_finance_fz", required = false) BigDecimal st_jyx_finance_fz,
//            @RequestParam(value = "end_jyx_finance_fz", required = false) BigDecimal end_jyx_finance_fz,
//            @RequestParam(value = "st_yf_bill", required = false) BigDecimal st_yf_bill,
//            @RequestParam(value = "end_yf_bill", required = false) BigDecimal end_yf_bill,
//            @RequestParam(value = "st_yf_account", required = false) BigDecimal st_yf_account,
//            @RequestParam(value = "end_yf_account", required = false) BigDecimal end_yf_account,
//            @RequestParam(value = "st_ys_money", required = false) BigDecimal st_ys_money,
//            @RequestParam(value = "end_ys_money", required = false) BigDecimal end_ys_money,
//            @RequestParam(value = "st_yf_staff_pay", required = false) BigDecimal st_yf_staff_pay,
//            @RequestParam(value = "end_yf_staff_pay", required = false) BigDecimal end_yf_staff_pay,
//            @RequestParam(value = "st_yj_tax", required = false) BigDecimal st_yj_tax,
//            @RequestParam(value = "end_yj_tax", required = false) BigDecimal end_yj_tax,
//            @RequestParam(value = "st_yf_interest", required = false) BigDecimal st_yf_interest,
//            @RequestParam(value = "end_yf_interest", required = false) BigDecimal end_yf_interest,
//            @RequestParam(value = "st_yf_dividends", required = false) BigDecimal st_yf_dividends,
//            @RequestParam(value = "end_yf_dividends", required = false) BigDecimal end_yf_dividends,
//            @RequestParam(value = "st_other_yf_money", required = false) BigDecimal st_other_yf_money,
//            @RequestParam(value = "end_other_yf_money", required = false) BigDecimal end_other_yf_money,
//            @RequestParam(value = "st_ynndq_no_fz", required = false) BigDecimal st_ynndq_no_fz,
//            @RequestParam(value = "end_ynndq_no_fz", required = false) BigDecimal end_ynndq_no_fz,
//            @RequestParam(value = "st_other_fz", required = false) BigDecimal st_other_fz,
//            @RequestParam(value = "end_other_fz", required = false) BigDecimal end_other_fz,
//            @RequestParam(value = "st_hj_fz", required = false) BigDecimal st_hj_fz,
//            @RequestParam(value = "end_hj_fz", required = false) BigDecimal end_hj_fz,
//            @RequestParam(value = "st_long_borrow", required = false) BigDecimal st_long_borrow,
//            @RequestParam(value = "end_long_borrow", required = false) BigDecimal end_long_borrow,
//            @RequestParam(value = "st_yf_bond", required = false) BigDecimal st_yf_bond,
//            @RequestParam(value = "end_yf_bond", required = false) BigDecimal end_yf_bond,
//            @RequestParam(value = "st_long_yf_money", required = false) BigDecimal st_long_yf_money,
//            @RequestParam(value = "end_long_yf_money", required = false) BigDecimal end_long_yf_money,
//            @RequestParam(value = "st_zx_yf_money", required = false) BigDecimal st_zx_yf_money,
//            @RequestParam(value = "end_zx_yf_money", required = false) BigDecimal end_zx_yf_money,
//            @RequestParam(value = "st_yj_fz", required = false) BigDecimal st_yj_fz,
//            @RequestParam(value = "end_yj_fz", required = false) BigDecimal end_yj_fz,
//            @RequestParam(value = "st_dysds_fz", required = false) BigDecimal st_dysds_fz,
//            @RequestParam(value = "end_dysds_fz", required = false) BigDecimal end_dysds_fz,
//            @RequestParam(value = "st_other_no_fz", required = false) BigDecimal st_other_no_fz,
//            @RequestParam(value = "end_other_no_fz", required = false) BigDecimal end_other_no_fz,
//            @RequestParam(value = "st_hj_no_fz", required = false) BigDecimal st_hj_no_fz,
//            @RequestParam(value = "end_hj_no_fz", required = false) BigDecimal end_hj_no_fz,
//            @RequestParam(value = "st_hj_total_fz", required = false) BigDecimal st_hj_total_fz,
//            @RequestParam(value = "end_hj_total_fz", required = false) BigDecimal end_hj_total_fz,
//            @RequestParam(value = "st_paid_assets", required = false) BigDecimal st_paid_assets,
//            @RequestParam(value = "end_paid_assets", required = false) BigDecimal end_paid_assets,
//            @RequestParam(value = "st_zb_reserve", required = false) BigDecimal st_zb_reserve,
//            @RequestParam(value = "end_zb_reserve", required = false) BigDecimal end_zb_reserve,
//            @RequestParam(value = "st_kc_stock", required = false) BigDecimal st_kc_stock,
//            @RequestParam(value = "end_kc_stock", required = false) BigDecimal end_kc_stock,
//            @RequestParam(value = "st_zx_reserve", required = false) BigDecimal st_zx_reserve,
//            @RequestParam(value = "end_zx_reserve", required = false) BigDecimal end_zx_reserve,
//            @RequestParam(value = "st_yy_reserve", required = false) BigDecimal st_yy_reserve,
//            @RequestParam(value = "end_yy_reserve", required = false) BigDecimal end_yy_reserve,
//            @RequestParam(value = "st_wfp_profit", required = false) BigDecimal st_wfp_profit,
//            @RequestParam(value = "end_wfp_profit", required = false) BigDecimal end_wfp_profit,
//            @RequestParam(value = "st_hj_owner_right", required = false) BigDecimal st_hj_owner_right,
//            @RequestParam(value = "end_hj_owner_right", required = false) BigDecimal end_hj_owner_right,
//            @RequestParam(value = "st_hj_fz_owner_right", required = false) BigDecimal st_hj_fz_owner_right,
//            @RequestParam(value = "end_hj_fz_owner_right", required = false) BigDecimal end_hj_fz_owner_right,
//            @RequestParam(value = "server_name", required = false) String server_name,
//            @RequestParam(value = "server_type", required = false) String server_type,
//            @RequestParam(value = "server_content", required = false) String server_content,
//            @RequestParam(value = "server_levels", required = false) String server_levels,
//            @RequestParam(value = "server_domain", required = false) String server_domain,
//            @RequestParam(value = "server_penalty", required = false) String server_penalty,
//            @RequestParam(value = "server_examiner", required = false) Boolean server_examiner,
//            @RequestParam(value = "server_post", required = false) String server_post,
//            @RequestParam(value = "server_descs", required = false) String server_descs,
//            @RequestParam(value = "server_remark", required = false) String server_remark,
//            @RequestParam(value = "inv_domain", required = false) String inv_domain,
//            @RequestParam(value = "inv_csrc_type1", required = false) String inv_csrc_type1,
//            @RequestParam(value = "inv_csrc_type2", required = false) String inv_csrc_type2,
//            @RequestParam(value = "inv_csrc_type3", required = false) String inv_csrc_type3,
//            @RequestParam(value = "inv_csrc_type4", required = false) String inv_csrc_type4,
//            @RequestParam(value = "inv_indclass1", required = false) String inv_indclass1,
//            @RequestParam(value = "inv_indclass2", required = false) String inv_indclass2,
//            @RequestParam(value = "inv_indclass3", required = false) String inv_indclass3,
//            @RequestParam(value = "inv_indclass4", required = false) String inv_indclass4,
//            @RequestParam(value = "inv_contact", required = false) String inv_contact,
//            @RequestParam(value = "inv_psotion", required = false) String inv_psotion,
//            @RequestParam(value = "inv_doctype", required = false) String inv_doctype,
//            @RequestParam(value = "inv_docnum", required = false) String inv_docnum,
//            @RequestParam(value = "inv_phone", required = false) String inv_phone,
//            @RequestParam(value = "inv_fax", required = false) String inv_fax,
//            @RequestParam(value = "inv_email", required = false) String inv_email,
//            @RequestParam(value = "inv_qq", required = false) String inv_qq,
//            @RequestParam(value = "inv_webchat", required = false) String inv_webchat,
//            @RequestParam(value = "inv_tel", required = false) String inv_tel,
//            @RequestParam(value = "inv_remark", required = false) String inv_remark,
//            @RequestParam(value = "gov_domain", required = false) String gov_domain,
//            @RequestParam(value = "gov_office", required = false) String gov_office,
//            @RequestParam(value = "gov_desc", required = false) String gov_desc,
//            @RequestParam(value = "gov_contact", required = false) String gov_contact,
//            @RequestParam(value = "gov_psotion", required = false) String gov_psotion,
//            @RequestParam(value = "gov_doctype", required = false) String gov_doctype,
//            @RequestParam(value = "gov_docnum", required = false) String gov_docnum,
//            @RequestParam(value = "gov_phone", required = false) String gov_phone,
//            @RequestParam(value = "gov_fax", required = false) String gov_fax,
//            @RequestParam(value = "gov_email", required = false) String gov_email,
//            @RequestParam(value = "gov_qq", required = false) String gov_qq,
//            @RequestParam(value = "gov_webchat", required = false) String gov_webchat,
//            @RequestParam(value = "gov_tel", required = false) String gov_tel,
//            @RequestParam(value = "gov_remark", required = false) String gov_remark,
//            @RequestParam(value = "rz_amounts", required = false) BigDecimal rz_amounts,
//            @RequestParam(value = "rz_use", required = false) String rz_use,
//            @RequestParam(value = "rz_financ", required = false) BigDecimal rz_financ,
//            @RequestParam(value = "rz_security", required = false) String rz_security,
//            @RequestParam(value = "rz_acc_cost", required = false) BigDecimal rz_acc_cost,
//            @RequestParam(value = "rz_deadline", required = false) String rz_deadline,
//            @RequestParam(value = "rz_desc", required = false) String rz_desc,
//            @RequestParam(value = "px_mode", required = false) String px_mode,
//            @RequestParam(value = "px_content", required = false) String px_content,
//            @RequestParam(value = "px_acc_cost", required = false) BigDecimal px_acc_cost,
//            @RequestParam(value = "px_dt", required = false) String px_dt,
//            @RequestParam(value = "px_requests", required = false) String px_requests,
//            @RequestParam(value = "hr_post", required = false) String hr_post,
//            @RequestParam(value = "hr_num", required = false) Integer hr_num,
//            @RequestParam(value = "hr_salary", required = false) BigDecimal hr_salary,
//            @RequestParam(value = "hr_sex_req", required = false) String hr_sex_req,
//            @RequestParam(value = "hr_age_req", required = false) String hr_age_req,
//            @RequestParam(value = "hr_requests", required = false) String hr_requests
//
//
//
//
//            ) throws Exception {
//        DataShop dataShop = new DataShop();
//        dataShop.setSuccess(true);
//        Connection conn = null;
//        ResultSet rs = null;
//        PreparedStatement pst = null;
//        try {
//            Class.forName("org.postgresql.Driver").newInstance();
//        } catch (Exception e) {
//            System.out.print(e.getMessage());
//        }
//
//        DBInfo connstr = new DBInfo();
//        String url = connstr.getUrl();
//        String user = connstr.getUser();
//        String password = connstr.getPassword();
//
//        try {
//            conn = DriverManager.getConnection(url, user, password);
//            java.util.Date date = new java.util.Date();
//            Timestamp timestamp = new Timestamp(date.getTime());
//
//
//            String sql = "SERT INTO work.tb_enterprise(\n" +
//                    "            id, buslicno, name, unit, legrep, province, city, county, nos, \n" +
//                    "            postal, nature, regcap, bustermfdt, bustremtdt, regdt, list_area, \n" +
//                    "            listcode, listprice, listdt, channels, webchat, staffnum, regist_organ, \n" +
//                    "            regaddr, offaddr, scope, mbus, eprofile, phoinf, remark, gr_contact, \n" +
//                    "            gr_psotion, gr_edoctype, gr_edocnum, gr_ephone, gr_efax, gr_eemail, \n" +
//                    "            gr_eqq, gr_webchat, gr_tel, gr_bz, indclass1, indclass2, indclass3, \n" +
//                    "            indclass4, csrc_type1, csrc_type2, csrc_type3, csrc_type4, changer_id, \n" +
//                    "            changer_dt, changer_dept, recomdt, trusteeship, listst, eclass, \n" +
//                    "            maintain, reserve, emaint, dept, post, tel, phone, fax, email, \n" +
//                    "            qq, webchat_wh, bz_wh, type_enterp, type_server, type_investors, \n" +
//                    "            type_govermt, demand_rz, demand_px, demand_rl, inputdt, start_time, \n" +
//                    "            end_time, st_money_fund, end_money_fund, st_jyxjr_assets, end_jyxjr_assets, \n" +
//                    "            st_ys_bill, end_ys_bill, st_ys_account, end_ys_account, st_yf_money, \n" +
//                    "            end_yf_money, st_ys_interest, end_ys_interest, st_ys_dividends, \n" +
//                    "            end_ys_dividends, st_other_ys_money, end_other_ys_money, st_inventory, \n" +
//                    "            end_inventory, st_ynndq_no_assets, end_ynndq_no_assets, st_other_assets, \n" +
//                    "            end_other_assets, st_hj_assets, end_hj_assets, st_kgcs_assets, \n" +
//                    "            end_kgcs_assets, st_cyzdq_investment, end_cyzdq_investment, st_long_ys_money, \n" +
//                    "            end_long_ys_money, st_long_gq_investment, end_long_gq_investment, \n" +
//                    "            st_invest_house, end_invest_house, st_gd_assets, end_gd_assets, \n" +
//                    "            st_accu_deprec, end_accu_deprec, st_gd_assets_jz, end_gd_assets_jz, \n" +
//                    "            st_gd_assets_ready, end_gd_assets_ready, st_gd_assets_je, end_gd_assets_je, \n" +
//                    "            st_now_project, end_now_project, st_project_material, end_project_material, \n" +
//                    "            st_gd_assets_ql, end_gd_assets_ql, st_scx_investment, end_scx_investment, \n" +
//                    "            st_wx_assets, end_wx_assets, st_goodwill, end_goodwill, st_cqdt_cost, \n" +
//                    "            end_cqdt_cost, st_dysds_assets, end_dysds_assets, st_other_no_assets, \n" +
//                    "            end_other_no_assets, st_hj_no_asset, end_hj_no_asset, st_hj_total_asset, \n" +
//                    "            end_hj_total_asset, st_short_borrow, end_short_borrow, st_jyx_finance_fz, \n" +
//                    "            end_jyx_finance_fz, st_yf_bill, end_yf_bill, st_yf_account, end_yf_account, \n" +
//                    "            st_ys_money, end_ys_money, st_yf_staff_pay, end_yf_staff_pay, \n" +
//                    "            st_yj_tax, end_yj_tax, st_yf_interest, end_yf_interest, st_yf_dividends, \n" +
//                    "            end_yf_dividends, st_other_yf_money, end_other_yf_money, st_ynndq_no_fz, \n" +
//                    "            end_ynndq_no_fz, st_other_fz, end_other_fz, st_hj_fz, end_hj_fz, \n" +
//                    "            st_long_borrow, end_long_borrow, st_yf_bond, end_yf_bond, st_long_yf_money, \n" +
//                    "            end_long_yf_money, st_zx_yf_money, end_zx_yf_money, st_yj_fz, \n" +
//                    "            end_yj_fz, st_dysds_fz, end_dysds_fz, st_other_no_fz, end_other_no_fz, \n" +
//                    "            st_hj_no_fz, end_hj_no_fz, st_hj_total_fz, end_hj_total_fz, st_paid_assets, \n" +
//                    "            end_paid_assets, st_zb_reserve, end_zb_reserve, st_kc_stock, \n" +
//                    "            end_kc_stock, st_zx_reserve, end_zx_reserve, st_yy_reserve, end_yy_reserve, \n" +
//                    "            st_wfp_profit, end_wfp_profit, st_hj_owner_right, end_hj_owner_right, \n" +
//                    "            st_hj_fz_owner_right, end_hj_fz_owner_right, server_name, server_type, \n" +
//                    "            server_content, server_levels, server_domain, server_penalty, \n" +
//                    "            server_examiner, server_post, server_descs, server_remark, inv_domain, \n" +
//                    "            inv_csrc_type1, inv_csrc_type2, inv_csrc_type3, inv_csrc_type4, \n" +
//                    "            inv_indclass1, inv_indclass2, inv_indclass3, inv_indclass4, inv_contact, \n" +
//                    "            inv_psotion, inv_doctype, inv_docnum, inv_phone, inv_fax, inv_email, \n" +
//                    "            inv_qq, inv_webchat, inv_tel, inv_remark, gov_domain, gov_office, \n" +
//                    "            gov_desc, gov_contact, gov_psotion, gov_doctype, gov_docnum, \n" +
//                    "            gov_phone, gov_fax, gov_email, gov_qq, gov_webchat, gov_tel, \n" +
//                    "            gov_remark, rz_amounts, rz_use, rz_financ, rz_security, rz_acc_cost, \n" +
//                    "            rz_deadline, rz_desc, px_mode, px_content, px_acc_cost, px_dt, \n" +
//                    "            px_requests, hr_post, hr_num, hr_salary, hr_sex_req, hr_age_req, \n" +
//                    "            hr_requests)\n" +
//                    "    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?,   ?, ?, ?, ?, ?,  ?, ?, ?, ?,  ?, ?, ?, ?, ?,   ?, ?, ?, ?,  ?, ?, ?, ?,  ?, ?, ?, ?,   ?, ?, ?, ?, ?,   ?, ?, ?, ?, \n" +
//                    "            ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?,   ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,    ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?,  ?)";
//            pst = conn.prepareStatement(sql);
//
//
//
//
//            pst.setString(1, buslicno);
//            pst.setString(2, name);
//            pst.setString(3, unit);
//            pst.setString(4, legrep);
//            pst.setString(5, province);
//            pst.setString(6, city);
//            pst.setString(7, county);
//            pst.setString(8 , nos);
//            pst.setString(9, postal);
//            pst.setString(10, nature);
//            pst.setString(11, regcap);
//            java.sql.Date d_bustermfdt = null;
//            if (bustermfdt != null && bustermfdt.length() > 2)
//                d_bustermfdt = java.sql.Date.valueOf(bustermfdt);
//            pst.setDate(12, d_bustermfdt);
//            java.sql.Date d_bustremtdt = null;
//            if (bustremtdt != null && bustremtdt.length() > 2)
//                d_bustremtdt = java.sql.Date.valueOf(bustremtdt);
//            pst.setDate(13, d_bustremtdt);
//            java.sql.Date d_regdt = null;
//            if (regdt != null && regdt.length() > 2)
//                d_regdt = java.sql.Date.valueOf(regdt);
//            pst.setDate(14, d_regdt);
//            pst.setString(15, list_area);
//            pst.setString(16, listcode);
//            pst.setString(17, listprice);
//            java.sql.Date d_listdt = null;
//            if (listdt != null && listdt.length() > 2)
//                d_listdt = java.sql.Date.valueOf(listdt);
//            pst.setDate(18, d_listdt);
//            pst.setString(19, channels);
//            pst.setString(20, webchat);
//            pst.setString(21, staffnum);
//            pst.setString(22, regist_organ);
//            pst.setString(23, regaddr);
//            pst.setString(24, offaddr);
//            pst.setString(25, scope);
//            pst.setString(26, mbus);
//            pst.setString(27, eprofile);
//            pst.setString(28, phoinf);
//            pst.setString(29, remark);
//            pst.setString(30, gr_contact);
//            pst.setString(31, gr_psotion);
//            pst.setString(32, gr_edoctype);
//            pst.setString(33, gr_edocnum);
//            pst.setString(34, gr_ephone);
//            pst.setString(35, gr_efax);
//            pst.setString(36, gr_eemail);
//            pst.setString(37, gr_eqq);
//            pst.setString(38, gr_webchat);
//            pst.setString(39, gr_tel);
//            pst.setString(40, gr_bz);
//            pst.setString(41, indclass1);
//            pst.setString(42, indclass2);
//            pst.setString(43, indclass3);
//            pst.setString(44, indclass4);
//            pst.setString(45, csrc_type1);
//            pst.setString(46, csrc_type2);
//            pst.setString(47, csrc_type3);
//            pst.setString(48, csrc_type4);
//            pst.setInt(49, changer_id);
//            pst.setTimestamp(50, timestamp);
//            pst.setString(51, changer_dept);
//            java.sql.Date d_recomdt = null;
//            if (recomdt != null && recomdt.length() > 2)
//                d_recomdt = java.sql.Date.valueOf(recomdt);
//            pst.setDate(52, d_recomdt);
//            pst.setString(53, trusteeship);
//            pst.setString(54, listst);
//            pst.setString(55, eclass);
//            pst.setString(56, maintain);
//            pst.setString(57, reserve);
//            pst.setString(58, emaint);
//            pst.setString(59, dept);
//            pst.setString(60, post);
//            pst.setString(61, tel);
//            pst.setString(62, phone);
//            pst.setString(63, fax);
//            pst.setString(64, email);
//            pst.setString(65, qq);
//            pst.setString(66, webchat_wh);
//            pst.setString(67, bz_wh);
//            pst.setBoolean(68, type_enterp);
//            pst.setBoolean(69, type_server);
//            pst.setBoolean(70, type_investors);
//            pst.setBoolean(71, type_govermt);
//            pst.setBoolean(72, demand_rz);
//            pst.setBoolean(73, demand_px);
//            pst.setBoolean(74, demand_rl);
//            pst.setTimestamp(75, timestamp);
//            java.sql.Date d_start_time = null;
//            if (start_time != null && start_time.length() > 2)
//                d_start_time = java.sql.Date.valueOf(start_time);
//            pst.setDate(76, d_start_time);
//            java.sql.Date d_end_time = null;
//            if (end_time != null && end_time.length() > 2)
//                d_end_time = java.sql.Date.valueOf(end_time);
//            pst.setDate(77, d_end_time);
//            pst.setBigDecimal(78, st_money_fund);
//            pst.setBigDecimal(79, end_money_fund);
//            pst.setBigDecimal(80, st_jyxjr_assets);
//            pst.setBigDecimal(81, end_jyxjr_assets);
//            pst.setBigDecimal(82, st_ys_bill);
//            pst.setBigDecimal(83, end_ys_bill);
//            pst.setBigDecimal(84, st_ys_account);
//            pst.setBigDecimal(85, end_ys_account);
//            pst.setBigDecimal(86, st_yf_money);
//            pst.setBigDecimal(87, end_yf_money);
//            pst.setBigDecimal(88, st_ys_interest);
//            pst.setBigDecimal(89, end_ys_interest);
//            pst.setBigDecimal(90, st_ys_dividends);
//            pst.setBigDecimal(91, end_ys_dividends);
//            pst.setBigDecimal(92, st_other_ys_money);
//            pst.setBigDecimal(93, end_other_ys_money);
//            pst.setBigDecimal(94, st_inventory);
//            pst.setBigDecimal(95, end_inventory);
//            pst.setBigDecimal(96, st_ynndq_no_assets);
//            pst.setBigDecimal(97, end_ynndq_no_assets);
//            pst.setBigDecimal(98, st_other_assets);
//            pst.setBigDecimal(99, end_other_assets);
//            pst.setBigDecimal(100, st_hj_assets);
//            pst.setBigDecimal(101, end_hj_assets);
//            pst.setBigDecimal(102, st_kgcs_assets);
//            pst.setBigDecimal(103, end_kgcs_assets);
//            pst.setBigDecimal(104, st_cyzdq_investment);
//            pst.setBigDecimal(105, end_cyzdq_investment);
//            pst.setBigDecimal(106, st_long_ys_money);
//            pst.setBigDecimal(107, end_long_ys_money);
//            pst.setBigDecimal(108, st_long_gq_investment);
//            pst.setBigDecimal(109, end_long_gq_investment);
//            pst.setBigDecimal(110, st_invest_house);
//            pst.setBigDecimal(111, end_invest_house);
//            pst.setBigDecimal(112, st_gd_assets);
//            pst.setBigDecimal(113, end_gd_assets);
//            pst.setBigDecimal(114, st_accu_deprec);
//            pst.setBigDecimal(115, end_accu_deprec);
//            pst.setBigDecimal(116, st_gd_assets_jz);
//            pst.setBigDecimal(117, end_gd_assets_jz);
//            pst.setBigDecimal(118, st_gd_assets_ready);
//            pst.setBigDecimal(119, end_gd_assets_ready);
//            pst.setBigDecimal(120, st_gd_assets_je);
//            pst.setBigDecimal(121, end_gd_assets_je);
//            pst.setBigDecimal(122, st_now_project);
//            pst.setBigDecimal(123, end_now_project);
//            pst.setBigDecimal(124, st_project_material);
//            pst.setBigDecimal(125, end_project_material);
//            pst.setBigDecimal(126, st_gd_assets_ql);
//            pst.setBigDecimal(127, end_gd_assets_ql);
//            pst.setBigDecimal(128, st_scx_investment);
//            pst.setBigDecimal(129, end_scx_investment);
//            pst.setBigDecimal(130, st_wx_assets);
//            pst.setBigDecimal(131, end_wx_assets);
//            pst.setBigDecimal(132, st_goodwill);
//            pst.setBigDecimal(133, end_goodwill);
//            pst.setBigDecimal(134, st_cqdt_cost);
//            pst.setBigDecimal(135, end_cqdt_cost);
//            pst.setBigDecimal(136, st_dysds_assets);
//            pst.setBigDecimal(137, end_dysds_assets);
//            pst.setBigDecimal(138, st_other_no_assets);
//            pst.setBigDecimal(139, end_other_no_assets);
//            pst.setBigDecimal(140, st_hj_no_asset);
//            pst.setBigDecimal(141, end_hj_no_asset);
//            pst.setBigDecimal(142, st_hj_total_asset);
//            pst.setBigDecimal(143, end_hj_total_asset);
//            pst.setBigDecimal(144, st_short_borrow);
//            pst.setBigDecimal(145, end_short_borrow);
//            pst.setBigDecimal(146, st_jyx_finance_fz);
//            pst.setBigDecimal(147, end_jyx_finance_fz);
//            pst.setBigDecimal(148, st_yf_bill);
//            pst.setBigDecimal(149, end_yf_bill);
//            pst.setBigDecimal(150, st_yf_account);
//            pst.setBigDecimal(151, end_yf_account);
//            pst.setBigDecimal(152, st_ys_money);
//            pst.setBigDecimal(153, end_ys_money);
//            pst.setBigDecimal(154, st_yf_staff_pay);
//            pst.setBigDecimal(155, end_yf_staff_pay);
//            pst.setBigDecimal(156, st_yj_tax);
//            pst.setBigDecimal(157, end_yj_tax);
//            pst.setBigDecimal(158, st_yf_interest);
//            pst.setBigDecimal(159, end_yf_interest);
//            pst.setBigDecimal(160, st_yf_dividends);
//            pst.setBigDecimal(161, end_yf_dividends);
//            pst.setBigDecimal(162, st_other_yf_money);
//            pst.setBigDecimal(163, end_other_yf_money);
//            pst.setBigDecimal(164, st_ynndq_no_fz);
//            pst.setBigDecimal(165, end_ynndq_no_fz);
//            pst.setBigDecimal(166, st_other_fz);
//            pst.setBigDecimal(167, end_other_fz);
//            pst.setBigDecimal(168, st_hj_fz);
//            pst.setBigDecimal(169, end_hj_fz);
//            pst.setBigDecimal(170, st_long_borrow);
//            pst.setBigDecimal(171, end_long_borrow);
//            pst.setBigDecimal(172, st_yf_bond);
//            pst.setBigDecimal(173, end_yf_bond);
//            pst.setBigDecimal(174, st_long_yf_money);
//            pst.setBigDecimal(175, end_long_yf_money);
//            pst.setBigDecimal(176, st_zx_yf_money);
//            pst.setBigDecimal(177, end_zx_yf_money);
//            pst.setBigDecimal(178, st_yj_fz);
//            pst.setBigDecimal(179, end_yj_fz);
//            pst.setBigDecimal(180, st_dysds_fz);
//            pst.setBigDecimal(181, end_dysds_fz);
//            pst.setBigDecimal(182, st_other_no_fz);
//            pst.setBigDecimal(183, end_other_no_fz);
//            pst.setBigDecimal(184, st_hj_no_fz);
//            pst.setBigDecimal(185, end_hj_no_fz);
//            pst.setBigDecimal(186, st_hj_total_fz);
//            pst.setBigDecimal(187, end_hj_total_fz);
//            pst.setBigDecimal(188, st_paid_assets);
//            pst.setBigDecimal(189, end_paid_assets);
//            pst.setBigDecimal(190, st_zb_reserve);
//            pst.setBigDecimal(191, end_zb_reserve);
//            pst.setBigDecimal(192, st_kc_stock);
//            pst.setBigDecimal(193, end_kc_stock);
//            pst.setBigDecimal(194, st_zx_reserve);
//            pst.setBigDecimal(195, end_zx_reserve);
//            pst.setBigDecimal(196, st_yy_reserve);
//            pst.setBigDecimal(197, end_yy_reserve);
//            pst.setBigDecimal(198, st_wfp_profit);
//            pst.setBigDecimal(199, end_wfp_profit);
//            pst.setBigDecimal(200, st_hj_owner_right);
//            pst.setBigDecimal(201, end_hj_owner_right);
//            pst.setBigDecimal(202, st_hj_fz_owner_right);
//            pst.setBigDecimal(203, end_hj_fz_owner_right);
//            pst.setString(204, server_name);
//            pst.setString(205, server_type);
//            pst.setString(206, server_content);
//            pst.setString(207, server_levels);
//            pst.setString(208, server_domain);
//            pst.setString(209, server_penalty);
//            pst.setBoolean(210, server_examiner);
//            pst.setString(211, server_post);
//            pst.setString(212, server_descs);
//            pst.setString(213, server_remark);
//            pst.setString(214, inv_domain);
//            pst.setString(215, inv_csrc_type1);
//            pst.setString(216, inv_csrc_type2);
//            pst.setString(217, inv_csrc_type3);
//            pst.setString(218, inv_csrc_type4);
//            pst.setString(219, inv_indclass1);
//            pst.setString(220, inv_indclass2);
//            pst.setString(221, inv_indclass3);
//            pst.setString(222, inv_indclass4);
//            pst.setString(223, inv_contact);
//            pst.setString(224, inv_psotion);
//            pst.setString(225, inv_doctype);
//            pst.setString(226, inv_docnum);
//            pst.setString(227, inv_phone);
//            pst.setString(228, inv_fax);
//            pst.setString(229, inv_email);
//            pst.setString(230, inv_qq);
//            pst.setString(231, inv_webchat);
//            pst.setString(232, inv_tel);
//            pst.setString(233, inv_remark);
//            pst.setString(234, gov_domain);
//            pst.setString(235, gov_office);
//            pst.setString(236, gov_desc);
//            pst.setString(237, gov_contact);
//            pst.setString(238, gov_psotion);
//            pst.setString(239, gov_doctype);
//            pst.setString(240, gov_docnum);
//            pst.setString(241, gov_phone);
//            pst.setString(242, gov_fax);
//            pst.setString(243, gov_email);
//            pst.setString(244, gov_qq);
//            pst.setString(245, gov_webchat);
//            pst.setString(246, gov_tel);
//            pst.setString(247, gov_remark);
//            pst.setBigDecimal(248, rz_amounts);
//            pst.setString(249, rz_use);
//            pst.setBigDecimal(250, rz_financ);
//            pst.setString(251, rz_security);
//            pst.setBigDecimal(252, rz_acc_cost);
//            java.sql.Date d_rz_deadline = null;
//            if (rz_deadline != null && rz_deadline.length() > 2)
//                d_rz_deadline = java.sql.Date.valueOf(rz_deadline);
//            pst.setDate(253, d_rz_deadline);
//            pst.setString(254, rz_desc);
//            pst.setString(255, px_mode);
//            pst.setString(256, px_content);
//            pst.setBigDecimal(257, px_acc_cost);
//            java.sql.Date d_px_dt = null;
//            if (px_dt != null && px_dt.length() > 2)
//                d_px_dt = java.sql.Date.valueOf(px_dt);
//            pst.setDate(258, d_px_dt);
//            pst.setString(259, px_requests);
//            pst.setString(260, hr_post);
//            pst.setInt(261, hr_num);
//            pst.setBigDecimal(262, hr_salary);
//            pst.setString(263, hr_sex_req);
//            pst.setString(264, hr_age_req);
//            pst.setString(265, hr_requests);
//            pst.executeUpdate();
//
//
//            dataShop.setSuccess(true);
//
//        } catch (SQLException e) {
//            System.out.print(e.getMessage());
//        } finally {
//            try {
//                if (pst != null) pst.close();
//                if (conn != null) conn.close();
//            } catch (SQLException e) {
//                System.out.print(e.getMessage());
//            }
//        }
//
//        return dataShop;
//    }
//}