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

function selectDrink(doSelect,drink){
	if(doSelect === true && drink === 'cappuccino'){
		$('#btnCappuccino').attr("src","VU1-assets/etat_3.png");

	}else{
		$('#btnCappuccino').attr("src","VU1-assets/etat_1.png");
	}

}

function resetDrink(){
	$('.boisson').attr("src","VU1-assets/etat_1.png");
	
	}

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


$(document).ready(function(){
	$("#btnCappuccino").click(function(){
		if ($('#btnCappuccino').attr("src")=== "VU1-assets/etat_1.png"){
		//si le bouton est gris
			selectDrink(true, 'cappuccino');
		} else {
		// sinon si le bouton est rouge
			selectDrink(false,'cappuccino');
		}
	});

	$('#btnReset').click(function(){
		resetDrink();
	});

	$('#lumiereSucre').children().hide();

	$('#btnPlusSucre').click(function(){
		addSugar();
	});

	$('#btnMoinsSucre').click(function(){
		removeSugar();
	});

	console.log(buy(1,1,1,1,1,1,3.86));
});

