const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results');

    if(height===''|| height<0|| isNaN(height)){
        result.innerHTML=`please enter a valid Height ${height}`
    }
    else if(weight===''|| weight<0|| isNaN(weight)){
        result.innerHTML=`please enter a valid weight ${weight}`
    }
    else{
      
        const bmi=(weight/((height*height)/10000)).toFixed(1)
        let message=`<span> your bmi is ${bmi} </span> <br>`
       if(bmi<18.5){
        message+=`<span> and underweight</span>`
       }
       else if(bmi>=18.5 && bmi<24.9){
           message+=`<span> and normal weighted</span>`
       }
       else{
        message+=`<span> and Overweight</span>`
       }
        
    result.innerHTML=message

    }
    
})