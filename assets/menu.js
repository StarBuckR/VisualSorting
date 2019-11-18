let acc = document.getElementsByClassName("accordion");
let hamb = document.getElementsByClassName("menu-btn");
let panels = document.getElementsByClassName("panel");
panels[1].style.setProperty("padding-top", "45px");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

let sizeBool = true;
function resizeAlgTab() {
    if(sizeBool) {
        document.getElementsByClassName("panel")[1].style.setProperty("padding-top", "0px");
        sizeBool = false
    } else {
        document.getElementsByClassName("panel")[1].style.setProperty("padding-top", "45px");
        sizeBool = true;
    }
}
acc[0].addEventListener("click", resizeAlgTab);

function closeMenus() {

    panels[0].style.maxHeight = null;
    panels[1].style.maxHeight = null;
    
    let buttons = document.querySelectorAll("button");
    for(let i = 0; i <= 1; i++){
        if(buttons[i].classList.contains("active")){
            buttons[i].classList.toggle("active");
        }
    }
}