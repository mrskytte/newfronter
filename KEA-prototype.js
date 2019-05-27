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

const topLine = document.getElementById("topline")
const midLine = document.getElementById("midline")
const botLine = document.getElementById("botline")
const icon = document.getElementById("menubtn")

icon.addEventListener("click", openMenu)

function openMenu(){
    if(topLine.classList == "menulines top" ){
        topLine.classList.add("topback")
        topLine.classList.remove("top")
        midLine.classList.add("middleback")
        midLine.classList.remove("middle")
        botLine.classList.add("bottomback")
        botLine.classList.remove("bottom")
} else{ topLine.classList.add("top")
       topLine.classList.remove("topback")
       midLine.classList.add("middle")
       midLine.classList.remove("middleback")
       botLine.classList.add("bottom")
       botLine.classList.remove("bottomback")
}
}



