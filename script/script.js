

const key = "4d77c107ad91cc9f797543dee9399b02";

function colocardadosnatela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name ;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}

async function buscarcidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());
    colocardadosnatela(dados);
}

function cliqueinobutao() {
    const cidade = document.querySelector(".inputcidade").value;

    buscarcidade(cidade);
}