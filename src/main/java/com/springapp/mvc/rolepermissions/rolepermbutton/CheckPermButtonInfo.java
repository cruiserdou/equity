package com.springapp.mvc.rolepermissions.rolepermbutton;


import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/check_perm_button_info")
public class CheckPermButtonInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam(value = "treeid", required = false) Integer treeid,
            @RequestParam(value = "button", required = false) String button
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
            int i_num_tj=0;
             String sql = "select  count(1) as num_tj \n" +
                     "  from work.tb_rolepermbutton rolepermbutton , work.userroles userroles   " +
                     "   WHERE    userroles.roleid= rolepermbutton.roleid and button='"+button+"' and  rolepermbutton.treeid="+treeid+"  and userid="+Integer.parseInt(session.getAttribute("id").toString());

            rs = stmt.executeQuery(sql);

            while (rs.next()) {
                i_num_tj = rs.getInt(1);
                if(i_num_tj==0 || rs.getString(1) == null){
                    dataShop.setSuccess(true);
                }else
                {
                    dataShop.setSuccess(false);
                }
            }

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


        return dataShop;
    }
}