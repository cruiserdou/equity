package com.springapp.mvc.login_log;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.ConvertToList;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_login_log_info")
public class ObtainLoginLogInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//           @RequestParam(value = "stat", required = false) String stat,
//           @RequestParam(value = "type", required = false) String type
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        DataShop dataShop = new DataShop();
        List list = new ArrayList();

        try{
            Class.forName("org.postgresql.Driver").newInstance();
        }catch (Exception e){
            System.out.print(e.getMessage());
        }
        DBInfo connstr = new DBInfo();
        String url = connstr.getUrl();
        String user = connstr.getUser();
        String password = connstr.getPassword();
        try{
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();

            String sql = "select  login_log_id, user_id, ip,TO_CHAR(login_datetime,'yyyy-mm-dd hh24:mi:ss') as  login_datetime  \n" +
                    "  FROM work.t_login_log  WHERE 1 = 1 ";
//            if (stat != null && stat.length() != 0)
//                sql += " and stat like '%" + stat + "%'";
//            if (type != null && type.length() != 0)
//                sql += " and type like '%" + type + "%'";

            rs = stmt.executeQuery(sql);

            list = new ConvertToList().convertList(rs);

        }catch (SQLException e){
            System.out.print(e.getMessage());
        }finally {
            try{
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            }catch (SQLException e){
                System.out.print(e.getMessage());
            }
        }

        dataShop.setSuccess(true);
        dataShop.setList(list);

        return dataShop;
    }
}
