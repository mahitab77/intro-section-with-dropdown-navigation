
var themenu= document.getElementById("burgrmenu")
var closebtn=document.getElementById("closeicon")
var overlaydim=document.getElementById("overlay")
var leftrighttop=document.getElementById("leftrightanc")

var regbtn=document.getElementById("registerbtn")
var lrnbtn=document.getElementById("learnbtn")

var ddbtno=document.getElementById("featanc")
var ddbtni=document.getElementById("companc")
var arrowupdwn= document.getElementsByClassName("imgarwdwn")

// Initial check when the page loads
handleResize()

 
////////////////feature list///////////////////////
function openlistf(event) {
    event.stopPropagation()
    if (document.getElementById("feat").style.display=='none'){
        document.getElementById("feat").style.display='flex'
        arrowupdwn[1].src="./images/icon-arrow-up.svg"
    }
    else {
        document.getElementById("feat").style.display='none'
        arrowupdwn[1].src="./images/icon-arrow-down.svg"
    }
}
function closelistf(){
    document.getElementById("feat").style.display='none'
    arrowupdwn[0].src="./images/icon-arrow-down.svg"
}
//////////////company list/////////////////////////
function openlistc(event) { 
    event.stopPropagation()
    if (document.getElementById("comp").style.display=='none'){
            document.getElementById("comp").style.display='flex'
            arrowupdwn[1].src="./images/icon-arrow-up.svg"
        }
        else {
            document.getElementById("comp").style.display='none'
            arrowupdwn[1].src="./images/icon-arrow-down.svg"
        }
}
function closelistc() {
    if (document.getElementById("comp").style.display=='flex'){
        document.getElementById("comp").style.display='none'
        arrowupdwn[1].src="./images/icon-arrow-down.svg"
    }
}
////////////Register Button//////////////////////
function styleregbtn (){
  regbtn.style.border='2px solid black'
  regbtn.style.color='black'
}
///////////////learn button/////////////////////
function stylelrnbtn (){
  lrnbtn.style.border='2px solid black'
  lrnbtn.style.color='black'
  lrnbtn.style.backgroundColor='white'
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function handleResize() {
  if (window.matchMedia("(max-width: 375px)").matches) {
    ////////open menu////////////
    function openmenu(){
    overlaydim.style.display='flex'
    leftrighttop.style.display='flex'
    closebtn.style.display='flex'
    themenu.style.display='none'
 }
     themenu.onclick= openmenu
    ////when close icon clicked////
    function closemenu(){
    overlaydim.style.display='none'
    leftrighttop.style.display='none'
    closebtn.style.display='none'
    themenu.style.display='flex'
 }
     closebtn.onclick=closemenu
     //////////////////////////////
    regbtn.onclick = styleregbtn
    lrnbtn.onclick = stylelrnbtn
    ddbtno.onclick = openlistf
    ddbtni.onclick = openlistc
  } 
  else 
  {
    // Code to execute when the viewport is larger than 375px
    //resetting values//
    console.log("desktopdisplay")
    leftrighttop.style.display=''
    closebtn.style.display=''
    themenu.style.display=''
    overlaydim.style.display=''
    closelistf()
    closelistc()
    /////Features anchor hover////////////////////
    function blackfeat (){ ddbtno.style.color='black'}
    ddbtno.onmouseover=blackfeat
    function greyfeat(){ddbtno.style.color='hsl(0, 0%, 41%)'}
    ddbtno.onmouseout=greyfeat
   ///////////////company anchor hover//////////////
   function blackcomp (){ddbtni.style.color='black'}
   ddbtni.onmouseover=blackcomp
   function greycomp(){ddbtni.style.color='hsl(0, 0%, 41%)'}
   ddbtni.onmouseout=greycomp
   ////////////////////about anchor hover////////////
    var aboutanc=document.getElementById("about")
    function aboutblack (){aboutanc.style.color='black'}
    aboutanc.onmouseover=aboutblack 
    function aboutgrey(){aboutanc.style.color='hsl(0, 0%, 41%)'}
    aboutanc.onmouseout=aboutgrey
    ////////////////////login anchor hover///////////
    var loginanc=document.getElementById("login")
    function loginblack(){loginanc.style.color='black'}
    loginanc.onmouseover=loginblack
    function logingrey(){loginanc.style.color='hsl(0, 0%, 41%)'}
    loginanc.onmouseout=logingrey
    ////////////////////////////////////////////////
    regbtn.onclick = styleregbtn
    lrnbtn.onclick = stylelrnbtn
    
    ddbtno.onclick = openlistf
    ddbtni.onclick = openlistc 
  
 }
}


// Add an event listener to handle window resizing
window.addEventListener("resize", handleResize)

///////////////close menus if clicked anywhere else on the screen/////////////////////

var feato=document.getElementById("feat")
var compi=document.getElementById("comp")

function closeMenuIfClickedOutside(event) {

     if (event.target !== feato && feato.style.display === 'flex') {
        closelistf()
    }
    if (event.target !== compi && compi.style.display === 'flex') {
        closelistc()
    }
  }
  
  // Add a click event listener to the document
  document.addEventListener('click', closeMenuIfClickedOutside)
  








