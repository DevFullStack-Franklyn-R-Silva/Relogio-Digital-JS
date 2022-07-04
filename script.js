function update(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

function Time() {
    // Criar o objeto da classe Data
    let date = new Date();

    // Obter Hora
    let hora = date.getHours();

    // Obter Minuto
    let minuto = date.getMinutes();

    // Obter Segundo
    let segundo = date.getSeconds();

    hora = update(hora);
    minuto = update(minuto);
    segundo = update(segundo);

    document.getElementById("relogio-digital").innerHTML = hora + ":" + minuto + ":" + segundo;

    setTimeout(Time, 1000);
}



Time();