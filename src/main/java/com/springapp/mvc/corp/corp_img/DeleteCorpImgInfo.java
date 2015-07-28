package com.springapp.mvc.corp.corp_img;

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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.sql.*;

@Controller
@RequestMapping("/delete_corp_img_info")
public class DeleteCorpImgInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            HttpServletRequest request,
            @RequestParam("id") Integer id
            ) throws Exception{
        DataShop dataShop = new DataShop();
        Connection conn = null;
        PreparedStatement pst = null;
        Statement stmt = null;
        ResultSet rs = null;
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

            stmt = conn.createStatement();
            String sql_user_annex = "select img_name from work.tb_corp_img where id ="+id;
            rs = stmt.executeQuery(sql_user_annex);
            String file="";
            while (rs.next()) {
                file = rs.getString("img_name");

            }
            String projectPath = request.getSession().getServletContext().getRealPath("/static/upload/annex/");
            projectPath=projectPath+"/"+file;
            File annexfile = new File(projectPath);
            if(annexfile.exists()){
                annexfile.delete();
            }


            String sql = "delete from work.tb_corp_img where id = ?";
            pst = conn.prepareStatement(sql);
            pst.setInt(1, id);

            pst.executeUpdate();



            dataShop.setSuccess(true);

        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }
//        dataShop.setName(user_id);

        return dataShop;
    }
}