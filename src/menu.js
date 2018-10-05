const menuBtn = document.getElementById('menu-toggle')
const menu = document.getElementById('menu')

menuBtn.onclick = function(e) {
  e.preventDefault()
  menuToggle()
}
function menuToggle () {
  menu.classList.toggle('show')
}

document.addEventListener('click', function (e) {
	if (!e.target.matches('.menu-links')) return;
  menuToggle()
}, false);
