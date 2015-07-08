//package com.springapp.mvc.corp_img.controller;
//
//import com.springapp.mvc.corp_img.pojo.CorpImg;
//import com.springapp.mvc.corp_img.service.CorpImgService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import javax.servlet.http.HttpSession;
//import java.util.List;
//
//
//@Controller
//@RequestMapping("/img_upload")
//
//public class CorpImgController {
//    @Autowired
//    private CorpImgService corpImgService;
//    @RequestMapping(method = RequestMethod.GET)
//    public String workLogAdd(
//            Model model,
//            HttpSession session,
//            @RequestParam(value = "corp_id", required = false) Integer corp_id
//    ) {
//        List<CorpImg> corpImgList = corpImgService.listCorpImg(corp_id);
//
//        model.addAttribute("corpImgdata", corpImgList);
//
//        return "ImgUpload";
//    }
//}
//
