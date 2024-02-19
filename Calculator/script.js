const num= document.getElementById("result");
function dis(val){
 let c=num.value+val.toString()
   if(c[0]>=0&&c[0]<10){
      num.value=num.value+val
    }
    else{
        num.value="";
        alert("only numbers are allowed")
    }
}
function result(){
    console.log(num.value)
    if(num.value==""){
          alert("only numbers are allowed")
    }
    else{
        num.value=eval(num.value)
    }
}
function Clear(){
    num.value="";
    
}
function del(){
     num.value=num.value.toString().slice(0,-1);
}