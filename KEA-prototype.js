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
const bgBlur = document.querySelector(".bgblur")

bgBlur.addEventListener("click", openMenu)
icon.addEventListener("click", openMenu)

function openMenu() {
    if (topLine.classList == "menulines top") {
        bgBlur.classList.add("hidestart")
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
        bgBlur.classList.remove("hidestart")
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

//Calender

//Weekdays

mon = document.getElementById("mon")
tue = document.getElementById("tue")
wed = document.getElementById("wed")
thur = document.getElementById("thur")
fri = document.getElementById("fri")
icondot = document.getElementById("icondot")

//Highlight todays day
onload = function todaysdate() {
    var d = new Date();
    var n = d.getDay()
    if (n == 1) {
        mon.classList.remove("hidedot")
    }
    if (n == 2) {
        tue.classList.remove("hidedot")
    }
    if (n == 3) {
        wed.classList.remove("hidedot")
    }
    if (n == 4) {
        thur.classList.remove("hidedot")
    }
    if (n == 5) {
        fri.classList.remove("hidedot")
    }
    if (n == 6 || n == 0) {
        icondot.classList.remove("hidedot")
    }
}

//Open Day Schedule

var c = 0;

//Clickables
m = document.getElementById("m")
t = document.getElementById("t")
w = document.getElementById("w")
th = document.getElementById("th")
f = document.getElementById("f")
calIcon = document.getElementById("calicon")

//Day highlighters
mon = document.getElementById("mon")
tue = document.getElementById("tue")
wed = document.getElementById("wed")
thur = document.getElementById("thur")
fri = document.getElementById("fri")
iconDot = document.getElementById("icondot")

//Day Schedules
schedMon = document.getElementById("schedulemon")
schedTue = document.getElementById("scheduletue")
schedWed = document.getElementById("schedulewed")
schedThur = document.getElementById("schedulethur")
schedFri = document.getElementById("schedulefri")
//schedIconDot
openSched = document.getElementById("opensched")



m.addEventListener("click", monClick)
t.addEventListener("click", tueClick)
w.addEventListener("click", wedClick)
th.addEventListener("click", thurClick)
f.addEventListener("click", friClick)
calIcon.addEventListener("click", calIconClick)

function monClick() {
    mon.classList.remove("hidedot");
    tue.classList.add("hidedot");
    wed.classList.add("hidedot");
    thur.classList.add("hidedot");
    fri.classList.add("hidedot");
    iconDot.classList.add("hidedot");

    if (c == 2) {
        tue.classList.add("hidedot")
        schedTue.classList.add("hidestart")
        tue.classList.remove("opendot")
        schedTue.classList.remove("opensched")
    }
    if (c == 3) {
        wed.classList.add("hidedot")
        schedWed.classList.add("hidestart")
        wed.classList.remove("opendot")
        schedWed.classList.remove("opensched")
    }
    if (c == 4) {
        thur.classList.add("hidedot")
        schedThur.classList.add("hidestart")
        thur.classList.remove("opendot")
        schedThur.classList.remove("opensched")
    }
    if (c == 5) {
        fri.classList.add("hidedot")
        schedFri.classList.add("hidestart")
        fri.classList.remove("opendot")
        schedFri.classList.remove("opensched")
    }

     if (c == 1) {
        mon.classList.add("hidedot")
        schedMon.classList.add("hidestart")
        mon.classList.remove("opendot")
        schedMon.classList.remove("opensched")
         setTimeout(hideSched,1000),
        c = 0;
    } else {
        openSched.classList.remove("hidesched")
        mon.classList.remove("closedot")
        schedMon.classList.remove("closesched")
        mon.classList.add("opendot")
        schedMon.classList.remove("hidestart")
        schedMon.classList.add("opensched")
        c = 1;
    }
}

function tueClick() {
    mon.classList.add("hidedot");
    tue.classList.remove("hidedot");
    wed.classList.add("hidedot");
    thur.classList.add("hidedot");
    fri.classList.add("hidedot");
    iconDot.classList.add("hidedot");

    if (c == 1) {
        mon.classList.add("hidedot")
        schedMon.classList.add("hidestart")
        mon.classList.remove("opendot")
        schedMon.classList.remove("opensched")
    }
    if (c == 3) {
        wed.classList.add("hidedot")
        schedWed.classList.add("hidestart")
        wed.classList.remove("opendot")
        schedWed.classList.remove("opensched")
    }
    if (c == 4) {
        thur.classList.add("hidedot")
        schedThur.classList.add("hidestart")
        thur.classList.remove("opendot")
        schedThur.classList.remove("opensched")
    }
    if (c == 5) {
        fri.classList.add("hidedot")
        schedFri.classList.add("hidestart")
        fri.classList.remove("opendot")
        schedFri.classList.remove("opensched")
    }

    if (c == 2) {
        tue.classList.add("closedot")
        schedTue.classList.add("closesched")
        tue.classList.remove("opendot")
        schedTue.classList.remove("opensched")
        setTimeout(hideSched,1000),
        c = 0;
    } else {
        openSched.classList.remove("hidesched")
        tue.classList.remove("closedot")
        schedTue.classList.remove("closesched")
        tue.classList.add("opendot")
        schedTue.classList.remove("hidestart")
        schedTue.classList.add("opensched")
        c = 2;
    }
}

function wedClick() {
    mon.classList.add("hidedot");
    tue.classList.add("hidedot");
    wed.classList.remove("hidedot");
    thur.classList.add("hidedot");
    fri.classList.add("hidedot");
    iconDot.classList.add("hidedot");

    if (c == 1) {
        mon.classList.add("hidedot")
        schedMon.classList.add("hidestart")
        mon.classList.remove("opendot")
        schedMon.classList.remove("opensched")
    }
    if (c == 2) {
        tue.classList.add("hidedot")
        schedTue.classList.add("hidestart")
        tue.classList.remove("opendot")
        schedTue.classList.remove("opensched")
    }
    if (c == 4) {
        thur.classList.add("hidedot")
        schedThur.classList.add("hidestart")
        thur.classList.remove("opendot")
        schedThur.classList.remove("opensched")
    }
    if (c == 5) {
        fri.classList.add("hidedot")
        schedFri.classList.add("hidestart")
        fri.classList.remove("opendot")
        schedFri.classList.remove("opensched")
    }
    if (c == 3) {
        wed.classList.add("closedot")
        schedWed.classList.add("closesched")
        wed.classList.remove("opendot")
        schedWed.classList.remove("opensched")
        setTimeout(hideSched,1000),
        c = 0;
    } else {
        openSched.classList.remove("hidesched")
        wed.classList.remove("closedot")
        schedWed.classList.remove("closesched")
        wed.classList.add("opendot")
        schedWed.classList.remove("hidestart")
        schedWed.classList.add("opensched")
        c = 3;
    }
}

function thurClick() {
    mon.classList.add("hidedot");
    tue.classList.add("hidedot");
    wed.classList.add("hidedot");
    thur.classList.remove("hidedot");
    fri.classList.add("hidedot");
    iconDot.classList.add("hidedot");

    if (c == 1) {
        mon.classList.add("hidedot")
        schedMon.classList.add("hidestart")
        mon.classList.remove("opendot")
        schedMon.classList.remove("opensched")
    }
    if (c == 2) {
        tue.classList.add("hidedot")
        schedTue.classList.add("hidestart")
        tue.classList.remove("opendot")
        schedTue.classList.remove("opensched")
    }
    if (c == 3) {
        wed.classList.add("hidedot")
        schedWed.classList.add("hidestart")
        wed.classList.remove("opendot")
        schedWed.classList.remove("opensched")
    }
    if (c == 5) {
        fri.classList.add("hidedot")
        schedFri.classList.add("hidestart")
        fri.classList.remove("opendot")
        schedFri.classList.remove("opensched")
    }

    if (c == 4) {
        thur.classList.add("closedot")
        schedThur.classList.add("closesched")
        thur.classList.remove("opendot")
        schedThur.classList.remove("opensched")
        setTimeout(hideSched,1000),
        c = 0;
    } else {
        openSched.classList.remove("hidesched")
        thur.classList.remove("closedot")
        schedThur.classList.remove("closesched")
        thur.classList.add("opendot")
        schedThur.classList.remove("hidestart")
        schedThur.classList.add("opensched")
        c = 4;
    }
}

function friClick() {
    mon.classList.add("hidedot");
    tue.classList.add("hidedot");
    wed.classList.add("hidedot");
    thur.classList.add("hidedot");
    fri.classList.remove("hidedot");
    iconDot.classList.add("hidedot");

    if (c == 1) {
        mon.classList.add("hidedot")
        schedMon.classList.add("hidestart")
        mon.classList.remove("opendot")
        schedMon.classList.remove("opensched")
    }
    if (c == 2) {
        tue.classList.add("hidedot")
        schedTue.classList.add("hidestart")
        tue.classList.remove("opendot")
        schedTue.classList.remove("opensched")
    }
    if (c == 3) {
        wed.classList.add("hidedot")
        schedWed.classList.add("hidestart")
        wed.classList.remove("opendot")
        schedWed.classList.remove("opensched")
    }
    if (c == 4) {
        thur.classList.add("hidedot")
        schedThur.classList.add("hidestart")
        thur.classList.remove("opendot")
        schedThur.classList.remove("opensched")
    }

    if (c == 5) {
        fri.classList.add("closedot")
        schedFri.classList.add("closesched")
        fri.classList.remove("opendot")
        schedFri.classList.remove("opensched")
        setTimeout(hideSched,1000),
        c = 0;
    } else {
        openSched.classList.remove("hidesched")
        fri.classList.remove("closedot")
        schedFri.classList.remove("closesched")
        fri.classList.add("opendot")
        schedFri.classList.remove("hidestart")
        schedFri.classList.add("opensched")
        c = 5;
    }
}

function hideSched (){
    {openSched.classList.add("hidesched")}
}

function calIconClick() {
    mon.classList.add("hidedot");
    tue.classList.add("hidedot");
    wed.classList.add("hidedot");
    thur.classList.add("hidedot");
    fri.classList.add("hidedot");
    iconDot.classList.remove("hidedot");

    //    iconDot.classList.add("opendot")
    //    schedIconDot.classList.remove("hidestart")
    //    schedIconDot.classList.add("opensched")
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
