const clock=document.querySelector('#clock')


let changingtime=setInterval(function(){
    let date= new Date()
    clock.innerHTML=date.toLocaleTimeString()
},1000)

