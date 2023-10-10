$(document).ready(function () {
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
    })
  $("#bt-cancelar-cad").on("click", function(event){
        $("#cadastro-produtos").css('display','none');
    })

  $("#bt-cadastrar-rpc").on("click", function(event){
        $("#cadastro-reposicao").css('display','flex');
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

     
  
  }); //fim da funcao jquery
  
  