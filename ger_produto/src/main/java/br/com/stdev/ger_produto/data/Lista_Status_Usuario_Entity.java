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
@Table(name="status_usuario") 
public class Lista_Status_Usuario_Entity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String status;
}