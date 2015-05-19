package com.springapp.mvc.enterprise;

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

import javax.servlet.http.HttpSession;
import java.sql.*;

@Controller
@RequestMapping("/update_enterprise_info")
public class UpdateEnterpriseInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("id") Integer id,
            @RequestParam("name") String name,
            @RequestParam("nos") String nos,
            @RequestParam("etype") String etype,
            @RequestParam("listcode") String listcode,
            @RequestParam("listprice") String listprice,
            @RequestParam("name") String buslic,
            @RequestParam("name") String status,
            @RequestParam("name") String reserve,
            @RequestParam("name") String regdate,
            @RequestParam("name") String markstat,
            @RequestParam("name") String visitstat,
            @RequestParam("remark") String remark

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

            String sql = "UPDATE work.tb_enterprise\n" +
                    "   SET   name=?, nos=?, etype=?, listcode=?, listprice=?, buslic=?, \n" +
                    "       status=?, reserve=?, regdate=?, markstat=?, visitstat=?, rtdate=?, \n" +
                    "       remark=?" +
                    " where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setString(1, name);
            pst.setString(2, nos);
            pst.setString(3, etype);
            pst.setString(4, listcode);
            pst.setString(5, listprice);
            pst.setString(6, buslic);
            pst.setString(7, status);
            pst.setString(8, reserve);
            pst.setString(9, regdate);
            pst.setString(10,markstat);
            pst.setString(11, visitstat);
            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            pst.setTimestamp(12, timestamp);
            pst.setString(13, remark);
            pst.setInt(14, id);
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