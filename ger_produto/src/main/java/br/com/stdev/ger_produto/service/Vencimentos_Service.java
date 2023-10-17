package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Vencimentos_Entity;
import br.com.stdev.ger_produto.data.Vencimentos_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* @author - Jonathas */

@Service
public class Vencimentos_Service {
    
    @Autowired
    Vencimentos_Repository vct_Repo;
    
    public List<Vencimentos_Entity> lista_Produto_Reposicao(){
        
        return vct_Repo.findAll();
    }
}
