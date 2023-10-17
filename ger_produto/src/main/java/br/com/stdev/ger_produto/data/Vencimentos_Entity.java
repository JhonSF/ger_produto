package br.com.stdev.ger_produto.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import lombok.Data;

/* @author - Jonathas */
@Data
@Entity
@Table(name = "reposicao_produtos")
public class Vencimentos_Entity {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String categoria;
    private Integer peso;
    private String fabricante;
    private LocalDate vencimento;
    private String status;
    private Integer contagem_vencimento = 0;
}
