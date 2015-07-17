package com.springapp.mvc.mobile.webChat.pojo;

/**
 * @author 郑治明(zm.zheng)
 * @version 2.1 , Created on  2014/5/4 16:55
 */
public enum AutoReplyContentType {
    KEYWORD("keyword"),
    SUBSCRIBE("subscribe"),
    UNSUBSCRIBE("unSubscribe");

    private final String value;

    AutoReplyContentType(String value) {
        this.value = value;
    }

    public static AutoReplyContentType fromValue(String v) {
        for (AutoReplyContentType c : AutoReplyContentType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }


}
