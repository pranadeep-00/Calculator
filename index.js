let result ='';
function setNumber(e){
    result= result+ e;
    updateResult(result);

}

function Operator(e){
    result=result+e;
    updateResult(result)
}

function Answer(){
    let answer= eval(result);
    result= answer.toString();
    updateResult(result);
}
function updateResult(result){
    //document.getElementById('input').value=result;
    document.getElementById('result').textContent= result;
}

function Clear(){
    result='';
    document.getElementById('result').textContent= '';
}
function BackSpace(){
    let indexToRemove = result.length-1;
    let newStr = result.substring(0, indexToRemove);
    result=newStr;
    updateResult(result);
}