
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
    resetDrink();
    if (drink === 'thé'){
        if (doSelect === true){
            $('#ledThe').attr('src', 'images/1Sucre.png');
        } else {
            $('#ledThe').attr('src', 'images/1SucreVide.png');
        }
    }

    if (drink === 'café'){
		if (doSelect === true) {
		  $('#ledCafe').attr("src","images/1Sucre.png");
	} else {
		$('#ledCafe').attr("src","images/1SucreVide.png");
	   }
    }

}

// fonction addSugar() ajoute un sucre quand on appuie sur le bouton plus



function addSugar() {
        if (nbSucres <5) {
            nbSucres = nbSucres + 1;
        }  
        console.log(nbSucres);
        if (nbSucres === 1) {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1SucreVide.png");
            $("#sucreTrois").attr("src", "images/1SucreVide.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 2)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1SucreVide.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 3)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 4)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1Sucre.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 5)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1Sucre.png");
            $("#sucreCinq").attr("src", "images/1Sucre.png");
        }
    }
    
    // fonction ​​removeSugar() ​​retire un sucre quand on appuie sur le bouton moins
    
    function removeSugar() {
    
        if (nbSucres >0) {
            nbSucres = nbSucres - 1 ;
        }  
        console.log(nbSucres);
        if (nbSucres === 1) {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1SucreVide.png");
            $("#sucreTrois").attr("src", "images/1SucreVide.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 2)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1SucreVide.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 3)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 4)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1Sucre.png");
            $("#sucreCinq").attr("src", "images/1SucreVide.png");
        } else if (nbSucres === 5)  {
            $("#sucreUn").attr("src", "images/1Sucre.png");
            $("#sucreDeux").attr("src", "images/1Sucre.png");
            $("#sucreTrois").attr("src", "images/1Sucre.png");
            $("#sucreQuatre").attr("src", "images/1Sucre.png");
            $("#sucreCinq").attr("src", "images/1Sucre.png");
        } else {   
            $("#sucreUn").attr("src", "images/1SucreVide.png");
            $("#sucreDeux").attr("src", "images/1SucreVide.png");
            $("#sucreTrois").attr("src", "images/1SucreVide.png");
            $("#sucreQuatre").attr("src", "images/1SucreVide.png"); 
            $("#sucreCinq").attr("src", "images/1SucreVide.png");   
        }    
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
        if ($('#ledThe').attr('src') === 'images/1Sucre.png'){
            select = false;
        }
        selectDrink(select,'thé');
    });

    $('#btnCafe').click(function(){
        let select = true;
        if ($('#ledCafe').attr('src') === 'images/1Sucre.png'){
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

});

