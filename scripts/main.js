// main.js 10/1/24

/* 

compliments of Negrete Foundation

still have to:
validate text boxes
start on MRU's
*/

//Declarations
outlineTag = false
sceneTag = false
mruTag = false

window.onload = function() {
  //alert("Hello Abel!  Scripts are working.")
  //alert("Hello again")
  
}

function sayHello(){
  alert("Hello from sayHello()")
}

function outlineStart(){
    cleardiv("bodyDiv")

    createelem("bodyDiv", "table", "sceneTable")
    createelem("sceneTable", "td", "tableRow1")
    createelem("sceneTable", "td", "tableRow2")

    createtxt("tableRow1", "Outline:")
    createbr("tableRow1")
    createtxt("tableRow1", "Story Title")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "titleTextBox")
    document.getElementById("titleTextBox").setAttribute("rows", 1)
    createattr("titleTextBox", "onchange", "addOutlineText()")
    
    createbr("tableRow1")
    createbr("tableRow1")

    //Short description
    createtxt("tableRow1", "Tiny Description:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox6")
    createattr("textbox6", "cols", 80)
    createattr("textbox6", "rows", 2)
    // onchange to textbox6
    createattr("textbox6", "onchange", "addOutlineText()")
    createbr("tableRow1")

    //Inciting Crime
    createtxt("tableRow1", "Inciting Crime:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox1")
    createattr("textbox1", "cols", 80)
    createattr("textbox1", "rows", 2)
    // onchange to textbox1
    createattr("textbox1", "onchange", "addOutlineText()")
    createbr("tableRow1")

    //speech in praise of the villian
    createtxt("tableRow1", "Speech in praise of the villian:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox2")
    createattr("textbox2", "cols", 80)
    createattr("textbox2", "rows", 2)
    // onchange to textbox1
    createattr("textbox2", "onchange", "addOutlineText()")
    createbr("tableRow1")
    
    //Protagonist becomes the victim
    createtxt("tableRow1", "Protagonist becomes the victim:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox3")
    createattr("textbox3", "cols", 80)
    createattr("textbox3", "rows", 2)
    // onchange to textbox1
    createattr("textbox3", "onchange", "addOutlineText()")
    createbr("tableRow1")
    createbr("tableRow1")

    //Hero at the mercy of the villian
    createtxt("tableRow1", "Hero at the mercy of the villian:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox4")
    createattr("textbox4", "cols", 80)
    createattr("textbox4", "rows", 2)
    // onchange to textbox1
    createattr("textbox4", "onchange", "addOutlineText()")
    createbr("tableRow1")

    //false ending
    createtxt("tableRow1", "False ending:  ")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox5")
    createattr("textbox5", "cols", 80)
    createattr("textbox5", "rows", 2)
    // onchange to textbox1
    createattr("textbox5", "onchange", "addOutlineText()")
    createbr("tableRow1")

    //button
    btn1 = createbtn("tableRow1", "button1", "copyClipboard()")
    document.getElementById("button1").innerText = "Click Me!"

    //final textarea to copy from
    createtxt("tableRow2", "final text")
    createbr("tableRow2")
    createelem("tableRow2", "textarea", "finalTextBox")
    createattr("finalTextBox", "cols", 73)
    createattr("finalTextBox", "rows", 30)

}

