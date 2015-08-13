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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_msg_info")
public class ObtainMsgInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
           @RequestParam(value = "stat", required = false) String stat,
           @RequestParam(value = "user_name", required = false) String user_name
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        DataShop dataShop = new DataShop();
        List list = new ArrayList();
        int user_id =Integer.parseInt(session.getAttribute("id").toString());

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

            String sql = "select  id, user_id, (select name from work.users where id =user_id ) as  user_name, ruser_id," +
                    " TO_CHAR(deadline,'yyyy-mm-dd hh24:mi:ss') as  deadline, content, stat, remark, TO_CHAR(rtdate,'yyyy-mm-dd hh24:mi:ss') as rtdate,    \n" +
                    " case when user_id="+user_id+" then '发送' else '接收' end as  type \n" +
                    "  from work.tb_msg  WHERE (ruser_id ="+user_id+" or  user_id ="+user_id+") ";

            if (stat != null && stat.length() != 0)
                sql += " and stat like '%" + stat + "%'";
            if (user_name != null && user_name.length() != 0)
                sql += " and user_id in (select id  from work.users where name  like '%" + user_name + "%')";

            sql += " order by rtdate desc ";


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