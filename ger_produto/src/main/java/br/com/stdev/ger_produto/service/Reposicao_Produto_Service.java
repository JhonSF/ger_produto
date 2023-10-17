package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Reposicao_Produto_Entity;
import br.com.stdev.ger_produto.data.Reposicao_Produto_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*@author - Jonathas */

@Service 
public class Reposicao_Produto_Service {
    
    @Autowired
    Reposicao_Produto_Repository rep_Pdt_Rep;
    
    public Reposicao_Produto_Entity cad_Produto_Reposicao(Reposicao_Produto_Entity rp){
    
        rp.setId(null);
        rep_Pdt_Rep.save(rp);
        return rp;
    }
    
    public Reposicao_Produto_Entity busca_Produto_Reposicao_PorId(Integer rp_Id){
    
        return rep_Pdt_Rep.findById(rp_Id).orElse(null);
    }
    
    public Reposicao_Produto_Entity atualiza_Produto_Reposicao(Integer rp_Id, Reposicao_Produto_Entity rp_Request){
        
        Reposicao_Produto_Entity rp = busca_Produto_Reposicao_PorId(rp_Id);
        
        rp.setStatus(rp_Request.getStatus());
       
        return rp;
    }
    
    public List<Reposicao_Produto_Entity> lista_Produto_Reposicao(){
        
        return rep_Pdt_Rep.findAll();
    }
    
    public boolean deleta_Produto(Integer rp_Id){
        
        Reposicao_Produto_Entity rp = busca_Produto_Reposicao_PorId(rp_Id);
        
        if(rp == null){
            return false;
        }else{
            rep_Pdt_Rep.deleteById(rp_Id);
            return true;
        }     
    }
}
