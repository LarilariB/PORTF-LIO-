function butt(){
    var valor = document.getElementById("preeço");
    var nome = document.getElementById("pro");
    let res = document.getElementById("resul");
    let ressu = document.getElementById("resull");

    var resultado = parseInt(valor.value);
    var ut = valor.value / 2;
    var fim = resultado + resultado + ut;

    res.innerHTML = (`${nome.value} - Promoção: Leve 3 por R$: ${fim}`);
    ressu.innerHTML = (`O 3° produto custa apenas R$ ${ut}`);
          
}