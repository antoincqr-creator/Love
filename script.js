document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('pag2');
    if (botao) {
        botao.onclick = function() {
            window.location.href = "carta.html";
        };
    }
});