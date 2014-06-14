$(document).ready(function(){
    $('#showcaseInputSubmit').click(function(event){
          event.preventDefault();
          $('#showcaseOutputElement').text($('#showcaseInputText').val());
    });    
});