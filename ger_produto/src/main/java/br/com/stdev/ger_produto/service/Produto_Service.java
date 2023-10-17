package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Produto_Entity;
import br.com.stdev.ger_produto.data.Produto_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* @author - Jonathas */

@Service 
public class Produto_Service {
    
    @Autowired
    Produto_Repository pdt_Rep;
    
    public Produto_Entity cad_Produto(Produto_Entity p){
    
        p.setId(null);
        pdt_Rep.save(p);
        return p;
    }
    
    public Produto_Entity busca_Produto_PorId(Integer p_Id){
    
        return pdt_Rep.findById(p_Id).orElse(null);
    }
    
    public Produto_Entity atualiza_Produto(Integer p_Id, Produto_Entity p_Request){
        
        Produto_Entity p = busca_Produto_PorId(p_Id);
        
        p.setNome(p_Request.getNome());
        p.setCategoria(p_Request.getCategoria());
        p.setPeso(p_Request.getPeso());
        p.setFabricante(p_Request.getFabricante());
        
        pdt_Rep.save(p);
        
        return p;
    }
    
    public List<Produto_Entity> lista_Produtos(){
        
        return pdt_Rep.findAll();
    }
    
    public boolean deleta_Produto(Integer p_Id){
        
        Produto_Entity p = busca_Produto_PorId(p_Id);
        
        if(p == null){
            return false;
        }else{
            pdt_Rep.deleteById(p_Id);
            return true;
        }     
    }
}
