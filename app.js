const joy = document.querySelector(".btn1");
joy.addEventListener("click", function() {
  alert("Your message was submitted!");
});
console.log(joy);
const joy1 = document.querySelector(".btn2");
joy1.addEventListener("click", function() {
  alert("Your message was cleared!");
});
console.log(joy1);

const joy2 = document.querySelector(".contact");
joy2.addEventListener("click", function() ) {
    document.getElementsByClassName("cntc").value = "";
    document.getElementsByClassName("cntc2").value = "";
}



