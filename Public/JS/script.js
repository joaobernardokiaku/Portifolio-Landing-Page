$(document).ready(function(){

    $(".btnModo").click(function(){
      $("body, main").toggleClass("modo-escuro")
      $("header").toggleClass("modo-escuro-nav")

      $(".btnModo").toggleClass("btnModo-escuro")
    })

  });