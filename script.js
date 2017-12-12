
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
    drinkPictures.each(function(){
        $(this).attr('src','images/LedOff.png');
    });
    
}

function selectDrink(doSelect, drink){
    resetDrink();
    if (drink === 'thé'){
        if (doSelect === true){
            $('#ledThe').attr('src', 'images/LedOn.png');
        } else {
            $('#ledThe').attr('src', 'images/LedOff.png');
        }
    }

    if (drink === 'café'){
		if (doSelect === true) {
		  $('#ledCafe').attr("src","images/LedOn.png");
	} else {
		$('#ledCafe').attr("src","images/LedOff.png");
	   }
    }

    if (drink === 'chocolat'){
        if (doSelect === true) {
        $("#ledChocolat").attr("src", "images/LedOn.png");
        } else {
        $("#ledChocolat").attr("src", "images/LedOff.png");
        }
    }


}

function addSugar(){
    let sucreJquery = $('.sucre');
    let srcSucreVide = 'images/LedOff.png';
    let srcSucrePlein = 'images/LedOn.png';

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
    let srcSucreVide = 'images/LedOff.png';
    let srcSucrePlein = 'images/LedOn.png';

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

    if (compteur < 1){
        $('#monnayeur').html('Crédit : ' + Math.round(compteur*100) + "Cts");
    } else {
        $('#monnayeur').html('Crédit : ' + compteur + "€");       
    }
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
        if ($('#ledThe').attr('src') === 'images/LedOn.png'){
            select = false;
        }
        selectDrink(select,'thé');
    });

    $('#btnCafe').click(function(){
        let select = true;
        if ($('#ledCafe').attr('src') === 'images/LedOn.png'){
            select = false;
        }
        selectDrink(select,'café');
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

    $( "#btnChocolat").click(function() {
        let isOn=true;
         // 	selectDrink(isOn,"chocolat");
         let srcImageActuelle = $("#ledChocolat").attr("src");
    
         if (srcImageActuelle === "images/LedOff.png") {
             isOn = true;
         } else {
             isOn = false;
         }
         selectDrink(isOn,'chocolat');
    
        });

});


// fonction ​ ​​selecDrink(booléen, ​boisson) qui​ ​permet ​ ​de sélectionner ​ ​ou ​ ​désélectionner ​ ​une ​ ​boisson ​ ​(allumer ​ ​ou ​ ​éteindre ​ ​la ​ ​led).




// fonction ​ ​​resetDrink() ​ ​​qui ​ ​désélectionne ​ ​toutes ​ ​les ​ ​boissons


$(document).ready(function(){



});



