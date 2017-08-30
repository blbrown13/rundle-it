function updateCost(pricedelta) {

	if (pricedelta == 0) {
		return true;
	}

	$('.rundleDescription .item-table').hide()
	//add pricedelta to extracost
	extracost = parseFloat($('.extracost').html()) + pricedelta;
	//add pricedelta to newcost
	totalcost = parseFloat($('.totalcost').html()) + pricedelta;
	$('.extracost').html((extracost).toFixed(2));
	$('.totalcost').html((totalcost).toFixed(2));
	$('.rundleDescription .item-table').fadeIn('fast')

}

function updateStateDescription() {
	$('.selectorDescription').hide();
	$('.selectorDescription h1').html(states[curState].name)
	$('.des').html(states[curState].description)
	$('.included-items li').remove();
	for ( i = 0; i < states[curState].items.length; i++) {
		if (states[curState].qty[i] != 0) {
			if (i == 0 & curState == 1) {//only in the race state
				$('.included-items').append("<li>" + states[curState].qty[i] + " x " + states[curState].items[i].type + "</li>").append("<li>OR</li>");

			} else {
				$('.included-items').append("<li>" + states[curState].qty[i] + " x " + states[curState].items[i].type + "</li>");
			}
		}
	}
	if (states[curState].items.length == 0) {
		$('.included-items').append("<li>None</li>")
	}
	$('.selectorDescription').fadeIn('fast');
	$('')
}

function updateReview() {
	//remove all old itmes
	$('.review-item tbody tr').remove();

	//add the new ones
	//PRERACE
	for ( i = 0; i < prerace.items.length; i++) {
		numTrs = $('.prerace-item:eq(' + i + ') tbody tr select').length;
		for ( j = 0; j < numTrs; j++) {
			selectedValue = $('.prerace-item:eq(' + i + ') tbody tr select option:selected:eq(' + j + ')').html();
			category = prerace.items[i].type;
			name = prerace.items[i].title;
			classOrNot = '';
			if ($('.prerace-item:eq(' + i + ') tbody tr:eq(' + j + ')').hasClass('info')) {
				price = 'Included';
				classOrNot = 'info';
			} else {
				price = '+ ' + prerace.items[i].price;
			}
			$('.review-item:eq(0) table tbody').append('<tr class=' + classOrNot + '><td>' + price + '</td><td>' + category + '</td><td>' + name + '</td><td>' + selectedValue + '</td></tr>')
		}

	}

	//RACE
	if (race.typeSelected != null) {
		i = parseInt(race.typeSelected);
		numTrs = $('.race-item:eq(' + i + ') tbody tr select').length;
		for ( j = 0; j < numTrs; j++) {
			selectedValue = $('.race-item:eq(' + i + ') tbody tr select option:selected:eq(' + j + ')').html();
			category = race.items[i].type;
			name = race.items[i].title;
			classOrNot = '';
			if ($('.race-item:eq(' + i + ') tbody tr:eq(' + j + ')').hasClass('info')) {
				price = 'Included';
				classOrNot = 'info';
			} else {
				price = '+ ' + race.items[i].price;
			}
			$('.review-item:eq(1) table tbody').append('<tr class=' + classOrNot + '><td>' + price + '</td><td>' + category + '</td><td>' + name + '</td><td>' + selectedValue + '</td></tr>')
		}
	}

	//POSTRACE
	for ( i = 0; i < postrace.items.length; i++) {
		numTrs = $('.postrace-item:eq(' + i + ') tbody tr select').length;
		for ( j = 0; j < numTrs; j++) {
			selectedValue = $('.postrace-item:eq(' + i + ') tbody tr select option:selected:eq(' + j + ')').html();
			category = postrace.items[i].type;
			name = postrace.items[i].title;
			classOrNot = '';
			if ($('.postrace-item:eq(' + i + ') tbody tr:eq(' + j + ')').hasClass('info')) {
				price = 'Included';
				classOrNot = 'info';
			} else {
				price = '+ ' + postrace.items[i].price;
			}
			$('.review-item:eq(2) table tbody').append('<tr class=' + classOrNot + '><td>' + price + '</td><td>' + category + '</td><td>' + name + '</td><td>' + selectedValue + '</td></tr>')
		}

	}

	//EXTRAS
	for ( i = 0; i < extras.items.length; i++) {
		numTrs = $('.extras-item:eq(' + i + ') tbody tr select').length;
		for ( j = 0; j < numTrs; j++) {
			selectedValue = $('.extras-item:eq(' + i + ') tbody tr select option:selected:eq(' + j + ')').html();
			category = extras.items[i].type;
			name = extras.items[i].title;
			classOrNot = '';
			if ($('.extras-item:eq(' + i + ') tbody tr:eq(' + j + ')').hasClass('info')) {
				price = 'Included';
				classOrNot = 'info';
			} else {
				price = '+ ' + extras.items[i].price;
			}
			$('.review-item:eq(3) table tbody').append('<tr class=' + classOrNot + '><td>' + price + '</td><td>' + category + '</td><td>' + name + '</td><td>' + selectedValue + '</td></tr>')
		}

	}

}

