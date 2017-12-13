function buy(nb5ct, nb10ct, nb20ct, nb50ct, nb1e,nb2e, price){
	let total = nb5ct*5 + nb10ct*10 + nb20ct*20 + nb50ct*50 + nb1e*100 + nb2e*200
		total= total/100;
		if(total >= price){
			return true; 
		} else {
			return false;
		}
}