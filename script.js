let p1input = document.querySelector('.p1input');
let p1btn = document.querySelector('.p1btn');
let boxp1 = document.querySelector('.boxp1')
let p2input = document.querySelector('.p2input');
let p2btn = document.querySelector('.p2btn');
let boxp2 = document.querySelector('.boxp2')
let error = document.querySelector('.error')
let attamp = 0


p1btn.addEventListener('click',function () {
    let p1value=p1input.value



    if (p1value=='') {
        alert("Please give a number !!");
        
    }else if (p1value > 9) {
        alert("Please give me a number less than 9")
        
    }else{
        p1value.innerHTML='';
        boxp1.style.display='none';
        boxp2.style.display='block';
    }
})

p2btn.addEventListener("click",()=>{
    attamp++
    
    let p1value=p1input.value;
    let p2value=p2input.value; 
    
    
    if (p1value==p2value) {
        error.innerHTML = ('Congratulations ,Your number is correct!!')
        
    }else if (attamp > 5) {

        error.innerHTML = ('Congratulations ,Player One Win ')

    }
})
















































































