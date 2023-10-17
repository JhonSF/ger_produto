$(document).ready(function () {
  
  //links request
  const listaCategorias = "http://localhost:8080/produto/listar-categorias";
  const listaFabricantes = "http://localhost:8080/produto/listar-fabricantes";
  const adicionarProduto = "http://localhost:8080/produto/adicionar-produto";
  const adicionarReposicao = "http://localhost:8080/produto/adicionar-reposicao";
  const listaProduto = "http://localhost:8080/produto/listar-produtos";
  const listaStatus = "http://localhost:8080/produto/listar-status-produto";
  
  // verificacao de login
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

        let qtd_elecao_Categoria = $("#selecao-categoria-cad-reposicao option");
        let qtd_selecao_Fabricante = $("#selecao-fabricante-cad-reposicao  option");
        let qtd_selecao_Produto = $("#selecao-produto-cad-reposicao  option");
        let qtd_selecao_Status = $("#selecao-status-cad-reposicao  option");
        
        if(qtd_elecao_Categoria.length == 1){
          preencheCategorias(selecao_Categoria);
        }
        if(qtd_selecao_Fabricante.length == 1){
          preencheFabricantes(selecao_Fabricante);
        }
        if(qtd_selecao_Produto.length == 1){
          preencheProdutos(selecao_Produto);
        }
        if(qtd_selecao_Status.length == 1){
          preencheStatus(selecao_Status);
        }

    })

  $("#bt-cancelar-repo").on("click", function(event){
        $("#cadastro-reposicao").css('display','none');
    })
  
    $("#bt-adiciona-usuario").on("click", function(event){
      $("#add-usuario").css('display','flex');
    })
    $("#bt-cancelar-adicao").on("click", function(event){
      $("#add-usuario").css('display','none');
    })

    $("#bt-altera-usuario").on("click", function(event){
      $("#atualiza-usuario").css('display','flex');
    })
    $("#bt-cancelar-att").on("click", function(event){
      $("#atualiza-usuario").css('display','none');
    })

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
    function preencheStatus(selecao){
      fetch(listaStatus)
      .then(res=>res.json())
      .then(status=>{
        console.log("Status carregados "+status.length);
        $.each(status, function (i, sts) {                    
        $(selecao).append('<option value=' + sts.id+ '>' + sts.status + '</option>');
        });
      })
    }
    
    // cadastro de produto - POST
  $("#bt-cad-pdt").on("click", function(event){

    let  nome = $("#nome-cad-produto").val();
    let categoria = $("#selecao-categoria-cad-produto").val();
    let peso = $("#peso-cad-produto").val();
    let fabricante = $("#selecao-fabricante-cad-produto").val();

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
        },
        error: function () {
          alert("Não foi possível cadastrar o produto.");
        },
      }); 
  })
    // cadastro de reposicao produto - POST
  $("#bt-cad-repo").on("click", function(event){

    let  nome = $("#selecao-produto-cad-reposicao option:selected").text();
    let categoria = $("#selecao-categoria-cad-reposicao option:selected").text();
    let peso = $("#peso-cad-reposicao").val();
    let fabricante = $("#selecao-fabricante-cad-reposicao option:selected").text();
    let vencimento = $("#vencimento-cad-reposicao").val();
    let status = $("#selecao-status-cad-reposicao option:selected").text();

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
        },
        error: function () {
          alert("Não foi possível cadastrar a reposição.");
        },
      });
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
}); //fim da funcao jquery