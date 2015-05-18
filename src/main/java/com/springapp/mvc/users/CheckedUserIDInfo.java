package com.springapp.mvc.users;

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

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/checked_user_id_info")
public class CheckedUserIDInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("depart_id") Integer depart_id
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        PreparedStatement pst = null;
        DataShop dataShop = new DataShop();
        List list = new ArrayList();
        List listX = new ArrayList();
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
            int i_num_tj=0;

            String sql_dept_nos = "select nos from  work.tb_depts where id  ="+depart_id;
            pst = conn.prepareStatement(sql_dept_nos);
            rs = pst.executeQuery();
            String  dept_nos = null;
            while (rs.next()){
                dept_nos = rs.getString("nos");
            }

            String sql_max_id = "select max(nos) as max_id from  work.users where deptid  ="+depart_id;
            pst = conn.prepareStatement(sql_max_id);
             rs = pst.executeQuery();
            String  max_id = null;
            while (rs.next()){
                max_id = rs.getString("max_id");

                if(max_id != null){
                    if(String.valueOf(Integer.parseInt(max_id.substring(1,3))+1).length()==1){
                        max_id="E0"+String.valueOf(Integer.parseInt(max_id.substring(1,3))+1);
                    }else{
                        max_id="E"+String.valueOf(Integer.parseInt(max_id.substring(1,3))+1);
                    }
                }else{
                    max_id="E01";
                }


            }

                dataShop.setSuccess(true);
                dataShop.setName(max_id+"-"+dept_nos.substring(1));


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


//        dataShop.setList(list);


        return dataShop;
    }
}