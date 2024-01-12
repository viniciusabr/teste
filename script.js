function teste(){
  var agora = new Date();
  var hora = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  
  document.getElementById('horas').innerHTML = hora;
  document.getElementById('minutos').innerHTML = minutos;
  document.getElementById('segundos').innerHTML = segundos;
  setTimeout('teste()', 500);
  }