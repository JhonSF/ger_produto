package br.com.stdev.ger_produto.controller;

import br.com.stdev.ger_produto.data.Lista_Cargo_Entity;
import br.com.stdev.ger_produto.data.Lista_Permissoes_Entity;
import br.com.stdev.ger_produto.data.Lista_Status_Usuario_Entity;
import br.com.stdev.ger_produto.data.Reposicao_Produto_Entity;
import br.com.stdev.ger_produto.data.Usuario_Entity;
import br.com.stdev.ger_produto.service.Lista_Cargo_Service;
import br.com.stdev.ger_produto.service.Lista_Permissoes_Service;
import br.com.stdev.ger_produto.service.Lista_Status_Usuario_Service;
import br.com.stdev.ger_produto.service.Usuario_Service;
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

/* @author - Jonathas */

@CrossOrigin
@RestController 
@RequestMapping("/usuarios") 
public class UsuarioController {
    
    @Autowired
    Usuario_Service u_Serv;
    
    @Autowired
    Lista_Cargo_Service c_Serv;
    
    @Autowired
    Lista_Permissoes_Service p_Serv;
    
    @Autowired
    Lista_Status_Usuario_Service su_Serv;
    
    //cadastro usuario
    @PostMapping("/novo-usuario")
    public ResponseEntity<Usuario_Entity> adiciona_Usuario(@RequestBody Usuario_Entity u){
    
        var novo_Usuario = u_Serv.cad_Usuario(u);
        
        return new ResponseEntity(novo_Usuario, HttpStatus.OK);
    }
    
    @GetMapping("/listar-usuarios")
    public ResponseEntity<List> lista_Usuarios(){
    
        List<Usuario_Entity> lista_Usuarios = u_Serv.lista_Usuario();
        
        return new ResponseEntity<>(lista_Usuarios, HttpStatus.OK);
    }
    
    @GetMapping("/listar-cargos")
    public ResponseEntity<List> lista_Cargos(){
    
        List<Lista_Cargo_Entity> lista_Cargos = c_Serv.lista_cargos();
        
        return new ResponseEntity<>(lista_Cargos, HttpStatus.OK);
    }
    
    @GetMapping("/listar-permissoes")
    public ResponseEntity<List> lista_Permissoes(){
    
        List<Lista_Permissoes_Entity> lista_Permissoes = p_Serv.lista_Permissoes();
        
        return new ResponseEntity<>(lista_Permissoes, HttpStatus.OK);
    }
    
    @GetMapping("/listar-status-usuario")
    public ResponseEntity<List> lista_Status_Usuarios(){
    
        List<Lista_Status_Usuario_Entity> lista_Status_Usuarios = su_Serv.lista_Status_Usuarios();
        
        return new ResponseEntity<>(lista_Status_Usuarios, HttpStatus.OK);
    }
}
