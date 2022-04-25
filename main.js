const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 1000, 800);

let fps = 30;
let username = "early alpha";

const start = () => {
    player(ctx, false);
    let fpsTest = Date.now();
    setInterval(() => {
        fpsTest -= Date.now();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 1000, 800);
        player(ctx, true, 1, 1);
        ctx.font = '16px serif';
        ctx.fillText(fpsTest.toString().replace("-",""), 5, 18);
        fpsTest = Date.now();
    }, 1000/fps);
}