package com.springapp.mvc.maintain_plan;

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
@RequestMapping("/obtain_maintain_plan_history_info")
public class ObtainMaintainPlanHistoryInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
           @RequestParam(value = "mp_corp_id", required = false) Integer mp_corp_id,
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

            String sql = "SELECT  corp.name corp_name, mp_id, mp_corp_id, mp_listcode, mp_province, mp_city, mp_county, \n" +
                    " TO_CHAR(mp_last_date,'yyyy-mm-dd hh24:mi:ss') as mp_last_date, mp_content, mp_result, mp_hisdesc, mp_remark \n" +
                    "  FROM   work.tb_maintain_plan  maintain_plan ,work.tb_corp  corp WHERE corp.id  = maintain_plan.mp_corp_id    \n" +
                    "  and mp_id  not in (select max(mp_id)  from work.tb_maintain_plan   group by mp_corp_id) " +
                    " and maintain_plan.inputid ="+Integer.parseInt(session.getAttribute("id").toString());

            if (corp_name != null && corp_name.length() != 0)
                sql += " and corp.name like '%" + corp_name + "%'";
            if (mp_corp_id != null)
                sql += " and maintain_plan.mp_corp_id =" + mp_corp_id;

            sql += " order by  maintain_plan.mp_id desc ";
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