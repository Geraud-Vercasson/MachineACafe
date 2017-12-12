
/*Déclaration des variables*/

let compteur = 0;
let nbSucres = 1;

const coinValues = {
    btnCinqCts : 0.05,
    btnDixCts : 0.1,
    btnVingtCts : 0.2,
    btnCinquanteCts : 0.5,
    btnUnEuro: 1,
    btnDeuxEuros: 2
};


/*Déclaration des fonctions */

function resetDrink(){

    let drinkPictures = $('.boisson').parent().children('img');
    drinkPictures.each(function(index){
        $(this).attr('src','images/1SucreVide.png');
    });
    
}

function selectDrink(doSelect, drink){

    if (drink === 'thé'){
        if (doSelect === true){
            $('#ledThe').attr('src', 'images/1Sucre.png');
        } else {
            $('#ledThe').attr('src', 'images/1SucreVide.png');
        }
    }
		if (doSelect === true && drink === "cafe") {
		$('#btnCafe').attr("src","vue1-assets/iconecafeclick.png");
	} else {
		$('#btnCafe').attr("src","vue1-assets/iconecafe.png");
	}

}

function addSugar(){
    let sucreJquery = $('.sucre');
    let srcSucreVide = 'images/1SucreVide.png';
    let srcSucrePlein = 'images/1Sucre.png';

    if (nbSucres < 5){
        nbSucres++;
    }

    sucreJquery.each(function(index){
        if (index < nbSucres){
            $(this).attr('src',srcSucrePlein);
        }else {
            $(this).attr('src',srcSucreVide);
        }
    });
}

function removeSugar(){
    let sucreJquery = $('.sucre');
    let srcSucreVide = 'images/1SucreVide.png';
    let srcSucrePlein = 'images/1Sucre.png';

    if (nbSucres > 0){
        nbSucres--;
    }


    sucreJquery.each(function(index){
        if (index < nbSucres){
            $(this).attr('src',srcSucrePlein);
        }else {
            $(this).attr('src',srcSucreVide);
        }
    });
}

function addCoin(coin){
    compteur += coinValues[coin];
    compteur = (Math.round(compteur*100))/100;
    $('#monnayeur').html('Crédit : ' + compteur + "€");
}

function resetCoin(){
    compteur = 0;
    $('#monnayeur').html('Crédit : ' + compteur + "€");
}

/* Script*/

$(document).ready(function(){

    $('#btnResetDrink').click(function(){
        resetDrink();
    });

    $('#btnThe').click(function(){
        let select = true;
        if ($('#ledThe').attr('src') === 'images/1Sucre.png'){
            select = false;
        }
        selectDrink(select,'thé');
    });

    $('#btnPlusSucre').click(function(){
        addSugar();
    });
    $('#btnMoinsSucre').click(function(){
        removeSugar();
    });
    $('.coin').click(function(){
        let thisCoin = $(this).attr('id');
        addCoin(thisCoin);

    });
    $('#btnResetCoin').click(function(){
        resetCoin();
    });
	$('#btnCafe').click(function(){
		if ($('#btnCafe').attr("src")==="vue1-assets/iconecafe.png"){
			selectDrink(true,'cafe');	
		} else {
			selectDrink(false,'cafe');
		}
	});
});

