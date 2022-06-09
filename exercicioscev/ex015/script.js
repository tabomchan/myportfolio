function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if (fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('[erro]VERIFIQUE OS DADOS E TENTE NOVAMENTE')
}else {
   var fsex =  document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img =document.createElement('img')
   img.setAttribute('id', 'foto')
   if (fsex[0].checked) {
       genero = 'Homem'
       if (idade >=0 && idade < 50){
       //youngman
       img.setAttribute('src', 'young man.jpg' )
       }
       else  {
           img.setAttribute('src','oldman.jpg')
       }

   } else if (fsex[1].checked) {
     genero = 'Mulher'
     if (idade >=0 && idade < 50){
         img.setAttribute ('src', 'young girl.jpg')
     }
       //younggirl
       else  {
           img.setAttribute ('src', 'old lady.jpg')
       }

   }
}
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}
