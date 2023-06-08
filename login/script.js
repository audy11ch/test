const form=document.getElementById('form');
const phone=document.getElementById('phone');


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(phone.value==='' || phone.value===null){
        showerror(phone,'โปรดใส่หมายเลขโทรศัพท์');
    }else if ( phone.value.length <= 9 ) {
        showerror(phone,'โปรดใส่หมายเลขโทรศัพท์ให้ครบ');
    }else if ( phone.value != 0841809207) {
        showerror(phone,'หมายเลขโทรศัพท์ไม่ถูกต้อง');
    }
    else{
        return false
    }
});

function showerror(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
function pin(){
    if ( phone.value == 0841809207) {
        window.location.assign("pin.html");
    }
}