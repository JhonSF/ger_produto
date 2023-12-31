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
@Table(name="usuarios") 
public class Usuario_Entity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String senha;
    @Column(name = "cargos_id")
    private String cargo;
    @Column(name = "permissoes_id")
    private String permissoes;
    @Column(name = "status_usuario_id")
    private String status;
}
