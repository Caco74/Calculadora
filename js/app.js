/*--------- Variables ---------*/
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
pantalla = document.querySelector("#calculadoraFondo .pantalla #display")

/*--------- Patrón Módulo ---------*/
var Calculadora = {
  digitos:0,
  contadorIgual: -1,
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
      alert("Error!");
    }
  },
  secuenciaOperacion() {
    switch (Calculadora.operacion) {
      case "sumar":
      Calculadora.resultado = parseFloat(Calculadora.resultado) + parseFloat(Calculadora.num2)
        break;
        case "restar":
        Calculadora.resultado = parseFloat(Calculadora.resultado) - parseFloat(Calculadora.num2)
          break;
          case "multiplicar":
          Calculadora.resultado = parseFloat(Calculadora.resultado) * parseFloat(Calculadora.num2)
            break;
            case "dividir":
            Calculadora.resultado = parseFloat(Calculadora.resultado) / parseFloat(Calculadora.num2)
              break;
      default:
      alert("Error!");
    }
  },
  operacionCadena() {
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
      alert("Error!");
    }
  },
  eventoBotones: function() {

/*--------- Operaciones Matemáticas ---------*/
    /*--------- Botón Suma ---------*/
    mas.addEventListener('mousedown', function() {
      mas.style.padding = '5px';
      Calculadora.num1 = pantalla.innerHTML;
      pantalla.innerHTML = "";
      Calculadora.operacion = "sumar";
      Calculadora.digitos = 0;
      Calculadora.operadorTecla = true;
    })
    mas.addEventListener('mouseup', function() {
      mas.style.padding = '0px';
    })

    /*--------- Botón Resta ---------*/
    menos.addEventListener('mousedown', function() {
      menos.style.padding = '7px';
      Calculadora.num1 = pantalla.innerHTML;
      pantalla.innerHTML = "";
      Calculadora.operacion = "restar";
      Calculadora.digitos = 0;
      Calculadora.operadorTecla = true;
    })
    menos.addEventListener('mouseup', function() {
      menos.style.padding = '0px';
    })

    /*--------- Botón División ---------*/
    dividir.addEventListener('mousedown', function() {
      dividir.style.padding = '7px';
      Calculadora.num1 = pantalla.innerHTML;
      pantalla.innerHTML = "";
      Calculadora.operacion = "dividir";
      Calculadora.digitos = 0;
      Calculadora.operadorTecla = true;
    })
    dividir.addEventListener('mouseup', function() {
      dividir.style.padding = '0px';
    })

    /*--------- Botón Producto ---------*/
    producto.addEventListener('mousedown', function() {
      producto.style.padding = '7px';
      Calculadora.num1 = pantalla.innerHTML;
      pantalla.innerHTML = "";
      Calculadora.operacion = "multiplicar";
      Calculadora.digitos = 0;
      Calculadora.operadorTecla = true;
    })
    producto.addEventListener('mouseup', function() {
      producto.style.padding = '0px';
    })

    /*--------- Botón ---------*/
    punto.addEventListener('mousedown', function() {
      punto.style.padding = '7px';
      if (pantalla.innerHTML === "0" ||
          pantalla.innerHTML === "") {
        pantalla.innerHTML = "0."
        Calculadora.digitos++;
      }
      if (pantalla.innerHTML !== "0") {
        numDisp = pantalla.innerHTML
        if (numDisp.indexOf('.') != -1) {
          pantalla.innerHTML = numDisp
        }else {
          pantalla.innerHTML = numDisp + "."
        }
      }
    })
    punto.addEventListener('mouseup', function() {
      punto.style.padding = '0px';
    })

    /*--------- Botón Igual ---------*/
    igual.addEventListener('mousedown', function() {
      igual.style.padding = '7px';
      Calculadora.contadorIgual++
      if (Calculadora.contadorIgual<1 && Calculadora.operadorTecla == true) {
        Calculadora.num2 = pantalla.innerHTML;
        Calculadora.calcular();
        if (Calculadora.resultado >= 99999999 || Calculadora.resultado <= -99999999 ) {
          pantalla.innerHTML = Calculadora.resultado.toPrecision(6);
        } else {
          pantalla.innerHTML = Calculadora.resultado;
        }
        Calculadora.operadorTecla = false;
      }else if (Calculadora.contadorIgual>=1 && Calculadora.operadorTecla==false) {
        Calculadora.secuenciaOperacion();
        if (Calculadora.resultado >= 99999999 || Calculadora.resultado <= -99999999 ) {
          pantalla.innerHTML = Calculadora.resultado.toPrecision(6);
        } else {
          pantalla.innerHTML = Calculadora.resultado;
        }
        Calculadora.operadorTecla = false;
      }else if (Calculadora.contadorIgual>=1 && Calculadora.operadorTecla==true) {
        Calculadora.num2 = pantalla.innerHTML;
        Calculadora.operacionCadena();
        if (Calculadora.resultado >= 99999999 || Calculadora.resultado <= -99999999 ) {
          pantalla.innerHTML = Calculadora.resultado.toPrecision(6);
        } else {
          pantalla.innerHTML = Calculadora.resultado;
        }
        Calculadora.operadorTecla = false;
      }
    })
    igual.addEventListener('mouseup', function() {
      igual.style.padding = '0px';
    })

    /*--------- Botón ON/C ---------*/
    on.addEventListener('mousedown', function() {
      on.style.padding = '5px';
      pantalla.innerHTML = "0"
      Calculadora.digitos = 0;
      Calculadora.contadorIgual = -1;
      Calculadora.num1 = 0;
      Calculadora.num2 = 0;
      Calculadora.resultado = 0;
    })
    on.addEventListener('mouseup', function() {
      on.style.padding = '0px';
    })

    /*--------- Botón Signo -/+ ---------*/
    sign.addEventListener('mousedown', function() {
      sign.style.padding = '5px';
      if (pantalla.innerHTML !== "0") {
        numDisp = pantalla.innerHTML
        if (numDisp.indexOf('-') != -1) {
          pantalla.innerHTML = numDisp.substring(1);
        }else {
          pantalla.innerHTML ="-" + numDisp
        }
      }
    })
    sign.addEventListener('mouseup', function() {
      sign.style.padding = '0px';
    })

    /*--------- Botón Raíz ---------*/
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
        if (pantalla.innerHTML === "0") {
        }else {
          Calculadora.digitos++
          var actual = pantalla.innerHTML;
          var sumado = 0;
          pantalla.innerHTML = actual + sumado;
        }
      }
    })
    cero.addEventListener('mouseup', function() {
      cero.style.padding = '0px';
    })

    uno.addEventListener('mousedown', function() {
      Calculadora.digitos++
      uno.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 1;
        pantalla.innerHTML = actual + sumado
      }
    })
    uno.addEventListener('mouseup', function() {
      uno.style.padding = '0px';
    })

    dos.addEventListener('mousedown', function() {
      Calculadora.digitos++
      dos.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 2;
        pantalla.innerHTML = actual + sumado
      }
    })
    dos.addEventListener('mouseup', function() {
      dos.style.padding = '0px';
    })

    tres.addEventListener('mousedown', function() {
      Calculadora.digitos++
      tres.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 3;
        pantalla.innerHTML = actual + sumado
      }
    })
    tres.addEventListener('mouseup', function() {
      tres.style.padding = '0px';
    })

    cuatro.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cuatro.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 4;
        pantalla.innerHTML = actual + sumado
      }
    })
    cuatro.addEventListener('mouseup', function() {
      cuatro.style.padding = '0px';
    })

    cinco.addEventListener('mousedown', function() {
      Calculadora.digitos++
      cinco.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 5;
        pantalla.innerHTML = actual + sumado
      }
    })
    cinco.addEventListener('mouseup', function() {
      cinco.style.padding = '0px';
    })

    seis.addEventListener('mousedown', function() {
      Calculadora.digitos++
      seis.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 6;
        pantalla.innerHTML = actual + sumado
      }
    })
    seis.addEventListener('mouseup', function() {
      seis.style.padding = '0px';
    })

    siete.addEventListener('mousedown', function() {
      Calculadora.digitos++
      siete.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 7;
        pantalla.innerHTML = actual + sumado
      }
    })
    siete.addEventListener('mouseup', function() {
      siete.style.padding = '0px';
    })

    ocho.addEventListener('mousedown', function() {
      Calculadora.digitos++
      ocho.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 8;
        pantalla.innerHTML = actual + sumado
      }
    })
    ocho.addEventListener('mouseup', function() {
      ocho.style.padding = '0px';
    })

    nueve.addEventListener('mousedown', function() {
      Calculadora.digitos++
      nueve.style.padding = '5px';
      if (pantalla.innerHTML === "0") {
        pantalla.innerHTML = "";
      }
      if (Calculadora.digitos<9) {
        var actual = pantalla.innerHTML;
        var sumado = 9;
        pantalla.innerHTML = actual + sumado
      }
    })
    nueve.addEventListener('mouseup', function() {
      nueve.style.padding = '0px';
    })
  }
}

Calculadora.eventoBotones()
