package com.springapp.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/img_view")
public class img_view {
	@RequestMapping(method = RequestMethod.GET)

    public String printWelcome() {

        return "img_view";
    }
}