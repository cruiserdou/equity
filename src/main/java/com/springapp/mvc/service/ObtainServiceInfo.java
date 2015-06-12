package com.springapp.mvc.service;

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

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/obtain_service_info")
public class ObtainServiceInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
           @RequestParam(value = "name", required = false) String name,
           @RequestParam(value = "type", required = false) String type


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

            String sql = "SELECT service.id serviceid, service.nos servicenos, service.name servicename, service.type servicetype, service.content servicecontent, service.levels  servicelevels, \n" +
                    "  service.descs servicedescs, service.domain servicedomain, service.penalty servicepenalty, service.remark serviceremark, service.enterprise_id serviceenterprise_id," +
                    "  service.b_examiner ,service.part_post , enterprise.*\n" +
                    "  FROM work.tb_service service left join  work.tb_enterprise enterprise  on enterprise.id =service.enterprise_id\n" +
                    "\n   WHERE 1 = 1 ";
            if (name != null && name.length() != 0)
                sql += " and service.name like '%" + name + "%'";
            if (type != null && type.length() != 0)
                sql += " and service.type like '%" + type + "%'";

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