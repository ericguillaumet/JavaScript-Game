const SCALE = 20;

function createElement(type, className) { //Auxiliar method to create elements
    let element = document.createElement(type);
    if (className !== undefined) element.className = className
    return element
}

function DOMDisplay (parent, level) {
    this.wrap = parent.appendChild(createElement('div', 'game')); //parent is the body
    this.level = level;

    //this.wrap.appendChild();
    this.drawBackground = function () {
        let table = createElement('table', 'background');
        table.style.width = this.level.width[0] * SCALE + 'px'; //levels style // px === pixel
    }
}