package br.com.stdev.ger_produto.controller;

/* @author - Jonathas */
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    
    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @GetMapping("/inicio")
    public String index(){
        return "index";
    }
    
    @GetMapping("/produtos")
    public String produtos(){
        return "produtos";
    }
    
    @GetMapping("/usuarios")
    public String usuarios(){
        return "usuarios";
    }
}
