$(document).ready(function(){
  $(".btn").click(function(){
    $parent_div = $(this).closest('div');
    $parent_div.find('h5').fadeToggle();
    $parent_div.find('h4').fadeToggle();
  });
});
