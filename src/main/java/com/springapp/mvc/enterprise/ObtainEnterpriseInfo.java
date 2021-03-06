package com.springapp.mvc.enterprise;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.ConvertToList;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.*;
import java.util.*;

@Controller
@RequestMapping("/obtain_enterprise_info")
public class ObtainEnterpriseInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
           @RequestParam(value = "name", required = false) String name,
           @RequestParam(value = "nos", required = false) String nos,
           @RequestParam(value = "buslicno", required = false) String buslicno,
           @RequestParam(value = "listcode", required = false) String listcode,
           @RequestParam(value = "regcap", required = false) String regcap
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


            String sql = "select *  from work.tb_enterprise WHERE 1 = 1 ";
            if (name != null && name.length() != 0)
                sql += " and name like '%" + name + "%'";
            if (nos != null && nos.length() != 0)
                sql += " and nos like '%" + nos + "%'";
            if (buslicno != null && buslicno.length() != 0)
                sql += " and buslicno like '%" + buslicno + "%'";
            if (regcap != null && regcap.length() != 0)
                sql += " and regcap = '" + regcap + "'";

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