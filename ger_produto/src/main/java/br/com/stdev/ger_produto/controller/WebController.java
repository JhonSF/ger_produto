package br.com.stdev.ger_produto.controller;

/* @author - Jonathas */
import br.com.stdev.ger_produto.data.Vencimentos_Entity;
import br.com.stdev.ger_produto.service.Produto_Service;
import br.com.stdev.ger_produto.service.Vencimentos_Service;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    
    @Autowired
    Produto_Service p_Serv;
    
    @Autowired
    Vencimentos_Service vct_Serv;
    
    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @GetMapping("/inicio")
    public String index(Model m){
        
        List<Vencimentos_Entity> lista_vct = vct_Serv.lista_Produto_Reposicao();
        
        for(int i = 0; i < lista_vct.size(); i++){
          int data_Verificada = (int) ChronoUnit.DAYS.between(LocalDate.now(),LocalDate.from(lista_vct.get(i).getVencimento()));
            lista_vct.get(i).setContagem_vencimento(data_Verificada);
            System.out.println(data_Verificada);
        }
        m.addAttribute("vencimentos", lista_vct);
        return "index";
    }
    
    @GetMapping("/usuarios")
    public String usuarios(){
        return "usuarios";
    }
    
    @GetMapping("/produtos")
    public String lista_Produto(Model m){
        m.addAttribute("produtos", p_Serv.lista_Produtos());
        return "produtos";
    }
}   
