$(document).ready(function(){



   function divide(x){
   var y = x*x;

   for(row=1; row<=y; row++){
         $('#wrapper').append("<div class='grid'></div>");
   }
   var cellSize = 960 / x;

   $('.grid').width( cellSize);
   $('.grid').height( cellSize);

   $(".grid").hover(function(){
      $(this).css("background-color", "red");
   });
   }

   divide(64);


   $('#reset').click(function(){
      $("#wrapper").empty();
      divide(prompt("Cells in a row?"));


   });

});
