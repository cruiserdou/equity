package com.springapp.mvc.enterprise_maintain;

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
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_enterprise_maintain_info")
public class ObtainEnterpriseMaintainInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "name", required = false) String name
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

            String sql = "select enterprise.id  enterid ,enterprise.buslicno ,enterprise.name , enterprise_maintain.id, enterprise_maintain.enterprise_id, enterprise_maintain.receive_per, " +
                    "       TO_CHAR(enterprise_maintain.maintain_date,'yyyy-mm-dd hh24:mi:ss')  maintain_date, enterprise_maintain.important_level, \n" +
                    "       enterprise_maintain.content, enterprise_maintain.result, enterprise_maintain.next_plan," +
                    "      TO_CHAR(enterprise_maintain.next_date,'yyyy-mm-dd hh24:mi:ss')  next_date, enterprise_maintain.next_content, enterprise_maintain.phone_file, \n" +
                    "       enterprise_maintain.remark  from work.tb_enterprise enterprise  left join  work.tb_enterprise_maintain enterprise_maintain  on enterprise.id =enterprise_maintain.enterprise_id ";
//            if (name != null && name.length() != 0)
//                sql += " and name like '%" + name + "%'";

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