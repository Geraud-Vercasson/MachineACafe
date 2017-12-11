//Cette fonction permet de sélectionner ou désélectionner une boisson
function selectDrink(doSelect,drink){
	if (doSelect === true && drink === "cafe") {
		$('#btnCafe').attr("src","vue1-assets/iconecafeclick.png");
	} else {
		$('#btnCafe').attr("src","vue1-assets/iconecafe.png");
	}
};
	
//Fonction qui désélectionne toutes les boissons
function resetDrink(){
	if (selectDrink === true){
		$('#btnChocolat').attr("src","vue1-assets/iconecafe.png");
	};
}

$(document).ready(function(){
	//clique qui selectionne
	$('#btnCafe').click(function(){
		if ($('#btnCafe').attr("src")==="vue1-assets/iconecafe.png"){
			selectDrink(true,'cafe');	
		} else {
			selectDrink(false,'cafe');
		}
	});
	//clique qui reset
	$('#btnChocolat').click(function(){
		if ($('#btnChocolat').attr("src")==="vue1-assets/iconecafe.png"){
			selectDrink(true);	
		} else {
			selectDrink(false);
		}
	});
});
