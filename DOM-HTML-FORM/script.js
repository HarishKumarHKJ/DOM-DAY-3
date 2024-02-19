 const formsEl= document.forms.foodform;
const { firstname,lastname,address,pincode,gender,food,country,state}= formsEl.elements;
const btn=document.getElementById("submit")
const tableel=document.getElementById("tbody")

let beta="";        
formsEl.addEventListener("submit",(e)=>{     
    e.preventDefault()
     
     for(i=0;i<food.length;i++){            
        if(food[i].checked===true){
           beta+= food[i].value+" ";
        }
    }
     tableel.innerHTML +=`<td>${firstname.value} </td> <td>${lastname.value} </td> <td>${address.value} 
     </td> <td>${pincode.value} <td>${gender.value} </td> <td>${beta}</td> <td>${country.value}</td>
     <td>${state.value}`;   
     beta="";
})


reset.addEventListener("click",()=>{      
    firstname.value="";
     lastname.value="";
     pincode.value="";
     address.value="";
     country.value="";
      state.value="";
})