function sceneStart(){
    //start scene
    //alert("Start Scene")
    cleardiv("bodyDiv")

    createelem("bodyDiv", "table", "sceneTable")
    createelem("sceneTable", "td", "tableRow1")
    createelem("sceneTable", "td", "tableRow2")

    createtxt("tableRow1", "Scene:")
    createbr("tableRow1")
    createtxt("tableRow1", "Scene Title")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "titleTextBox")
    document.getElementById("titleTextBox").setAttribute("rows", 1)
    createattr("titleTextBox", "onchange", "addText()")
    
    createbr("tableRow1")
    createbr("tableRow1")
    //Goal
    createtxt("tableRow1", "Goal:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox1")
    createattr("textbox1", "cols", 80)
    createattr("textbox1", "rows", 2)
    // onchange to textbox1
    createattr("textbox1", "onchange", "addText()")
    createbr("tableRow1")

    //conflict
    createtxt("tableRow1", "Conflict:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox2")
    createattr("textbox2", "cols", 80)
    createattr("textbox2", "rows", 2)
    // onchange to textbox1
    createattr("textbox2", "onchange", "addText()")
    createbr("tableRow1")
    
    //disaster
    createtxt("tableRow1", "Disaster:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox3")
    createattr("textbox3", "cols", 80)
    createattr("textbox3", "rows", 2)
    // onchange to textbox1
    createattr("textbox3", "onchange", "addText()")
    createbr("tableRow1")
    createbr("tableRow1")

    createtxt("tableRow1", "Sequel:")
    createbr("tableRow1")
    createbr("tableRow1")
    //Reaction
    createtxt("tableRow1", "Reaction:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox4")
    createattr("textbox4", "cols", 80)
    createattr("textbox4", "rows", 2)
    // onchange to textbox1
    createattr("textbox4", "onchange", "addText()")
    createbr("tableRow1")

    //dilemma
    createtxt("tableRow1", "Dilemma:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox5")
    createattr("textbox5", "cols", 80)
    createattr("textbox5", "rows", 2)
    // onchange to textbox1
    createattr("textbox5", "onchange", "addText()")
    createbr("tableRow1")

    //Decision
    createtxt("tableRow1", "Decision:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox6")
    createattr("textbox6", "cols", 80)
    createattr("textbox6", "rows", 2)
    // onchange to textbox1
    createattr("textbox6", "onchange", "addText()")
    createbr("tableRow1")

    //button
    btn1 = createbtn("tableRow1", "button1", "copyClipboard()")
    document.getElementById("button1").innerText = "Click Me!"

    //final textarea to copy from
    createtxt("tableRow2", "final text")
    createbr("tableRow2")
    createelem("tableRow2", "textarea", "finalTextBox")
    createattr("finalTextBox", "cols", 73)
    createattr("finalTextBox", "rows", 30)

}

function mruStart(){
    cleardiv("bodyDiv")
    //alert("Mru start")

    createelem("bodyDiv", "table", "mruTable")
    createelem("mruTable", "td", "tableRow1")
    createelem("mruTable", "td", "tableRow2")

    createtxt("tableRow1", "MRU:")
    createbr("tableRow1")
    createtxt("tableRow1", "MRU Title")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "titleTextBox")
    document.getElementById("titleTextBox").setAttribute("rows", 1)
    createattr("titleTextBox", "onchange", "addMruText()")
    
    createbr("tableRow1")
    createbr("tableRow1")
    //Motivation
    createtxt("tableRow1", "What is observed:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox1")
    createattr("textbox1", "cols", 80)
    createattr("textbox1", "rows", 2)
    // onchange to textbox1
    createattr("textbox1", "onchange", "addMruText()")
    createbr("tableRow1")

    //heard
    createtxt("tableRow1", "What is heard:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox2")
    createattr("textbox2", "cols", 80)
    createattr("textbox2", "rows", 2)
    // onchange to textbox1
    createattr("textbox2", "onchange", "addMruText()")
    createbr("tableRow1")
    
    //anything else
    createtxt("tableRow1", "Anythiing else:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox3")
    createattr("textbox3", "cols", 80)
    createattr("textbox3", "rows", 2)
    // onchange to textbox1
    createattr("textbox3", "onchange", "addMruText()")
    createbr("tableRow1")
    createbr("tableRow1")

    //Feeling
    createtxt("tableRow1", "Feeling:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox4")
    createattr("textbox4", "cols", 80)
    createattr("textbox4", "rows", 2)
    // onchange to textbox1
    createattr("textbox4", "onchange", "addMruText()")
    createbr("tableRow1")

    //Reflex
    createtxt("tableRow1", "Reflex:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox5")
    createattr("textbox5", "cols", 80)
    createattr("textbox5", "rows", 2)
    // onchange to textbox1
    createattr("textbox5", "onchange", "addMruText()")
    createbr("tableRow1")

    //Action and speech
    createtxt("tableRow1", "Rational action and speech:")
    createbr("tableRow1")
    createelem("tableRow1", "textarea", "textbox6")
    createattr("textbox6", "cols", 80)
    createattr("textbox6", "rows", 2)
    // onchange to textbox1
    createattr("textbox6", "onchange", "addMruText()")
    createbr("tableRow1")

    //button
    btn1 = createbtn("tableRow1", "button1", "copyClipboard()")
    document.getElementById("button1").innerText = "Done"

    //final textarea to copy from
    createtxt("tableRow2", "Final Mru Text")
    createbr("tableRow2")
    createelem("tableRow2", "textarea", "finalTextBox")
    createattr("finalTextBox", "cols", 73)
    createattr("finalTextBox", "rows", 30)

}

