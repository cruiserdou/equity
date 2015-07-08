package com.springapp.mvc.corp_img.dao;

import com.springapp.mvc.corp_img.pojo.CorpImg;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;


import java.util.List;

//@Repository
//public interface CorpImgDao {
//
//    @Select(" SELECT id, img_corp_id, img_name, img_type\n" +
//            "  FROM work.tb_corp_img where img_corp_id= #{corp_id} ")
//    List<CorpImg> listCorpImg(@Param(value = "corp_id") Integer corp_id);
//
//
//}

@Repository
public interface CorpImgDao {
    String sql = "SELECT id, img_corp_id, img_name, img_type  FROM work.tb_corp_img where img_corp_id= #{corp_id}";
    @Select(sql)
    List<CorpImg> listCorpImg(@Param(value = "corp_id") Integer corp_id);
}