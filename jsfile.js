function liNewAddFunction() {
    var node = document.createElement("LI"); //Node för att skapa element i LI
    var input = document.getElementById("myInput").value; //Input
    var textNode = document.createTextNode(input); //Textnode

    if (/^\s+$/.test(input) || input == ("")) { //Testa ifall användaren har fyllt i något, true lägger till i listan, false ger en alert
        alert("Var god och fyll i en vara!");
    } else {
        node.appendChild(textNode);
        document.getElementById("myUL").appendChild(node);
        document.getElementById("myInput").value = "";
    }
    node.onclick = function() { //Onclick event för att sätt astyle på skapade li element
        this.setAttribute("style", "text-decoration: line-through");
    }
}

function oldLiFunction() { //Funktion för orginallistan 
    var myUl = document.getElementById('myUL');
    for (var elem of myUl.children) { //For of loop för myUl.children
        elem.onclick = function() {
            this.setAttribute("style", "text-decoration: line-through"); //Set style vid click
        }
    };
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript och https://stackoverflow.com/questions/42853028/removing-li-from-ul-in-for-loop-js
