function createElement(type, className) { //Auxiliar method to create elements
    let element = document.createElement(type);
    if (className !== undefined) element.className = className
    return element
}

function DOMDisplay (parent, level) {
    this.wrap = parent.appendChild(createElement('div', 'game')); //parent is the body
    this.level = level;

    //this.wrap.appendChild();
}