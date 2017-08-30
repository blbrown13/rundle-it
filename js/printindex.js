$(document).ready(function() {
	//init all the different rundles
	rundleItemTemplate = $('.rundle-element').parent().html()
	for ( i = 1; i < rundles.length; i++) {
		$('.rundle-element').parent().append(rundleItemTemplate);
	}

	for ( j = 0; j < rundles.length; j++) {
		$('.rundle-element:eq('+j+') h1').html(rundles[j].name)
		$('.rundle-element:eq('+j+') a').attr('href', 'make.html?r=' + j).addClass(rundles[j].btnClr);
		$('.rundle-element:eq('+j+') .price').html('$' + rundles[j].price.toFixed(2))
		//prerace
		for ( i = 0; i < rundles[j].prerace_items.length; i++) {
			if (rundles[j].prerace_qty[i] > 0) {
				$('.rundle-element:eq('+j+') ul').append('<li>' + rundles[j].prerace_qty[i] + ' x ' + rundles[j].prerace_items[i].type + '</li>');
			}
		}
		//race
		i = 0;
		$('.rundle-element:eq('+j+') ul').append('<li>' + rundles[j].race_qty[i] + ' x ' + rundles[j].race_items[i].type + ' OR ' + rundles[j].race_items[i + 1].type + '</li>');

		//postrace
		for ( i = 0; i < rundles[j].postrace_items.length; i++) {
			if (rundles[j].postrace_qty[i] > 0) {
				$('.rundle-element:eq('+j+') ul').append('<li>' + rundles[j].postrace_qty[i] + ' x ' + rundles[j].postrace_items[i].type + '</li>');
			}
		}
		//extras
		for ( i = 0; i < rundles[j].extras_items.length; i++) {
			if (rundles[j].extras_qty[i] > 0) {
				$('.rundle-element:eq('+j+') ul').append('<li>' + rundles[j].extras_qty[i] + ' x ' + rundles[j].extras_items[i].type + '</li>');
			}
		}
	}
});
