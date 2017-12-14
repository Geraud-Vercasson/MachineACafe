
/*Déclaration des variables*/
let COMPTEUR = 0;
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

// Fonction addCoin Thomas
function addCoin(coin){
    COMPTEUR += coin;
    if (COMPTEUR < 1){
        $('#monnayeur').html('Crédit : ' + Math.round(COMPTEUR*100) + " Cts");
    } else {
        $('#monnayeur').html('Crédit : ' + COMPTEUR + " €");       
    }
    console.log(COMPTEUR);
}

function resetCoins(){
    COMPTEUR = 0;
    if ( COMPTEUR === 0){
        $("#monnayeur").html("Crédit : " + COMPTEUR + " €");
    }
    console.log(COMPTEUR);
}

// function addSugar(){
//     let tableauSucrePossibles = ["sucreUn","sucreDeux","sucreTrois","sucreQuatre","sucreCinq"];
//     let sucreJquery = $('.sucre');
//     let srcSucreVide = 'images/1SucreVide.png';
//     let srcSucrePlein = 'images/1Sucre.png';

//     if (nbSucres < 5){
//         nbSucres++;
//     }

//     sucreJquery.each(function(index){
//         if (index < nbSucres){
//             $(this).attr('src',srcSucrePlein);
//         }else {
//             $(this).attr('src',srcSucreVide);
//         }
//     });
// }

// function removeSugar(){
//     let tableauSucrePossibles = ["sucreUn","sucreDeux","sucreTrois","sucreQuatre","sucreCinq"];
//     let sucreJquery = $('.sucre');
//     let srcSucreVide = 'images/1SucreVide.png';
//     let srcSucrePlein = 'images/1Sucre.png';

//     if (nbSucres > 0){
//         nbSucres--;
//     }


//     sucreJquery.each(function(index){
//         if (index < nbSucres){
//             $(this).attr('src',srcSucrePlein);
//         }else {
//             $(this).attr('src',srcSucreVide);
//         }
//     });
// }

// fonction addSugar() Version Vero

// function addSugar() {
//  if (nbSucres <5) {
//      nbSucres = nbSucres + 1;
//  }  
//  console.log(nbSucres);
//  if (nbSucres === 1) {
//      $("#sucreUn").attr("src", "images/sucre_plein.png");
//      $("#sucreDeux").attr("src", "images/sucre_vide.png");
//      $("#sucreTrois").attr("src", "images/sucre_vide.png");
//      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
//      $("#sucreCinq").attr("src", "images/sucre_vide.png");
//  } else if (nbSucres === 2)  {
//      $("#sucreUn").attr("src", "images/sucre_plein.png");
//      $("#sucreDeux").attr("src", "images/sucre_plein.png");
//      $("#sucreTrois").attr("src", "images/sucre_vide.png");
//      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
//      $("#sucreCinq").attr("src", "images/sucre_vide.png");
//  } else if (nbSucres === 3)  {
//      $("#sucreUn").attr("src", "images/sucre_plein.png");
//      $("#sucreDeux").attr("src", "images/sucre_plein.png");
//      $("#sucreTrois").attr("src", "images/sucre_plein.png");
//      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
//      $("#sucreCinq").attr("src", "images/sucre_vide.png");
//  } else if (nbSucres === 4)  {
//      $("#sucreUn").attr("src", "images/sucre_plein.png");
//      $("#sucreDeux").attr("src", "images/sucre_plein.png");
//      $("#sucreTrois").attr("src", "images/sucre_plein.png");
//      $("#sucreQuatre").attr("src", "images/sucre_plein.png");
//      $("#sucreCinq").attr("src", "images/sucre_vide.png");
//  } else if (nbSucres === 5)  {
//      $("#sucreUn").attr("src", "images/sucre_plein.png");
//      $("#sucreDeux").attr("src", "images/sucre_plein.png");
//      $("#sucreTrois").attr("src", "images/sucre_plein.png");
//      $("#sucreQuatre").attr("src", "images/sucre_plein.png");
//      $("#sucreCinq").attr("src", "images/sucre_plein.png");
//  }
// }


