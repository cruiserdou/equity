package com.springapp.mvc.corp.corp;

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

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/delete_corp_info")
public class DeleteCorpInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("id") Integer id
            ) throws Exception{
        DataShop dataShop = new DataShop();
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

            String sql = "delete from work.tb_corp where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_contact = "delete from work.tb_corp_contact where cont_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_contact);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_finance = "delete from work.tb_corp_finance where fin_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_finance);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_government = "delete from work.tb_corp_government where gov_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_government);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_investors = "delete from work.tb_corp_investors where inv_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_investors);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_maintain = "delete from work.tb_corp_maintain where mai_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_maintain);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_refinancing = "delete from work.tb_corp_refinancing where refi_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_refinancing);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_rehr = "delete from work.tb_corp_rehr where rehr_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_rehr);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_retrain = "delete from work.tb_corp_retrain where retra_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_retrain);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_service = "delete from work.tb_corp_service where srv_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_service);
            pst.setInt(1, id);
            pst.executeUpdate();

            String sql_corp_shareholder = "delete from work.tb_corp_shareholder where gd_corp_id = ?";
            pst = conn.prepareStatement(sql_corp_shareholder);
            pst.setInt(1, id);
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