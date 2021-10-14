
let submit = document.querySelector("#submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  let demo = document.querySelector("#demo");

  let luxuryCar = "";
  let input = document.querySelector("#carInput").value;

  let carBrands = ["one", "two", "three", "four"];

  switch (input) {
    case carBrands[0]:
      luxuryCar = "it is a luxury car";
      console.log(`this is the input: ${input} and this is what is in the array: ${carBrands[0]}`);
      break;
    case carBrands[1]:
      luxuryCar = "it is a luxury car";
      console.log(`this is the input: ${input} and this is what is in the array: ${carBrands[1]}`);
      break;
    case carBrands[2]:
      luxuryCar = "it is a luxury car";
      console.log(`this is the input: ${input} and this is what is in the array: ${carBrands[2]}`);
      break;
    case carBrands[3]:
      luxuryCar = "it is a luxury car";
      console.log(`this is the input: ${input} and this is what is in the array: ${carBrands[3]}`);
      break;
    default:
      luxuryCar = "which kind car be dis??";
      console.log(input);
  }

  demo.textContent = luxuryCar;

})
