$(document).ready(function () {
  $("#pet1, #pet2, #pet3, #pet4").click(function (){
    $("#petPage").hide(3000);
  });
  

  $("#changePet").click(function (){
    $("#petPage").show(3000);
  });
});