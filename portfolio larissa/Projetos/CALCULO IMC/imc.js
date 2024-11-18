function calcular(){
    var nome = document.getElementById("nomeid").value;
    var sexo = document.getElementById("sexoid").value;
    var peso = document.getElementById("pesoid").value;
    var altura = document.getElementById("alturaid").value;
    var h2 =document.getElementById("result");
    var imc = peso / (altura * altura);
    var pesoideal= 0;
    var pesoacima= 0;
    var pesoabaixo= 0;

    if(sexo.value =="M"){
        pesoIdeal = 26.4 * (altura * altura);

        if (imc < 20.7)
        {
           h2.innerHTML(`${nome.value} esta abaixo do peso ideal`);
           
        }

        else if (imc >= 20.7 & imc <= 26.4)
        {
            h2.innerHTML(`${nome.value} está no peso normal`);
        }

        else if (imc > 26.4 & imc <= 27.8)
        {
            pesoPerder = peso - pesoideal;

            h2.innerHTML(`${nome.value}  está marginalmente acima do peso. Precisa perder; ${pesoPerder}`);
           
        }
        else if (imc > 27.8 & imc <= 31.1)
        {
            pesoPerder = peso - pesoideal;

            h2.innerHTML(`${nome.value} está acima do peso ideal. Precisa perder:  ${pesoPerder}`);
        }
        else if (imc > 31.1)
        {
            pesoPerder = peso - pesoideal;

            h2.innerHTML(`${nome.value} está obeso. Precisa perder: ${pesoPerder}`);
        }
    }
         



            

    }

