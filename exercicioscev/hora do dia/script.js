function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('manha')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora <= 12) {
//bom dia
img.src = 'morning.jpg'
} else if (hora >= 12  && hora <= 18) {
//boa tarde
img.src = 'noon.jpg'
} else {
//boa noite
img.src = 'night.jpg'
}

}