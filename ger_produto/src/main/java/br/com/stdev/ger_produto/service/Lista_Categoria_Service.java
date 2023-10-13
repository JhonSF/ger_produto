package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Lista_Categoria_Entity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.stdev.ger_produto.data.Lista_Categoria_Repository;

/*@author - Jonathas */

@Service 
public class Lista_Categoria_Service {
    
    @Autowired
    Lista_Categoria_Repository lcr_Rep;
    
    public List<Lista_Categoria_Entity> lista_Produto(){
        
        return lcr_Rep.findAll();
    }
}
