
(function () {
    
})();

const REFRIGERANTES = [4];
const valor = [7];
var TROCO = [7];

var saldo = 0;
var opcao = 1;
var troco = 0;
var cont = 0;

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
//var totalFinal  = 0;
// let totalComprado = 0;

(function() {
    const moneyImg = document.querySelectorAll('.money');

    
    moneyImg.forEach(function(img) {
        img.addEventListener('click', function(event) {
            var totalFinal  = 0;
            if (event.target.classList.contains('money')) {
                var preco = event.target.attributes.value.nodeValue;
                var precoConvertido = parseFloat(preco);

                let saldoAtual = document.getElementById('totalGeral').textContent;
                let saldoAlterado = precoConvertido + parseFloat(saldoAtual);

                total = parseFloat(saldoAlterado);
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


                var finalPriceConvertido  = parseFloat(finalPrice);
                let saldoCompra = document.getElementById('totalCompra').textContent;

                

                let totalAtual = document.getElementById('totalGeral').textContent;
                var saldoCompraConvertido  = parseFloat(saldoCompra);
                let totalComprado = saldoCompraConvertido + finalPriceConvertido;
                               

                if (totalAtual < finalPriceConvertido) {
                    alert('Saldo insuficiente, deposite o dinheiro');
                    return false;                    
                }else{
                    document.getElementById('finalSquare').innerHTML = '';
                    
                            

                document.getElementById('totalCompra').textContent = totalComprado;

               
                var saldoAtualizado = finalPriceConvertido - totalAtual;                
                let saldoAtualizadoConvertido = Math.abs(saldoAtualizado)
               

                document.getElementById('totalGeral').textContent = saldoAtualizadoConvertido.toFixed(2);

                const gridItem = document.createElement('tr')                
                gridItem.innerHTML = `                    
                        <td style="color: #febb0b;" colspan="2">Nome</td>
                        <td style="color: #febb0b;" colspan="2">${item.price }</td>
                    
                `;
                const cart = document.getElementById('cart2');
                const total = document.querySelector('.cart-total-container');                
                cart.insertBefore(gridItem, total);  

                
                troco = saldoAtualizadoConvertido; 
                cont = 6;

                while (cont >= 0) {
                    TROCO[cont] = 0;
                    while (troco >= valor[cont]) {
                        TROCO[cont] = TROCO[cont] + 1;
                        troco = troco - valor[cont];
                    }
                    cont = cont - 1;
                }
                
                //document.getElementById('finalSquare').style.display = 'none';
                
                cont = 0;
                for (let index = 0; TROCO[index] < 6; index++) {

                    const gridItem1 = document.createElement('div')   
                    gridItem1.className = "square";             
                    gridItem1.innerHTML = `                  
                            <div class="block">
                                <div class="centered" id="trocoPosicao">
                                    ${ TROCO[index] }
                                </div>                            
                            </div>
                    `;
                    //let ret = document.getElementsByClassName('centered');
                    let ret = document.getElementsByClassName('finalSquare');
                    console.log(ret)

                    //const cart1 = document.getElementById('trocoPosicao');
                    const total1 = document.querySelector('.teste');   
                    
                    ret[0].insertBefore(gridItem1, total1);
                   

                    

                    //ret.insertAdjacentElement('afterend', gridItem1);


                    // const gridItem1 = document.createElement('div')                
                    // gridItem1.innerHTML = `                  
                    //         <span>${ TROCO[index] }</span>
                    // `;
                    // const cart1 = document.getElementById('trocoPosicao');
                    // const total1 = document.querySelector('.teste');                
                    // cart1.insertBefore(gridItem1, total1);
                }
                
                saldo = 0; 
            }
            }
            //break;
        })
    })
})();
