function send() {
    number1=document.getElementById("Number_1").value;
    number2=document.getElementById("Number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);

    Question_number="<h4>"+number1+"X"+number2+"</h4>";
    answer_input="<br> Answer : <input type='text' id='input_check'>";
    check_button="<br><br><button class='btn btn-info' id='button_check' onclick='check()'>Check</button>";
    row= Question_number + answer_input + check_button ;
    document.getElementById("outPut").innerHTML= row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}