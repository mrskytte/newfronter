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
