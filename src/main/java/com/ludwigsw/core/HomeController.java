package com.ludwigsw.core;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Ludwig on 10/18/2016.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "/public/index";
    }
}
