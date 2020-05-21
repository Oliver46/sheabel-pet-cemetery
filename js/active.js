
		$(document).ready(function () {
			$page = window.location.href;

			if (!$page) {
			  $page = 'index.html';
			}

			$('.navbar-nav  li a').each(function () {

			  var $href = this.href;

			  if (($href == $page) || ($href == '')) {
				$(this).parent().addClass('active');
				 $(this).css("color", "#E12716");
			  } else {
				$(this).parent().removeClass('active');
			  }

			});
    return false;

  });
