$("#botao").click(function(){
  $(".aqua").addClass("mb50"); //adiciona classe mb50
  $(".aqua").css("background-color"); //mostra o rgb atual da classe .aqua
  $(".aqua").css("background-color", "rgb(240, 240, 240)"); //altera para cinza
  $(".blue").css("background-color", "blue"); //altera para azul
  $(".navy").css("background-color", "red"); //altera para vermelho 
  alert("Cores Alteradas!");
});