function addText(){
    //add scene text from boxes to final textbox
    txt1=""
    if (document.getElementById("titleTextBox").value != ""){
        txt1 = txt1 + "Scene: \n\nTitle: " + document.getElementById("titleTextBox").value + "\n\n"
    }

    if (document.getElementById("textbox1").value != ""){
        document.getElementById("textbox1").value = validateTxt(document.getElementById("textbox1").value)
        txt1 = txt1 + "Goal: " + document.getElementById("textbox1").value + "\n"
    }
    if (document.getElementById("textbox2").value != ""){
        document.getElementById("textbox2").value = validateTxt(document.getElementById("textbox2").value)
        txt1 = txt1 + "Conflict: " + document.getElementById("textbox2").value + "\n"
    }
    if (document.getElementById("textbox3").value != ""){
        document.getElementById("textbox3").value = validateTxt(document.getElementById("textbox3").value)
        txt1 = txt1 + "Disaster: " + document.getElementById("textbox3").value + "\n"
    }
    if (document.getElementById("textbox4").value != ""){
        document.getElementById("textbox4").value = validateTxt(document.getElementById("textbox4").value)
        txt1 = txt1 + "\nSequel: \n\nReaction: " + document.getElementById("textbox4").value + "\n"
    }
    if (document.getElementById("textbox5").value != ""){
        document.getElementById("textbox5").value = validateTxt(document.getElementById("textbox5").value)
        txt1 = txt1 + "Dilemma: " + document.getElementById("textbox5").value + "\n"
    }
    if (document.getElementById("textbox6").value != ""){
        document.getElementById("textbox6").value = validateTxt(document.getElementById("textbox6").value)
        txt1 = txt1 + "Decision: " + document.getElementById("textbox6").value + "\n"
    }

    //txt1=txt1 + document.getElementById("textbox1").value

    document.getElementById("finalTextBox").value = txt1
    sceneTag = true
}

function addMruText(){
    //add mru
    //add text from boxes to final textbox
    txt1=""
    if (document.getElementById("titleTextBox").value != ""){
        txt1="MRU: \n\n"
        txt1 = txt1 + "Title: " + document.getElementById("titleTextBox").value + "\n"
    }
    if (document.getElementById("textbox1").value != ""){
        document.getElementById("textbox1").value = validateTxt(document.getElementById("textbox1").value)
        txt1 = txt1 + document.getElementById("textbox1").value
    }
    if (document.getElementById("textbox2").value != ""){
        document.getElementById("textbox2").value = validateTxt(document.getElementById("textbox2").value)
        txt1 = txt1 + document.getElementById("textbox2").value
    }
    if (document.getElementById("textbox3").value != ""){
        document.getElementById("textbox3").value = validateTxt(document.getElementById("textbox3").value)
        txt1 = txt1 + document.getElementById("textbox3").value + "\n"
    }
    else {txt1 = txt1 + "\n"}
    
    txt1 = txt1 + ""
    if (document.getElementById("textbox4").value != ""){
        document.getElementById("textbox4").value = validateTxt(document.getElementById("textbox4").value)
        txt1 = txt1 + document.getElementById("textbox4").value
    }
    if (document.getElementById("textbox5").value != ""){
        document.getElementById("textbox5").value = validateTxt(document.getElementById("textbox5").value)
        txt1 = txt1 + document.getElementById("textbox5").value
    }
    if (document.getElementById("textbox6").value != ""){
        document.getElementById("textbox6").value = validateTxt(document.getElementById("textbox6").value)
        txt1 = txt1 + document.getElementById("textbox6").value + "\n"
    }
    else {txt1 = txt1 + "\n"}
    txt1 = txt1 + ""

    document.getElementById("finalTextBox").value = txt1
    mruTag = true
}

