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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.net.InetAddress;
import java.sql.*;

@Controller
@RequestMapping("/update_enterprise_info")
public class UpdateEnterpriseInfo {

    @RequestMapping(method = RequestMethod.POST)
    public
    @ResponseBody
    DataShop getShopInJSON(
            HttpServletRequest request,
            HttpSession session,
            @RequestParam("id") Integer id,
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
            @RequestParam("liabler") String liabler,
            @RequestParam("channels") String channels,
            @RequestParam("listdt") String listdt,
            @RequestParam("list_contrib") String list_contrib,
            @RequestParam("csrc_type") String csrc_type,
            @RequestParam("csrc_type2") String csrc_type2,
            @RequestParam("csrc_type3") String csrc_type3,
            @RequestParam("csrc_type4") String csrc_type4,
            @RequestParam("bz") String bz,
            @RequestParam("regist_organ") String regist_organ

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

        try {
            conn = DriverManager.getConnection(url, user, password);
            String sql = "UPDATE work.tb_enterprise\n" +
                    "   SET   buslicno=?, name=?, unit=?, legrep=?, region=?, nos=?, \n" +
                    "       postal=?, nature=?, regcap=?, bustermfdt=?, bustremtdt=?, regdt=?, \n" +
                    "       listcode=?, regaddr=?, offaddr=?, listprice=?, staffnum=?, scope=?, \n" +
                    "       mbus=?, eprofile=?, phoinf=?, post=?, doctype=?, contact=?, docnum=?, \n" +
                    "       phone=?, fax=?, email=?, qq=?, indclass1=?, indclass2=?, indclass3=?, \n" +
                    "       indclass4=?, esource=?, referee=?, esourcedesc=?, recomdt=?, \n" +
                    "       emaint=?, trusteeship=?, listst=?, eclass=?, maintain=?, reserve=?, \n" +
                    "       contacter=?, dept=?, psotion=?, edoctype=?, edocnum=?, etel=?, \n" +
                    "       ephone=?, efax=?, eemail=?, eqq=?, remark=? ,province=?,city=?,county=?, " +
                    "       webchat=?, bz=?, refer=?, liabler=?, channels=?, \n" +
                    "         list_contrib=? ,changer_id=?, changer_dt=?, \n" +
                    "         changer_ip=? ,regist_organ=?, csrc_type=?, csrc_type2=?, csrc_type3=?, csrc_type4=? " +
                    " where id = ?";
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
            pst.setString(55, province);
            pst.setString(56, city);
            pst.setString(57, county);
            pst.setString(58, webchat);
            pst.setString(59, refer);
            pst.setString(60, liabler);
            pst.setString(61, channels);
//            java.sql.Date d_listdt = null;
//            if (listdt != null && listdt.length() > 2)
//                d_listdt = java.sql.Date.valueOf(listdt);
//            pst.setDate(62, d_listdt);
            pst.setString(62, list_contrib);
            pst.setString(63, bz);

            pst.setInt(64, Integer.parseInt(session.getAttribute("id").toString()));
            java.util.Date date = new java.util.Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            pst.setTimestamp(65, timestamp);

            String ip = request.getHeader("x-forwarded-for");
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("Proxy-Client-IP");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("WL-Proxy-Client-IP");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("HTTP_CLIENT_IP");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getHeader("HTTP_X_FORWARDED_FOR");
            }
            if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
                ip = request.getRemoteAddr();
            }
            pst.setString(66, ip);
            pst.setString(67, regist_organ);
            pst.setString(68, csrc_type);
            pst.setString(69, csrc_type2);
            pst.setString(70, csrc_type3);
            pst.setString(71, csrc_type4);
            pst.setInt(72, id);

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