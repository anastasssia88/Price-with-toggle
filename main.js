const toggle = document.querySelector("input[name=checkbox]");

const basicPrice = document.getElementById("basic__price");
const professionalPrice = document.getElementById("professional__price");
const masterPrice = document.getElementById("master__price");


toggle.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      basicPrice.innerHTML =  199.99;
      professionalPrice.innerHTML =  249.99;
      masterPrice.innerHTML =  399.99;
    } else {
      console.log("Checkbox is not checked..");
      basicPrice.innerHTML =  19.99;
      professionalPrice.innerHTML =  24.99;
      masterPrice.innerHTML =  39.99;
    }
  });