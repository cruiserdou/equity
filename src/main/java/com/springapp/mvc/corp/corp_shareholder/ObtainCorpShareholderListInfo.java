package com.springapp.mvc.corp.corp_shareholder;

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

import java.sql.*;
import java.util.*;

@Controller
@RequestMapping("/obtain_corp_shareholder_list_info")
public class ObtainCorpShareholderListInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            @RequestParam(value = "gd_corp_id", required = false) Integer gd_corp_id
    ) throws Exception{
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        DataShop dataShop = new DataShop();
        List list = new ArrayList();
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


            Map rowData = new HashMap<String, Objects>();

            String sql_list =   "select * from work.tb_corp_shareholder WHERE gd_corp_id="+gd_corp_id;

            ResultSet rslist = stmt.executeQuery(sql_list);
            ResultSetMetaData md_list = rslist.getMetaData();
            int columnCount_list = md_list.getColumnCount();

            while (rslist.next()) {
                Map rowDataList = new HashMap<String, String>();
                for (int j = 1; j <= columnCount_list; j++) {
                    rowDataList.put(md_list.getColumnName(j), rslist.getString(j));
                }
                listX.add(rowDataList);
            }
            rowData.put("list", listX);

            try {
                if (rslist != null) rslist.close();
            }catch (SQLException e) {
                System.out.print(e.getMessage());
            }

            String sql = "select distinct id,buslicno,name  from work.tb_corp WHERE id="+gd_corp_id;

            rs = stmt.executeQuery(sql);
            ResultSetMetaData md = rs.getMetaData();
            int columnCount = md.getColumnCount();
            while (rs.next()){
                for (int i = 1; i <= columnCount+1; i++){
                    if(i!=columnCount+1) {
                        rowData.put(md.getColumnName(i), rs.getObject(i));
                    }
                }
            }
            list.add(rowData);

        }
        catch (SQLException e){
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