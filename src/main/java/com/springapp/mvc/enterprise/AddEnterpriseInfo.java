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
@RequestMapping("/add_enterprise_info")
public class AddEnterpriseInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("name") String name,
            @RequestParam("nos") String nos,
            @RequestParam("etype") String etype,
            @RequestParam("listcode") String listcode,
            @RequestParam("listprice") String listprice,
            @RequestParam("buslic") String buslic,
            @RequestParam("status") String status,
            @RequestParam("reserve") String reserve,
            @RequestParam("regdate") String regdate,
            @RequestParam("markstat") String markstat,
            @RequestParam("visitstat") String visitstat,
            @RequestParam("nature") String nature,
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




            String sql = "INSERT INTO work.tb_enterprise(\n" +
                    "              name, nos, etype, listcode, listprice, buslic, status, reserve, \n" +
                    "            regdate, markstat, visitstat, rtdate,nature, remark)\n" +
                    "    VALUES (  ?, ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, name);
            pst.setString(2, nos);
            pst.setString(3, etype);
            pst.setString(4, listcode);
            pst.setString(5, listprice);
            pst.setString(6, buslic);
            pst.setString(7, status);
            pst.setString(8, reserve);
            java.sql.Date d_regdat = null;
            if (regdate != null && regdate.length() > 2)
                d_regdat = java.sql.Date.valueOf(regdate);
            pst.setDate(9, d_regdat);
            pst.setString(10,markstat);
            pst.setString(11, visitstat);
            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            pst.setTimestamp(12, timestamp);
            pst.setString(13, remark);
            pst.setString(14, remark);
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