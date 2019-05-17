dividir  = document.getElementById('dividido');
producto = document.getElementById('por');
menos    = document.getElementById('menos')
punto    = document.getElementById('punto')
igual    = document.getElementById('igual')
mas      = document.getElementById('mas')
on       = document.getElementById('on')
sign     = document.getElementById('sign')
raiz     = document.getElementById('raiz')
cero     = document.getElementById('0')
uno      = document.getElementById('1')
dos      = document.getElementById('2')
tres     = document.getElementById('3')
cuatro   = document.getElementById('4')
cinco    = document.getElementById('5')
seis     = document.getElementById('6')
siete    = document.getElementById('7')
ocho     = document.getElementById('8')
nueve    = document.getElementById('9')
pantalla = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML
// var pantDisp = document.querySelector("#calculadoraFondo .pantalla #display")


var Calculadora = {
  digitos:0,
  num1: 0,
  num2: 0,
  resultado: 0,
  operacion: "",
  eventoBotones: function() {
    dividir.addEventListener('mousedown', function() {
      dividir.style.padding = '7px';
      num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
    })
    dividir.addEventListener('mouseup', function() {
      dividir.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    producto.addEventListener('mousedown', function() {
      producto.style.padding = '7px';
      num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
    })
    producto.addEventListener('mouseup', function() {
      producto.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    menos.addEventListener('mousedown', function() {
      menos.style.padding = '7px';
      num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
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
      num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
    })
    mas.addEventListener('mouseup', function() {
      mas.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    on.addEventListener('mousedown', function() {
      on.style.padding = '5px';
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "0"
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
      if (Calculadora.digitos<8) {
        if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        }else {
          Calculadora.digitos++
          console.log("Distinto de CERO");
          var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
          var sumado = 0;
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado;
        }
      }
    })
    cero.addEventListener('mouseup', function() {
      cero.style.padding = '0px';
    })

    uno.addEventListener('mousedown', function() {
      Calculadora.digitos++
      uno.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        uno.value = 1;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = uno.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    uno.addEventListener('mouseup', function() {
      uno.style.padding = '0px';
    })

    dos.addEventListener('mousedown', function() {
      Calculadora.digitos++
      dos.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        dos.value = 2;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = dos.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    dos.addEventListener('mouseup', function() {
      dos.style.padding = '0px';
    })

    tres.addEventListener('mousedown', function() {
      Calculadora.digitos++
      tres.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        tres.value = 3;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = tres.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    tres.addEventListener('mouseup', function() {
      tres.style.padding = '0px';
    })

    cuatro.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cuatro.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        cuatro.value = 4;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = cuatro.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    cuatro.addEventListener('mouseup', function() {
      cuatro.style.padding = '0px';
    })

    cinco.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cinco.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        cinco.value = 5;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = cinco.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    cinco.addEventListener('mouseup', function() {
      cinco.style.padding = '0px';
    })

    seis.addEventListener('mousedown', function() {
      Calculadora.digitos++
      seis.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        seis.value = 6;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = seis.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    seis.addEventListener('mouseup', function() {
      seis.style.padding = '0px';
    })

    siete.addEventListener('mousedown', function() {
      Calculadora.digitos++
      siete.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        siete.value = 7;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = siete.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    siete.addEventListener('mouseup', function() {
      siete.style.padding = '0px';
    })

    ocho.addEventListener('mousedown', function() {
      Calculadora.digitos++
      ocho.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        ocho.value = 8;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = ocho.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    ocho.addEventListener('mouseup', function() {
      ocho.style.padding = '0px';
    })

    nueve.addEventListener('mousedown', function() {
      Calculadora.digitos++
      nueve.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML == 0) {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        nueve.value = 9;
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = nueve.value;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    nueve.addEventListener('mouseup', function() {
      nueve.style.padding = '0px';
    })






    this.numerosDisplay();
  },

  /* ULTIMO PASOS ---------------------> */
  numerosDisplay: function() {
    switch (operacion) {
      case "mas":
        resultado =
        break;
      default:

    }
  }
}

Calculadora.eventoBotones()
