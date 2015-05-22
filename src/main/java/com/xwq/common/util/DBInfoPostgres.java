package com.xwq.common.util;

/**
 * Created by Administrator on 13-12-18.
 */

public class DBInfoPostgres {
    String url;
    String user;
    String password;

    public DBInfoPostgres() {
        url = "jdbc:postgresql://localhost:5432/fgw_s_ms";
//        url = "jdbc:postgresql://localhost:5432/postgres";
        user = "postgres";
        password = "postgres";
    }

    public String getUrl() {
        return url;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }
}
