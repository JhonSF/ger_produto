package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Lista_Permissoes_Entity;
import br.com.stdev.ger_produto.data.Lista_Permissoes_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* @author - Jonathas */

@Service 
public class Lista_Permissoes_Service {
 
    @Autowired
    Lista_Permissoes_Repository lpr_Rep;
    
    public List<Lista_Permissoes_Entity> lista_Permissoes(){
        
        return lpr_Rep.findAll();
    }
}
