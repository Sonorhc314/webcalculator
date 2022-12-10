//C button, clears text bar
function ClearFields() {
  document.getElementById("result").value = "";
}

//deletes what you click and type
function dis(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function equal() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

//deletes last value from the text bar
function backspace() {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.substring(0, document.getElementById("result").value.length - 1);
}
