function createNew(){
    var newDiv = document.createElement("div");
    var textNode = document.createTextNode("Hello World");
    newDiv.appendChild(textNode);
    newDiv.classList.add('bar');
    var contentDiv = document.querySelector("#content");
    contentDiv.appendChild(newDiv);
}


document.addEventListener('DOMContentLoaded', function() {
    var createBtn = document.getElementById('createBtn');
    createBtn.onclick = function(){
        createNew();
    };


    createBtn.onmouseover = function(){
        this.style.backgroundColor = "AliceBlue";
        this.style.width = "20%";
    }

    createBtn.onmouseleave = function(){
        this.style.backgroundColor=null;
        this.style.width = "10%";
    }
 }, false);

