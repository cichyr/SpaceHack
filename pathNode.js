const pathType = {
    DEFAULT: 0,
    ELEVATOR: 1,
    WALL: 2
}
var tileSet = new Image();
tileSet.src = "/src/textury.png";
class PathNode {
    constructor(type, index, callback) {
        this.index = index;
        this.callback = callback;
        this.type = type || pathType.DEFAULT;
        this.color = "rgba("+(Math.random()*255)+","+(Math.random()*255)+","+(Math.random()*255)+",255)";
    }
    draw() {
        ctx.save();
        //ctx.fillStyle = this.color;
        //ctx.fillRect(-32,-64,64,128);
        ctx.drawImage(tileSet,(this.index%32)*64,Math.floor(this.index/32)*128,64,128,-32,-64,64,128);
        ctx.restore();
    }
}