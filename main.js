const cambiarTema = document.getElementById('tema');
const body = document.body;

cambiarTema.addEventListener("click", function() {
  if (body.className === 'cambiarTema') {
    body.className = '';
    console.log("apagado");
  } else {
    body.className = 'cambiarTema';
    console.log("prendido");
  }
});