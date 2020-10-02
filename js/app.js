var Calculadora = {};

Calculadora = {
   display: document.getElementById('display'),
   tecla0: document.getElementById('0'),
   tecla1: document.getElementById('1'),
   tecla2: document.getElementById('2'),
   tecla3: document.getElementById('3'),
   tecla4: document.getElementById('4'),
   tecla5: document.getElementById('5'),
   tecla6: document.getElementById('6'),
   tecla7: document.getElementById('7'),
   tecla8: document.getElementById('8'),
   tecla9: document.getElementById('9'),
   teclaOn: document.getElementById('on'),
   teclaSignoMenos: document.getElementById('sign'),
   raiz:document.getElementById('raiz'),
   division: document.getElementById('dividido'),
   resta: document.getElementById('menos'),
   teclaPunto: document.getElementById('punto'),
   igual: document.getElementById('igual'),
   suma: document.getElementById('mas'),
   multiplica: document.getElementById('por'),


   init: function(){
     this.tecla0.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
         if (Calculadora.display.innerHTML == "0") {
             Calculadora.display.innerHTML = "0";
         } else {
           Calculadora.display.innerHTML += "0"
         }
       }
     })

     this.tecla1.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "1";
           } else {
               Calculadora.display.innerHTML += "1";
           }
       }


     })
     this.tecla2.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "2";
           } else {
               Calculadora.display.innerHTML += "2";
           }
       }
     })
     this.tecla3.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "3";
           } else {
               Calculadora.display.innerHTML += "3";
           }
       }
     })
     this.tecla4.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "4";
           } else {
               Calculadora.display.innerHTML += "4";
           }
       }
     })
     this.tecla5.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "5";
           } else {
               Calculadora.display.innerHTML += "5";
           }
       }
     })
     this.tecla6.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "6";
           } else {
               Calculadora.display.innerHTML += "6";
           }
       }
     })
     this.tecla7.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "7";
           } else {
               Calculadora.display.innerHTML += "7";
           }
       }
     })
     this.tecla8.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "8";
           } else {
               Calculadora.display.innerHTML += "8";
           }
       }
     })
     this.tecla9.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.length <= 7) {
           if (Calculadora.display.innerHTML == "0") {
               Calculadora.display.innerHTML = "9";
           } else {
               Calculadora.display.innerHTML += "9";
           }
       }
     })
     this.teclaOn.addEventListener("click", function (){
       Calculadora.display.innerHTML = "0"
     })
     this.teclaSignoMenos.addEventListener("click", function (){
      Calculadora.display.innerHTML *= "-1";
      if(Calculadora.display.innerHTML == "0"){
          Calculadora.display.innerHTML = ""
      }
     })
     //tecla decimal
     this.teclaPunto.addEventListener("click", function (){
       if (Calculadora.display.innerHTML.indexOf(".") == -1) {
             if (Calculadora.display.innerHTML == "0")
                 Calculadora.display.innerHTML = "0.";
             else
                 Calculadora.display.innerHTML += ".";
         }
     })
//teclas operaciones
this.suma.addEventListener("click", function (){
  if (Calculadora.display.innerHTML.length <= 9){
    operandoa = Calculadora.display.innerHTML;
          operacion = "+";
          limpiar();
  }
})
this.resta.addEventListener("click", function (){
  operandoa = Calculadora.display.innerHTML;
        operacion = "-";
        limpiar();
})
this.multiplica.addEventListener("click", function (){
    operandoa = Calculadora.display.innerHTML;
          operacion = "*";
          limpiar();

})
this.raiz.addEventListener("click", function (){
    operandoa = Calculadora.display.innerHTML;
          operacion = "]";
          resolver();

})
this.division.addEventListener("click", function (){
    operandoa = Calculadora.display.innerHTML;
          operacion = "/";
          limpiar();

})
this.igual.addEventListener("click", function (){
    operandob = Calculadora.display.innerHTML;
        resolver();

})

function limpiar(){
  Calculadora.display.innerHTML = ""
}
// operaciones
function resolver(){
  var res = 0;

  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      res = res.toString().substring(0,8);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        res = res.toString().substring(0,8);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      res = res.toString().substring(0,8);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      res = res.toString().substring(0,8);

      break;
    case "]":
      res = Math.sqrt(parseFloat(operandoa))
      res = res.toString().substring(0,8);
      break;
  }

    Calculadora.display.innerHTML = res;

}



   }//llave de cierre de init
 };

Calculadora.init();
