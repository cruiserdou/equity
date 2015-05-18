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
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/add_users_info")
public class AddUsersInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam("account") String account,
            @RequestParam("password") String pwd,
            @RequestParam("sex") String sex,
            @RequestParam("phone") String phone,
            @RequestParam("address") String address,
            @RequestParam("deptid") Integer deptid,
            @RequestParam("name") String name,
            @RequestParam("nos") String nos,
            @RequestParam("remark") String remark,
            @RequestParam(value = "img", required = false) MultipartFile file,
            HttpServletRequest request

    ) throws Exception{
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

        java.util.Date time = new java.util.Date();
        SimpleDateFormat formats = new SimpleDateFormat("yyyyMMdd");
        String today = formats.format(time).toString();
        String filename = null;
        String  max_id = null;
        String  file_type = null;

        try {
            conn = DriverManager.getConnection(url, user, password);

            if (!file.isEmpty()) {

                int mul_dot = file.getOriginalFilename().lastIndexOf('.');
                if ((mul_dot >-1) && (mul_dot < (file.getOriginalFilename().length() - 1))) {
                    file_type= file.getOriginalFilename().substring(mul_dot + 1);
                }


                if (!file.isEmpty()) {
                    String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

                    file.transferTo(new File(projectPath + "/" + nos + "." + file_type));
                }
                filename = nos + "." + file_type;

            }else{
                filename = "";
            }

            String sql = "INSERT INTO work.users(\n" +
                    "            account, password, sex, phone, address, deptid, remark, name, \n" +
                    "            nos,img)\n" +
                    "    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);
            pst.setString(1, account);
            pst.setString(2, pwd);
            pst.setString(3, sex);
            pst.setString(4, phone);
            pst.setString(5, address);
            pst.setInt(6, deptid);
            pst.setString(7, remark);
            pst.setString(8, name);
            pst.setString(9, nos);
            pst.setString(10, filename);
            pst.executeUpdate();


            dataShop.setSuccess(true);

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