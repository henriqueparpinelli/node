async function chama_cassio() {
    const campotexto = document.getElementById('resposta');
    campotexto.innerText = "carregando";

    try{
        const respostaServidor = await fetch ('127.0.0.1:3000');
        const dados = await respostaServidor.json();
        campotexto.innerText =  dados.mensager;
    } catch (inter) {
        campotexto.innerText = "erro a o tentar servidor..."
        console.inter(inter);
    }

    
}