var displayValue = "";

function appendToDisplay(a) {
    displayValue +=  a;
    document.getElementById("inputbox").value = displayValue;
}

function appendOperator(operator) {
    
    var lastChar = displayValue.charAt(displayValue.length - 1);
    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
        displayValue += operator;
        document.getElementById("inputbox").value = displayValue;
    }
}

function appendDecimal() {
    var lastChar = displayValue.charAt(displayValue.length - 1);
    if (lastChar !== '.') {
        displayValue += '.' ;
        document.getElementById("inputbox").value = displayValue;
    }
}

function clearEachDisplay(){
    displayValue = displayValue.slice(0,-1);
    document.getElementById("inputbox").value = displayValue;
}

function square(x){
    displayValue *= displayValue
    document.getElementById("inputbox").value = displayValue;
}


function addpercentage(){
    displayValue = displayValue/100;
    document.getElementById("inputbox").value = displayValue;

}

function clearDisplay() {
    displayValue = "";
    // operator = "";
    document.getElementById("inputbox").value = displayValue;
}

function calculateResult() {
        
            displayValue = eval(displayValue).tostring();
            document.getElementById("inputbox").value = displayValue;
      
}


