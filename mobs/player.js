let x = 0;
let y = 0;
const player = (ctx, created, moveX, moveY) => {
    if (created) {
        x += moveX;
        y += moveY;
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 25, 25);
    } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 25, 25);
    }
}