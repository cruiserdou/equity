package com.springapp.mvc.user_register;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/userregister")
public class UserRegister {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome() {
		return "userregister";
	}
}