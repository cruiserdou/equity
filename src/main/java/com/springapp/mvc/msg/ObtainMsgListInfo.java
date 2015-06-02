package com.springapp.mvc.msg;

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

import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_msg_list_info")
public class ObtainMsgListInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        PreparedStatement pst = null;
        DataShop dataShop = new DataShop();
        List list = new ArrayList();
        String user_id = session.getAttribute("id").toString();
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

            java.util.Date date_deadline = new java.util.Date();
            Timestamp timestamp_date_deadline = new Timestamp(date_deadline.getTime());

            String sql = "SELECT id, user_id, ruser_id, deadline, content, stat, remark, rtdate, \n" +
                    "       type FROM work.tb_msg where stat=? and ruser_id = '"+user_id+"' ";
            pst = conn.prepareStatement(sql);
            pst.setString(1,"未阅");
            rs = pst.executeQuery();
            list = new ConvertToList().convertList(rs);

        }catch (SQLException e){
            System.out.print(e.getMessage());
        }finally {
            try{
                if (pst != null) pst.close();
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