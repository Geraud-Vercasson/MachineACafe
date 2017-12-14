
//console.log('Quelques ressources : ');
//console.log(' - https://www.w3schools.com/css/css_background.asp');

let nb5ct = 0;

function add5ct(){

	let numberOfDivs = $('.coin5ct').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins5ct');

	let newCoinOnStack = '<div class="coin5ct" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img5ct">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove5ct(){
 $('.coin5ct').first().remove();

}

let nb10ct = 0;

function add10ct(){

	let numberOfDivs = $('.coin10ct').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins10ct');

	let newCoinOnStack = '<div class="coin10ct" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img10ct">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove10ct(){
 $('.coin10ct').first().remove();

}

let nb20ct = 0;

function add20ct(){

	let numberOfDivs = $('.coin20ct').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins20ct');

	let newCoinOnStack = '<div class="coin20ct" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img20ct">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove20ct(){
 $('.coin20ct').first().remove();

}

let nb50ct = 0;

function add50ct(){

	let numberOfDivs = $('.coin50ct').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins50ct');

	let newCoinOnStack = '<div class="coin50ct" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img50ct">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove50ct(){
 $('.coin50ct').first().remove();

}

let nb1euro = 0;

function add1euro(){

	let numberOfDivs = $('.coin1euro').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins1euro');

	let newCoinOnStack = '<div class="coin1euro" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img1euro">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove1euro(){
 $('.coin1euro').first().remove();

}

let nb2euro = 0;

function add2euro(){

	let numberOfDivs = $('.coin2euro').length;
	let jQueryFirstElementAboveCoins = $('#btnMoins2euro');

	let newCoinOnStack = '<div class="coin2euro" style="z-index: ' + (numberOfDivs + 1) + ';"> <img src="images/coin.png" class="img2euro">'

	jQueryFirstElementAboveCoins.after(newCoinOnStack);
}

function remove2euro(){
 $('.coin2euro').first().remove();

}

$(document).ready(function(){
	//$('img').hide();

	$('#btnPlus5ct').click(function(){
		add5ct();
	});

	$('#btnMoins5ct').click(function(){
		remove5ct();
	});

	$('#btnPlus10ct').click(function(){
		add10ct();
	});

	$('#btnMoins10ct').click(function(){
		remove10ct();
	});

	$('#btnPlus20ct').click(function(){
		add20ct();
	});

	$('#btnMoins20ct').click(function(){
		remove20ct();
	});
	$('#btnPlus50ct').click(function(){
		add50ct();
	});

	$('#btnMoins50ct').click(function(){
		remove50ct();
	});
	$('#btnPlus1euro').click(function(){
		add1euro();
	});

	$('#btnMoins1euro').click(function(){
		remove1euro();
	});
	$('#btnPlus2euro').click(function(){
		add2euro();
	});

	$('#btnMoins2euro').click(function(){
		remove2euro();
	});
});