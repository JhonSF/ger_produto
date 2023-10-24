package br.com.stdev.ger_produto;

import br.com.stdev.ger_produto.controller.ProdutoController;
import br.com.stdev.ger_produto.data.Produto_Entity;
import br.com.stdev.ger_produto.data.Reposicao_Produto_Entity;
import br.com.stdev.ger_produto.service.Produto_Service;
import br.com.stdev.ger_produto.service.Reposicao_Produto_Service;
import java.time.LocalDate;
import org.junit.jupiter.api.Assertions;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/* @author - Jonathas */

@ExtendWith(MockitoExtension.class)
public class ProdutoControllerTeste {
    
    @InjectMocks
    private ProdutoController produtoController;
    
    private Produto_Entity pe;
    private Reposicao_Produto_Entity rpe;
    
    @Mock
    private Produto_Service p_Serv;
    @Mock
    private Reposicao_Produto_Service rpe_Serv;
    
    @BeforeEach
    void setup_Adicionar_Produto(){
        pe = new Produto_Entity();
        pe.setId(null);
        pe.setNome("Pippos");
        pe.setCategoria("Salgadinho");
        pe.setPeso(75);
        pe.setFabricante("São Braz");
    }
    
    @Test
    void deve_adicionar_Produto(){
        when(p_Serv.cad_Produto(pe)).thenReturn(pe);
        var response = assertDoesNotThrow(() -> produtoController.adiciona_Produto(pe));
        Assertions.assertEquals(new ResponseEntity(pe, HttpStatus.OK), response);
    }
    
    @BeforeEach
    void setup_Adicionar_Reposicao(){
        rpe = new Reposicao_Produto_Entity();
        rpe.setId(null);
        rpe.setNome("Pippos");
        rpe.setCategoria("salgadingo");
        rpe.setPeso(75);
        rpe.setFabricante("São Braz");
        rpe.setVencimento(LocalDate.parse("2023-11-01"));
        rpe.setStatus("A venda");
    }
    
    @Test
    void deve_adicionar_Reposicao_Produto(){
        when(rpe_Serv.cad_Produto_Reposicao(rpe)).thenReturn(rpe);
        var response = assertDoesNotThrow(() -> produtoController.adiciona_Reposicao_Produto_Entity(rpe));
        Assertions.assertEquals(new ResponseEntity(rpe, HttpStatus.OK), response);
    }
}
