
function handlerBtn(){
    var btn = document.getElementById("butn");

    var input1 = document.getElementById("name_field");
    var input2 = document.getElementById("email_field");
    var input3 = document.getElementById("box_field");
  
    if (input1.value != "" && input1.value != "" && input1.value != ""){
        
        btn.classList.remove("disabled");
        btn.innerHTML = "SEND";
    } else {    
        console.log("abc")
    }
}
