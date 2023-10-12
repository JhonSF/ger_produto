package br.com.stdev.ger_produto.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/* @author - Jonathas */

@Data 
@Entity 
@Table(name="produtos") 
public class Produto_Entity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    @Column(name = "categoria_produto_id")
    private String categoria;
    private Integer peso;
    @Column(name = "fabricante_id")
    private Integer fabricante;
    
}
