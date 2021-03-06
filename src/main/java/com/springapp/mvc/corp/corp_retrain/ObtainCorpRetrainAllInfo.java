package com.springapp.mvc.corp.corp_retrain;

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
@RequestMapping("/obtain_corp_retrain_all_info")
public class ObtainCorpRetrainAllInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam(value = "start", required = false) String start,
            @RequestParam(value = "limit", required = false) String limit,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "nos", required = false) String nos,
            @RequestParam(value = "buslicno", required = false) String buslicno,
            @RequestParam(value = "listcode", required = false) String listcode
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
        String user_id = session.getAttribute("id").toString();
        try{
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();

            String sql_d = "";
            String sql_s = "";
            String sql_c = "";
            Boolean b_check=false;
            if(user_id.equals("10001") ) {
                sql_d = "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                    "     corp_government.*,corp_service.*,corp_investors.*," +
                    "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                    "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                    "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                    "     inner join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "     inner join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                    "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                    "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                    "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                    "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                    "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                    "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                    "     where corp.demand_px=TRUE ";
                sql_c = "select count(*) from work.tb_corp  corp where corp.demand_px=TRUE";
            }else{
                sql_d = "select corp.*,corp_contact.*,corp_finance.*,corp_maintain.*," +
                        "     corp_government.*,corp_service.*,corp_investors.*," +
                        "     corp_refinancing.*,corp_rehr.*,corp_retrain.*  from work.tb_corp corp " +
                        "     inner join work.tb_corp_contact corp_contact on corp.id=corp_contact.cont_corp_id " +
                        "     inner join work.tb_corp_finance corp_finance on corp.id=corp_finance.fin_corp_id " +
                        "     inner join work.tb_corp_maintain corp_maintain on corp.id=corp_maintain.mai_corp_id " +
//                    "     inner join work.tb_corp_shareholder corp_shareholder on corp.id=corp_shareholder.gd_corp_id " +
                        "     left join work.tb_corp_government corp_government on corp.id=corp_government.gov_corp_id " +
                        "     left join work.tb_corp_service corp_service on corp.id=corp_service.srv_corp_id " +
                        "     left join work.tb_corp_investors corp_investors on corp.id=corp_investors.inv_corp_id " +
                        "     left join work.tb_corp_refinancing corp_refinancing on corp.id=corp_refinancing.refi_corp_id " +
                        "     left join work.tb_corp_rehr corp_rehr on corp.id=corp_rehr.rehr_corp_id " +
                        "     left join work.tb_corp_retrain corp_retrain on corp.id=corp_retrain.retra_corp_id" +
                        "     where corp.demand_px=TRUE  and  inputid ="+Integer.parseInt(session.getAttribute("id").toString());
                sql_c = "select count(*) from work.tb_corp  corp where corp.demand_px=TRUE  and  inputid ="+Integer.parseInt(session.getAttribute("id").toString());
            }

            if (name != null && name.length() != 0){
                sql_s += " and corp.name like '%" + name + "%'";
                b_check=true;
            }

            if (nos != null && nos.length() != 0){
                sql_s += " and corp.nos like '%" + nos + "%'";
                b_check=true;
            }

            if (buslicno != null && buslicno.length() != 0){
                sql_s += " and corp.buslicno like '%" + buslicno + "%'";
                b_check=true;
            }

            if (listcode != null && listcode.length() != 0){
                sql_s += " and corp.listcode = '" + listcode + "'";
                b_check=true;
            }

            sql_c += sql_s;

            sql_s += " order by  corp.id desc ";

            sql_d += sql_s;
            if( !b_check==true)
                sql_d += " limit " + limit + " offset " + start;

            rs = stmt.executeQuery(sql_d);
            list = new ConvertToList().convertList(rs);

            rs = stmt.executeQuery(sql_c);
            while (rs.next())
                dataShop.setTotal(rs.getInt(1));

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