function addOutlineText(){
    //add Outline
    //add text from boxes to final textbox
    txt1=""
    if (document.getElementById("titleTextBox").value != ""){
        txt1="Outline: \n\n"
        txt1 = txt1 + "Story Title: " + document.getElementById("titleTextBox").value + "\n"
    }
    if (document.getElementById("textbox6").value != ""){
        document.getElementById("textbox6").value = validateTxt(document.getElementById("textbox6").value)
        txt1 = txt1 + "\n\nTiny Description:  " + document.getElementById("textbox6").value + "\n"
    }
    if (document.getElementById("textbox1").value != ""){
        document.getElementById("textbox1").value = validateTxt(document.getElementById("textbox1").value)
        txt1 = txt1 + "\n\nInciting crime:  " + document.getElementById("textbox1").value + "\n"
    }
    if (document.getElementById("textbox2").value != ""){
        document.getElementById("textbox2").value = validateTxt(document.getElementById("textbox2").value)
        txt1 = txt1 + "\n\nSpeech in praise of villian:  " + document.getElementById("textbox2").value + "\n"
    }
    if (document.getElementById("textbox3").value != ""){
        document.getElementById("textbox3").value = validateTxt(document.getElementById("textbox3").value)
        txt1 = txt1 + "\n\nProtagonist becomes the victim:  " + document.getElementById("textbox3").value + "\n"
    }
    if (document.getElementById("textbox4").value != ""){
        document.getElementById("textbox4").value = validateTxt(document.getElementById("textbox4").value)
        txt1 = txt1 + "\n\nHero at the mercy of the villian:  " + document.getElementById("textbox4").value + "\n"
    }
    if (document.getElementById("textbox5").value != ""){
        document.getElementById("textbox5").value = validateTxt(document.getElementById("textbox5").value)
        txt1 = txt1 + "\n\nFalse ending:  " + document.getElementById("textbox5").value + "\n"
    }
    txt1 = txt1 + "\n"

    document.getElementById("finalTextBox").value = txt1
    outlineTag = true

}

function copyClipboard(){
    //copy finalTextBox into clipboard
    //copiedText = document.getElementById("finalTextBox").value
    document.getElementById("finalTextBox").focus()
    document.getElementById("finalTextBox").select()
    document.execCommand('copy')
    alert("Selection has been copied already.\n Please paste into your document as you will lose everything here.\nThanks. ")

    if (outlineTag == true){
        //alert("Outline tag true")
        sceneStart()
        outlineTag = false
    } else if (sceneTag == true) {
        //alert("scene tag is true")
        mruStart()
        sceneTag = false
    } else {
        mruStart()
    }

}

function validateTxt(txt2){
    //validate and return txt
    //check for sentence ending
    last3 = txt2.slice(-3)
    last2 = txt2.slice(-2)
    last1 = txt2.slice(-1)
    //alert("txt2 is " + txt2 +"\nLast 3 is |" + last3 + "|")
    if (last3 == ".  ") {
        //alert ("string found")
    } 
    else if (last2 == ". " ){
        txt2 = txt2 + " "
    }
    else if (last1 == "." ){
        txt2 = txt2 + "  "
    }
    else {
    txt2 = txt2 + ".  "
    }

return txt2
}