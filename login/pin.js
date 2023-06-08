function insert(){
  let insert=document.querySelector('#display')
  if (insert.value.length < 6 ){
    console.log(display.value)
  }else if(insert.value == 300478){
window.location.assign("page3.html");
  }else if(insert.value != 300478){
    alert("ไม่ถูกต้อง");
      }
  else {
    insert.value = insert.value.substring(0, insert.value.length - 1)
  }
}
