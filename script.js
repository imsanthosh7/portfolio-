// dorkmode 
function darkmode(){
    let setTheme=document.body;
    setTheme.classList.toggle("darkmode");
    let mode = document.getElementById("mode");
    if(mode.className == "fa-solid fa-moon"){
        mode.className = "fa-solid fa-sun"
    }else if(mode.className == "fa-solid fa-sun"){
        mode.className = "fa-solid fa-moon"
    }
}
// scroll top 
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrolltop.classList.toggle('active', window.scrollY > 0);
});

const more = document.getElementById('more')
const btn_seemore = document.getElementById('seemore')
const btn_seeless = document.getElementById('seeless')

function seemore() {
    more.style.display= "grid"
    btn_seeless.style.display = 'block'
    btn_seemore.style.display = 'none'
}
function seeless() {
    more.style.display= "none"
    btn_seeless.style.display = 'none'
    btn_seemore.style.display = 'block'
}






