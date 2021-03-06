/// <reference path="types/p5.global-mode.d.ts" />

function Tile(x, y, w, h) {
    this.num = (y * 10) + (x + 1);
    this.x = x * w;
    this.y = y * h;
    this.w = w;
    this.h = h;
    
    this.clicked = false;
    this.maior = false;
    this.menor = false;
    this.win = false;
}

Tile.prototype.renderText = function () {
    textAlign(CENTER, CENTER)
    fill(0)
    noStroke();
    textSize(40);
    text(this.num, this.x + this.w / 2, this.y + this.h / 2);
}

Tile.prototype.show = function () {
    stroke(0);
    strokeWeight(3);

    if (!this.clicked) {
        noFill();
    } else if (this.win) {
        fill(255, 255, 0);
    } else if (this.menor) {
        fill(0, 255, 0);
    } else if (this.maior) {
        fill(255, 0, 0);
    }

    rect(this.x, this.y, this.w, this.h);

    if (!this.clicked) {
        this.renderText();
    }
}

Tile.prototype.onClick = async function (answer) {
    if (this.clicked) return;

    this.clicked = true;

    if (this.num > answer) {
        this.maior = true;
    } else if (this.num < answer) {
        this.menor = true;
    } else {
        this.win = true;
    }

    return this.win;
}
