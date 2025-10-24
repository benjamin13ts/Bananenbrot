document.getElementById("askName").addEventListener("click", function(){
  let name = prompt("Bitte gib uns Feedback!");
  document.getElementById("greet").innerText = "Danke für dein Feedback!";
});
