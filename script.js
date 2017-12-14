
/*Déclaration des variables*/
let COMPTEUR = 0;
let NBSUCRES = 0;
let SELECTED = "";


const PIECES = {
    '5cts':0,
    '10cts':0,
    '20cts':0,
    '50cts':0,
    '1euro':0,
    '2euros':0
}

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

function affiche(string){
    $('#afficheur').html(string);
}

function total(){
    let total = 0;

    total += PIECES['5cts'] * 0.05;
    total += PIECES['10cts'] * 0.10;
    total += PIECES['20cts'] * 0.20;
    total += PIECES['50cts'] * 0.50;
    total += PIECES['1euro'] * 1;
    total += PIECES['2euros'] * 2;

    total = Math.round(total * 100) / 100

    return total;
}

function resetDrink(){
    $('#btnThe').attr('src', 'images/btn_the_0.png');
    $('#btnCafe').attr("src","images/btn_espresso_0.png");
    $("#btnChocolat").attr("src", "images/btn_chocolat_0.png");
    $("#btnCappuccino").attr("src", "images/btn_cappuccino_0.png");
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

    if (doSelect === true){
        SELECTED = drink;
    } else {
        SELECTED = "";
    }
}

function addSugar(){
    let tableauSrcSucres = ["images/Sucre_Etat_0.png",
    "images/Sucre_Etat_1.png",
    "images/Sucre_Etat_2.png",
    "images/Sucre_Etat_3.png",
    "images/Sucre_Etat_4.png",
    "images/Sucre_Etat_5.png"];
    
    if (NBSUCRES < 5) {
        NBSUCRES = NBSUCRES + 1;
    }
    
    $('#sucres').attr('src',tableauSrcSucres[NBSUCRES]);
    
}

function removeSugar(){
    let tableauSrcSucres = ["images/Sucre_Etat_0.png",
    "images/Sucre_Etat_1.png",
    "images/Sucre_Etat_2.png",
    "images/Sucre_Etat_3.png",
    "images/Sucre_Etat_4.png",
    "images/Sucre_Etat_5.png"];
    
    if (NBSUCRES > 0) {
        NBSUCRES = NBSUCRES - 1;
    }
    
    $('#sucres').attr('src',tableauSrcSucres[NBSUCRES]);
    
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
    switch (coin){
        case 0.05:
        PIECES['5cts'] += 1;
        break;

        case 0.1:
        PIECES['10cts'] += 1;
        break;

        case 0.2:
        PIECES['20cts'] += 1;
        break;

        case 0.5:
        PIECES['50cts'] += 1;
        break;

        case 1:
        PIECES['1euro'] += 1;
        break;

        case 2:
        PIECES['2euros'] += 1;
        break;
    }

    affiche(total().toFixed(2));
    
}

function resetCoins(){

    COMPTEUR = 0;
    let coins = ['5cts','10cts','20cts','50cts','1euro','2euros'];

    if ( COMPTEUR === 0){
        $("#monnayeur").html("Crédit : " + COMPTEUR + " €");
    }
    console.log(COMPTEUR);

    for (let i = 0; i < coins.length; i++){
        PIECES[coins[i]] = 0;
    }
}


// Fonction addCoin Véro

// function addCoin(coin) {
//     COMPTEUR += coin;
//     // Je gère les problèmes de virgules
    
//     let resultatAAfficher= Math.round((COMPTEUR)*100) /100;
//     console.log(resultatAAfficher);
    
//     // Je gère l'affichage avec 2 chiffres après la virgule

//     resultatAAfficher = resultatAAfficher.toFixed([2]);

//         $("#afficheurMonnaie").html("Crédit : " + resultatAAfficher + " €");
//     // }
    
// }


// Functions gestion du stock d'ingrédients

function consumeCoffee(nbDoses){
    let heightNow = $("#coffee").css("height").split('px')[0];
    // console.log(heightNow);
    let retire =  heightNow - (nbDoses*10);
    // console.log(retire);
    $("#coffee").css("height", retire);
}

function consumeChocolat(nbDoses){
    let heightNow = $("#chocolat").css("height").split('px')[0];
    // console.log(heightNow);
    let retire =  heightNow - (nbDoses*10);
    // console.log(retire);
    $("#chocolat").css("height", retire);
}

function consumeThe(nbDoses){
    let heightNow = $("#the").css("height").split('px')[0];
    // console.log(heightNow);
    let retire =  heightNow - (nbDoses*10);
    // console.log(retire);
    $("#the").css("height", retire);
}

