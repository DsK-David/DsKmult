function calcular(){
var txtv=document.getElementById("txtvel")
var vel=Number(txtv.value)
var res=document.getElementById("res")
res.innerHTML ='Sua velocidade é de '+vel+'km/h use sempre o sinto de segurança '

   if(txtv.value > 60) {
           res.innerHTML = 'Você foi muldado por andar a '+vel+' km/'
   }   
   if(txtv.value == '60'){
           res.innerHTML ='Quase foi multado use sempre o sinto de segurança '
   }
}