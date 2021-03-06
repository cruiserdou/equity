package com.smart.web;

import com.smart.domain.User;
import com.smart.service.UserService;
import com.xwq.common.util.DBInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.*;

//@Controller
//@RequestMapping(value = "/")
//public class LoginController {

//    @Autowired
//    private UserService userService;
//
//    @RequestMapping(value = "/index")
//    public String loginPage() {
//        return "index";
//    }
//
//    @RequestMapping(value = "/loginCheck")
//    public ModelAndView loginCheck(HttpServletRequest request, LoginCommand loginCommand) {
//        boolean isValidUser =
//                userService.hasMatchUser(loginCommand.getUserName(),
//                        loginCommand.getPassword());
//        if (!isValidUser) {
//            return new ModelAndView("index");
//        } else {
//            User user = userService.findUserByUserName(loginCommand
//                    .getUserName());
////            user.setLastIp(request.getLocalAddr());
////            user.setLastVisit(new Date());
//            userService.loginSuccess(user);
//            request.getSession().setAttribute("user", user);
//            return new ModelAndView("main");
//        }
//    }
//}

@Controller
@RequestMapping("/login_check")
public class LoginController {
        @Autowired
    private UserService userService;
    @RequestMapping(method = RequestMethod.POST)
    public ModelAndView toMainpage(
            HttpServletRequest request,
            HttpSession session,
            @RequestParam(value = "user", required = false) String account,
            @RequestParam(value = "password", required = false) String login_password
    ) {
        ModelAndView modelAndView = new ModelAndView();

        String session_user = "";
        String session_pass = "";
        if (session.getAttribute("user") != null)
            session_user = session.getAttribute("user").toString();
        else
            session_user = null;
        if (session.getAttribute("password") != null)
            session_pass = session.getAttribute("password").toString();
        else
            session_user = null;





        //数据库取出用户信息比对获取浏览器发送的信息
        Connection conn = null;
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
        java.util.Date date = new java.util.Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        try {
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();

            String sql = "select password, id,name,nos from work.users where account = '" + account + "'";

            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                if (rs.getString(1).equals(login_password)) {
                    session.setAttribute("account", account);
                    session.setAttribute("password", rs.getString(1));
                    session.setAttribute("id", rs.getString(2));
                    session.setAttribute("name", rs.getString(3));
                    session.setAttribute("nos", rs.getString(4));
                    modelAndView.setViewName("main");

                    User e_user = userService.findUserByaccount(account);
                    e_user.setLastip(request.getLocalAddr());
                    e_user.setLastvisit(timestamp);
                    userService.loginSuccess(e_user);

                    return modelAndView;
                }
            }
        } catch (SQLException e) {
            System.out.print(e.getMessage());
        } finally {
            try {
                if (rs != null) rs.close();
                if (stmt != null) stmt.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                System.out.print(e.getMessage());
            }
        }

        modelAndView.setViewName("index");
        return modelAndView;
    }
}