package br.com.stdev.ger_produto.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* @author - Jonathas */

@Repository
public interface Lista_Status_Usuario_Repository extends JpaRepository <Lista_Status_Usuario_Entity, Integer>{
    
}
