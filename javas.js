function add_ID(event) {
    var p = event.srcElement.parentElement.firstElementChild;
    // if (p.childNodes.length >= 3) {
    //     alert("cannot add more than ")
    //     return;
    // }
    var ndiv = document.createElement("div");
    var ninput = document.createElement("input");
    ninput.type = "text";
    ninput.name = p.id + p.childNodes.length;
    ninput.pattern = "[0-9]{9}";
    ninput.placeholder="123456789";
    ninput.required = true;
    var nremove = document.createElement("button");
    nremove.innerText = "remove id";
    nremove.onclick = removeElement;
    ndiv.appendChild(ninput);
    ndiv.appendChild(nremove);
    p.appendChild(ndiv);

}
function removeElement(event) {
    // Removes an element from the document.
    var element = event.srcElement;
    element.parentElement.parentElement.removeChild(element.parentElement);
}