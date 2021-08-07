$(document).ready(function(){
    $('#frmLead').on('submit', function(e){
    	e.preventDefault();

    	var frm = $(this).serialize();
    	var loading = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>';
    	$('.form').html(loading);

    	$.ajax({
    		url: 'send-mail.php',
    		type: 'post',
    		dataType: 'json',
    		data: frm,
    		success: function(result){
    			setTimeout(function(){
    				var successIcon = '<p class="successIcon w-100 text-center"><i class="far fa-check-circle"></i></p>';
					$('.form').html(successIcon+result['msg']);
    			}, 3000);
    			
    		}
    	});
	})
})