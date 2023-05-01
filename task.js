document.addEventListener('DOMContentLoaded',function(){
    const submit = document.querySelector('#submit');
    const newtask = document.querySelector('#task');

    //making submit function disabled while it has no value
    submit.disabled = true;
    newtask.onkeyup=()=>{
        if(newtask.value.length>0){
            submit.disabled= false;
        }else{
            submit.disabled = true;
        }
    }

    //submisiion form
    document.querySelector('form').onsubmit = ()=>{
        const task = newtask.value;
        const li = document.createElement('li');
        li.innerHTML=task;
        document.querySelector('#tasks').append(li);
        newtask.value='';
        return false;
    }
});