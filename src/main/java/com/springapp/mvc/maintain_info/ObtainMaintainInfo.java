package com.springapp.mvc.maintain_info;

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
@RequestMapping("/obtain_maintain_info")
public class ObtainMaintainInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
//           @RequestParam(value = "name", required = false) String name,
           @RequestParam(value = "corp_name", required = false) String corp_name


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

            String sql = "SELECT corp.name corp_name,mi_id, mi_corp_id, mi_listcode, mi_province, mi_city, mi_county, \n" +
                    "     mi_mt_date, mi_cust_type, mi_next_date, mi_next_plan, mi_remark  " +
                    "      FROM  work.tb_maintain_info maintain_info ,work.tb_corp  corp   " +
                    "      where   corp.id  = maintain_info.mi_corp_id    and  " +
                    "             mi_id  in (select max(mi_id)  from work.tb_maintain_info   group by mi_corp_id) ";
            if (corp_name != null && corp_name.length() != 0)
                sql += " and corp.name like '%" + corp_name + "%'";

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