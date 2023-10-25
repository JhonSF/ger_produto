package br.com.stdev.ger_produto;

import br.com.stdev.ger_produto.controller.UsuarioController;
import br.com.stdev.ger_produto.data.Usuario_Entity;
import br.com.stdev.ger_produto.service.Usuario_Service;
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
public class UsuarioControllerTeste {
    
    @InjectMocks
    private UsuarioController usuarioController;
    
    private Usuario_Entity u;
    
    @Mock
    private Usuario_Service u_Serv;
    
    @BeforeEach
    void setup_Adicionar_Usuario(){
        u = new Usuario_Entity();
        u.setId(null);
        u.setNome("Admin");
        u.setSenha("12345");
        u.setCargo("Admin");
        u.setPermissoes("Admin");
        u.setStatus("Ativo");
    }
    
    @Test
    void deve_adicionar_Produto(){
        when(u_Serv.cad_Usuario(u)).thenReturn(u);
        var response = assertDoesNotThrow(() -> usuarioController.adiciona_Usuario(u));
        Assertions.assertEquals(new ResponseEntity(u, HttpStatus.OK), response);
    }
}
