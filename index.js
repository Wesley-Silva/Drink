
(function () {
    
})();

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

//var total = [];
var total = 0;
var totalFinal  = 0;
(function() {
    const moneyImg = document.querySelectorAll('.money');

    moneyImg.forEach(function(img) {
        img.addEventListener('click', function(event) {
            if (event.target.classList.contains('money')) {
                var preco = event.target.attributes.value.nodeValue;
                var precoConvertido = parseFloat(preco);
                total = parseFloat(precoConvertido );
                totalFinal += parseFloat(total);
                document.getElementById('totalGeral').textContent = totalFinal .toFixed(2);
            } 
        })        
    });

    const refriBtn = document.querySelectorAll('.buttons');

    refriBtn.forEach(function(btn) {
        btn.addEventListener('click', function (event) {
            //console.log(event.target)
            if (event.target.parentElement.classList.contains('buttons')) {
                //console.log(event.target.parentElement.previousElementSibling.src);
                //console.log(event.target.parentElement.previousElementSibling.textContent);              
                const item = {};

                var price = event.target.parentElement.previousElementSibling.textContent;  
                
                let finalPrice = price.slice(2).trim();
                item.price = finalPrice;

                const gridItem = document.createElement('tr')
                //gridItem.classList.add('card-container');
                gridItem.innerHTML = `                    
                        <td style="color: #febb0b;" colspan="2">Nome</td>
                        <td style="color: #febb0b;" colspan="2">${item.price }</td>
                    
                `;
                const cart = document.getElementById('cart2');
                const total = document.querySelector('.cart-total-container');
                
                cart.insertBefore(gridItem, total);                
            }
        })
    })

})();
