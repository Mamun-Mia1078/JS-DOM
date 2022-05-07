
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("must be given your name ");
    return false;
  }
}
