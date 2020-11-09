
(function () {
    const REFRIGERANTES = [4];
    const valor = [7];
    const TROCO = [7];

    var saldo = 0;
    var opcao = 1;

    REFRIGERANTES[0] = 3.50;
    REFRIGERANTES[1] = 4.80;
    REFRIGERANTES[2] = 4.30;
    REFRIGERANTES[3] = 3.90;

    valor[0] = 0.01;
    valor[1] = 0.05;
    valor[2] = 0.10;
    valor[3] = 0.25;
    valor[4] = 0.50;
    valor[5] = 1.00;
    valor[6] = 5.00;

    /*while (opcao === 1) {
        alert('Opcao 1')
    }*/


    
    
})();



(function() {
    const moneyImg = document.querySelectorAll('.money');

    moneyImg.forEach(function(img) {
        img.addEventListener('click', function(event) {
            var centavo = document.getElementById('1centavo').getAttribute('value');
                      
            console.log(event.target);
            console.log(centavo);
            alert('Money')
        })
        
    });
})();




