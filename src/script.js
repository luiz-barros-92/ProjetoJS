function calculateTime() {

    const n = parseInt(document.getElementById('n').value);

    if (isNaN(n) || n < 0) {
        alert("Por favor, insira um número válido de cargas.");
        return;
    }

    const segundos = n * 2;
    const mintot = segundos / 60;
    const horas = Math.floor(mintot / 60);
    const minutos = Math.floor(mintot % 60);

    document.getElementById('output').innerHTML = `Sua Exercise Weapon tem <b>${horas}</b> h e <b>${minutos}</b> min`;
    output.classList.remove("hidden");
}

function clearFields() {    

    document.getElementById('n').value = '';
    document.getElementById('n').focus();
    document.getElementById('output').innerText = '';
    output.classList.add("hidden");

}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) { 
      clearFields();
    }
  });

window.onload = function() {
    document.getElementById("ano").innerHTML = new Date().getFullYear();
   }