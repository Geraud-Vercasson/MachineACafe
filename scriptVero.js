
// fonction ​ ​​selecDrink(booléen, ​boisson) qui​ ​permet ​ ​de sélectionner ​ ​ou ​ ​désélectionner ​ ​une ​ ​boisson ​ ​(allumer ​ ​ou ​ ​éteindre ​ ​la ​ ​led).
// Déclaration des variables

let nbSucres = 0;                         

// Déclaration des fonctions

function selectDrink(doSelect, drink) {
	if (drink === 'chocolat');
		if (doSelect === true) {
		$("#btnChocolat").attr("src", "images/btn_chocolat_2.png");
	} else {
		$("#btnChocolat").attr("src", "images/btn_chocolat_0.png");
	}
};

// fonction addSugar() ajoute un sucre quand on appuie sur le bouton plus

// function addSugar() {
// 	if (nbSucres <5) {
// 		nbSucres = nbSucres + 1;
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
// 	}
// }

function addSugar(){
	if (nbSucres <5) {
		nbSucres += 1;
	}  

	$(".sucre").each(function(index){
		if (index < nbSucres) {
			$(this).attr("src", "images/sucre_plein.png");
		} else {
			$(this).attr("src", "images/sucre_vide.png");
		}
	})
}


// fonction ​​removeSugar() ​​retire un sucre quand on appuie sur le bouton moins

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

function removeSugar() {
	
		if (nbSucres >0) {
			nbSucres = nbSucres - 1 ;
		}  

	$(".sucre").each(function(index){
		if (index < nbSucres) {
			$(this).attr("src", "images/sucre_plein.png");
		} else {
			$(this).attr("src", "images/sucre_vide.png");
		}
	})
}



// fonction ​​resetDrink() ​​désélectionne ​​toutes ​​les ​boissons

function resetDrink() {

	let drinkPictures = $('.boisson').parent().children('img');
	console.log(drinkPictures);
    drinkPictures.each(function(){
        $(this).attr('src','images/btn_chocolat_0.png');
    });
    
}

// script global

$(document).ready(function(){


	$( "#btnChocolat").click(function() {

		let isOn=true;
		let srcImageActuelle = $("#btnChocolat").attr("src");

		if (srcImageActuelle === "images/btn_chocolat_0.png") {
			isOn = true;
		} else {
			isOn = false;
		}
		selectDrink(isOn,'chocolat');

	});


	$("#btnResetDrink").click(function(){
		resetDrink();
	})


	$("#btnPlusSucre").click(function(){
		addSugar();
	});


	$("#btnMoinsSucre").click(function(){
		removeSugar();
	});

});





// // 6 ​ ​boutons ​ ​représentent ​ ​les ​ ​pièces ​ ​de ​ ​5ct, ​ ​10ct, ​ ​20ct, ​ ​50ct, ​ ​1€ ​ ​et ​ ​2€.
// // Implémentez ​ ​une ​ ​fonction ​ ​​addCoin(coin) ​ ​​qui ​ ​permet ​ ​d’ajouter ​ ​​ ​une ​ ​pièce

// function addCoin(coin) {

// };

// // Affichez ​ ​la ​ ​somme ​ ​introduite ​ ​dans ​ ​le ​ ​monnayeur

// // Ajoutez ​ ​un ​ ​bouton ​ ​de ​ ​rendu ​ ​de ​ ​monnaie

// // Implémentez ​ ​une ​ ​fonction ​ ​​resetCoins() ​ ​qui ​ ​permet ​ ​de ​ ​rendre ​ ​la ​ ​monnais ​ ​(réinitialiser le ​ ​compteur)

// function resetCoins() {

// };