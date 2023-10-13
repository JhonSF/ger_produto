package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Lista_Fabricantes_Entity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.stdev.ger_produto.data.Lista_Fabricantes_Repository;

/*@author - Jonathas */

@Service 
public class Lista_Fabricantes_Service {
    
    @Autowired
    Lista_Fabricantes_Repository lfr_Rep;
    
    public List<Lista_Fabricantes_Entity> lista_Fabricantes(){
        
        return lfr_Rep.findAll();
    }
}
