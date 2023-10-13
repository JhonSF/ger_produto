$(document).ready(function () {
  
  //links request
  const listaCategorias = "http://localhost:8080/produto/listar-categorias";
  const listaFabricantes = "http://localhost:8080/produto/listar-fabricantes";
  const adicionarProduto = "http://localhost:8080/produto/adicionar-produto";
  
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

        let qtd_elecao_Categoria = $("#selecao-categoria-cad-reposicao option");
        let qtd_selecao_Fabricante = $("#selecao-fabricante-cad-reposicao  option");
        
        if(qtd_elecao_Categoria.length == 1){
          preencheCategorias(selecao_Categoria);
        }
        if(qtd_selecao_Fabricante.length == 1){
        preencheFabricantes(selecao_Fabricante);
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
        $(selecao).append('<option value=' + cat.id+ '>' + cat.nome + '</option>');
        });
      })
    }

    function preencheFabricantes(selecao){
      fetch(listaFabricantes)
      .then(res=>res.json())
      .then(fabricantes=>{
        console.log("Categorias carregadas "+fabricantes.length);
        $.each(fabricantes, function (i, fab) {                    
        $(selecao).append('<option value=' + fab.id+ '>' + fab.nome + '</option>');
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

  function limpaCamposCadastro(){

    $("#nome-cad-produto").val("");
    $("#selecao-categoria-cad-produto").prop('selectedIndex', 0);
    $("#peso-cad-produto").val("");
    $("#selecao-fabricante-cad-produto").prop('selectedIndex', 0);
    
  }
}); //fim da funcao jquery