package com.springapp.mvc.corp.corp;

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
@RequestMapping("/obtain_corp_info")
public class ObtainCorpInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "start", required = false) String start,
            @RequestParam(value = "limit", required = false) String limit,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "buslicno", required = false) String buslicno
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
            String sql_d = "";
            String sql_s = "";
            String sql_c = "";
            Boolean b_check=false;




            sql_d = "select * from work.tb_corp corp WHERE 1 = 1 ";




            sql_c = "select count(*) from work.tb_corp  corp where 1=1 ";


            if (name != null && name.length() != 0){
                sql_s += " and corp.name like '%" + name + "%'";
                b_check=true;
            }

//            if (nos != null && nos.length() != 0){
//                sql_s += " and corp.nos like '%" + nos + "%'";
//                b_check=true;
//            }

            if (buslicno != null && buslicno.length() != 0){
                sql_s += " and corp.buslicno like '%" + buslicno + "%'";
                b_check=true;
            }

//            if (listcode != null && listcode.length() != 0){
//                sql_s += " and corp.listcode = '" + listcode + "'";
//                b_check=true;
//            }




            sql_c += sql_s;

            sql_s += " order by  corp.id desc ";

            sql_d += sql_s;
            if( !b_check==true)
                sql_d += " limit " + limit + " offset " + start;



            rs = stmt.executeQuery(sql_d);
            list = new ConvertToList().convertList(rs);

            rs = stmt.executeQuery(sql_c);
            while (rs.next())
                dataShop.setTotal(rs.getInt(1));


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