
function field(){
    var btn = document.getElementById("butn");

    var input1 = document.getElementById("name_field");
    var input2 = document.getElementById("email_field");
    var input3 = document.getElementById("box_field");
  
    if (input1.value && input2.value && input3.value) {
        btn.innerHTML = "SEND"
    } else {    
        btn.innerHTML = "incomplete info"
    }
}