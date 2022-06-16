var y = -2;
var i = -1;
var txt = "";
var pregunta = "";
var categoria = "";
var btn1 = "";
var btn2 = "";
var btn3 = "";
var btn4 = "";
var puntuacion = 0;
//Coge con ajax las siguientes preguntas
function siguiente_pregunta() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    i++;
    x = doc.getElementsByTagName("categotia")[i];
    categoria = x.getElementsByTagName("category")[0].childNodes[0].nodeValue;
    document.getElementById("categoria").innerHTML = categoria;
    x = doc.getElementsByTagName("question")[i];
    pregunta = x.getElementsByTagName("wording")[0].childNodes[0].nodeValue;
    document.getElementById("pregunta").innerHTML = pregunta;
    boton1 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[0].childNodes[0].nodeValue;
    document.getElementById("btn1").innerHTML = btn1;
    boton2 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[1].childNodes[0].nodeValue;
    document.getElementById("btn2").innerHTML = btn2;
    boton3 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[2].childNodes[0].nodeValue;
    document.getElementById("btn3").innerHTML = btn3;
    boton4 = x.getElementsByTagName("choices")[0].getElementsByTagName("choice")[3].childNodes[0].nodeValue;
    document.getElementById("btn4").innerHTML = btn4;
  }
  xhttp.open("GET", "quizz.xml");
  xhttp.send();
}
//Funciones que ven si es correto
function puntuacion1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[0].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizz.xml");
  xhttp.send();
}

function puntuacion2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[1].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizz.xml");
  xhttp.send();
}
function puntuacion3() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[2].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizz.xml");
  xhttp.send();
}
function puntuacion4() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    var doc = this.responseXML;
    y++;
    puntuacio1 = doc.getElementsByTagName("choices")[y].getElementsByTagName("choice")[3].attributes[0].value;
    if (puntuacio1 == "yes") {
      puntuacion++
      document.getElementById('puntos').innerHTML = puntuacion
    }

  }
  xhttp.open("GET", "quizz.xml");
  xhttp.send();
}
