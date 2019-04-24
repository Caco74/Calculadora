var Calculadora = {
  init: function(){
    document.onkeypress = this.pulsarTecla
    document.onkeyup = this.soltarTecla
  },
  pulsarTecla: function (event){
    var codigo = event.wich || event.keyCode; // Tecla Presionadas
    if (codigo >= 48 && codigo <= 57) {
      document.getElementById(String.fromCharCode(codigo)).style="padding: 5px;"
      console.log(String.fromCharCode(codigo) + " Tecla PRESS");
    }
  },
  soltarTecla: function (event){
    var codigo = event.wich || event.keyCode; // Tecla Suelta
    if (codigo >= 48 && codigo <= 57) {
      document.getElementById(String.fromCharCode(codigo)).style="padding: 0px;"
      console.log(String.fromCharCode(codigo) + "Tecla UP");
    }
  }
}
Calculadora.init()
