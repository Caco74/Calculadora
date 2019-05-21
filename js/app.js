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
  contadorIgual: 0,
  resultado: 0,
  num1: 0,
  num2: 0,
  operacion: "",
  calcular() {
    switch (Calculadora.operacion) {
      case "sumar":
      Calculadora.resultado = parseFloat(Calculadora.num1) + parseFloat(Calculadora.num2)
        break;
        case "restar":
        Calculadora.resultado = parseFloat(Calculadora.num1) - parseFloat(Calculadora.num2)
          break;
          case "multiplicar":
          Calculadora.resultado = parseFloat(Calculadora.num1) * parseFloat(Calculadora.num2)
            break;
            case "dividir":
            Calculadora.resultado = parseFloat(Calculadora.num1) / parseFloat(Calculadora.num2)
              break;
      default:
      console.log("No hay acción!");

    }
    // num1=Calculadora.resultado
  },
  calcularSecuenciaOperacion() {
    switch (Calculadora.operacion) {
      case "sumar":
      Calculadora.resultado = Calculadora.resultado + parseFloat(Calculadora.num2)
        break;
        case "restar":
        Calculadora.resultado = Calculadora.resultado - parseFloat(Calculadora.num2)
          break;
          case "multiplicar":
          Calculadora.resultado = Calculadora.resultado * parseFloat(Calculadora.num2)
            break;
            case "dividir":
            Calculadora.resultado = Calculadora.resultado / parseFloat(Calculadora.num2)
              break;
      default:
      console.log("No hay acción!");

    }
    // num1=Calculadora.resultado
  },
  eventoBotones: function() {

/*--------- Operaciones Matemáticas ---------*/
    mas.addEventListener('mousedown', function() {
      mas.style.padding = '5px';
      Calculadora.num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      Calculadora.operacion = "sumar";
      Calculadora.digitos = 0;
    })
    mas.addEventListener('mouseup', function() {
      mas.style.padding = '0px';
      console.log('El botón se ha dejado de presionar.');
    })

    menos.addEventListener('mousedown', function() {
      menos.style.padding = '7px';
      Calculadora.num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      Calculadora.operacion = "restar";
      Calculadora.digitos = 0;
    })
    menos.addEventListener('mouseup', function() {
      menos.style.padding = '0px';
    })

    dividir.addEventListener('mousedown', function() {
      dividir.style.padding = '7px';
      Calculadora.num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      Calculadora.operacion = "dividir";
      Calculadora.digitos = 0;
    })
    dividir.addEventListener('mouseup', function() {
      dividir.style.padding = '0px';
    })

    producto.addEventListener('mousedown', function() {
      producto.style.padding = '7px';
      Calculadora.num1 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      Calculadora.operacion = "multiplicar";
      Calculadora.digitos = 0;
    })
    producto.addEventListener('mouseup', function() {
      producto.style.padding = '0px';
    })

    punto.addEventListener('mousedown', function() {
      punto.style.padding = '7px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0" ||
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "0."
        Calculadora.digitos++;
      }
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML !== "0") {
        numDisp = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML
        if (numDisp.indexOf('.') != -1) {
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = numDisp
        }else {
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = numDisp + "."
        }
      }
    })
    punto.addEventListener('mouseup', function() {
      punto.style.padding = '0px';
    })

    igual.addEventListener('mousedown', function() {
      igual.style.padding = '7px';
      Calculadora.contadorIgual++
      if (Calculadora.contadorIgual<=1) {
        Calculadora.num2 = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        Calculadora.calcular();
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = Calculadora.resultado;
      }else {
        //alert("Sigo haciendo la última operacion con el segundo operando")
        Calculadora.calcularSecuenciaOperacion();
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = Calculadora.resultado;
      }
      // if (Calculadora.resultado) {
      //   document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = Calculadora.resultado;
      // }
    })
    igual.addEventListener('mouseup', function() {
      igual.style.padding = '0px';
    })

    on.addEventListener('mousedown', function() {
      on.style.padding = '5px';
      document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "0"
      Calculadora.digitos = 0;
      Calculadora.contadorIgual = 0;
    })
    on.addEventListener('mouseup', function() {
      on.style.padding = '0px';
    })

    sign.addEventListener('mousedown', function() {
      sign.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML !== "0") {
        numDisp = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML
        if (numDisp.indexOf('-') != -1) {
          alert("encontrado")
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = numDisp.substring(1);
        }else {
          alert("No encontrado")
          document.querySelector("#calculadoraFondo .pantalla #display").innerHTML ="-" + numDisp
        }
      }
    })
    sign.addEventListener('mouseup', function() {
      sign.style.padding = '0px';
    })

    raiz.addEventListener('mousedown', function() {
      raiz.style.padding = '5px'
    })
    raiz.addEventListener('mouseup', function() {
      raiz.style.padding = '0px';
    })

/*--------- Números ---------*/
    cero.addEventListener('mousedown', function() {
      cero.style.padding = '5px';
      if (Calculadora.digitos<8) {
        if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
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
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 1;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    uno.addEventListener('mouseup', function() {
      uno.style.padding = '0px';
    })

    dos.addEventListener('mousedown', function() {
      Calculadora.digitos++
      dos.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 2;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    dos.addEventListener('mouseup', function() {
      dos.style.padding = '0px';
    })

    tres.addEventListener('mousedown', function() {
      Calculadora.digitos++
      tres.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 3;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    tres.addEventListener('mouseup', function() {
      tres.style.padding = '0px';
    })

    cuatro.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cuatro.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 4;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    cuatro.addEventListener('mouseup', function() {
      cuatro.style.padding = '0px';
    })

    cinco.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cinco.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 5;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    cinco.addEventListener('mouseup', function() {
      cinco.style.padding = '0px';
    })

    seis.addEventListener('mousedown', function() {
      Calculadora.digitos++
      seis.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 6;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    seis.addEventListener('mouseup', function() {
      seis.style.padding = '0px';
    })

    siete.addEventListener('mousedown', function() {
      Calculadora.digitos++
      siete.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 7;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    siete.addEventListener('mouseup', function() {
      siete.style.padding = '0px';
    })

    ocho.addEventListener('mousedown', function() {
      Calculadora.digitos++
      ocho.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 8;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    ocho.addEventListener('mouseup', function() {
      ocho.style.padding = '0px';
    })

    nueve.addEventListener('mousedown', function() {
      Calculadora.digitos++
      nueve.style.padding = '5px';
      if (document.querySelector("#calculadoraFondo .pantalla #display").innerHTML === "0") {
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = document.querySelector("#calculadoraFondo .pantalla #display").innerHTML;
        var sumado = 9;
        document.querySelector("#calculadoraFondo .pantalla #display").innerHTML = actual + sumado
      }
    })
    nueve.addEventListener('mouseup', function() {
      nueve.style.padding = '0px';
    })






    // this.numerosDisplay();
  }
}

Calculadora.eventoBotones()
