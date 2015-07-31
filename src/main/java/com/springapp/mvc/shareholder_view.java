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
                model.addAttribute("gd_id", rs.getString( "gd_id" ));
                model.addAttribute("gd_corp_id", rs.getString( "gd_corp_id" ));
                model.addAttribute("education", rs.getString( "education" ));
                model.addAttribute("card", rs.getString( "card" ));
                model.addAttribute("address", rs.getString( "address" ));
                model.addAttribute("workunit", rs.getString( "workunit" ));
                model.addAttribute("drvschool", rs.getString( "drvschool" ));
                model.addAttribute("lictype", rs.getString( "lictype" ));
                model.addAttribute("licdt", rs.getString( "licdt" ));
                model.addAttribute("applytp", rs.getString( "applytp" ));
                model.addAttribute("qulfnum", rs.getString( "qulfnum" ));
                model.addAttribute("licmd", rs.getString( "licmd" ));
                model.addAttribute("scores", rs.getString( "scores" ));
                model.addAttribute("photo", rs.getString( "photo" ));
                model.addAttribute("promise", rs.getString( "promise" ));
                model.addAttribute("pxnum", rs.getString( "pxnum" ));
                model.addAttribute("licmd_goods", rs.getString( "licmd_goods" ));
                model.addAttribute("checklist1", rs.getBoolean( "checklist1" ));
                model.addAttribute("checklist2", rs.getBoolean( "checklist2" ));
                model.addAttribute("checklist3", rs.getBoolean( "checklist3" ));
                model.addAttribute("checklist4", rs.getBoolean( "checklist4" ));
                model.addAttribute("checklist5", rs.getBoolean( "checklist5" ));
                model.addAttribute("promisedt", rs.getDate("promisedt" ));
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