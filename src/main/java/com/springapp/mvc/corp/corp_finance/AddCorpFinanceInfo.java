package com.springapp.mvc.corp.corp_finance;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_corp_finance_info")
public class AddCorpFinanceInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//            @RequestParam(value = " finid", required = false) Integer  finid,
            @RequestParam(value = "fin_corp_id", required = false) Integer  fin_corp_id,
            @RequestParam(value = "start_time", required = false) String start_time,
            @RequestParam(value = "end_time", required = false) String end_time,
            @RequestParam(value = "st_money_fund", required = false) BigDecimal st_money_fund,
            @RequestParam(value = "end_money_fund", required = false) BigDecimal end_money_fund,
            @RequestParam(value = "st_jyxjr_assets", required = false) BigDecimal st_jyxjr_assets,
            @RequestParam(value = "end_jyxjr_assets", required = false) BigDecimal end_jyxjr_assets,
            @RequestParam(value = "st_ys_bill", required = false) BigDecimal st_ys_bill,
            @RequestParam(value = "end_ys_bill", required = false) BigDecimal end_ys_bill,
            @RequestParam(value = "st_ys_account", required = false) BigDecimal st_ys_account,
            @RequestParam(value = "end_ys_account", required = false) BigDecimal end_ys_account,
            @RequestParam(value = "st_yf_money", required = false) BigDecimal st_yf_money,
            @RequestParam(value = "end_yf_money", required = false) BigDecimal end_yf_money,
            @RequestParam(value = "st_ys_interest", required = false) BigDecimal st_ys_interest,
            @RequestParam(value = "end_ys_interest", required = false) BigDecimal end_ys_interest,
            @RequestParam(value = "st_ys_dividends", required = false) BigDecimal st_ys_dividends,
            @RequestParam(value = "end_ys_dividends", required = false) BigDecimal end_ys_dividends,
            @RequestParam(value = "st_other_ys_money", required = false) BigDecimal st_other_ys_money,
            @RequestParam(value = "end_other_ys_money", required = false) BigDecimal end_other_ys_money,
            @RequestParam(value = "st_inventory", required = false) BigDecimal st_inventory,
            @RequestParam(value = "end_inventory", required = false) BigDecimal end_inventory,
            @RequestParam(value = "st_ynndq_no_assets", required = false) BigDecimal st_ynndq_no_assets,
            @RequestParam(value = "end_ynndq_no_assets", required = false) BigDecimal end_ynndq_no_assets,
            @RequestParam(value = "st_other_assets", required = false) BigDecimal st_other_assets,
            @RequestParam(value = "end_other_assets", required = false) BigDecimal end_other_assets,
            @RequestParam(value = "st_hj_assets", required = false) BigDecimal st_hj_assets,
            @RequestParam(value = "end_hj_assets", required = false) BigDecimal end_hj_assets,
            @RequestParam(value = "st_kgcs_assets", required = false) BigDecimal st_kgcs_assets,
            @RequestParam(value = "end_kgcs_assets", required = false) BigDecimal end_kgcs_assets,
            @RequestParam(value = "st_cyzdq_investment", required = false) BigDecimal st_cyzdq_investment,
            @RequestParam(value = "end_cyzdq_investment", required = false) BigDecimal end_cyzdq_investment,
            @RequestParam(value = "st_long_ys_money", required = false) BigDecimal st_long_ys_money,
            @RequestParam(value = "end_long_ys_money", required = false) BigDecimal end_long_ys_money,
            @RequestParam(value = "st_long_gq_investment", required = false) BigDecimal st_long_gq_investment,
            @RequestParam(value = "end_long_gq_investment", required = false) BigDecimal end_long_gq_investment,
            @RequestParam(value = "st_invest_house", required = false) BigDecimal st_invest_house,
            @RequestParam(value = "end_invest_house", required = false) BigDecimal end_invest_house,
            @RequestParam(value = "st_gd_assets", required = false) BigDecimal st_gd_assets,
            @RequestParam(value = "end_gd_assets", required = false) BigDecimal end_gd_assets,
            @RequestParam(value = "st_accu_deprec", required = false) BigDecimal st_accu_deprec,
            @RequestParam(value = "end_accu_deprec", required = false) BigDecimal end_accu_deprec,
            @RequestParam(value = "st_gd_assets_jz", required = false) BigDecimal st_gd_assets_jz,
            @RequestParam(value = "end_gd_assets_jz", required = false) BigDecimal end_gd_assets_jz,
            @RequestParam(value = "st_gd_assets_ready", required = false) BigDecimal st_gd_assets_ready,
            @RequestParam(value = "end_gd_assets_ready", required = false) BigDecimal end_gd_assets_ready,
            @RequestParam(value = "st_gd_assets_je", required = false) BigDecimal st_gd_assets_je,
            @RequestParam(value = "end_gd_assets_je", required = false) BigDecimal end_gd_assets_je,
            @RequestParam(value = "st_now_project", required = false) BigDecimal st_now_project,
            @RequestParam(value = "end_now_project", required = false) BigDecimal end_now_project,
            @RequestParam(value = "st_project_material", required = false) BigDecimal st_project_material,
            @RequestParam(value = "end_project_material", required = false) BigDecimal end_project_material,
            @RequestParam(value = "st_gd_assets_ql", required = false) BigDecimal st_gd_assets_ql,
            @RequestParam(value = "end_gd_assets_ql", required = false) BigDecimal end_gd_assets_ql,
            @RequestParam(value = "st_scx_investment", required = false) BigDecimal st_scx_investment,
            @RequestParam(value = "end_scx_investment", required = false) BigDecimal end_scx_investment,
            @RequestParam(value = "st_wx_assets", required = false) BigDecimal st_wx_assets,
            @RequestParam(value = "end_wx_assets", required = false) BigDecimal end_wx_assets,
            @RequestParam(value = "st_goodwill", required = false) BigDecimal st_goodwill,
            @RequestParam(value = "end_goodwill", required = false) BigDecimal end_goodwill,
            @RequestParam(value = "st_cqdt_cost", required = false) BigDecimal st_cqdt_cost,
            @RequestParam(value = "end_cqdt_cost", required = false) BigDecimal end_cqdt_cost,
            @RequestParam(value = "st_dysds_assets", required = false) BigDecimal st_dysds_assets,
            @RequestParam(value = "end_dysds_assets", required = false) BigDecimal end_dysds_assets,
            @RequestParam(value = "st_other_no_assets", required = false) BigDecimal st_other_no_assets,
            @RequestParam(value = "end_other_no_assets", required = false) BigDecimal end_other_no_assets,
            @RequestParam(value = "st_hj_no_asset", required = false) BigDecimal st_hj_no_asset,
            @RequestParam(value = "end_hj_no_asset", required = false) BigDecimal end_hj_no_asset,
            @RequestParam(value = "st_hj_total_asset", required = false) BigDecimal st_hj_total_asset,
            @RequestParam(value = "end_hj_total_asset", required = false) BigDecimal end_hj_total_asset,
            @RequestParam(value = "st_short_borrow", required = false) BigDecimal st_short_borrow,
            @RequestParam(value = "end_short_borrow", required = false) BigDecimal end_short_borrow,
            @RequestParam(value = "st_jyx_finance_fz", required = false) BigDecimal st_jyx_finance_fz,
            @RequestParam(value = "end_jyx_finance_fz", required = false) BigDecimal end_jyx_finance_fz,
            @RequestParam(value = "st_yf_bill", required = false) BigDecimal st_yf_bill,
            @RequestParam(value = "end_yf_bill", required = false) BigDecimal end_yf_bill,
            @RequestParam(value = "st_yf_account", required = false) BigDecimal st_yf_account,
            @RequestParam(value = "end_yf_account", required = false) BigDecimal end_yf_account,
            @RequestParam(value = "st_ys_money", required = false) BigDecimal st_ys_money,
            @RequestParam(value = "end_ys_money", required = false) BigDecimal end_ys_money,
            @RequestParam(value = "st_yf_staff_pay", required = false) BigDecimal st_yf_staff_pay,
            @RequestParam(value = "end_yf_staff_pay", required = false) BigDecimal end_yf_staff_pay,
            @RequestParam(value = "st_yj_tax", required = false) BigDecimal st_yj_tax,
            @RequestParam(value = "end_yj_tax", required = false) BigDecimal end_yj_tax,
            @RequestParam(value = "st_yf_interest", required = false) BigDecimal st_yf_interest,
            @RequestParam(value = "end_yf_interest", required = false) BigDecimal end_yf_interest,
            @RequestParam(value = "st_yf_dividends", required = false) BigDecimal st_yf_dividends,
            @RequestParam(value = "end_yf_dividends", required = false) BigDecimal end_yf_dividends,
            @RequestParam(value = "st_other_yf_money", required = false) BigDecimal st_other_yf_money,
            @RequestParam(value = "end_other_yf_money", required = false) BigDecimal end_other_yf_money,
            @RequestParam(value = "st_ynndq_no_fz", required = false) BigDecimal st_ynndq_no_fz,
            @RequestParam(value = "end_ynndq_no_fz", required = false) BigDecimal end_ynndq_no_fz,
            @RequestParam(value = "st_other_fz", required = false) BigDecimal st_other_fz,
            @RequestParam(value = "end_other_fz", required = false) BigDecimal end_other_fz,
            @RequestParam(value = "st_hj_fz", required = false) BigDecimal st_hj_fz,
            @RequestParam(value = "end_hj_fz", required = false) BigDecimal end_hj_fz,
            @RequestParam(value = "st_long_borrow", required = false) BigDecimal st_long_borrow,
            @RequestParam(value = "end_long_borrow", required = false) BigDecimal end_long_borrow,
            @RequestParam(value = "st_yf_bond", required = false) BigDecimal st_yf_bond,
            @RequestParam(value = "end_yf_bond", required = false) BigDecimal end_yf_bond,
            @RequestParam(value = "st_long_yf_money", required = false) BigDecimal st_long_yf_money,
            @RequestParam(value = "end_long_yf_money", required = false) BigDecimal end_long_yf_money,
            @RequestParam(value = "st_zx_yf_money", required = false) BigDecimal st_zx_yf_money,
            @RequestParam(value = "end_zx_yf_money", required = false) BigDecimal end_zx_yf_money,
            @RequestParam(value = "st_yj_fz", required = false) BigDecimal st_yj_fz,
            @RequestParam(value = "end_yj_fz", required = false) BigDecimal end_yj_fz,
            @RequestParam(value = "st_dysds_fz", required = false) BigDecimal st_dysds_fz,
            @RequestParam(value = "end_dysds_fz", required = false) BigDecimal end_dysds_fz,
            @RequestParam(value = "st_other_no_fz", required = false) BigDecimal st_other_no_fz,
            @RequestParam(value = "end_other_no_fz", required = false) BigDecimal end_other_no_fz,
            @RequestParam(value = "st_hj_no_fz", required = false) BigDecimal st_hj_no_fz,
            @RequestParam(value = "end_hj_no_fz", required = false) BigDecimal end_hj_no_fz,
            @RequestParam(value = "st_hj_total_fz", required = false) BigDecimal st_hj_total_fz,
            @RequestParam(value = "end_hj_total_fz", required = false) BigDecimal end_hj_total_fz,
            @RequestParam(value = "st_paid_assets", required = false) BigDecimal st_paid_assets,
            @RequestParam(value = "end_paid_assets", required = false) BigDecimal end_paid_assets,
            @RequestParam(value = "st_zb_reserve", required = false) BigDecimal st_zb_reserve,
            @RequestParam(value = "end_zb_reserve", required = false) BigDecimal end_zb_reserve,
            @RequestParam(value = "st_kc_stock", required = false) BigDecimal st_kc_stock,
            @RequestParam(value = "end_kc_stock", required = false) BigDecimal end_kc_stock,
            @RequestParam(value = "st_zx_reserve", required = false) BigDecimal st_zx_reserve,
            @RequestParam(value = "end_zx_reserve", required = false) BigDecimal end_zx_reserve,
            @RequestParam(value = "st_yy_reserve", required = false) BigDecimal st_yy_reserve,
            @RequestParam(value = "end_yy_reserve", required = false) BigDecimal end_yy_reserve,
            @RequestParam(value = "st_wfp_profit", required = false) BigDecimal st_wfp_profit,
            @RequestParam(value = "end_wfp_profit", required = false) BigDecimal end_wfp_profit,
            @RequestParam(value = "st_hj_owner_right", required = false) BigDecimal st_hj_owner_right,
            @RequestParam(value = "end_hj_owner_right", required = false) BigDecimal end_hj_owner_right,
            @RequestParam(value = "st_hj_fz_owner_right", required = false) BigDecimal st_hj_fz_owner_right,
            @RequestParam(value = "end_hj_fz_owner_right", required = false) BigDecimal end_hj_fz_owner_right

 ) throws Exception{
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        PreparedStatement pst = null;
        try {
            Class.forName("org.postgresql.Driver").newInstance();
        } catch (Exception e) {
            System.out.print(e.getMessage());
        }

        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();

        try {
            conn = DriverManager.getConnection(url, user, password);

            String sql = "INSERT INTO work.tb_corp_finance(\n" +
                    "            fin_corp_id, start_time, end_time, st_money_fund, end_money_fund, \n" +
                    "            st_jyxjr_assets, end_jyxjr_assets, st_ys_bill, end_ys_bill, st_ys_account, \n" +
                    "            end_ys_account, st_yf_money, end_yf_money, st_ys_interest, end_ys_interest, \n" +
                    "            st_ys_dividends, end_ys_dividends, st_other_ys_money, end_other_ys_money, \n" +
                    "            st_inventory, end_inventory, st_ynndq_no_assets, end_ynndq_no_assets, \n" +
                    "            st_other_assets, end_other_assets, st_hj_assets, end_hj_assets, \n" +
                    "            st_kgcs_assets, end_kgcs_assets, st_cyzdq_investment, end_cyzdq_investment, \n" +
                    "            st_long_ys_money, end_long_ys_money, st_long_gq_investment, end_long_gq_investment, \n" +
                    "            st_invest_house, end_invest_house, st_gd_assets, end_gd_assets, \n" +
                    "            st_accu_deprec, end_accu_deprec, st_gd_assets_jz, end_gd_assets_jz, \n" +
                    "            st_gd_assets_ready, end_gd_assets_ready, st_gd_assets_je, end_gd_assets_je, \n" +
                    "            st_now_project, end_now_project, st_project_material, end_project_material, \n" +
                    "            st_gd_assets_ql, end_gd_assets_ql, st_scx_investment, end_scx_investment, \n" +
                    "            st_wx_assets, end_wx_assets, st_goodwill, end_goodwill, st_cqdt_cost, \n" +
                    "            end_cqdt_cost, st_dysds_assets, end_dysds_assets, st_other_no_assets, \n" +
                    "            end_other_no_assets, st_hj_no_asset, end_hj_no_asset, st_hj_total_asset, \n" +
                    "            end_hj_total_asset, st_short_borrow, end_short_borrow, st_jyx_finance_fz, \n" +
                    "            end_jyx_finance_fz, st_yf_bill, end_yf_bill, st_yf_account, end_yf_account, \n" +
                    "            st_ys_money, end_ys_money, st_yf_staff_pay, end_yf_staff_pay, \n" +
                    "            st_yj_tax, end_yj_tax, st_yf_interest, end_yf_interest, st_yf_dividends, \n" +
                    "            end_yf_dividends, st_other_yf_money, end_other_yf_money, st_ynndq_no_fz, \n" +
                    "            end_ynndq_no_fz, st_other_fz, end_other_fz, st_hj_fz, end_hj_fz, \n" +
                    "            st_long_borrow, end_long_borrow, st_yf_bond, end_yf_bond, st_long_yf_money, \n" +
                    "            end_long_yf_money, st_zx_yf_money, end_zx_yf_money, st_yj_fz, \n" +
                    "            end_yj_fz, st_dysds_fz, end_dysds_fz, st_other_no_fz, end_other_no_fz, \n" +
                    "            st_hj_no_fz, end_hj_no_fz, st_hj_total_fz, end_hj_total_fz, st_paid_assets, \n" +
                    "            end_paid_assets, st_zb_reserve, end_zb_reserve, st_kc_stock, \n" +
                    "            end_kc_stock, st_zx_reserve, end_zx_reserve, st_yy_reserve, end_yy_reserve, \n" +
                    "            st_wfp_profit, end_wfp_profit, st_hj_owner_right, end_hj_owner_right, \n" +
                    "            st_hj_fz_owner_right, end_hj_fz_owner_right)\n" +
                    "    VALUES ( ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, \n" +
                    "            ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, fin_corp_id);

            java.sql.Date d_start_time = null;
            if (start_time != null && start_time.length() > 2)
                d_start_time = java.sql.Date.valueOf(start_time);
            pst.setDate(2, d_start_time);
            java.sql.Date d_end_time = null;
            if (end_time != null && end_time.length() > 2)
                d_end_time = java.sql.Date.valueOf(end_time);
            pst.setDate(3, d_end_time);
            pst.setBigDecimal(4, st_money_fund);
            pst.setBigDecimal(5, end_money_fund);
            pst.setBigDecimal(6, st_jyxjr_assets);
            pst.setBigDecimal(7, end_jyxjr_assets);
            pst.setBigDecimal(8, st_ys_bill);
            pst.setBigDecimal(9, end_ys_bill);
            pst.setBigDecimal(10, st_ys_account);
            pst.setBigDecimal(11, end_ys_account);
            pst.setBigDecimal(12, st_yf_money);
            pst.setBigDecimal(13, end_yf_money);
            pst.setBigDecimal(14, st_ys_interest);
            pst.setBigDecimal(15, end_ys_interest);
            pst.setBigDecimal(16, st_ys_dividends);
            pst.setBigDecimal(17, end_ys_dividends);
            pst.setBigDecimal(18, st_other_ys_money);
            pst.setBigDecimal(19, end_other_ys_money);
            pst.setBigDecimal(20, st_inventory);
            pst.setBigDecimal(21, end_inventory);
            pst.setBigDecimal(22, st_ynndq_no_assets);
            pst.setBigDecimal(23, end_ynndq_no_assets);
            pst.setBigDecimal(24, st_other_assets);
            pst.setBigDecimal(25, end_other_assets);
            pst.setBigDecimal(100, st_hj_assets);
            pst.setBigDecimal(101, end_hj_assets);
            pst.setBigDecimal(102, st_kgcs_assets);
            pst.setBigDecimal(103, end_kgcs_assets);
            pst.setBigDecimal(104, st_cyzdq_investment);
            pst.setBigDecimal(105, end_cyzdq_investment);
            pst.setBigDecimal(106, st_long_ys_money);
            pst.setBigDecimal(107, end_long_ys_money);
            pst.setBigDecimal(108, st_long_gq_investment);
            pst.setBigDecimal(109, end_long_gq_investment);
            pst.setBigDecimal(110, st_invest_house);
            pst.setBigDecimal(111, end_invest_house);
            pst.setBigDecimal(112, st_gd_assets);
            pst.setBigDecimal(113, end_gd_assets);
            pst.setBigDecimal(114, st_accu_deprec);
            pst.setBigDecimal(115, end_accu_deprec);
            pst.setBigDecimal(116, st_gd_assets_jz);
            pst.setBigDecimal(117, end_gd_assets_jz);
            pst.setBigDecimal(118, st_gd_assets_ready);
            pst.setBigDecimal(119, end_gd_assets_ready);
            pst.setBigDecimal(120, st_gd_assets_je);
            pst.setBigDecimal(121, end_gd_assets_je);
            pst.setBigDecimal(122, st_now_project);
            pst.setBigDecimal(123, end_now_project);
            pst.setBigDecimal(124, st_project_material);
            pst.setBigDecimal(125, end_project_material);
            pst.setBigDecimal(126, st_gd_assets_ql);
            pst.setBigDecimal(127, end_gd_assets_ql);
            pst.setBigDecimal(128, st_scx_investment);
            pst.setBigDecimal(129, end_scx_investment);
            pst.setBigDecimal(130, st_wx_assets);
            pst.setBigDecimal(131, end_wx_assets);
            pst.setBigDecimal(132, st_goodwill);
            pst.setBigDecimal(133, end_goodwill);
            pst.setBigDecimal(134, st_cqdt_cost);
            pst.setBigDecimal(135, end_cqdt_cost);
            pst.setBigDecimal(136, st_dysds_assets);
            pst.setBigDecimal(137, end_dysds_assets);
            pst.setBigDecimal(138, st_other_no_assets);
            pst.setBigDecimal(139, end_other_no_assets);
            pst.setBigDecimal(140, st_hj_no_asset);
            pst.setBigDecimal(141, end_hj_no_asset);
            pst.setBigDecimal(142, st_hj_total_asset);
            pst.setBigDecimal(143, end_hj_total_asset);
            pst.setBigDecimal(144, st_short_borrow);
            pst.setBigDecimal(145, end_short_borrow);
            pst.setBigDecimal(146, st_jyx_finance_fz);
            pst.setBigDecimal(147, end_jyx_finance_fz);
            pst.setBigDecimal(148, st_yf_bill);
            pst.setBigDecimal(149, end_yf_bill);
            pst.setBigDecimal(150, st_yf_account);
            pst.setBigDecimal(151, end_yf_account);
            pst.setBigDecimal(152, st_ys_money);
            pst.setBigDecimal(153, end_ys_money);
            pst.setBigDecimal(154, st_yf_staff_pay);
            pst.setBigDecimal(155, end_yf_staff_pay);
            pst.setBigDecimal(156, st_yj_tax);
            pst.setBigDecimal(157, end_yj_tax);
            pst.setBigDecimal(158, st_yf_interest);
            pst.setBigDecimal(159, end_yf_interest);
            pst.setBigDecimal(160, st_yf_dividends);
            pst.setBigDecimal(161, end_yf_dividends);
            pst.setBigDecimal(162, st_other_yf_money);
            pst.setBigDecimal(163, end_other_yf_money);
            pst.setBigDecimal(164, st_ynndq_no_fz);
            pst.setBigDecimal(165, end_ynndq_no_fz);
            pst.setBigDecimal(166, st_other_fz);
            pst.setBigDecimal(167, end_other_fz);
            pst.setBigDecimal(168, st_hj_fz);
            pst.setBigDecimal(169, end_hj_fz);
            pst.setBigDecimal(170, st_long_borrow);
            pst.setBigDecimal(171, end_long_borrow);
            pst.setBigDecimal(172, st_yf_bond);
            pst.setBigDecimal(173, end_yf_bond);
            pst.setBigDecimal(174, st_long_yf_money);
            pst.setBigDecimal(175, end_long_yf_money);
            pst.setBigDecimal(176, st_zx_yf_money);
            pst.setBigDecimal(177, end_zx_yf_money);
            pst.setBigDecimal(178, st_yj_fz);
            pst.setBigDecimal(179, end_yj_fz);
            pst.setBigDecimal(180, st_dysds_fz);
            pst.setBigDecimal(181, end_dysds_fz);
            pst.setBigDecimal(182, st_other_no_fz);
            pst.setBigDecimal(183, end_other_no_fz);
            pst.setBigDecimal(184, st_hj_no_fz);
            pst.setBigDecimal(185, end_hj_no_fz);
            pst.setBigDecimal(186, st_hj_total_fz);
            pst.setBigDecimal(187, end_hj_total_fz);
            pst.setBigDecimal(188, st_paid_assets);
            pst.setBigDecimal(189, end_paid_assets);
            pst.setBigDecimal(190, st_zb_reserve);
            pst.setBigDecimal(191, end_zb_reserve);
            pst.setBigDecimal(192, st_kc_stock);
            pst.setBigDecimal(193, end_kc_stock);
            pst.setBigDecimal(194, st_zx_reserve);
            pst.setBigDecimal(195, end_zx_reserve);
            pst.setBigDecimal(196, st_yy_reserve);
            pst.setBigDecimal(197, end_yy_reserve);
            pst.setBigDecimal(198, st_wfp_profit);
            pst.setBigDecimal(199, end_wfp_profit);
            pst.setBigDecimal(200, st_hj_owner_right);
            pst.setBigDecimal(201, end_hj_owner_right);
            pst.setBigDecimal(202, st_hj_fz_owner_right);
            pst.setBigDecimal(203, end_hj_fz_owner_right);
            pst.executeUpdate();



            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        return dataShop;
    }
}