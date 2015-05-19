package com.smart.dao;

import com.smart.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class UserDao {

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public int getMatchCount(String account, String password) {
        String sqlStr = " SELECT count(*) FROM work.users "
                + " WHERE account =? and password=? ";
        return jdbcTemplate.queryForInt(sqlStr, new Object[]{account, password});
    }

    public User findUserByaccount(final String account) {
        String sqlStr = " SELECT id,account "
                + " FROM work.users WHERE account =? ";
        final User user = new User();
        jdbcTemplate.query(sqlStr, new Object[]{account},
                new RowCallbackHandler() {
                    public void processRow(ResultSet rs) throws SQLException {
                        user.setId(rs.getInt("id"));
                        user.setaccount(account);
                    }
                });
        return user;
    }

    public void updateLoginInfo(User user) {
        String sqlStr = " UPDATE work.users SET lastvisit=?,lastip=?"
                + " WHERE id =?";
        jdbcTemplate.update(sqlStr, new Object[]{user.getLastvisit(),
                user.getLastip(), user.getId()});
    }
}
