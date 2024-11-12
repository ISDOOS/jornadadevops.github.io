let videoElement = document.getElementById("videoElement");
let startButton = document.getElementById("startButton");
let applyEffectButton = document.getElementById("applyEffectButton");

let videoStream;

async function start() {
    try {
        // Solicitar permissão para usar a câmera
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = videoStream;
        startButton.disabled = true;
        applyEffectButton.disabled = false;
    } catch (error) {
        console.error("Erro ao acessar a câmera: ", error);
    }
}

function applyEffect() {
    console.log("Aplicando efeito de capa de invisibilidade...");

    // Aqui você chamaria o código Python para processar o vídeo com o efeito
    // Como isso é feito no servidor, não há como rodar diretamente no navegador.
    // No entanto, este botão pode enviar dados ao servidor para processar o vídeo.
}

// Iniciar captura da câmera
startButton.addEventListener("click", start);

// Aplicar efeito de capa de invisibilidade
applyEffectButton.addEventListener("click", applyEffect);