function changeState(newState, src) {
	//src=0 means next or prev buttons
	//src=1 means navbar
	
	//check to see if it's possible to reach newState yet...
	//either it's already been visited
	//or it's the next available state

	if (! $('ul.breadcrumb-nav li:eq(' + (newState + 1) + ') a').hasClass('visited') &&
		src==1) {
		return true;
	};

	nextbtn = $('.rundleDescription a:eq(0)');
	prevbtn = $('.rundleDescription a:eq(1)');

	//state specific behavior:
	//if going between pre-race and race for the first time...
	if (curState == 0 && 
		newState == 1 && 
		$('ul.breadcrumb:eq(0) li:eq(2) a i').hasClass('icon-check-empty') && 
		!$('a.btn-race').hasClass('btn-primary')) {
		//have not visited race state, disable next button until click
		nextbtn.addClass('disabled');
	}

	//if moving to the next state
	if (curState + 1 == newState) {
		$('.breadcrumb a i:eq(' + curState + ')').removeClass('icon-check-empty')
		$('.breadcrumb a i:eq(' + curState + ')').addClass('icon-check')
	}

	//reenable next button if moving backwards
	if (newState < curState) {
		$('.rundleDescription a.btn:eq(0)').removeClass('disabled');
		$('.rundleDescription a.btn:eq(0)').fadeIn('fast');
	}

	//change the active symbol in nav
	$('ul.breadcrumb-nav li:eq(' + (curState + 1) + ') a').removeClass('active');
	$('ul.breadcrumb-nav li:eq(' + (newState + 1) + ') a').addClass('visited');
	$('ul.breadcrumb-nav li:eq(' + (newState + 1) + ') a').addClass('active');

	//change the state
	$('.' + states[curState].handle + '').hide();
	$('.' + states[newState].handle + '').fadeIn('fast');
	curState = newState;
	updateStateDescription();

	//if the state is the initial or the finall.
	if (curState == states.length - 1) {
		nextbtn.hide();
		$('.rundleDescription .prevCat').html(states[curState - 1].name.toUpperCase());
	} else if (curState == 0) {
		prevbtn.fadeOut('fast');
		$('.rundleDescription .nextCat').html(states[curState + 1].name.toUpperCase());
	} else {
		$('.rundleDescription .nextCat').html(states[curState + 1].name.toUpperCase());
		$('.rundleDescription .prevCat').html(states[curState - 1].name.toUpperCase());
		prevbtn.fadeIn('fast');

	}

	updateReview();

}


