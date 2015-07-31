package com.springapp.mvc;

import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/shareholder_view")
public class shareholder_view {
    @RequestMapping(method = RequestMethod.GET)
    public String printWelcome(ModelMap model,
          @RequestParam(value = "gd_id", required = true) Integer gd_id
    ) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

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



            String sql = "SELECT   gd_id, gd_corp_id, gd_shtype, gd_shname, gd_shdoctype, gd_shdocnum, \n" +
                    "       gd_shareholdnum, gd_currencynum, gd_freezenum, gd_psotion, gd_doctype, \n" +
                    "       gd_docnum, gd_phone, gd_fax, gd_email, gd_qq, gd_webchat, gd_tel, \n" +
                    "       gd_remark  FROM work.tb_corp_shareholder where gd_id= "+gd_id;


            rs = stmt.executeQuery(sql);

            while(rs.next()) {
                model.addAttribute("gd_id", rs.getInt("gd_id"));
                model.addAttribute("gd_corp_id", rs.getInt( "gd_corp_id"));
                model.addAttribute("gd_shtype", rs.getString("gd_shtype"));
                model.addAttribute("gd_shname", rs.getString("gd_shname"));
                model.addAttribute("gd_shdoctype", rs.getString("gd_shdoctype"));
                model.addAttribute("gd_shdocnum", rs.getString("gd_shdocnum"));
                model.addAttribute("gd_shareholdnum", rs.getString("gd_shareholdnum"));
                model.addAttribute("gd_currencynum", rs.getString("gd_currencynum"));
                model.addAttribute("gd_freezenum", rs.getString("gd_freezenum"));
                model.addAttribute("gd_psotion", rs.getString("gd_psotion"));
                model.addAttribute("gd_doctype", rs.getString("gd_doctype"));
                model.addAttribute("gd_docnum", rs.getString("gd_docnum"));
                model.addAttribute("gd_phone", rs.getString("gd_phone"));
                model.addAttribute("gd_fax", rs.getString("gd_fax"));
                model.addAttribute("gd_email", rs.getString("gd_email"));
                model.addAttribute("gd_qq", rs.getString("gd_qq"));
                model.addAttribute("gd_webchat", rs.getString("gd_webchat"));
                model.addAttribute("gd_tel", rs.getString("gd_tel"));
                model.addAttribute("gd_remark", rs.getString("gd_remark"));
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
        return "shareholder_view";
    }
}