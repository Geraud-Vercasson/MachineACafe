const pieces = [2,1,0.5,0.2,0.1,0.05];
const nbPieces = [10,10,10,10,10,10];

function rendreMonnaie(credit){

    let totalRendu = 0;
    let piecesRendus = [];

    let retourCalcul = calculMonnaie(credit,nbPieces,piecesRendus);
    if (retourCalcul.credit > 0.05) {
        let indexOfLastCoin = retourCalcul.piecesRendus.length - 1;
        let retourCalcul.piecesDisponibles[indexOfLastCoin]
    }


    
}

function calculMonnaie(credit,piecesDisponibles,piecesRendus){
    
    while (credit > 0.05){
        for (let i = 0; i < pieces.length; i++){
            if (credit > pieces[i] && piecesDisponibles[i] > 0){
                piecesRendus.push(pieces[i]);
                totalRendu += pieces[i];
                piecesDisponibles[i] -= 1;
                credit -= pieces[i];
                break;
            }
    
        }
        break;
    }
    
    return {credit: credit,
            piecesDisponibles: piecesDisponibles,
            piecesRendus};
}