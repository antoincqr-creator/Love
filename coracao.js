const btn = document.getElementById('btnAbrir');
const overlay = document.getElementById('overlay');
const audio = document.getElementById('musicaAudio');
const conteudo = document.getElementById('conteudoCarta');

btn.addEventListener('click', () => {
    // 1. Esconde o botão e mostra a carta
    overlay.style.display = 'none';
    conteudo.style.display = 'block';

    // 2. Toca a música baixada
    audio.play().catch(e => console.log("Erro ao tocar áudio:", e));
    
    // 3. Inicia a animação do coração
    iniciarDesenho();
});

function iniciarDesenho() {
    const canvas = document.getElementById('coracao');
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;
    
    ctx.strokeStyle = '#ff1493';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.fillStyle = 'rgba(255, 20, 147, 0.9)';

    let t = 0;
    const velocidade = 0.02;

    function getHeartPoint(t) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4 * t));
        return { x: x * 8 + 150, y: y * 8 + 130 };
    }

    function desenhaLoop() {
        if (t <= 2 * Math.PI) {
            const point = getHeartPoint(t);
            if (t === 0) {
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
            t += velocidade;
            requestAnimationFrame(desenhaLoop);
        } else {
            ctx.fill();
        } 
    }
    desenhaLoop();
}