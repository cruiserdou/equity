package com.xwq.common.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = {"/flatui"})
public class FlatUi {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome() {
        return "test/flatui";
    }
}