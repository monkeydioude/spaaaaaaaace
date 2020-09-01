function Debug(id) {
    this.node = document.querySelector(id);
}

Debug.prototype.Write = function(data) {
    let textNode = document.createTextNode(data);
    let span = document.createElement("span");
    span.appendChild(textNode);
    this.node.appendChild(span);
}

Debug.prototype.BR = function() {
    let br = document.createElement("br");
    this.node.appendChild(br);
}

Debug.prototype.Toggle = function() {
    this.node.style.display = this.node.style.display == "block" ? "none" : "block";
}
