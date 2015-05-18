package com.springapp.mvc.depts;

/**
 * Created by xwq on 14-4-15.
 */

import com.xwq.common.model.DataShop;
import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.*;

@Controller
@RequestMapping("/checked_depart_id_info")
public class CheckDepartIdInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
    ) throws Exception {
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
            String sql_max_id = "select max(nos) as max_id from work.tb_depts ";
            pst = conn.prepareStatement(sql_max_id);
            ResultSet rs = pst.executeQuery();
            String  max_id = null;
            while (rs.next()){
                max_id = rs.getString("max_id");
                if( max_id != null || max_id.length() != 0){
                    if(String.valueOf(Integer.parseInt(max_id.substring(1))+1).length()==1){
                        max_id="A0"+String.valueOf(Integer.parseInt(max_id.substring(1))+1);
                    }else{
                        max_id="A"+String.valueOf(Integer.parseInt(max_id.substring(1))+1);
                    }
                }else{
                    max_id="A01";
                }
            }

                dataShop.setSuccess(true);
                dataShop.setName(max_id);



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