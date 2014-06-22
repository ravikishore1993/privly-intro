$(document).ready(function(){
 //   $('#postedTextContent').hide();
    $('#showcaseInputSubmit').click(function(event){
          event.preventDefault();
          $('#showcaseOutputElement').html($('#showcaseInputText').val());
    });   
    $('#landing').css('min-height', $(window).height() + 'px'); 
    $('#showcaseMain').css('width', (parseInt($(window).width()) - 400) + 'px'); 

    $('#showcaseTextSubmit').click(function(){
    	if($('#inputTextArea').val().length > 0) {
			$('#postedTextContent').text($('#inputTextArea').val());
			$('#postedTextContent').fadeIn();
   			$('#editContent').text($('#inputTextArea').val());
    	}
    	
    });

});