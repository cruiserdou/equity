package com.springapp.mvc.mobile.webChat.pojo;

/**
 * @author 郑治明(zm.zheng)
 * @version 2.1 , Created on  2014/3/31 11:01
 */
public class WebChatAutoReply {
    private Long id;

    /**
     * 类型：关键词(keyword)、事件(关注(subscribe)、取消关注(unSubscribe))
     */
    private AutoReplyContentType contentType;

    /**
     * WebChatMsgContent表的主键
     */
    private Long msgContentId;

    /**
     * 关键词,目前是一一匹配，随后可以考虑用模式匹配
     * * 代表如果默认值
     */
    private String keyWord;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AutoReplyContentType getContentType() {
        return contentType;
    }

    public void setContentType(AutoReplyContentType contentType) {
        this.contentType = contentType;
    }

    public Long getMsgContentId() {
        return msgContentId;
    }

    public void setMsgContentId(Long msgContentId) {
        this.msgContentId = msgContentId;
    }

    public String getKeyWord() {
        return keyWord;
    }

    public void setKeyWord(String keyWord) {
        this.keyWord = keyWord;
    }
}