function consumeWater(nbDoses){
    let heightNow = $("#water").css("height").split('px')[0];
    // console.log(heightNow);
    let retire =  heightNow - (nbDoses*10);
    // console.log(retire);
    $("#water").css("height", retire);
}

function consumeMilk(nbDoses){
    let heightNow = $("#milk").css("height").split('px')[0];
    // console.log(heightNow);
    let retire =  heightNow - (nbDoses*10);
    // console.log(retire);
    $("#milk").css("height", retire);
}

// Fonction addWater non utilisée car bouton reset pour remplir tout


// function addWater(nbDoses){
//     let heightNow = $("#water").css("height").split('px')[0];
//     console.log(heightNow);
//     let retire =  parseInt(heightNow) + (nbDoses*10);
//     console.log(retire);
//     $("#water").css("height", retire);
   
// }



function buy(nb5ct, nb10ct, nb20ct, nb50ct, nb1e,nb2e, price){
    let total = nb5ct*5 + nb10ct*10 + nb20ct*20 + nb50ct*50 + nb1e*100 + nb2e*200;
        total= total/100;
        if(total>=price){
            return true; 
        } else {
            return false;
        }
}


function displayDrink(){
    $('#gobeletFond').addClass('gobeletBack');
    $('#gobeletFace').addClass('gobeletFront');
   }
   
   function displayTouillette(){
       $('#touillette').addClass('touillette');
   }
   
   function displayBoisson(boissonChoisie){
       $('#boisson').removeClass().addClass('gobeletElement');
       let className = "";
       if (boissonChoisie === "cafe"){
           className = "boissonCafe";
       } else if (boissonChoisie === "cappuccino"){
           className = 'boissonCappuccino';
       } else if (boissonChoisie === "chocolat"){
           className = "boissonChocolat";
       } else if (boissonChoisie === 'the'){
           className = 'boissonThe';
       }
       $('#boisson').addClass(className);
   }
   
   function displaySucre(){
       $('#sucre').addClass('boissonSucre');
   }



/* Script*/

