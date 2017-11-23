$(document).ready(main);

function main() {
   
	$('.btn-collapse').click(function(e) {
		e.preventDefault(); //Prevent default button behaviour
		var $this = $(this);
		var $collapse = $this.closest('.collapse-group').find('.collapse');
		$collapse.collapse('toggle');
	});
	
	$(".btn").click(function(e){
        $(this).button('loading');
    });
}