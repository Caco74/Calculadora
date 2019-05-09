var dividir  = document.getElementById('dividido');
var producto = document.getElementById('por');
var menos    = document.getElementById('menos')
var punto    = document.getElementById('punto')
var igual    = document.getElementById('igual')
var mas      = document.getElementById('mas')
var on       = document.getElementById('on')
var sign     = document.getElementById('sign')
var raiz     = document.getElementById('raiz')
var cero     = document.getElementById('0')
var uno      = document.getElementById('1')
var dos      = document.getElementById('2')
var tres     = document.getElementById('3')
var cuatro   = document.getElementById('4')
var cinco    = document.getElementById('5')
var seis     = document.getElementById('6')
var siete    = document.getElementById('7')
var ocho     = document.getElementById('8')
var nueve    = document.getElementById('9')

var Calculadora = {
  eventoBotones: function() {
    dividir.addEventListener('mousedown', function() {
      dividir.style.padding = '7px';
      console.log('El botón está siendo presionado.');
    })
    dividir.addEventListener('mouseup', function() {
      dividir.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    producto.addEventListener('mousedown', function() {
      producto.style.padding = '7px';
      console.log('El botón está siendo presionado.');
    })
    producto.addEventListener('mouseup', function() {
      producto.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    menos.addEventListener('mousedown', function() {
      menos.style.padding = '7px';
      console.log('El botón está siendo presionado.');
    })
    menos.addEventListener('mouseup', function() {
      menos.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    punto.addEventListener('mousedown', function() {
      punto.style.padding = '7px';
      console.log('El botón está siendo presionado.');
    })
    punto.addEventListener('mouseup', function() {
      punto.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    igual.addEventListener('mousedown', function() {
      igual.style.padding = '7px';
      console.log('El botón está siendo presionado.');
    })
    igual.addEventListener('mouseup', function() {
      igual.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    mas.addEventListener('mousedown', function() {
      mas.style.padding = '5px';
      console.log('El botón está siendo presionado.');
    })
    mas.addEventListener('mouseup', function() {
      mas.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    on.addEventListener('mousedown', function() {
      on.style.padding = '5px';
      console.log('El botón está siendo presionado.');
    })
    on.addEventListener('mouseup', function() {
      on.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    sign.addEventListener('mousedown', function() {
      sign.style.padding = '5px';
      console.log('El botón está siendo presionado.');
    })
    sign.addEventListener('mouseup', function() {
      sign.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    raiz.addEventListener('mousedown', function() {
      raiz.style.padding = '5px';
      console.log('El botón está siendo presionado.');
    })
    raiz.addEventListener('mouseup', function() {
      raiz.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    cero.addEventListener('mousedown', function() {
      cero.style.padding = '5px';
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = 0;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    cero.addEventListener('mouseup', function() {
      cero.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    uno.addEventListener('mousedown', function() {
      uno.style.padding = '5px';
      var num = 1;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    uno.addEventListener('mouseup', function() {
      uno.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    dos.addEventListener('mousedown', function() {
      dos.style.padding = '5px';
      var num = 2;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    dos.addEventListener('mouseup', function() {
      dos.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    tres.addEventListener('mousedown', function() {
      tres.style.padding = '5px';
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = 3;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    tres.addEventListener('mouseup', function() {
      tres.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    cuatro.addEventListener('mousedown', function() {
      cuatro.style.padding = '5px';
      var num = 4;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    cuatro.addEventListener('mouseup', function() {
      cuatro.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    cinco.addEventListener('mousedown', function() {
      cinco.style.padding = '5px';
      var num = 5;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    cinco.addEventListener('mouseup', function() {
      cinco.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    seis.addEventListener('mousedown', function() {
      seis.style.padding = '5px';
      var num = 6;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    seis.addEventListener('mouseup', function() {
      seis.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    siete.addEventListener('mousedown', function() {
      siete.style.padding = '5px';
      var num = 7;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    siete.addEventListener('mouseup', function() {
      siete.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    ocho.addEventListener('mousedown', function() {
      ocho.style.padding = '5px';
      var num = 8;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display");
      console.log(actual.value);
      if (actual != 0) {
        actual.value = "";
        console.log("Nuevo Valor: " + actual.value);
      } else {
        actual.innerHTML = "No cambio";
      }
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    ocho.addEventListener('mouseup', function() {
      ocho.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    nueve.addEventListener('mousedown', function() {
      nueve.style.padding = '5px';
      var num = 9;
      var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      var sumado = num;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML =  sumado;
      sumado = sumado + sumado;
      // document.querySelector("#calculadoraFondo .pantalla #display").innerHTML =  sumado;
      // document.querySelector("#calculadoraFondo .pantalla #display").innerHTML =  actual + sumado;
      console.log('El botón está siendo presionado.');
    })
    nueve.addEventListener('mouseup', function() {
      nueve.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    // document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = seis;
    this.numerosDisplay();
    // this.borrarCero();
  },

  numerosDisplay: function(){
    var display = document.querySelector("#calculadoraFondo .pantalla #display");
    display.value = 0;
  },
  borrarCero: function() {
    var disp = document.querySelector("#calculadoraFondo .pantalla #display");
    console.log(disp.value);
    if (disp != 0) {
      disp.value = "";
      console.log("Nuevo Valor: " + disp.value);
    } else {
      disp.innerHTML = "No cambio";
    }
  }
}

Calculadora.eventoBotones()
