//Login page

//const username = document.getElementById("username")
//const password = document.getElementById("password")
//const usernameTxt = document.getElementById("usernametxt")
//const passwordTxt = document.getElementById("passwordtxt")
//
//username.addEventListener("click", moveUsername)
//password.addEventListener("click", movePassword)
//
//function moveUsername(){
//    usernameTxt.classList.add("moveinput")
//}
//
//function movePassword(){
//    passwordTxt.classList.add("moveinput")
//}
//

//Main page

//Header

//Menu elements
const topLine = document.getElementById("topline")
const midLine = document.getElementById("midline")
const botLine = document.getElementById("botline")
const icon = document.getElementById("menubtn")
const menu = document.getElementById("menu")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")

icon.addEventListener("click", openMenu)

function openMenu() {
    if (topLine.classList == "menulines top") {
        topLine.classList.add("topback")
        topLine.classList.remove("top")
        midLine.classList.add("middleback")
        midLine.classList.remove("middle")
        botLine.classList.add("bottomback")
        botLine.classList.remove("bottom")
        btn1.classList.add("closebtn1")
        btn1.classList.remove("movebtn1")
        btn2.classList.add("closebtn2")
        btn2.classList.remove("movebtn2")
        btn3.classList.add("closebtn3")
        btn3.classList.remove("movebtn3")
        btn4.classList.add("closebtn4")
        btn4.classList.remove("movebtn4")
        btn5.classList.add("closebtn5")
        btn5.classList.remove("movebtn5")
        btn6.classList.add("closebtn6")
        btn6.classList.remove("movebtn6")
        btn7.classList.add("closebtn7")
        btn7.classList.remove("movebtn7")
        menu.classList.add("hide")
    } else {
        topLine.classList.add("top")
        topLine.classList.remove("topback")
        midLine.classList.add("middle")
        midLine.classList.remove("middleback")
        botLine.classList.add("bottom")
        botLine.classList.remove("bottomback")
        menu.classList.remove("hide")
        menu.classList.remove("hidestart")
        btn1.classList.remove("closebtn1")
        btn1.classList.add("movebtn1")
        btn2.classList.remove("closebtn2")
        btn2.classList.add("movebtn2")
        btn3.classList.remove("closebtn3")
        btn3.classList.add("movebtn3")
        btn4.classList.remove("closebtn4")
        btn4.classList.add("movebtn4")
        btn5.classList.remove("closebtn5")
        btn5.classList.add("movebtn5")
        btn6.classList.remove("closebtn6")
        btn6.classList.add("movebtn6")
        btn7.classList.remove("closebtn7")
        btn7.classList.add("movebtn7")
    }
}


//Main

//Recent Document

//TM Folder
const tm = document.getElementById("tm")
const tmhead = document.getElementById("tmhead")
const tm1 = document.getElementById("tm1")
const tm2 = document.getElementById("tm2")
const tm3 = document.getElementById("tm3")
const tm4 = document.getElementById("tm4")
const tm5 = document.getElementById("tm5")
const tm6 = document.getElementById("tm6")
const tm7 = document.getElementById("tm7")
const tmArrow = document.getElementById("tmarrow")

tmhead.addEventListener("click", openTM)

function openTM() {
    if (tmArrow.classList == "arrow arrowspin") {
        tmArrow.classList.remove("arrowspin")
        tmArrow.classList.add("reversespin")
        tm.classList.add("closetm")
        tm.classList.remove("opentm")
        tm1.classList.add("closetm1")
        tm1.classList.remove("opentm1")
        tm2.classList.add("closetm2")
        tm2.classList.remove("opentm2")
        tm3.classList.add("closetm3")
        tm3.classList.remove("opentm3")
        tm4.classList.add("closetm4")
        tm4.classList.remove("opentm4")
        tm5.classList.add("closetm5")
        tm5.classList.remove("opentm5")
        tm6.classList.add("closetm6")
        tm6.classList.remove("opentm6")
        tm7.classList.add("closetm7")
        tm7.classList.remove("opentm7")
    } else {
        tmArrow.classList.add("arrowspin")
        tmArrow.classList.remove("reversespin")
        tm.classList.remove("closetm")
        tm.classList.add("opentm")
        tm1.classList.remove("closetm1")
        tm1.classList.add("opentm1")
        tm2.classList.remove("closetm2")
        tm2.classList.add("opentm2")
        tm3.classList.remove("closetm3")
        tm3.classList.add("opentm3")
        tm4.classList.remove("closetm4")
        tm4.classList.add("opentm4")
        tm5.classList.remove("closetm5")
        tm5.classList.add("opentm5")
        tm6.classList.remove("closetm6")
        tm6.classList.add("opentm6")
        tm7.classList.remove("closetm7")
        tm7.classList.add("opentm7")
    }
}

//EX folder
const exHead = document.getElementById("exhead")
const ex = document.getElementById("ex")
const ex1 = document.getElementById("ex1")
const exArrow = document.getElementById("exarrow")

exHead.addEventListener("click", openEX)

function openEX() {
    if (exArrow.classList == "arrow arrowspin") {
        exArrow.classList.remove("arrowspin")
        exArrow.classList.add("reversespin")
        ex.classList.add("closeex")
        ex.classList.remove("openex")
        ex1.classList.add("closeex1")
        ex1.classList.remove("openex1")
    } else {
        exArrow.classList.add("arrowspin")
        exArrow.classList.remove("reversespin")
        ex.classList.remove("closeex")
        ex.classList.add("openex")
        ex1.classList.remove("closeex1")
        ex1.classList.add("openex1")
    }
}
