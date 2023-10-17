package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Lista_Status_Entity;
import br.com.stdev.ger_produto.data.Lista_Status_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*@author - Jonathas */

@Service
public class Lista_Status_Service {
    
    @Autowired
    Lista_Status_Repository lsr_Rep;
    
    public List<Lista_Status_Entity> lista_Status(){
        
        return lsr_Rep.findAll();
    }
}
