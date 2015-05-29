package com.springapp.mvc.financ;

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
import java.math.BigDecimal;
import java.sql.*;

@Controller
@RequestMapping("/add_financ_info")
public class AddFinancInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("famount") BigDecimal famount,
            @RequestParam("fmode") String fmode,
            @RequestParam("fuse") String fuse,
            @RequestParam("ftermdt") String ftermdt,
            @RequestParam("fcosts") BigDecimal fcosts,
            @RequestParam("payment_pl") String payment_pl,
            @RequestParam("payment_gt") String payment_gt,
            @RequestParam("supply_sd") String supply_sd,
            @RequestParam("supply_md") String supply_md,
            @RequestParam("costs") BigDecimal costs


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

            String sql = "INSERT INTO work.tb_financ(\n" +
                    "              famount, fmode, fuse, ftermdt, fcosts, payment_pl, payment_gt, \n" +
                    "            supply_sd, supply_md, costs)\n" +
                    "    VALUES ( ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setBigDecimal(1, famount);
            pst.setString(2, fmode);
            pst.setString(3, fuse);
            Timestamp t_ftermdt = Timestamp.valueOf(ftermdt);
            pst.setTimestamp(4, t_ftermdt);
            pst.setBigDecimal(5, fcosts);
            pst.setString(6, payment_pl);
            pst.setString(7, payment_gt);
            pst.setString(8, supply_sd);
            pst.setString(9, supply_md);
            pst.setBigDecimal(10, costs);
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