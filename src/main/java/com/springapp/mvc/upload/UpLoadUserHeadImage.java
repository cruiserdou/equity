package com.springapp.mvc.upload;

import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.sql.*;
import java.text.SimpleDateFormat;

/**
 * Created by jj on 14-11-29.
 */
@Controller
@RequestMapping(value = "/")
public class UpLoadUserHeadImage {


    @RequestMapping(value = "headImage", method = RequestMethod.POST)
    public ModelAndView postToMainPage(
            Model model,
            HttpServletRequest request,
            HttpSession session,
            MultipartHttpServletRequest requestM,
//            @RequestParam(value = "corp_id", required = false) Integer corp_id,
            @RequestParam MultipartFile file
    ) throws IOException {
        ModelAndView modelAndView = new ModelAndView();
        String viewName = "redirect:/img_upload";
        String user_email = session.getAttribute("user").toString();
       String newfilename="";
        if (!file.isEmpty()) {
            String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/");
            File newfile =new File(projectPath + "/" + file.getOriginalFilename());
            file.transferTo(newfile);
//            newfilename=newfile.getName();
        }
//        Connection conn = null;
//        PreparedStatement pst = null;
//        Statement stmt = null;
//        ResultSet rs = null;
//
//        try {
//            Class.forName("org.postgresql.Driver").newInstance();
//        } catch (Exception e) {
//            System.out.print(e.getMessage());
//        }
//
//        DBInfo connstr = new DBInfo();
//        String url = connstr.getUrl();
//        String user = connstr.getUser();
//        String password = connstr.getPassword();
//
//        java.util.Date time = new java.util.Date();
//        SimpleDateFormat formats = new SimpleDateFormat("yyyyMMdd");
//        String today = formats.format(time).toString();
//        String filename = null;
//        String  max_id = null;
//        String  file_type = null;
//
//        try {
//            conn = DriverManager.getConnection(url, user, password);
//            if (!file.isEmpty()) {
//
//                int mul_dot = file.getOriginalFilename().lastIndexOf('.');
//                if ((mul_dot >-1) && (mul_dot < (file.getOriginalFilename().length() - 1))) {
//                    file_type= file.getOriginalFilename().substring(mul_dot + 1);
//                }
//
//                String sql_max_id = "select max(img) as max_id from work.tb_corp_img where img  like 'F-02-" + today + "%'";
//
//                pst = conn.prepareStatement(sql_max_id);
//                rs = pst.executeQuery();
//                while (rs.next()) {
//                    max_id = rs.getString("max_id");
//                    if (max_id != null && (max_id.length() > 0)) {
//
//                        int dot = max_id.lastIndexOf('.');
//                        if ((dot > -1) && (dot < (max_id.length()))) {
//                            max_id = max_id.substring(0, dot);
//                        }
//
//                        if (String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1).length() == 1) {
//                            max_id = "000" + String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1);
//                        } else if (String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1).length() == 2) {
//                            max_id = "00" + String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1);
//                        } else if (String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1).length() == 3) {
//                            max_id = "0" + String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1);
//                        } else {
//                            max_id = String.valueOf(Integer.parseInt(max_id.substring(14, 18)) + 1);
//                        }
//                    } else {
//                        max_id = "0001";
//                    }
//                }
//
//                max_id = "F-02-" + today + "-" + max_id;
//                if (!file.isEmpty()) {
//                    String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/");
//
//                    file.transferTo(new File(projectPath + "/" + max_id + "." + file_type));
//                }
//                filename = max_id + "." + file_type;
//
//
//
//                String sql_img = "insert into work.tb_corp_img" +
//                        "(img_corp_id,img_name) " +
//                        " values(?,?)";
//                pst = conn.prepareStatement(sql_img);
//                pst.setInt(1, corp_id);
//                pst.setString(2, filename);
//                pst.executeUpdate();
//
//            }
//
//        } catch (SQLException e) {
//            System.out.print(e.getMessage());
//        } finally {
//            try {
//                if (pst != null) pst.close();
//                if (conn != null) conn.close();
//            } catch (SQLException e) {
//                System.out.print(e.getMessage());
//            }
//        }

        modelAndView.setViewName(viewName);
        return modelAndView;
    }

}

