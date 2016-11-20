$(function() {

	// jQuery.mainHeading = function() {
	// 	$('.main-hd').each(function() {
	// 		var mainHdWdth = $(this).outerWidth();
	// 		$('.main-hd').css('left', -(mainHdWdth+20));
	// 	});
	// };

	// $.mainHeading();
	datePicker = false;

	if($('.datePicker').length > 0) {
		datePicker = true;
	} 


	function htFix() {
		if($(window).width() >= 991) {
			$('.scroll-wrapper').each(function() {
				$(this).height($(this).parent().outerHeight()-60);
			});

		} /*else {
			$('.scroll-wrapper').each(function() {
			$(this).height($(this).parent().outerHeight()-180);
		});
}*/
}

$('[data-target="#destination"]').click(function() {
	setTimeout(function() {
		htFix();
	},200)

});

htFix();

$(window).resize(function() {
	htFix();
});


	 // ----------validations

	 /*$('#return_on').click(function(event) {
	 	if($(this).is(':checked')) {
	 		$('#datetimepicker7 input').addClass('normal-input-style').prop('disabled', false);
	 	} else {
	 		$('#datetimepicker7 input').removeClass('normal-input-style').prop('disabled', true).val('');
	 	}
	 });*/

	 $('#datetimepicker6 span').click(function(){
	 	$('#datetimepicker6 input').focus();
	 });

	 $('#datetimepicker7 span').click(function(){
	 	$('#datetimepicker7 input').focus();
	 });

	 if(datePicker) {
	 	$('#datetimepicker6 input').datepicker({
	 		format: "dd/mm/yyyy",
	 		maxViewMode: 2,
	 		todayBtn: "linked",
	 		startDate: '0',
	 		endDate: '+7m',
	 		calendarWeeks: true,
	 		autoclose: true,
	 		todayHighlight: true,
	 	}).on('changeDate', dateChanged);
	 }

	 function dateChanged() {
	 	var FromStartDate = $('#datetimepicker6 input').val();

	 	$('#datetimepicker7 input').datepicker({
	 		format: "dd/mm/yyyy",
	 		todayBtn: "linked",
	 		calendarWeeks: true,
	 		autoclose: true,
	 		startDate: FromStartDate,
	 		endDate: '+7m',
	 		maxViewMode: 2,
	 	});

	 }

	 $('select[name="SelectOriginOption"]').on('change', function() {
	 	arry = [];
	 	$('select[name="SelectDestinationOption"] option:not(:first-of-type)').remove();

	 	if($(this).val() == 'blr') {
	 		var arry = ['Chennai/MAA','Cochin/COK','Goa/GOI','Hubli/HBX','Madurai/IXM','Mangalore/IXE','Trivandrum/TRV'];
	 	} else if($(this).val() == 'maa') {
	 		var arry = ['Banglore/BLR','Madurai/IXM'];
	 		// var arry = ['Banglore/BLR','Madurai/IXM','Hubli/HBX'];
	 	} else if($(this).val() == 'ixe') {
	 		var arry = ['Banglore/BLR'];
	 		// var arry = ['Banglore/BLR','Trivandrum/TRV'];
	 	} else if($(this).val() == 'cok') {
	 		var arry = ['Banglore/BLR'];
	 	} else if($(this).val() == 'trv') {
	 		var arry = ['Banglore/BLR'];
	 		// var arry = ['Banglore/BLR','Hubli/HBX','Mangalore/IXE'];
	 	} else if($(this).val() == 'hbx') {
	 		var arry = ['Banglore/BLR'];
	 		// var arry = ['Banglore/BLR','Trivandrum/TRV','Chennai/MAA'];
	 	} else if($(this).val() == 'ixm') {
	 		var arry = ['Banglore/BLR','Chennai/MAA'];
	 	} else if($(this).val() == 'goi') {
	 		var arry = ['Banglore/BLR'];
	 	}

	 	$.each(arry, function( index, value ) {
	 		val = value.split('/');
	 		$('select[name="SelectDestinationOption"]').append($("<option></option>").attr("value",val[1]).text(val[0]+' ('+val[1]+')')); 
	 	});
	 	$('select[name="SelectDestinationOption"]').selectpicker('refresh');       

	 });


$('select[name="SelectAdultsOption"]').on('change', function() {
	$('select[name="SelectInfantsOption"] option:not(:first-of-type)').remove();
	var thisVal = $(this).val();
	for (var i = 0; i <= thisVal; i++) {
		if(i <= 4) {
			$('select[name="SelectInfantsOption"]').append($("<option></option>").attr("value",i).text(i)); 
		}
	};
	$('select[name="SelectInfantsOption"]').selectpicker('refresh');
});

	// -------------flight status

	$('.flight-show-table').slideUp();

	function openModal(cmdns) {
		$('.alertModal .modal-body p').remove();
		$('.alertModal .modal-body').append(cmdns);
		$('.alertModal').modal('toggle');
	}

	$('.flight-all-show-btn').on('click', function(event) {
		event.preventDefault();
		if(($('input[name="FlightDate"]').val()=='')) {
			openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select flight date</strong></p>');
		} else {

			if($('#route_select_box').is(':visible')) {
				if(($('select[name="SelectOriginOption"] option:selected').val()=='0') || ($('select[name="SelectDestinationOption"] option:selected').val()=='0')) {
					openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select From-To city</strong></p>');
				} else  {
					$('#flight-filter-box, .flight-show-table').slideToggle(100);
					setTimeout(function() {
						$('.flight-all-show-btn').toggleClass('active');
					},60)

				}
			}


			if($('#flight_number_select_box').is(':visible')) {
				if(($('select[name="SelectFlight"] option:selected').val()=='0')) {
					openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select flight</strong></p>');
				} else  {
					$('#flight-filter-box, .flight-show-table').slideToggle(100);
					setTimeout(function() {
						$('.flight-all-show-btn').toggleClass('active');
					},60)
				}
			}
		}

	});



$(document).on('click', '.flight-all-show-btn.active', function(event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$('#flight-filter-box, .flight-show-table').slideToggle(100);

});

if(datePicker) {
	$("#datetimepicker8").datepicker("setDate", new Date());
}

if(datePicker) {
	$('#datetimepicker8 input').datepicker({
		format: "dd/mm/yyyy",
		maxViewMode: 2,
		todayBtn: "linked",
		startDate: '0',
		endDate: '+7m',
		calendarWeeks: true,
		autoclose: true,
		todayHighlight: true,
	});
}

$('#datetimepicker8 span').click(function(){
	$('#datetimepicker8 input').focus();
});


$('[name="flRtSel"]').on('change', function() {
	if ($('#route').is(':checked')) {
		$('#flight_number_select_box').fadeOut('fast', function() {
			$('#route_select_box').fadeIn('fast');
		});
	} else {
		$('#route_select_box').fadeOut('fast', function() {
			$('#flight_number_select_box').fadeIn('fast');
		});
	}
});


/*var ORIGIN = "",
DESTINATION = "";
$("select[name='SelectOriginOption']").on('change', function() {
	ORIGIN = $(this).val();
});
$("select[name='SelectDestinationOption']").on('change', function() {
	DESTINATION = $(this).val();
});
*/

var tripType = "roundtrip";

$("#oneWay").bind('click', function(event) {
	if ($(this).is(':checked')) {
		$('input[name="returnOn"]').val("").attr({'disabled': 'disabled'}).addClass('disabled');
		tripType = "oneway";
	}
});

$("#roundTrip").bind('click', function(event) {
	if ($(this).is(':checked')) {
		$('input[name="returnOn"]').removeAttr('disabled').removeClass('disabled');
		tripType = "roundtrip";
	}
});


$('.booking-srch-btn').on('click', function(event) {

	adultsOptionVal = parseInt($('select[name="SelectAdultsOption"] option:selected').val());
	childrenOptionVal = parseInt($('select[name="SelectChildrenOption"] option:selected').val());
	infantsOptionVal = parseInt($('select[name="SelectInfantsOption"] option:selected').val());
	
	if (isNaN (adultsOptionVal)) {
		adultsOptionVal = 0;
	}

	if (isNaN (childrenOptionVal)) {
		childrenOptionVal = 0;
	}

	if($('select[name="SelectOriginOption"]').val() == '0') {
		openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select origin</strong></p>');
		return false;
	} else if($('select[name="SelectDestinationOption"]').val() == '0') {
		openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select destination</strong></p>');
		return false;
	} else if($('input[name="departOn"]').val() == '') {
		openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select depart date</strong></p>');
		return false;
	} else if (tripType == "roundtrip" && $('input[name="returnOn"]').val() == '') {
		openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select return date</strong></p>');
		return false;
	}/*else if($('input[name="returnOn"]').val() == '') {
		openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Please select return date</strong></p>');
		return false;
	}*/ else if($('select[name="SelectAdultsOption"]').length > 0) {
		if((adultsOptionVal == '') && (childrenOptionVal == '')) {
			openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> No passengers selected. Please select the number of passengers for your flight(s)</strong></p>');
			return false;
		} 
		if(adultsOptionVal == 0 && childrenOptionVal == 0) {
			openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> No passengers selected. Please select the number of passengers for your flight(s)</strong></p>');
		} 
		if((adultsOptionVal + childrenOptionVal) > 9) {
			openModal('<p class="text-center offset-0"><strong><i class="fa fa-warning text-danger"></i> Maximum 9 passengers are allowed. To book more than 9 Passengers, kindly Call us at: <span class="text-danger">080 4900 6200</span></strong></p>');
			return false;
		}
	}

	$("select[name='SelectOriginOption']").on('change', function() {
      var orig = $(this).val();
    });
    $("select[name='SelectDestinationOption']").on('change', function() {
      var dest = $(this).val();
    });

	if($('body').hasClass('schedules-srch')) {
		var getUrl = "schedules-search-result.html"+'?origin='+orig+'&destination='+dest;
		$(location).attr('href',getUrl);
	}
	

	origin = $("select[name='SelectOriginOption']").val();
	dest = $("select[name='SelectDestinationOption']").val();
	if(!($('input[name="returnOn"]').val() == '')) {
		triptype = "rRoundTrip";
		retday = $('input[name="returnOn"]').val().split('/')[0];
		retmon = $('input[name="returnOn"]').val().split('/')[1];
		retyear = $('input[name="returnOn"]').val().split('/')[2];
	} else {
		triptype = "rOneWay";
		retday = "";
		retmon = "";
		retyear = "";
	}
	depday = $('input[name="departOn"]').val().split('/')[0];
	depmon = $('input[name="departOn"]').val().split('/')[1];
	depyear = $('input[name="departOn"]').val().split('/')[2];

	if($('body').hasClass('schedules-srch')) {
		// var getUrl = "schedules-search-result.html"+'?origin='+orig+'&destination='+dest;
		// $(location).attr('href',getUrl);
	}
	else {
		var getUrl = 'http://airpegasus.booksecure.net/avail.aspx?triptype='+triptype+'&origin='+origin+'&dest='+dest+'&depday='+depday+'&depmon='+depmon+'&depyear='+depyear+'&retday='+retday+'&retmon='+retmon+'&retyear='+retyear+'&adults='+adultsOptionVal+'&children='+childrenOptionVal+'&infants='+infantsOptionVal+'&seniors=0&subwebfaretype=1&isavailforpackages=False&rndpickval=0.27079844346895454&BookingID=6de1bf40-81f3-4ce6-861e-9a111099e25d';

		$(location).attr('href',getUrl);
		return false;
	}

});




var ht1 = $(window).height();

$('.parallax-wrp').each(function(index, el) {
	$(this).height(ht1);
});


if($('body').hasClass('cafe-page')) {
	var iScrollHeight = $('body').prop("scrollHeight");

	$(window).scroll(function() {   
		if($(window).scrollTop() + $(window).height() > $(document).height()-100) {
			$('.contact-part').slideDown('fast');
		} else {
			$('.contact-part').slideUp('fast');
		}
	});
}




});