$(document).ready(function(){

    $('#pieces').hide();

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
    
    

    $('#btnCafe').click(function(){
        let select = true;
        if ($('#btnCafe').attr('src') === 'images/btn_espresso_2.png'){

            select = false;
        }

        consumeCoffee(1);
        consumeWater(2);

        selectDrink(select,'café');


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
        selectDrink(select,'café');
    }

    });
    

    $( "#btnChocolat").click(function() {
        let isOn=true;
        let srcImageActuelle = $("#btnChocolat").attr("src");
         
         if (srcImageActuelle === "images/btn_chocolat_0.png") {
             isOn = true;
            } else {
                isOn = false;
            }
            
            consumeMilk(1);
            consumeChocolat(1);
            consumeWater(2);

            selectDrink(isOn,'chocolat');
    });


    $('#btnThe').click(function(){
        let select = true;
        if ($('#btnThe').attr('src') === 'images/btn_the_2.png'){
            select = false;
        }
        consumeWater(2)
        consumeThe (5);

        selectDrink(select,'thé');
    });



    $('#reset').click(function(){
        $('#water').css('height','300');
        


    $('#btnPay').click(function(){
    });



    
    $('#fente').click(function(){
        if ($('#pieces').css("display") === "none"){
            
            $('#pieces').show();
        } else {

            $('#pieces').hide();
        }
    });

    $('#btn5cts').click(function(){
        addCoin(0.05);
    });

    
    $('#btn10cts').click(function(){
        addCoin(0.1);
    });

    
    $('#btn20cts').click(function(){
        addCoin(0.2);
    });

    
    $('#btn50cts').click(function(){
        addCoin(0.5);
    });

    
    $('#btn1euro').click(function(){
        addCoin(1);
    });

    
    $('#btn2euro').click(function(){
        addCoin(2);



    });

    $('#btnPay').click(function(){
        let drinkPrice = 0.5;

        let canBuy = buy(PIECES['5cts'],PIECES['10cts'],PIECES['20cts'],PIECES['50cts'],PIECES['1euro'],PIECES['2euros'],drinkPrice);
        
        

    });

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
            

        


        // function addSugar(){
        //     let tableauSucrePossibles = ["sucreUn","sucreDeux","sucreTrois","sucreQuatre","sucreCinq"];
        //     let sucreJquery = $('.sucre');
        //     let srcSucreVide = 'images/1SucreVide.png';
        //     let srcSucrePlein = 'images/1Sucre.png';
        
        //     if (NBSUCRES < 5){
        //         NBSUCRES++;
        //     }
        
        //     sucreJquery.each(function(index){
        //         if (index < NBSUCRES){
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
        
        //     if (NBSUCRES > 0){
        //         NBSUCRES--;
        //     }
        
        
        //     sucreJquery.each(function(index){
        //         if (index < NBSUCRES){
        //             $(this).attr('src',srcSucrePlein);
        //         }else {
        //             $(this).attr('src',srcSucreVide);
        //         }
        //     });
        // }
        
        // fonction addSugar() Version Vero
        
        // function addSugar() {
        //  if (NBSUCRES <5) {
        //      NBSUCRES = NBSUCRES + 1;
        //  }  
        //  console.log(NBSUCRES);
        //  if (NBSUCRES === 1) {
        //      $("#sucreUn").attr("src", "images/sucre_plein.png");
        //      $("#sucreDeux").attr("src", "images/sucre_vide.png");
        //      $("#sucreTrois").attr("src", "images/sucre_vide.png");
        //      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
        //      $("#sucreCinq").attr("src", "images/sucre_vide.png");
        //  } else if (NBSUCRES === 2)  {
        //      $("#sucreUn").attr("src", "images/sucre_plein.png");
        //      $("#sucreDeux").attr("src", "images/sucre_plein.png");
        //      $("#sucreTrois").attr("src", "images/sucre_vide.png");
        //      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
        //      $("#sucreCinq").attr("src", "images/sucre_vide.png");
        //  } else if (NBSUCRES === 3)  {
        //      $("#sucreUn").attr("src", "images/sucre_plein.png");
        //      $("#sucreDeux").attr("src", "images/sucre_plein.png");
        //      $("#sucreTrois").attr("src", "images/sucre_plein.png");
        //      $("#sucreQuatre").attr("src", "images/sucre_vide.png");
        //      $("#sucreCinq").attr("src", "images/sucre_vide.png");
        //  } else if (NBSUCRES === 4)  {
        //      $("#sucreUn").attr("src", "images/sucre_plein.png");
        //      $("#sucreDeux").attr("src", "images/sucre_plein.png");
        //      $("#sucreTrois").attr("src", "images/sucre_plein.png");
        //      $("#sucreQuatre").attr("src", "images/sucre_plein.png");
        //      $("#sucreCinq").attr("src", "images/sucre_vide.png");
        //  } else if (NBSUCRES === 5)  {
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
        
        // 	if (NBSUCRES >0) {
        // 		NBSUCRES = NBSUCRES - 1 ;
        // 	}  
        // 	console.log(NBSUCRES);
        // 	if (NBSUCRES === 1) {
        // 		$("#sucreUn").attr("src", "images/sucre_plein.png");
        // 		$("#sucreDeux").attr("src", "images/sucre_vide.png");
        // 		$("#sucreTrois").attr("src", "images/sucre_vide.png");
        // 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
        // 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
        // 	} else if (NBSUCRES === 2)  {
        // 		$("#sucreUn").attr("src", "images/sucre_plein.png");
        // 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
        // 		$("#sucreTrois").attr("src", "images/sucre_vide.png");
        // 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
        // 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
        // 	} else if (NBSUCRES === 3)  {
        // 		$("#sucreUn").attr("src", "images/sucre_plein.png");
        // 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
        // 		$("#sucreTrois").attr("src", "images/sucre_plein.png");
        // 		$("#sucreQuatre").attr("src", "images/sucre_vide.png");
        // 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
        // 	} else if (NBSUCRES === 4)  {
        // 		$("#sucreUn").attr("src", "images/sucre_plein.png");
        // 		$("#sucreDeux").attr("src", "images/sucre_plein.png");
        // 		$("#sucreTrois").attr("src", "images/sucre_plein.png");
        // 		$("#sucreQuatre").attr("src", "images/sucre_plein.png");
        // 		$("#sucreCinq").attr("src", "images/sucre_vide.png");
        // 	} else if (NBSUCRES === 5)  {
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
            
        // 		if (NBSUCRES >0) {
        // 			NBSUCRES = NBSUCRES - 1 ;
        // 		}  
        
        // 	$(".sucre").each(function(index){
        // 		if (index < NBSUCRES) {
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
