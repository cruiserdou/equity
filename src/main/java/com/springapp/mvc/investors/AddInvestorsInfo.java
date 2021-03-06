package com.springapp.mvc.investors;

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
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@Controller
@RequestMapping("/add_investors_info")
public class AddInvestorsInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("nos") String nos,
            @RequestParam("name") String name,
            @RequestParam("type") String type,
            @RequestParam("content") String content,
            @RequestParam("levels") String levels,
            @RequestParam("descs") String descs,
            @RequestParam("domain") String domain,
            @RequestParam("penalty") String penalty,
            @RequestParam("b_examiner") boolean b_examiner,
            @RequestParam("part_post") String part_post,
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

            String sql = "INSERT INTO work.tb_investors(\n" +
                    "           nos, name, type, content, levels, descs, domain, penalty, \n" +
                    "            remark,b_examiner,part_post)\n" +
                    "    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
            pst = conn.prepareStatement(sql);
            pst.setString(1, nos);
            pst.setString(2, name);
            pst.setString(3, type);
            pst.setString(4, content);
            pst.setString(5, levels);
            pst.setString(6, descs);
            pst.setString(7, domain);
            pst.setString(8, penalty);
            pst.setString(9, remark);
            pst.setBoolean(10, b_examiner);
            pst.setString(11, part_post);
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