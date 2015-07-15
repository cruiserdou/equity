package com.springapp.mvc.corp_img.pojo;

import java.io.Serializable;


public class CorpImg implements Serializable{

    private  Integer id;
    private  Integer img_corp_id;
    private  String img_name;
    private  String img_type;

//    @Override
//    public String toString() {
//        return "CorpImgInfo{" +
//                " id=" + id +
//                ", img_corp_id=" + img_corp_id  +
//                ", img_name='" + img_name + '\'' +
//                ", img_type='" + img_type +'\'' + '}';
//    }

    public String getImg_type() {
        return img_type;
    }

    public void setImg_type(String img_type) {
        this.img_type = img_type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getImg_corp_id() {
        return img_corp_id;
    }

    public void setImg_corp_id(Integer img_corp_id) {
        this.img_corp_id = img_corp_id;
    }

    public String getImg_name() {
        return img_name;
    }

    public void setImg_name(String img_name) {
        this.img_name = img_name;
    }


}
