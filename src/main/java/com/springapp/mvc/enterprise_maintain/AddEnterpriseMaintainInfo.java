package com.springapp.mvc.enterprise_maintain;

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
import java.sql.*;
import java.text.SimpleDateFormat;

@Controller
@RequestMapping("/add_enterprise_maintain_info")
public class AddEnterpriseMaintainInfo {

    @RequestMapping( method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "enterid", required = false) Integer enterid,
            @RequestParam(value = "enterprise_id", required = false) Integer enterprise_id,
            @RequestParam(value = "buslicno", required = false) String buslicno,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "receive_per", required = false) String receive_per,
            @RequestParam(value = "maintain_date", required = false) String maintain_date,
            @RequestParam(value = "important_level", required = false) String important_level,
            @RequestParam(value = "content", required = false) String content,
            @RequestParam(value = "result", required = false) String result,
            @RequestParam(value = "next_plan", required = false) String next_plan,
            @RequestParam(value = "next_date", required = false) String next_date,
            @RequestParam(value = "next_content", required = false) String next_content,
            @RequestParam(value = "phone_file", required = false) MultipartFile file,
            @RequestParam(value = "remark", required = false) String remark,
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

        String filename = null;


        try {
            conn = DriverManager.getConnection(url, user, password);

            if (!file.isEmpty()) {


                String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");

                file.transferTo(new File(projectPath + "/" + file.getOriginalFilename()));

                filename = file.getOriginalFilename();

            }else{
                filename = "";
            }

            String sql = "INSERT INTO work.tb_enterprise_maintain(\n" +
                    "             enterprise_id, receive_per, maintain_date, important_level, \n" +
                    "            content, result, next_plan, next_date, next_content, phone_file, \n" +
                    "            remark)\n" +
                    "    VALUES ( ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, \n" +
                    "            ?)";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, enterid);
            pst.setString(2, receive_per);
            Timestamp t_maintain_date = Timestamp.valueOf(maintain_date);
            pst.setTimestamp(3, t_maintain_date);
            pst.setString(4, important_level);
            pst.setString(5, content);
            pst.setString(6, result);
            pst.setString(7, next_plan);
            Timestamp t_next_date = Timestamp.valueOf(next_date);
            pst.setTimestamp(8, t_next_date);
            pst.setString(9, next_content);
            pst.setString(10, filename);
            pst.setString(11, remark);
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