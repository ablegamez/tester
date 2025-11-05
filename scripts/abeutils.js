//abeutils

function utilsHi(){
  alert("Hello from utils")
}

function cleardiv(parent){
    currentDiv = document.getElementById(parent)
    while (currentDiv.firstChild) {
        currentDiv.removeChild(currentDiv.lastChild)
    }
}

function createattr(id, att1, att2){
    document.getElementById(id).setAttribute(att1, att2)
}

function createbr(base){
    document.getElementById(base).appendChild(document.createElement("br"))
}

function createbtn(base, id, onclick){
    newbtn = document.createElement("button")
    newbtn.setAttribute("type", "button")
    newbtn.setAttribute("id", id)
    newbtn.setAttribute("onclick", onclick)
    document.getElementById(base).appendChild(newbtn)
}

function createelem(base, type, id){
    newElement = document.createElement(type)
    newElement.setAttribute ("id", id)
    document.getElementById(base).appendChild(newElement)
}

function createtxt(base, txt){
    newtxt = document.createTextNode(txt)
    document.getElementById(base).appendChild(newtxt)
}

