/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.stdev.ger_produto.controller;

import br.com.stdev.ger_produto.data.Lista_Categoria_Entity;
import br.com.stdev.ger_produto.data.Lista_Fabricantes_Entity;
import br.com.stdev.ger_produto.data.Lista_Status_Entity;
import br.com.stdev.ger_produto.data.Produto_Entity;
import br.com.stdev.ger_produto.data.Reposicao_Produto_Entity;
import br.com.stdev.ger_produto.data.Vencimentos_Entity;
import br.com.stdev.ger_produto.service.Lista_Categoria_Service;
import br.com.stdev.ger_produto.service.Lista_Fabricantes_Service;
import br.com.stdev.ger_produto.service.Lista_Status_Service;
import br.com.stdev.ger_produto.service.Produto_Service;
import br.com.stdev.ger_produto.service.Reposicao_Produto_Service;
import br.com.stdev.ger_produto.service.Vencimentos_Service;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Jonathas
 */

@CrossOrigin
@RestController 
@RequestMapping("/produto") 
public class ProdutoController {
   
    @Autowired
    Produto_Service p_Serv;
    
    @Autowired
    Lista_Categoria_Service lcs_Serv;
    
    @Autowired
    Lista_Fabricantes_Service fab_Serv;
    
    @Autowired
    Reposicao_Produto_Service rp_Serv;
    
    @Autowired
    Lista_Status_Service lss_Serv;
    
    @Autowired
    Vencimentos_Service vct_Serv;
    
    //cadastro produto
    @PostMapping("/adicionar-produto")
    public ResponseEntity<Produto_Entity> adiciona_Produto(@RequestBody Produto_Entity p){
    
        var novo_Produto = p_Serv.cad_Produto(p);
        
        return new ResponseEntity(novo_Produto, HttpStatus.OK);
    }
    //cadastro produto
    @PostMapping("/adicionar-reposicao")
    public ResponseEntity<Reposicao_Produto_Entity> adiciona_Reposicao_Produto_Entity(@RequestBody Reposicao_Produto_Entity rp){
    
        var novo_Reposicao = rp_Serv.cad_Produto_Reposicao(rp);
        
        return new ResponseEntity(novo_Reposicao, HttpStatus.OK);
    }
    
    @GetMapping("/listar-reposicao-produtos")
    public ResponseEntity<List> lista_Reposicao_Produtos(){
    
        List<Reposicao_Produto_Entity> lista_rp = rp_Serv.lista_Produto_Reposicao();
        
        return new ResponseEntity<>(lista_rp, HttpStatus.OK);
    }
    @GetMapping("/listar-vencimentos")
    public ResponseEntity<List> lista_Vencimentos(){
    
        List<Vencimentos_Entity> lista_vct = vct_Serv.lista_Produto_Reposicao();
        
        for(int i = 0; i < lista_vct.size(); i++){
          int data_Verificada = (int) ChronoUnit.DAYS.between(LocalDate.now(),LocalDate.from(lista_vct.get(i).getVencimento()));
            lista_vct.get(i).setContagem_vencimento(data_Verificada);
        }
        
        return new ResponseEntity<>(lista_vct, HttpStatus.OK);
    }
    
    @GetMapping("/listar-categorias")
    public ResponseEntity<List> lista_Tadas_Categorias(){
    
        List<Lista_Categoria_Entity> lista_Cat = lcs_Serv.lista_Produto();
        
        return new ResponseEntity<>(lista_Cat, HttpStatus.OK);
    }
    
    @GetMapping("/listar-fabricantes")
    public ResponseEntity<List> lista_Tadas_Fabricantes(){
    
        List<Lista_Fabricantes_Entity> lista_Fab = fab_Serv.lista_Fabricantes();
        
        return new ResponseEntity<>(lista_Fab, HttpStatus.OK);
    }
    
    @GetMapping("/listar-status-produto")
    public ResponseEntity<List> lista_Status_Produtos(){
    
        List<Lista_Status_Entity> lista_Sts = lss_Serv.lista_Status();
        
        return new ResponseEntity<>(lista_Sts, HttpStatus.OK);
    }
    
    @GetMapping("/listar-produtos")
    public ResponseEntity<List> lista_Tados_Produtos(){
    
        List<Produto_Entity> lista_pdts = p_Serv.lista_Produtos();
        
        return new ResponseEntity<>(lista_pdts, HttpStatus.OK);
    }
}
