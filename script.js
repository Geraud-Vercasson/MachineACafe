let nbSucre = 0;

function buy(nb5ct, nb10ct, nb20ct, nb50ct, nb1e,nb2e, price){
	let total = nb5ct*5 + nb10ct*10 + nb20ct*20 + nb50ct*50 + nb1e*100 + nb2e*200
		total= total/100;
		if(total>=price){
			return true; 
		} else {
			return false;
		}
}


/*Déclaration des variables*/
let COMPTEUR = 0;
let nbSucres = 1;

/*Déclaration des fonctions */
/*
function addSugar(){

	if (nbSucre < 4){
		nbSucre = nbSucre + 1;
	}


	if (nbSucre === 1){
		$("#sucreUn").show();
	} else if (nbSucre === 2){
		$("#sucreDeux").show();
	} else if (nbSucre === 3){
		$("#sucreTrois").show();
	} else if (nbSucre === 4){
		$("#sucreQuatre").show();
	}

	
}

function removeSugar(){

	if (nbSucre > 0 && nbSucre < 5){
		nbSucre = nbSucre - 1;
	}
	if (nbSucre === 0){
		$("#sucreUn").hide();
	} else if (nbSucre === 1){
		$("#sucreDeux").hide();
	} else if (nbSucre === 2){
		$("#sucreTrois").hide();
	} else if (nbSucre === 3){
		$("#sucreQuatre").hide();
	}
	
}
v Astrid */
function resetDrink(){
    let drinkPictures = $('.boisson').parent().children('img');
    // drinkPictures.each(function(){
    //     $(this).attr('src','images/LedOff.png');
    // });
}

function selectDrink(doSelect, drink){
    resetDrink();
    if (drink === 'thé'){
        if (doSelect === true){
            $('#btnThe').attr('src', 'images/btn_the_2.png');
        } else {
            $('#btnThe').attr('src', 'images/btn_the_0.png');
        }
    }

    if (drink === 'café'){
		if (doSelect === true) {
		  $('#btnCafe').attr("src","images/btn_espresso_2.png");
	} else {
		$('#btnCafe').attr("src","images/btn_espresso_0.png");
	   }
    }

    if (drink === 'chocolat'){
        if (doSelect === true) {
        $("#btnChocolat").attr("src", "images/btn_chocolat_2.png");
        } else {
        $("#btnChocolat").attr("src", "images/btn_chocolat_0.png");
        }
    }

    if (drink === 'cappuccino'){
        if (doSelect === true) {
        $("#btnCappuccino").attr("src", "images/btn_cappuccino_2.png");
        } else {
        $("#btnCappuccino").attr("src", "images/btn_cappuccino_0.png");
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
    COMPTEUR = (Math.round(COMPTEUR*100))/100;
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


/* Script*/
$(document).ready(function(){
    $("#btnCappuccino").click(function(){
        let select = true;
        if ($("#btnCappuccino").attr('src') === 'images/btn_cappuccino_2.png'){
            select = false;
        }
        selectDrink(select,"cappuccino");
	});
        
	$('#btnPlusSucre').click(function(){
        addSugar();
	});
    
	$('#btnMoinsSucre').click(function(){
        removeSugar();
	});
    
    
    $('#btnThe').click(function(){
        let select = true;
        if ($('#btnThe').attr('src') === 'images/btn_the_2.png'){
            select = false;
        }
        selectDrink(select,'thé');
    });
    
    $('#btnCafe').click(function(){
        let select = true;
        if ($('#btnCafe').attr('src') === 'images/btn_espresso_2.png'){
            select = false;
        }
        selectDrink(select,'café');
    });
    $( "#btnChocolat").click(function() {
        let isOn=true;
        //     selectDrink(isOn,"chocolat");
         let srcImageActuelle = $("#btnChocolat").attr("src");
         
         if (srcImageActuelle === "images/btn_chocolat_0.png") {
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

    // $(".coin").click(function(){
    //     let thisCoin =  parseFloat($(this).attr("alt"));
    //     //console.log(thisCoin);
    //    //console.log(coin.toFixed(2));
    //    addCoin(thisCoin);
      
    // });
    
    // $("#btnResetCoin").click(function(){
    //     resetCoins();

    // });
    
    // $('.coin').click(function(){
        //     let thisCoin = $(this).attr('id');
        //     addCoin(thisCoin);
        
        // });
        // $('#btnResetCoin').click(function(){
            //     resetCoin();
            // });
            
});
        


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
