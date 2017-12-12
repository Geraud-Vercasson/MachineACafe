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

});

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












