package com.zy.helloworld.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    //接口：http://localhost:8080/hello
    //这就是一个接口，接口名为localhost:8080/hello
    @RequestMapping("/hello")
    public String hello(){
        //调用业务，接受前端的参数
        return "hello,World";
    }
}
