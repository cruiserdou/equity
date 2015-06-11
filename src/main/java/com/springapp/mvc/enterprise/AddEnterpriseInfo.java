package com.springapp.mvc.enterprise;

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

import javax.servlet.http.HttpSession;
import java.sql.*;

@Controller
@RequestMapping("/add_enterprise_info")
public class AddEnterpriseInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpSession session,
            @RequestParam("buslicno") String buslicno,
            @RequestParam("name") String name,
            @RequestParam("unit") String unit,
            @RequestParam("legrep") String legrep,
            @RequestParam("region") String region,
            @RequestParam("province") String province,
            @RequestParam("city") String city,
            @RequestParam("county") String county,
            @RequestParam("nos") String nos,
            @RequestParam("postal") String postal,
            @RequestParam("nature") String nature,
            @RequestParam("regcap") String regcap,
            @RequestParam("bustermfdt") String bustermfdt,
            @RequestParam("bustremtdt") String bustremtdt,
            @RequestParam("regdt") String regdt,
            @RequestParam("listcode") String listcode,
            @RequestParam("regaddr") String regaddr,
            @RequestParam("offaddr") String offaddr,
            @RequestParam("listprice") String listprice,
            @RequestParam("staffnum") String staffnum,
            @RequestParam("scope") String scope,
            @RequestParam("mbus") String mbus,
            @RequestParam("eprofile") String eprofile,
            @RequestParam("phoinf") String phoinf,
            @RequestParam("post") String post,
            @RequestParam("doctype") String doctype,
            @RequestParam("contact") String contact,
            @RequestParam("docnum") String docnum,
            @RequestParam("phone") String phone,
            @RequestParam("fax") String fax,
            @RequestParam("email") String email,
            @RequestParam("qq") String qq,
            @RequestParam("indclass1") String indclass1,
            @RequestParam("indclass2") String indclass2,
            @RequestParam("indclass3") String indclass3,
            @RequestParam("indclass4") String indclass4,
            @RequestParam("esource") String esource,
            @RequestParam("referee") String referee,
            @RequestParam("esourcedesc") String esourcedesc,
            @RequestParam("recomdt") String recomdt,
            @RequestParam("emaint") String emaint,
            @RequestParam("trusteeship") String trusteeship,
            @RequestParam("listst") String listst,
            @RequestParam("eclass") String eclass,
            @RequestParam("maintain") String maintain,
            @RequestParam("reserve") String reserve,
            @RequestParam("contacter") String contacter,
            @RequestParam("dept") String dept,
            @RequestParam("psotion") String psotion,
            @RequestParam("edoctype") String edoctype,
            @RequestParam("edocnum") String edocnum,
            @RequestParam("etel") String etel,
            @RequestParam("ephone") String ephone,
            @RequestParam("efax") String efax,
            @RequestParam("eemail") String eemail,
            @RequestParam("eqq") String eqq,
            @RequestParam("remark") String remark,

            @RequestParam("webchat") String webchat,
            @RequestParam("refer") String refer,
            @RequestParam("channels") String channels,
            @RequestParam("listdt") String listdt,
            @RequestParam("csrc_type") String csrc_type,
            @RequestParam("csrc_type2") String csrc_type2,
            @RequestParam("csrc_type3") String csrc_type3,
            @RequestParam("csrc_type4") String csrc_type4,
            @RequestParam("bz") String bz,
            @RequestParam("regist_organ") String regist_organ,


            @RequestParam("rz_charge") String rz_charge,
            @RequestParam("wh_charge") String wh_charge,
            @RequestParam("list_area") String list_area,
            @RequestParam("webchat_gr") String webchat_gr,
            @RequestParam("tel_gr") String tel_gr,
            @RequestParam("bz_gr") String bz_gr,
            @RequestParam("type_enterp") Boolean type_enterp,
            @RequestParam("type_server") Boolean type_server,
            @RequestParam("type_investors") Boolean type_investors,
            @RequestParam("type_govermt") Boolean type_govermt,
            @RequestParam("demand_rz") Boolean demand_rz,
            @RequestParam("demand_px") Boolean demand_px,
            @RequestParam("demand_rl") Boolean demand_rl





            ) throws Exception {
        DataShop dataShop = new DataShop();
        dataShop.setSuccess(true);
        Connection conn = null;
        ResultSet rs = null;
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

        try {
            conn = DriverManager.getConnection(url, user, password);


            String sql = "INSERT INTO work.tb_enterprise(\n" +
                    "              buslicno, name, unit, legrep, region, nos, postal, nature, \n" +
                    "            regcap, bustermfdt, bustremtdt, regdt, listcode, regaddr, offaddr, \n" +
                    "            listprice, staffnum, scope, mbus, eprofile, phoinf, post, doctype, \n" +
                    "            contact, docnum, phone, fax, email, qq, indclass1, indclass2, \n" +
                    "            indclass3, indclass4, esource, referee, esourcedesc, recomdt, \n" +
                    "            emaint, trusteeship, listst, eclass, maintain, reserve, contacter, \n" +
                    "            dept, psotion, edoctype, edocnum, etel, ephone, efax, eemail, \n" +
                    "            eqq, remark,inputdt,province,city,county, webchat,  refer, \n" +
                    "            channels,bz,regist_organ , csrc_type, csrc_type2, csrc_type3, csrc_type4,  rz_charge,wh_charge,list_area, " +
                    "           webchat_gr,tel_gr,bz_gr, type_server, \n" +
                    "       type_investors, type_govermt, demand_rz, demand_px, demand_rl,type_enterp)\n" +
                    "    VALUES (  ?, ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?, ?, ?, \n" +
                    "            ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?  , ? , ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?)";
            pst = conn.prepareStatement(sql);

            pst.setString(1 , buslicno);
            pst.setString(2 , name);
            pst.setString(3 , unit);
            pst.setString(4 , legrep);
            pst.setString(5 , region);
            pst.setString(6 , nos);
            pst.setString(7 , postal);
            pst.setString(8 , nature);
            pst.setString(9 , regcap);
            java.sql.Date d_bustermfdt = null;
            if (bustermfdt != null && bustermfdt.length() > 2)
                d_bustermfdt = java.sql.Date.valueOf(bustermfdt);
            pst.setDate(10, d_bustermfdt);
            java.sql.Date d_bustremtdt = null;
            if (bustremtdt != null && bustremtdt.length() > 2)
                d_bustremtdt = java.sql.Date.valueOf(bustremtdt);
            pst.setDate(11, d_bustremtdt);
            java.sql.Date d_regdat = null;
            if (regdt != null && regdt.length() > 2)
                d_regdat = java.sql.Date.valueOf(regdt);
            pst.setDate(12, d_regdat);
            pst.setString(13, listcode);
            pst.setString(14, regaddr);
            pst.setString(15, offaddr);
            pst.setString(16, listprice);
            pst.setString(17, staffnum);
            pst.setString(18, scope);
            pst.setString(19, mbus);
            pst.setString(20, eprofile);
            pst.setString(21, phoinf);
            pst.setString(22, post);
            pst.setString(23, doctype);
            pst.setString(24, contact);
            pst.setString(25, docnum);
            pst.setString(26, phone);
            pst.setString(27, fax);
            pst.setString(28, email);
            pst.setString(29, qq);
            pst.setString(30, indclass1);
            pst.setString(31, indclass2);
            pst.setString(32, indclass3);
            pst.setString(33, indclass4);
            pst.setString(34, esource);
            pst.setString(35, referee);
            pst.setString(36, esourcedesc);
            java.sql.Date d_recomdt = null;
            if (recomdt != null && recomdt.length() > 2)
                d_recomdt = java.sql.Date.valueOf(recomdt);
            pst.setDate(37, d_recomdt);
            pst.setString(38, emaint);
            pst.setString(39, trusteeship);
            pst.setString(40, listst);
            pst.setString(41, eclass);
            pst.setString(42, maintain);
            pst.setString(43, reserve);
            pst.setString(44, contacter);
            pst.setString(45, dept);
            pst.setString(46, psotion);
            pst.setString(47, edoctype);
            pst.setString(48, edocnum);
            pst.setString(49, etel);
            pst.setString(50, ephone);
            pst.setString(51, efax);
            pst.setString(52, eemail);
            pst.setString(53, eqq);
            pst.setString(54, remark);
            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            pst.setTimestamp(55, timestamp);
            pst.setString(56, province);
            pst.setString(57, city);
            pst.setString(58, county);
            pst.setString(59, webchat);
            pst.setString(60, refer);
            pst.setString(61, channels);
//            java.sql.Date d_listdt = null;
//            if (listdt != null && listdt.length() > 2)
//                d_listdt = java.sql.Date.valueOf(listdt);
//            pst.setDate(63, d_listdt);
            pst.setString(62, bz);
            pst.setString(63, regist_organ);
            pst.setString(64, csrc_type);
            pst.setString(65, csrc_type2);
            pst.setString(66, csrc_type3);
            pst.setString(67, csrc_type4);
            pst.setString(68, rz_charge);
            pst.setString(69, wh_charge);
            pst.setString(70, list_area);
            pst.setString(71, webchat_gr);
            pst.setString(72, tel_gr);
            pst.setString(73, bz_gr);
            pst.setBoolean(74, type_server);
            pst.setBoolean(75, type_investors);
            pst.setBoolean(76, type_govermt);
            pst.setBoolean(77, demand_rz);
            pst.setBoolean(78, demand_px);
            pst.setBoolean(79, demand_rl);
            pst.setBoolean(80, type_enterp);
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