package br.com.stdev.ger_produto.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/* @author - Jonathas */

@Data 
@Entity 
@Table(name="categoria_produto") 
public class Lista_Categoria_Entity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
}
