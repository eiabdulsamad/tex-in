
$(function() {
	


initAnm();

function initAnm() {
	var animTm = .1,
	delayTm = .3;
	TweenMax.to(".prt1", animTm, {'transform': 'scale(1)', ease: Sine.easeOut, delay: delayTm});
	TweenMax.to(".prt2", animTm, {'transform': 'scale(1)', ease: Sine.easeOut, delay: delayTm+.3});
	TweenMax.to(".prt3", animTm+.2, {'width': '224px', ease: Sine.easeOut, delay: delayTm+.6});
}

function blinkAnm() {
	var animTm = .05,
	delayTm = .3;

	TweenMax.to(".prt1", 0, {'transform': 'matrix(1, 0, 0, 0, 0, 0)', ease: Sine.easeOut, delay: delayTm});
	TweenMax.to(".prt2", 0, {'transform': 'matrix(1, 0, 0, 0, 0, 0)', ease: Sine.easeOut, delay: delayTm});

	TweenMax.to(".prt1", animTm, {'transform': 'matrix(1, 0, 0, 1, 0, 0)', ease: Sine.easeOut, delay: delayTm+.1});
	TweenMax.to(".prt2", animTm, {'transform': 'matrix(1, 0, 0, 1, 0, 0)', ease: Sine.easeOut, delay: delayTm+.1});
}

function zoomingAnm() {
	var animTm = .1,
	delayTm = .1;
	// TweenMax.to(".arpgs-logo", animTm, {'transform': 'scale(0.31)', ease: Sine.easeOut, delay: delayTm});
	TweenMax.to(".arpgs-logo", animTm+3, {'transform': 'scale(0.21)', ease: Sine.easeOut, delay: delayTm});
	TweenMax.to(".arpgs-logo", animTm+3, {'transform': 'scale(0.31)', ease: Sine.easeOut, delay: delayTm+3});

}

/*setTimeout(function() {
	blinkAnmInt1  = setInterval(function(){ 
		blinkAnm();
	}, 1300);

	blinkAnmInt  = setInterval(function(){ 
		clearInterval(blinkAnmInt1);
		blinkAnm();
	}, 2300);
},700);*/

setTimeout(function() {
	zoomingAnmInt1  = setInterval(function(){ 
		zoomingAnm();
	}, 1600);

	zoomingAnmInt  = setInterval(function(){
		clearInterval(zoomingAnmInt1); 
		zoomingAnm();
	}, 4300);
},1000);

$(window).load(function() {
	setTimeout(function() {
		$('.loading-wrp').fadeOut(400);
		//clearInterval(blinkAnmInt);
		clearInterval(zoomingAnmInt);
	},3300);
});

});