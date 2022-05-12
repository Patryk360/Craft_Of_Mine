let x = 0;
let y = 0;
const player = (ctx, created, moveX, moveY) => {
    if (created) {
        if (x == 800) {
            x = 0;
            y = 0;
        }
        x += moveX;
        y += moveY;
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 25, 25);
    } else {
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, 25, 25);
    }
}