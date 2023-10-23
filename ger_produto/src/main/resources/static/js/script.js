$(document).ready(function () {
  
  //endpoints
  const listaCategorias = "http://localhost:8080/produto/listar-categorias";
  const listaFabricantes = "http://localhost:8080/produto/listar-fabricantes";
  const adicionarProduto = "http://localhost:8080/produto/adicionar-produto";
  const adicionarReposicao = "http://localhost:8080/produto/adicionar-reposicao";
  const listaProduto = "http://localhost:8080/produto/listar-produtos";
  const listaVencimentos = "http://localhost:8080/produto/listar-vencimentos";
  const listaStatus = "http://localhost:8080/produto/listar-status-produto";
  const adicionaUsuario = "http://localhost:8080/usuarios/novo-usuario";
  const listaUsuario = "http://localhost:8080/usuarios/listar-usuarios";
  const listaCargos = "http://localhost:8080/usuarios/listar-cargos";
  const listaPermissoes = "http://localhost:8080/usuarios/listar-permissoes";
  const listaStatusUsuario = "http://localhost:8080/usuarios/listar-status-usuario";
  
 /* // verificacao de login
  $("#bt-acessar").on("click", function(event){
    const usuario = $("#usuario-login").val();
    const senha = $("#senha-login").val();

    if(usuario === "" || senha ===""){
        alert("Por favor preencha os campos de acesso");
    }else{
        $("#link-acesso").attr('href','/inicio');
    }
  })

  $("#bt-sair").on("click", function(event){
        $("#link-saida").attr('href','/login');
    })
/*============================================================== */
  preencheTabelaVencimentos();
  preencheTabelaProdutos();
  $("#bt-cadastrar-pdt").on("click", function(event){
        $("#cadastro-produtos").css('display','flex');
        
        $("#cadastro-reposicao").css('display','none');
        
        let selecao_Categoria = $("#selecao-categoria-cad-produto");
        let selecao_Fabricante = $("#selecao-fabricante-cad-produto");
        
        let qtd_elecao_Categoria = $("#selecao-categoria-cad-produto option");
        let qtd_selecao_Fabricante = $("#selecao-fabricante-cad-produto  option");
        
        if(qtd_elecao_Categoria.length == 1){
          preencheCategorias(selecao_Categoria);
        }
        if(qtd_selecao_Fabricante.length == 1){
        preencheFabricantes(selecao_Fabricante);
        }
       
    })
  $("#bt-cancelar-cad").on("click", function(event){
        $("#cadastro-produtos").css('display','none');
    })

  $("#bt-cadastrar-rpc").on("click", function(event){
        $("#cadastro-reposicao").css('display','flex');
        
        $("#cadastro-produtos").css('display','none');
        
        let selecao_Categoria = $("#selecao-categoria-cad-reposicao");
        let selecao_Fabricante = $("#selecao-fabricante-cad-reposicao");
        let selecao_Produto = $("#selecao-produto-cad-reposicao");
        let selecao_Status = $("#selecao-status-cad-reposicao");

        let qtd_selecao_Categoria = $("#selecao-categoria-cad-reposicao option");
        let qtd_selecao_Fabricante = $("#selecao-fabricante-cad-reposicao  option");
        let qtd_selecao_Produto = $("#selecao-produto-cad-reposicao  option");
        let qtd_selecao_Status = $("#selecao-status-cad-reposicao  option");
        
        if(qtd_selecao_Categoria.length == 1){
          preencheCategorias(selecao_Categoria);
        }
        if(qtd_selecao_Fabricante.length == 1){
          preencheFabricantes(selecao_Fabricante);
        }
        if(qtd_selecao_Produto.length == 1){
          preencheProdutos(selecao_Produto);
        }
        if(qtd_selecao_Status.length == 1){
          preencheStatusProduto(selecao_Status);
        }

    })

  $("#bt-cancelar-repo").on("click", function(event){
        $("#cadastro-reposicao").css('display','none');
    })

  /*============================================================== */
    $("#bt-adiciona-usuario").on("click", function(event){
       $("#add-usuario").css('display','flex');
        
        $("#atualiza-usuario").css('display','none');

        let selecao_Cargo = $("#selecao-cargo");
        let selecao_Permissoes = $("#selecao-permissao");
        let selecao_Status_Usuarios = $("#selecao-status");

        let qtd_selecao_Cargo = $("#selecao-cargo").find("option");
        let qtd_selecao_Permissoes = $("#selecao-permissao").find("option");
        let qtd_selecao_Status_Usuarios = $("#selecao-status").find("option");
         
        if(qtd_selecao_Cargo.length == 1){
         preencheCargo(selecao_Cargo);
        }
        if(qtd_selecao_Permissoes.length == 1){
          preenchePermissoes(selecao_Permissoes);
        }
        if(qtd_selecao_Status_Usuarios.length == 1){
          preencheStatusUsuario(selecao_Status_Usuarios);
        }
    })
    $("#bt-cancelar-adicao").on("click", function(event){
      $("#add-usuario").css('display','none');
    })

    $("#bt-altera-usuario").on("click", function(event){
      $("#add-usuario").css('display','none');
        
        $("#atualiza-usuario").css('display','flex');
    })
    $("#bt-cancelar-att").on("click", function(event){
      $("#atualiza-usuario").css('display','none');
    })
/*============================================================== */
    function preencheCategorias(selecao){
      fetch(listaCategorias)
      .then(res=>res.json())
      .then(categorias=>{
        console.log("Categorias carregadas "+categorias.length);
        $.each(categorias, function (i, cat) {                    
        $(selecao).append('<option value=' + cat.id+ '>' + cat.categoria + '</option>');
        });
      })
    }

    function preencheFabricantes(selecao){
      fetch(listaFabricantes)
      .then(res=>res.json())
      .then(fabricantes=>{
        console.log("Fabricantes carregadas "+fabricantes.length);
        $.each(fabricantes, function (i, fab) {                    
        $(selecao).append('<option value=' + fab.id+ '>' + fab.fabricante + '</option>');
        });
      })
    }

    function preencheProdutos(selecao){
      fetch(listaProduto)
      .then(res=>res.json())
      .then(produtos=>{
        console.log("Produtos carregados "+produtos.length);
        $.each(produtos, function (i, pdt) {                    
        $(selecao).append('<option value=' + pdt.id+ '>' + pdt.nome + '</option>');
        });
      })
    }

    function preencheStatusProduto(selecao){
      fetch(listaStatus)
      .then(res=>res.json())
      .then(status=>{
        console.log("Status carregados "+status.length);
        $.each(status, function (i, sts) {                    
        $(selecao).append('<option value=' + sts.id+ '>' + sts.status + '</option>');
        });
      })
    }

    function preencheCargo(selecao){
      fetch(listaCargos)
      .then(res=>res.json())
      .then(cargos=>{
        console.log("Cargos carregados "+cargos.length);
        $.each(cargos, function (i, c) {                    
        $(selecao).append('<option value=' + c.id+ '>' + c.cargo + '</option>');
        });
      })
    }

    function preenchePermissoes(selecao){
      fetch(listaPermissoes)
      .then(res=>res.json())
      .then(permissoes=>{
        console.log("Permissoes carregadas "+permissoes.length);
        $.each(permissoes, function (i, p) {                    
        $(selecao).append('<option value=' + p.id+ '>' + p.permissoes + '</option>');
        });
      })
    }

    function preencheStatusUsuario(selecao){
      fetch(listaStatusUsuario)
      .then(res=>res.json())
      .then(statusUsuario=>{
        console.log("Status carregados "+statusUsuario.length);
        $.each(statusUsuario, function (i, su) {                    
        $(selecao).append('<option value=' + su.id+ '>' + su.status + '</option>');
        });
      })
    }
    //listando usuarios sem duplicar as linnhas
    $("#bt-listar-usuario").on("click", function(event){
      console.log($("#tab-listagem-usuarios tbody").find("tr").length);
      if($("#tab-listagem-usuarios tbody").find("tr").length == 0){
      preencheTabelaUsuarios();
    }else{
      $("#tab-listagem-usuarios tbody").find("tr").remove();
      preencheTabelaUsuarios();
    }
    })
    //listando produtos sem duplicar as linhas
    $("#bt-listar-pdt").on("click", function(event){
      console.log($("#tab-listagem-produtos tbody").find("tr").length);
      if($("#tab-listagem-produtos tbody").find("tr").length == 0){
      preencheTabelaProdutos();
    }else{
      $("#tab-listagem-produtos tbody").find("tr").remove();
      preencheTabelaProdutos();
    }
    })
    //preenchendo tabela de Usuarios
    function preencheTabelaUsuarios(){
      fetch(listaUsuario)
      .then(res=>res.json())
      .then(listaUsuarios=>{
        console.log("Qtd de Usuarios "+listaUsuarios.length);
        $.each(listaUsuarios, function (i) {                   
        $("#tab-listagem-usuarios").append("<tr>"+
        "<td>"+listaUsuarios[i].id+"</td>"
        +"<td>"+listaUsuarios[i].nome+"</td>"
        +"<td>"+listaUsuarios[i].cargo+"</td>"
        +"<td>"+listaUsuarios[i].permissoes+"</td>"
        +"<td>"+listaUsuarios[i].status+"</td>"
        +"</tr>");
        });
      })
    }
    //preenchendo tabela de Vencimentos
    function preencheTabelaVencimentos(){
      fetch(listaVencimentos)
      .then(res=>res.json())
      .then(listaVencimentos=>{
        console.log("Qtd de Vencimentos "+listaVencimentos.length);
        $.each(listaVencimentos, function (i) {                   
        $("#tab-listagem-vencimentos").append("<tr id='vencimento'>"+
        "<td class='id'>"+listaVencimentos[i].id+"</td>"
        +"<td class='nome'>"+listaVencimentos[i].nome+"</td>"
        +"<td class='categoria'>"+listaVencimentos[i].categoria+"</td>"
        +"<td class='peso'>"+listaVencimentos[i].peso+"</td>"
        +"<td class='fabricante'>"+listaVencimentos[i].fabricante+"</td>"
        +"<td class='vencimento'>"+listaVencimentos[i].vencimento+"</td>"
        +"<td class='status'>"+listaVencimentos[i].status+"</td>"
        +"<td class='contagem_vencimento'>"+listaVencimentos[i].contagem_vencimento+" dias"+"</td>"
        +"</tr>");
        });
        if(listaVencimentos.length < 10){
          $("#contagem-vencimentos").text("0"+listaVencimentos.length);
        }else{
          $("#contagem-vencimentos").text(listaVencimentos.length);
        }
      })
    }
    //preenchendo tabela de Produtos
    function preencheTabelaProdutos(){
      fetch(listaProduto)
      .then(res=>res.json())
      .then(listaProdutos=>{
        console.log("Qtd de Produtos "+listaProdutos.length);
        $.each(listaProdutos, function (i) {                   
        $("#tab-listagem-produtos").append("<tr>"+
        "<td>"+listaProdutos[i].id+"</td>"
        +"<td>"+listaProdutos[i].nome+"</td>"
        +"<td>"+listaProdutos[i].categoria+"</td>"
        +"<td>"+listaProdutos[i].peso+"</td>"
        +"<td>"+listaProdutos[i].fabricante+"</td>"
        +"<td>"+"Ações"+"</td>"
        +"</tr>");
        });
        if(listaProdutos.length < 10){
          $("#contagem-produtos").text("0"+listaProdutos.length);
        }else{
          $("#contagem-produtos").text(listaProdutos.length);
        }
      })
    }
    // obtendo dados de Usuario
    

    // cadastro de produto - POST
  $("#bt-cad-pdt").on("click", function(event){

    let  nome = $("#nome-cad-produto").val();
    let categoria = $("#selecao-categoria-cad-produto").val();
    let peso = $("#peso-cad-produto").val();
    let fabricante = $("#selecao-fabricante-cad-produto").val();
    if($("#nome-cad-produto").val() === "" || $("#peso-cad-produto").val() === ""){
      alert("Por favor preencha os campos nome e peso.");
    }else{
      if($("#selecao-categoria-cad-produto option:selected").val() === "0" || $("#selecao-fabricante-cad-produto option:selected").val() === "0"){
        alert("Por favor selecionar todas as seleções; categoria e fabricante");
      }else{
        let produto = {
          id: 'null',
          nome: nome,
          categoria: categoria,
          peso: peso,
          fabricante: fabricante
        };
        console.log(produto);
          $.ajax({
            url: adicionarProduto,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(produto),
            success: function (data) {
              alert("Produto cadastrado!");
              limpaCamposCadastro();
              $("#cadastro-produtos").css('display','none');
            },
            error: function () {
              alert("Não foi possível cadastrar o produto.");
            },
          });
      }
    }
     
  })
    // cadastro de reposicao produto - POST
  $("#bt-cad-repo").on("click", function(event){

    let  nome = $("#selecao-produto-cad-reposicao option:selected").text();
    let categoria = $("#selecao-categoria-cad-reposicao option:selected").text();
    let peso = $("#peso-cad-reposicao").val();
    let fabricante = $("#selecao-fabricante-cad-reposicao option:selected").text();
    let vencimento = $("#vencimento-cad-reposicao").val();
    let status = $("#selecao-status-cad-reposicao option:selected").text();

    if($("#selecao-produto-cad-reposicao option:selected").val()=== "0" ||
       $("#selecao-categoria-cad-reposicao option:selected").val()=== "0" ||
       $("#selecao-fabricante-cad-reposicao option:selected").val()=== "0" ||
       $("#selecao-status-cad-reposicao option:selected").val()=== "0"){
        alert("Por favor selecione todas as opções; produto, categoria, fabricante e status")
    }else{
      if($("#peso-cad-reposicao").val() === "" ||  $("#vencimento-cad-reposicao").val() === ""){
        alert("Por favor preencha os campos peso e vencimento.");
      }else{
        let reposicao = {
          id: 'null',
          nome: nome,
          categoria: categoria,
          peso: peso,
          fabricante: fabricante,
          vencimento: vencimento,
          status: status
        };
        console.log(reposicao);
        $.ajax({
          url: adicionarReposicao,
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify(reposicao),
          success: function (data) {
            alert("Reposição cadastrada!");
            limpaCamposCadReposicao();
            $("#cadastro-reposicao").css('display','none');
          },
          error: function () {
            alert("Não foi possível cadastrar a reposição.");
          },
        });
      }
    }
    
  })
  
  // cadastro de usuario - POST
  $("#bt-add-usuario").on("click", function(event){

    let  nome = $("#nome-usuarios").val();
    let senha = $("#senha-usuario").val();
    let confirmaSenha = $("#confirmacao-senha").val();
    let cargo = $("#selecao-cargo option:selected").text();
    let permissao = $("#selecao-permissao option:selected").text();
    let status = $("#selecao-status option:selected").text();

    //$("#selecao-cargo").prop('selectedIndex', 0);
    //$("#selecao-permissao").prop('selectedIndex', 0);
   // $("#selecao-status").prop('selectedIndex', 0);

   if(nome ===""){
    alert("Por favor preencha o nome")
   }else{
    if(senha == confirmaSenha){
      if($("#nome-usuarios").val() === "" || $("#senha-produto").val() ==="" ||$("#confirmacao-senha").val() ==="" ){
        alert("Por favor Preencha os campos faltantes");
      }
      else{
          if($("#selecao-cargo option:selected").val() === "0" || $("#selecao-permissao option:selected").val() === "0" || $("#selecao-status option:selected").val() ==="0"){
           console.log($("#selecao-cargo option:selected").val());
           console.log($("#selecao-permissao option:selected").val());
           console.log($("#selecao-status option:selected").val());
            alert("Por favor selecione todas as opções");
          }
          else{
            let usuario = {
              id: 'null',
              nome: nome,
              senha: senha,
              cargo: cargo,
              permissoes: permissao,
              status: status
            };
            console.log(usuario);
            $.ajax({
              url: adicionaUsuario,
              method: "POST",
              contentType: "application/json",
              data: JSON.stringify(usuario),
              success: function (data) {
                alert("Usuario cadastrado!");
                limpaCamposCadUsuario();
                $("#add-usuario").css('display','none');
              },
              error: function () {
                alert("Não foi possível cadastrar o usuario.");
              },
            });
        }
      }
    }
    else{
      alert("As senhas não são iguais");
    }  
   }
  })

  function limpaCamposCadastro(){
    $("#nome-cad-produto").val("");
    $("#selecao-categoria-cad-produto").prop('selectedIndex', 0);
    $("#peso-cad-produto").val("");
    $("#selecao-fabricante-cad-produto").prop('selectedIndex', 0);
  }
  function limpaCamposCadReposicao(){
    $("#selecao-produto-cad-reposicao").prop('selectedIndex', 0);
    $("#selecao-categoria-cad-reposicao").prop('selectedIndex', 0);
    $("#peso-cad-reposicao").val("");
    $("#selecao-fabricante-cad-reposicao").prop('selectedIndex', 0);
    $("#vencimento-cad-reposicao").val("");
    $("#selecao-status-cad-reposicao").prop('selectedIndex', 0);
  }
  function limpaCamposCadUsuario(){
    $("#selecao-cargo").prop('selectedIndex', 0);
    $("#selecao-permissao").prop('selectedIndex', 0);
    $("#selecao-status").prop('selectedIndex', 0);
    $("#nome-usuarios").val("");
    $("#senha-usuario").val("");
    $("#confirmacao-senha").val("");
  }

  var usuario;

  $("#bt-altera-usuario").on("click", function(event){
    
    //capturar os dados da tabela usuario
    var linhasTabUsuario = tabelaUsuarios.getElementsByTagName("tr");

	  var selecionados = tabelaUsuarios.getElementsByClassName("selecionado");
    //Verificar se está selecionado
    if(selecionados.length < 1){
  	  alert("Selecione pelo menos uma linha");
      return false;
    }
  
    var usuarioAux = "";
  
  
    for(var i = 0; i < selecionados.length; i++){
  	  var selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td");
      usuarioAux += "Id: " + selecionado[0].innerHTML + "\n"+ 
             "Nome: " + selecionado[1].innerHTML + "\n"+ 
             "Cargo: " + selecionado[2].innerHTML + "\n"+ 
             "Permissões: " + selecionado[3].innerHTML + "\n"+
             "Status: " + selecionado[4].innerHTML + "\n";
      usuario ={
        id:selecionado[0].innerHTML,
        nome:selecionado[1].innerHTML,
        cargo:selecionado[2].innerHTML,
        permissões:selecionado[3].innerHTML,
        status:selecionado[4].innerHTML
      }
    }
      $("#id-att-usuarios").val(usuario.id);
      $("#nome-att-usuarios").val(usuario.nome);
  })

 

var tabelaUsuarios = document.getElementById("tab-listagem-usuarios");

tabelaUsuarios.addEventListener("click", selecionarLinha);

function selecionarLinha(){
  
  var tabela = document.getElementById("tab-listagem-usuarios");
  var linhasTabUsuario = tabela.getElementsByTagName("tr");

  for(var i = 0; i < linhasTabUsuario.length; i ++){
    var linha = linhasTabUsuario[i];

    linha.addEventListener("click", function(){
      linhaSelecionada(this, false);
    });
  }

  function linhaSelecionada(linha){
    var linhas = linha.parentElement.getElementsByTagName("tr");

    for(var i = 0; i < linhas.length; i ++){
      var linhaAux = linhas[i];
      linhaAux.classList.remove("selecionado");
    }
    linha.classList.toggle("selecionado");
  }
}

//capturar os dados da tabela usuario
var linhasTabUsuario = tabelaUsuarios.getElementsByTagName("tr");

var btnVisualizar = document.getElementById("bt-visualizar-usuario");

btnVisualizar.addEventListener("click", function(){
	var selecionados = tabelaUsuarios.getElementsByClassName("selecionado");
  //Verificar se está selecionado
  if(selecionados.length < 1){
  	alert("Selecione pelo menos uma linha");
    return false;
  }
  
  var usuarioAux = "";
  
  
  for(var i = 0; i < selecionados.length; i++){
  	var selecionado = selecionados[i];
    selecionado = selecionado.getElementsByTagName("td");
    usuarioAux += "Id: " + selecionado[0].innerHTML + "\n"+ 
             "Nome: " + selecionado[1].innerHTML + "\n"+ 
             "Cargo: " + selecionado[2].innerHTML + "\n"+ 
             "Permissões: " + selecionado[3].innerHTML + "\n"+
             "Status: " + selecionado[4].innerHTML + "\n";
    usuario ={
      id:selecionado[0].innerHTML,
      nome:selecionado[1].innerHTML,
      cargo:selecionado[2].innerHTML,
      permissões:selecionado[3].innerHTML,
      status:selecionado[4].innerHTML
    }
  }
  
  var btVerDados = document.getElementById("bt-visualizar-usuario");
  btVerDados.addEventListener("click",alert(usuarioAux) );
  
});

});//fim da funcao jquery