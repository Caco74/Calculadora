//
// //Patrón Módulo
// var Calculadora = {
//   //Método de Inicialización
//   init: function(){
//     this.tamañoRed()
//     this.tamañoOrig()
//     this.presionarTecla()
//     var tecla = document.getElementById('5')
//   },
//   tamañoRed: function(){
//     var tecla = document.getElementById('6')
//     tecla.style="padding: 5px;"
//   },
//   tamañoOrig: function(){
//     var tecla = document.getElementById('6')
//     tecla.style=""
//   },
//   presionarTecla: function(){
//     document.getElementById('6').onmousedown = tamañoRed()
//     document.getElementById('6').onmouseup  = tamañoOrig()
//   }
//
//
// }//Fin Patrón Módulo
//
// Calculadora.init()






var myApp = ( function(){

  var foo = 'Module Pattern';
  var bar = 'ver 1.0';


  return {
    init: function(){
      this.tamañoRed()
      this.tamañoOrig()
      this.presionarTecla()
      this.asociarEventoNombre();
      var tecla = document.getElementById('5')
    },
    presionarTecla: function(){
      var self = this
      var tecla = document.querySelector('body')
      tecla.onmousedown =  function(){
        self.tamañoRed()
      }
      tecla.onkeypress = function(){
        self.tamañoRed()
      }
      tecla.onmouseup = function(){
        self.tamañoOrig()
      }
      tecla.onkeyup = function(){
        self.tamañoOrig()
      }
      return tecla
    },
    tamañoRed: function(){
      var codigo = event.which || event.keyCode;
      if (codigo >= 48 && codigo <= 57) {
        document.getElementById(String.fromCharCode(codigo)).style="padding: 5px;"
        console.log(String.fromCharCode(codigo) + " keyPress");
      }
    },
    tamañoOrig: function(evt){
      var e = evt || window.event;       //Obtenemos el event
      var key = evt.keyCode || evt.which; //Tecla presionada
      console.log("key pressed: " + key);
      // document.getElementById('0').style=""
      // document.getElementById('1').style=""
      // document.getElementById('2').style=""
      // document.getElementById('3').style=""
      // document.getElementById('4').style=""
      // document.getElementById('5').style=""
      // document.getElementById('6').style=""
      // document.getElementById('7').style=""
      // document.getElementById('8').style=""
      // document.getElementById('9').style=""
    },
    sum: function( param1, param2 ){
      return param1 + param2;
    },
    myMessage: function(){
      return foo + ' ' + bar;
    }
    // cacoNob: function asociarEventoNombre(){
    //   var elementoWeb = document.querySelector("input");
    //   elementoWeb.onkeypress = funcionEventoNombre;
    // },
    // nobCaco: function funcionEventoNombre(){
    //   var tecla = event.which || event.keyCode;
    //   console.log("Presionaste la tecla: " + String.fromCharCode(tecla)+ " -- Campo Nombre |");
    // }

  }
})();

console.log( myApp.myMessage() ); // Module Pattern ver 1.0
console.log( myApp.tamañoOrig() ); // Module Pattern ver 1.0
console.log( myApp.presionarTecla() ); // Module Pattern ver 1.0
console.log( myApp.sum( 10, 5 ) ); // myApp.sum is not a function. sum es privada
