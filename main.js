const buttonE=document.getElementById('btnE')
const buttonD=document.getElementById('btnD')
const buttonC=document.getElementById('btnC')

const content=document.getElementById('contentEnc')
const msjResult=document.getElementById('msjResult')

buttonE.addEventListener('click',()=>{
    ocultar()
})







function ocultar(){
    content.classList.add('hidden')
    msjResult.classList.remove('hidden')
}

