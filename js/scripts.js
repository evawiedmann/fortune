$(document).ready(function () {
  $("form#luck").submit(function(event) {
    event.preventDefault();
    $("#fortune").show();
    $("input:checkbox[name=luck]:checked").each(function(){
      var yourluck = $(this).val();
        $('#fortune').append(yourluck + "<br>");
      });
                    $("#luck").hide();
    });
});