$(document).ready(function() {
	//setup internal variables based on url params
	query = window.location.search.substring(1).split('=')[1];
	if(query == undefined){
		selectedRundle = rundles.length-1;
	}else {
		selectedRundle = parseInt(query); 
	}
	prerace.items = rundles[selectedRundle].prerace_items;
	prerace.qty = rundles[selectedRundle].prerace_qty;
	race.items = rundles[selectedRundle].race_items;
	race.qty = rundles[selectedRundle].race_qty;
	postrace.items = rundles[selectedRundle].postrace_items;
	postrace.qty = rundles[selectedRundle].postrace_qty;
	extras.items = rundles[selectedRundle].extras_items;
	extras.qty = rundles[selectedRundle].extras_qty;
	
	//*** init construct templates
	preraceItemTemplate = $('.prerace-item').parent().html()
	for ( i = 1; i < prerace.items.length; i++) {
		$('.prerace-item').parent().append(preraceItemTemplate);
	}
	raceItemTemplate = $('.race-item').parent().html()
	for ( i = 1; i < race.items.length; i++) {
		$('.race-item').parent().append(raceItemTemplate);
	}
	postraceItemTemplate = $('.postrace-item').parent().html()
	for ( i = 1; i < postrace.items.length; i++) {
		$('.postrace-item').parent().append(postraceItemTemplate);
	}
	extrasItemTemplate = $('.extras-item').parent().html()
	for ( i = 1; i < extras.items.length; i++) {
		$('.extras-item').parent().append(extrasItemTemplate);
	}

	//*** init hide all other states
	for ( i = 1; i < states.length; i++) {
		$('.' + states[i].handle + '').hide();
	}

	//*** activate nav
	breadNav = $('ul.breadcrumb-nav li');
	$('ul.breadcrumb-nav li:eq(1) a').addClass('visited').addClass('active');
	//start on pre-race
	for ( i = 1; i < breadNav.length; i++) {
		$('ul.breadcrumb-nav li:eq(' + i + ') a').click(function() {
			changeState(parseInt($(this).attr('id')), 1);
		});
	}

	//*** init rundle description
	$('.rundleDescription a:eq(1)').hide();
	$('.rundleType').html(rundles[selectedRundle].name)
	$('.basecost').html(rundles[selectedRundle].price)
	$('.totalcost').html(rundles[selectedRundle].price)
	$('.rundleDescription a.btn:eq(0)').click(function() {//FORWARDS
		if ($(this).hasClass('disabled')) {
			return true;
		}
		changeState(curState + 1, 0);
	});
	$('.rundleDescription a.btn:eq(1)').click(function() {//BACKWARDS
		changeState(curState - 1, 0);
	});

	//*** init state description
	updateStateDescription();

	//*** fill in: prerace
	for ( i = 0; i < prerace.items.length; i++) {
		initTrFirstTd = '<span class="qty">QTY</span> x <span class="type">TYPE</span>';
		if (prerace.qty[i] == 0) {
			$('.prerace-item:eq(' + i + ') thead').hide();
		}
		for ( j = 0; j < prerace.qty[i]; j++) {
			$('.prerace-item:eq(' + i + ') tbody').append('<tr class="info"><td>' + initTrFirstTd + '</td><td><select></select></td><td></td></tr>');
			if (j == 0) {
				initTrFirstTd = '';
			}
		}

		$('.prerace-item:eq(' + i + ') .title').html(prerace.items[i].title)
		$('.prerace-item:eq(' + i + ') .description').html(prerace.items[i].description)
		$('.prerace-item:eq(' + i + ') .type').html(prerace.items[i].type)
		$('.prerace-item:eq(' + i + ') .qty').html(prerace.qty[i])
		$('.prerace-item:eq(' + i + ') img').attr('src', prerace.items[i].image)
		$('.prerace-item:eq(' + i + ') .price').html(prerace.items[i].price.toFixed(2))
		$('.prerace-item:eq(' + i + ')').attr('id', i);

		for ( j = 0; j < prerace.items[i].options.length; j++) {
			$('.prerace-item:eq(' + i + ') select').append(new Option(prerace.items[i].options[j], j));
		}
	}

	//add button logic
	$('.prerace-item a.btn').click(function() {
		upperele = $(this).closest('.prerace-item');
		upperele.find('thead').show();
		id = parseFloat($(upperele).attr('id'));
		price = prerace.items[id].price;
		updateCost(price);

		upperele.find('tbody').append('<tr>' + '<td>+1 Extra at $' + price.toFixed(2) + '</td>' + '<td><select></select></td>' + '<td><a class="close"><i class="icon-remove-circle"></i></a></td>' + '</tr>');
		// close button logic
		upperele.find('td a.close').last().click(function() {
			price = prerace.items[parseFloat($(this).closest('.prerace-item').attr('id'))].price;
			updateCost(-1 * price);
			$(this).closest('tr').remove()
			if (upperele.find('tbody tr').length == 0) {
				upperele.find('thead').hide();
			}
		});

		for ( j = 0; j < prerace.items[id].options.length; j++) {
			$('.prerace-item:eq(' + id + ') select').last().append(new Option(prerace.items[id].options[j], j));
		}
	});

	//*** fill in race
	for ( i = 0; i < prerace.items.length; i++) {
		initTrFirstTd = '<span class="qty">QTY</span> x <span class="type">TYPE</span>';
		for ( j = 0; j < race.qty[i]; j++) {
			$('.race-item:eq(' + i + ') tbody').append('<tr class="info"><td>' + initTrFirstTd + '</td><td><select></select></td><td></td></tr>');
			if (j == 0) {
				initTrFirstTd = '';
			}
		}

		$('.race-item:eq(' + i + ') .title').html(race.items[i].title)
		$('.race-item:eq(' + i + ') .description').html(race.items[i].description)
		$('.race-item:eq(' + i + ') .type').html(race.items[i].type)
		$('.race-item:eq(' + i + ') img').attr('src', race.items[i].image)
		$('.race-item:eq(' + i + ') .price').html(race.items[i].price.toFixed(2))
		$('.race-item:eq(' + i + ') .qty').html(race.qty[i])

		for ( j = 0; j < race.items[i].options.length; j++) {
			$('.race-item:eq(' + i + ') select').append(new Option(race.items[i].options[j], j));
		}
	}
	$('.race-qty').hide();
	$('.race-item .race-qty a.btn').click(function() {
		upperele = $(this).closest('.race-item');
		price = parseFloat(upperele.find('.price').html());
		updateCost(price);
		upperele.find('tbody').append('<tr>' + '<td>+1 Extra at $' + price.toFixed(2) + '</td>' + '<td><select>+ ' + upperele.find('select').html() + '</select></td>' + '<td><a class="close"><i class="icon-remove-circle"></i></a></td>' + '</tr>');
		upperele.find('td a.close').last().click(function() {
			upperele = $(this).closest('.race-item');
			price = parseFloat(upperele.find('.price').html());
			updateCost(-1 * price);
			$(this).closest('tr').remove();
		});
	});
	$('a.btn-race').hover(function() {
		innerI = $(this).find('i');
		if (innerI.hasClass('icon-check-empty')) {
			innerI.removeClass('icon-check-empty');
			innerI.addClass('icon-check');
		}
	}, function() {
		innerI = $(this).find('i');
		if ($(this).hasClass('btn-primary')) {

		} else {
			innerI.removeClass('icon-check');
			innerI.addClass('icon-check-empty');
		}

	});
	$('a.btn-race').click(function() {
		$('.rundleDescription a.btn:eq(0)').removeClass('disabled');
		//$('.race-hint').fadeOut('fast');
		//determine which item was clicked
		indexOn = 1;
		indexOff = 0;
		if ($('.race-item:eq(0) a:eq(0)').get(0) == $(this).get(0)) {
			indexOn = 0;
			indexOff = 1;
		}

		race.typeSelected = indexOn;

		jOn = $('.race-item:eq(' + indexOn + ')');
		jOn.find('.race-qty').fadeIn('fast');
		jOn.find('a.btn-race').addClass('btn-race-selected').addClass('btn-primary').find('i').removeClass('icon-check-empty').addClass('icon-check');

		jOff = $('.race-item:eq(' + indexOff + ')');
		jOff.find('.race-qty').fadeOut('fast');
		jOff.find('a.btn-race').removeClass('btn-race-selected').removeClass('btn-primary').find('i').removeClass('icon-check').addClass('icon-check-empty');

		//adjust the recorded price by subtracting extras from the old category and adding extras from the current
		adjPrice = -1 * parseFloat(jOff.find('.race-qty .price').html()) * parseFloat(jOff.find('.race-qty tbody tr:not(.info)').length)
		adjPrice += parseFloat(jOn.find('.race-qty .price').html()) * parseFloat(jOn.find('.race-qty tbody tr:not(.info)').length)
		updateCost(adjPrice);
	});

	//*** fill in: postrace
	for ( i = 0; i < postrace.items.length; i++) {
		initTrFirstTd = '<span class="qty">QTY</span> x <span class="type">TYPE</span>';
		if (postrace.qty[i] == 0) {
			$('.postrace-item:eq(' + i + ') thead').hide();
		}
		for ( j = 0; j < postrace.qty[i]; j++) {
			$('.postrace-item:eq(' + i + ') tbody').append('<tr class="info"><td>' + initTrFirstTd + '</td><td><select></select></td><td></td></tr>');
			if (j == 0) {
				initTrFirstTd = '';
			}
		}

		$('.postrace-item:eq(' + i + ') .title').html(postrace.items[i].title)
		$('.postrace-item:eq(' + i + ') .description').html(postrace.items[i].description)
		$('.postrace-item:eq(' + i + ') .type').html(postrace.items[i].type)
		$('.postrace-item:eq(' + i + ') .qty').html(postrace.qty[i])
		$('.postrace-item:eq(' + i + ') img').attr('src', postrace.items[i].image)
		$('.postrace-item:eq(' + i + ') .price').html(postrace.items[i].price.toFixed(2))
		$('.postrace-item:eq(' + i + ')').attr('id', i);

		for ( j = 0; j < postrace.items[i].options.length; j++) {
			$('.postrace-item:eq(' + i + ') select').append(new Option(postrace.items[i].options[j], j));
		}
	}

	//add button logic
	$('.postrace-item a.btn').click(function() {
		upperele = $(this).closest('.postrace-item');
		upperele.find('thead').show();
		id = parseFloat($(upperele).attr('id'));
		price = postrace.items[id].price;
		updateCost(price);

		upperele.find('tbody').append('<tr>' + '<td>+1 Extra at $' + price.toFixed(2) + '</td>' + '<td><select></select></td>' + '<td><a class="close"><i class="icon-remove-circle"></i></a></td>' + '</tr>');
		// close button logic
		upperele.find('td a.close').last().click(function() {
			price = postrace.items[parseFloat($(this).closest('.postrace-item').attr('id'))].price;
			updateCost(-1 * price);
			$(this).closest('tr').remove()
			if (upperele.find('tbody tr').length == 0) {
				upperele.find('thead').hide();
			}
		});

		for ( j = 0; j < postrace.items[id].options.length; j++) {
			$('.postrace-item:eq(' + id + ') select').last().append(new Option(postrace.items[id].options[j], j));
		}
	});

	//*** fill in: extras
	for ( i = 0; i < extras.items.length; i++) {
		initTrFirstTd = '<span class="qty">QTY</span> x <span class="type">TYPE</span>';
		if (extras.qty[i] == 0) {
			$('.extras-item:eq(' + i + ') thead').hide();
		}
		for ( j = 0; j < extras.qty[i]; j++) {
			$('.extras-item:eq(' + i + ') tbody').append('<tr class="info"><td>' + initTrFirstTd + '</td><td><select></select></td><td></td></tr>');
			if (j == 0) {
				initTrFirstTd = '';
			}
		}

		$('.extras-item:eq(' + i + ') .title').html(extras.items[i].title)
		$('.extras-item:eq(' + i + ') .description').html(extras.items[i].description)
		$('.extras-item:eq(' + i + ') .type').html(extras.items[i].type)
		$('.extras-item:eq(' + i + ') .qty').html(extras.qty[i])
		$('.extras-item:eq(' + i + ') img').attr('src', extras.items[i].image)
		$('.extras-item:eq(' + i + ') .price').html(extras.items[i].price.toFixed(2))
		$('.extras-item:eq(' + i + ')').attr('id', i);

		for ( j = 0; j < extras.items[i].options.length; j++) {
			$('.extras-item:eq(' + i + ') select').append(new Option(extras.items[i].options[j], j));
		}
	}

	//add button logic
	$('.extras-item a.btn').click(function() {
		upperele = $(this).closest('.extras-item');
		upperele.find('thead').show();
		id = parseFloat($(upperele).attr('id'));
		price = extras.items[id].price;
		updateCost(price);

		upperele.find('tbody').append('<tr>' + '<td>+1 Extra at $' + price.toFixed(2) + '</td>' + '<td><select></select></td>' + '<td><a class="close"><i class="icon-remove-circle"></i></a></td>' + '</tr>');
		// close button logic
		upperele.find('td a.close').last().click(function() {
			price = extras.items[parseFloat($(this).closest('.extras-item').attr('id'))].price;
			updateCost(-1 * price);
			$(this).closest('tr').remove()
			if (upperele.find('tbody tr').length == 0) {
				upperele.find('thead').hide();
			}
		});

		for ( j = 0; j < extras.items[id].options.length; j++) {
			$('.extras-item:eq(' + id + ') select').last().append(new Option(extras.items[id].options[j], j));
		}
	});

	//*** fill in: review:
	for ( i = 0; i < 4; i++) {
		$('.review-item:eq(' + i + ') .title').html(states[i].name)
		$('.review-item:eq(' + i + ') h3 a').attr('id', i)
		$('.review-item:eq(' + i + ') h3 a').click(function(){
			changeState(parseInt($(this).attr('id')), 1);
		})
	}

});
