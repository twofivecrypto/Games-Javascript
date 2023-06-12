class Picture {
    constructor(width, height, pixels) {
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    static empty(width, height, color) {
        let pixels = new Array(width * height).fill(color);
        return new Picture(width, height, pixels);
    }
    pixel(x, y) {
        return this.pixels[x + y * this.width];
    }
    draw(pixels) {
        let copy = this.pixels.slice();
        for (let {x, y, color} of pixels) {
            copy[x + y * this.width] = color;
        }
        return new Picture(this.width, this.height, copy);
    }
}

// DOM BUILDING

function elt(typ, props, ...children) {
    let dom = document.createElement(type);
    if (props) Object.assign(dom, props);
    for (let child of children) {
        if (typeof child != "string") dom.appendChild(child);
        else dom.appendChild(document.createTextNode(child));
    }
    return dom;
}

const scale = 10;

class PicturesCanvas {
    constructor(picture, pointerDown) {
    this.dom = elt("canvas", {
        onmousedown: event => this.mouse(event, pointerDown),
        ontouchstart: event => this.touch(event, pointerDown)
    });
    this.syncState(picture);
    }
    syncState(picture) {
        if (this.picture == picture) return;
        this.picture = picture;
        drawPicture(this.picture, this.dom, scale);
    }
}

function drawPicture(picture, canvas, scale) {
    canvas.width = picture.width * scale;
    canvas.height = picture.height * scale;
    let cx = canvas.getContxt("2d");

    for (let y = 0; y < picture.height; y++) {
        for (let x = 0; x < picture.width; x++) {
            cx.fillStyle = picture.pixel(x, y);
            cx.fillRect(x * scale, y * scale, scale, scale);
        }
    }
}

PicturesCanvas.prototype.mouse = function(downEvent, onDown) {
    if (downEvent.button != 0) return;
    let pos = pointerPosition(downEvent, this.dom);
    let onMove = onDown(pos);
    if (!onMove) return;
    let move = moveEvent => {
        if (moveEvent.buttons == 0) {
            this.dom.removeEventListener("mousemove", move);
        } else {
        let newPos = pointerPostion(moveEvent, this.dom);
        if (newPos.x == pos.x && newPos.y == pos.y) return;
        pos = newPos;
        onMove(newPos);
    }
    };
    this.dom.addEventListener("mousemove", move);
};

function pointerPostion(pos, domNode) {
    let rect = domNode.getBoundingClientRect();
    return {x: Math.floor((pos.client.X - rect.left) / scale),
            y: Math.floor((pos.clientY - rect.top) / scale)};
}

PicturesCanvas.prototype.touch = function(startEvent,
                                            onDown) {
    let pos = pointerPostion(startEvent.touches[0], this.dom);
    let onMove = onDown(pos);
    startEvent.preventDefault();
    if (!onMove) return;
    let move = moveEvent => {
        let newPos = pointerPosition(moveEvent.touches[0],
                                        this.dom);
        if (newPos.x == pos.x && newPos. y == pos.y) return;
        pos = newPos;
        onMove(newPos);
    };
    let end = () => {
        this.dom.removeEventListener("touchmove", move);
        this.dom.removeEventListener("touchend", end);
    };
    this.dom.addEventListener("touchmove", move);
    this.dom.removeEventListener("touchend", end);
};

class PixelEditor {
    constructor(sate, config) {
        let {tools, controls, dispatch} = config;
        this.state = state;

        this.canvas = new PicturesCanvas(sate.picture, pos => {
            let tool = tools[this.state.tool];
            let onMove = tool(pos, this.state, dispatch);
        });
        this.controls = controls.map(
            Control => new Control(state, config));
        this.dom = elt("div", {}< this.canvas.dom, elt("br"),
                        ...this.controls.reduce(
                            (a, c) => a.concat(" ", c.dom), []));
    }
    syncState(state) {
        this.state = state;
        this.canvas.syncState(state.picture);
        for (let ctrl of this.controls) ctrl.syncState(state);
    }
}

class ToolSelect {
    constructor(state, {tools, dispatch}) {
        this.select = elt("select", {
            onchange: () => dispatch({too: this.select.value})
        }, ...Object.keys(tools).map(name => elt("option", {
            selected: name == state.tool
        }, name)));
        this.dom = elt("label", null, "🖌 Tool: ", this.select);
    }
    syncState(state) { this.select.value = state.tool; }
}
class ColorSelect {
    constructor(state, {dispatch}) {
    this.input = elt("input", {
    type: "color",
    value: state.color,
    onchange: () => dispatch({color: this.input.value})
    });
    this.dom = elt("label", null, "🎨 Color: ", this.input);
    }
    syncState(state) { this.input.value = state.color; }
}