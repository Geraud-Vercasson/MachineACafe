$(document).ready(function(){
    
    $('#gobeletFond').addClass('gobeletBack');
    $('#gobeletFace').addClass('gobeletFront');

    $('#btnTouillette').click(function(){
        $('#touillette').toggleClass('touillette');
    });

    $('#btnCafe').click(function(){
        $('#boisson').toggleClass('boissonCafe').removeClass('boissonCappuccino boissonChocolat boissonThe');
    });

    $('#btnChocolat').click(function(){
        $('#boisson').toggleClass('boissonChocolat').removeClass('boissonCappuccino boissonCafe boissonThe');
    });

    $('#btnCappuccino').click(function(){
        $('#boisson').toggleClass('boissonCappuccino').removeClass('boissonCafe boissonChocolat boissonThe');
    });

    $('#btnThe').click(function(){
        $('#boisson').toggleClass('boissonThe').removeClass('boissonCappuccino boissonChocolat boissonCafe');
    });

    $('#btnSucre').click(function(){
        $('#sucre').toggleClass('boissonSucre');
    });
});
