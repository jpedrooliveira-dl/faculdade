function pesquisar() {
    console.log();

    let selecao = document.getElementById("resultados-pesquisa-sistema");

    let resultadoAqui = document.getElementById("resultado_aqui").value

    //Se resultadoAqui  for uma sting sem nada
    if (resultadoAqui == "") {

        selecao.innerHTML = "<p>Nada foi encontrado  :(</p>";
        const paragrafo = document.querySelector('p');
        paragrafo.style.color = '#b7c2d7';
        return
    }

    resultadoAqui = resultadoAqui.toLowerCase()

    let resultadoaqui = ""
    let nome = "";
    let descricao = "";
    let tags = "";
    let encontrouResultado = false;

    // let encontrouResultado = false;

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes resultadoAqui
        if (nome.includes(resultadoAqui) || descricao.includes(resultadoAqui) || tags.includes(resultadoAqui)) {
            encontrouResultado = true;

            // cria um novo elemento
            resultadoaqui += `
        
                <h2 class="h2sistema"> ${dado.nome}</h2>
                
                        <div class="item-resultado">
                        <p class="paragrafosistema"> ${dado.descricao}</p>
                        <a class="asistema" href= ${dado.link} target="_blank">Saiba mais</a>
                        </div>
                
                `
        }

    }

    // Verifica se nenhum resultado foi encontrado e mostra uma mensagem amigável para o usuário

    if (!encontrouResultado) {
        resultadoaqui = `<p>Nenhum resultado encontrado para "${resultadoAqui}". Tente outra palavra!</p>`;
        selecao.innerHTML = resultadoaqui;
        const paragrafo = document.querySelector("p");
        paragrafo.style.color = '#b7c2d7';
        return;
    }


    selecao.innerHTML = resultadoaqui

}
