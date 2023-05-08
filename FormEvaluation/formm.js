const namee=document.getElementById('name');
const password=document.getElementById('pass');
const formm=document.getElementById('form');
const errorrElement=document.getElementById('error');

formm.addEventListener('submit',(e)=>{
    let mes=[]

    if(namee.value==''||namee.value==null)
    {
        mes.push("Name is required");
    }

    if(password.value.length<=8||password.value=='password')
    {
        mes.push("Password must be at a minimum of 8 characters!")
    }
           e.preventDefault();
           errorrElement.innerText=mes.join(", ");
} );