package com.springapp.mvc;

import com.xwq.common.util.DBInfo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.*;

@Controller
@RequestMapping("/legrep_details")
public class print_details {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome(ModelMap model,
                               @RequestParam(value = "id", required = true) Integer id
    ) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;



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




            String sql = "select  buslicno,name, psotion, edoctype, edocnum, etel, ephone, efax, eemail,   eqq " +
                    "   from work.tb_enterprise " +
                    "   WHERE id="+id;

            rs = stmt.executeQuery(sql);

            while(rs.next()) {
                model.addAttribute("buslicno", rs.getString( "buslicno" ));
                model.addAttribute("name", rs.getString( "name" ));
                model.addAttribute("psotion", rs.getString( "psotion" ));
                model.addAttribute("edoctype", rs.getString( "edoctype" ));
                model.addAttribute("edocnum", rs.getString( "edocnum" ));
                model.addAttribute("etel", rs.getString( "etel" ));
                model.addAttribute("ephone", rs.getString( "ephone" ));
                model.addAttribute("efax", rs.getString( "efax" ));
                model.addAttribute("eemail", rs.getString( "eemail" ));
                model.addAttribute("eqq", rs.getString( "eqq" ));
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

		return "legrep_details";
	}
}