$(document).ready(function () {
	var $wizard = $('.rootwizard').bootstrapWizard({
		onNext: function (tab, navigation, index) {
			if (index === 1) {
				if ($('#name-input').val() === '') {
					return false;
				}
			}
			if (index === 2) {
				if ($('#education-input').val() === '') {
					return false;
				}
			}
		}
	});
	$('#goNextBtn').bind('click', function(event){
		$('.rootwizard').bootstrapWizard('next');
	});
});