window.addEventListener('load', () => {

    const canvas = document.getElementById('coracao');
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 300;
    
    ctx.strokeStyle = '#ff1493';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.fillStyle = 'rgba(255, 20, 147, 0.9)';

    let t= 0;
    const velocidade = 0.02;

    function getHearpoint(t){
        const x = 16 *Math.pow(Math.sin(t), 3);
        const y = -(13 *Math.cos(t) - 5*Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4 * t));
        return { x: x*8 + 150, y: y* 8 + 130};
    }

    function desenhaLoop() {
        if (t<= 2 * Math.PI) {
            const point = getHearpoint(t);

            if( t === 0) {
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
            }else{
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
});
function tocarMusica() {
    const iframe = document.getElementById('playerYoutube');
    if (iframe) {
        // Atualiza o SRC para forçar o autoplay após o clique dela
        const currentSrc = iframe.src;
        if (!currentSrc.includes('played=true')) {
            iframe.src = currentSrc + "&played=true";
        }
    }
}

// Escuta cliques e toques no celular
document.addEventListener('click', tocarMusica, { once: true });
document.addEventListener('touchstart', tocarMusica, { once: true });