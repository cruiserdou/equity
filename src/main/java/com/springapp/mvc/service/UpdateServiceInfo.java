package com.springapp.mvc.service;

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
@RequestMapping("/update_service_info")
public class UpdateServiceInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam(value = "serviceid", required = false) Integer id,
            @RequestParam(value = "servicenos", required = false) String nos,
            @RequestParam(value = "servicename", required = false) String name,
            @RequestParam(value = "servicetype", required = false) String type,
            @RequestParam(value = "servicecontent", required = false) String content,
            @RequestParam(value = "servicelevels", required = false) String levels,
            @RequestParam(value = "servicedescs", required = false) String descs,
            @RequestParam(value = "servicedomain", required = false) String domain,
            @RequestParam(value = "servicepenalty", required = false) String penalty,
            @RequestParam(value = "serviceremark", required = false) String remark

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

            String sql = "UPDATE work.tb_service\n" +
                    "   SET  nos=?, name=?, type=?, content=?, levels=?, descs=?, domain=?, \n" +
                    "       penalty=?, remark=?" +
                    " where id = ?";
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
            pst.setInt(10, id);
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