package br.com.stdev.ger_produto.service;

import br.com.stdev.ger_produto.data.Usuario_Entity;
import br.com.stdev.ger_produto.data.Usuario_Repository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/* @author - Jonathas */

@Service
public class Usuario_Service {

    @Autowired
    Usuario_Repository u_Rep;

    public Usuario_Entity cad_Usuario(Usuario_Entity u) {
        u.setId(null);
        u_Rep.save(u);
        return u;
    }

    public Usuario_Entity busca_Usuario_PorId(Integer u_Id) {

        return u_Rep.findById(u_Id).orElse(null);
    }

    public Usuario_Entity atualiza_Usuario(Integer u_Id, Usuario_Entity u_Request) {

        Usuario_Entity u = busca_Usuario_PorId(u_Id);

        u.setNome(u_Request.getNome());
        u.setSenha(u_Request.getSenha());
        u.setCargo(u_Request.getCargo());
        u.setPermissoes(u_Request.getPermissoes());
        u.setStatus(u_Request.getStatus());
        u_Rep.save(u);
        return u;
    }

    public List<Usuario_Entity> lista_Usuario() {

        return u_Rep.findAll();
    }

    public boolean deleta_Usuario(Integer u_Id) {

        Usuario_Entity u = busca_Usuario_PorId(u_Id);

        if (u == null) {
            return false;
        } else {
            u_Rep.deleteById(u_Id);
            return true;
        }
    }
}
