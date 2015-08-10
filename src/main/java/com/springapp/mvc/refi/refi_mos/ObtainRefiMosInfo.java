package com.springapp.mvc.refi.refi_mos;

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
@RequestMapping("/obtain_refi_mos_info")
public class ObtainRefiMosInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
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

            String sql = "SELECT corp.name corp_name, mos_id, mos_corp_id, mos_cots, mos_amounts, mos_mop, mos_rop" +
                    "  from work.tb_corp  corp INNER  join work.tb_refi_mos  refi_mos on  corp.id  = refi_mos.mos_corp_id " +
                    "     WHERE   refi_mos.inputid ="+Integer.parseInt(session.getAttribute("id").toString());
            if (corp_name != null && corp_name.length() != 0)
                sql += " and corp.name like '%" + corp_name + "%'";
//            if (type != null && type.length() != 0)
//                sql += " and type like '%" + type + "%'";

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