$().ready(function(){
  $("button").click(function(e){
    console.log(e.target);
    console.log("Id do elemento: "+ e.target.id);
    console.log(e.which);
    console.log(`PageX: ${e.pageX}`);
    console.log(`PageY: ${e.pageY}`);
    console.log(`Tipo: ${e.type}`);
    console.log(`Tipo: ${e.bubbles}`);
  });
});