package com.xwq.common.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = {"/longshadowicons"})
public class LongShadowIcons {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome() {
        return "test/longshadowicon";
    }
}