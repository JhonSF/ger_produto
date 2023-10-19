package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Lista_Cargo_Entity;
import br.com.stdev.ger_produto.data.Lista_Cargo_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* @author - Jonathas */

@Service
public class Lista_Cargo_Service {
    
    @Autowired
    Lista_Cargo_Repository lcr_Rep;

    public List<Lista_Cargo_Entity> lista_cargos() {

        return lcr_Rep.findAll();
    }
}
