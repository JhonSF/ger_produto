package br.com.stdev.ger_produto.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* @author - Jonathas */

@Repository
public interface Produto_Repository extends JpaRepository<Produto_Entity, Integer>{
    
}