// function addCoin(coin){
//     COMPTEUR += coinValues[coin];
//     COMPTEUR = (Math.round(COMPTEUR*100))/100;

// fonction ​​removeSugar() Version Vero

// function removeSugar() {

// 	if (nbSucres >0) {
// 		nbSucres = nbSucres - 1 ;
// 	}  
// 	console.log(nbSucres);
// 	if (nbSucres === 1) {
// 		$("#sucreUn").attr("src", "images/sucre_plein.png");
// 		$("#sucreDeux").attr("src", "images/sucre_vide.png");
// 		$("#sucreTrois").attr("src", "images/sucre_vide.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
// 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
// 	} else if (nbSucres === 2)  {
// 		$("#sucreUn").attr("src", "images/sucre_plein.png");
// 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
// 		$("#sucreTrois").attr("src", "images/sucre_vide.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
// 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
// 	} else if (nbSucres === 3)  {
// 		$("#sucreUn").attr("src", "images/sucre_plein.png");
// 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
// 		$("#sucreTrois").attr("src", "images/sucre_plein.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
// 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
// 	} else if (nbSucres === 4)  {
// 		$("#sucreUn").attr("src", "images/sucre_plein.png");
// 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
// 		$("#sucreTrois").attr("src", "images/sucre_plein.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_plein.png");
// 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
// 	} else if (nbSucres === 5)  {
// 		$("#sucreUn").attr("src", "images/sucre_plein.png");
// 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
// 		$("#sucreTrois").attr("src", "images/sucre_plein.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_plein.png");
// 		$("#sucreCinq").attr("src", "images/sucre_plein.png");
// 	} else {
// 		$("#sucreUn").attr("src", "images/sucre_vide.png");
// 		$("#sucreDeux").attr("src", "images/sucre_vide.png");
// 		$("#sucreTrois").attr("src", "images/sucre_vide.png");
// 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
// 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
// 	}
// }

// function removeSugar() {
	
// 		if (nbSucres >0) {
// 			nbSucres = nbSucres - 1 ;
// 		}  

// 	$(".sucre").each(function(index){
// 		if (index < nbSucres) {
// 			$(this).attr("src", "images/sucre_plein.png");
// 		} else {
// 			$(this).attr("src", "images/sucre_vide.png");
// 		}
// 	})
// }

// fonction ​​resetDrink() ​​désélectionne ​​toutes ​​les ​boissons

//function addCoin(coin){
//    compteur += coinValues[coin];
//    compteur = (Math.round(compteur*100))/100;
//     if (COMPTEUR < 1){
//         $('#monnayeur').html('Crédit : ' + Math.round(COMPTEUR*100) + "Cts");
//     } else {
//         $('#monnayeur').html('Crédit : ' + COMPTEUR + "€");       
//     }
// }

// function resetCoin(){
//     COMPTEUR = 0;
//     $('#monnayeur').html('Crédit : ' + COMPTEUR + "€");
// }

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
        $( "#btnChocolat").click(function() {
        let isOn=true;
         //     selectDrink(isOn,"chocolat");
         let srcImageActuelle = $("#ledChocolat").attr("src");
    
         if (srcImageActuelle === "images/LedOff.png") {
             isOn = true;
         } else {
             isOn = false;
         }
         selectDrink(isOn,'chocolat');
    });

    $('#btnPlusSucre').click(function(){
        addSugar();
    });
    $('#btnMoinsSucre').click(function(){
        removeSugar();
    });

    $(".coin").click(function(){
    let thisCoin =  parseFloat($(this).attr("alt"));
    //console.log(thisCoin);
       //console.log(coin.toFixed(2));
    addCoin(thisCoin);
      
    });

    $("#btnResetCoin").click(function(){
        resetCoins();

    });

    // $('.coin').click(function(){
    //     let thisCoin = $(this).attr('id');
    //     addCoin(thisCoin);

    // });
    // $('#btnResetCoin').click(function(){
    //     resetCoin();
    // });

});


