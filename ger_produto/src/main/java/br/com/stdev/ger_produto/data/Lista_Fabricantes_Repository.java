package br.com.stdev.ger_produto.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* @author - Jonathas */

@Repository
public interface Lista_Fabricantes_Repository extends JpaRepository<Lista_Fabricantes_Entity, Integer>{
    
}