function calculateTime() {
    const n = parseInt(document.getElementById('n').value);
    if (isNaN(n) || n < 0) {
        document.getElementById('output').textContent = 'Por favor, insira um número válido de cargas.';
        return;
    }

    const segundos = n * 2;
    const mintot = segundos / 60;
    const horas = Math.floor(mintot / 60);
    const minutos = Math.floor(mintot % 60);

    document.getElementById('output').innerHTML = `Sua exercise weapon tem <b>${horas}</b> h e <b>${minutos}</b> min.`;
}