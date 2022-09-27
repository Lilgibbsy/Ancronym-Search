// JavaScript Code
document.getElementById("btn").addEventListener("click", search);
const acronyms = ["www", "cpu", "gpu", "html", "css"];
function search() {
  let input = document.getElementById("textIn").value;

  if (input.toLowerCase() === acronyms[0]) {
    document.getElementById("answer").innerHTML = "World Wide Web";
  } else if (input.toLowerCase() === acronyms[1]) {
    document.getElementById("answer").innerHTML = "Central Proccessing Unit";
  } else if (input.toLowerCase() === acronyms[2]) {
    document.getElementById("answer").innerHTML = "Graphics Proccessing Unit";
  } else if (input.toLowerCase() === acronyms[3]) {
    document.getElementById("answer").innerHTML = "HyperText Markup Language ";
  } else if (input.toLowerCase() === acronyms[4]) {
    document.getElementById("answer").innerHTML = "Cascading Style Sheets";
  } else {
    document.getElementById("answer").innerHTML =
      "Sorry I don't know that acronym";
  }
}
