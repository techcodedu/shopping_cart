function changeText() {
  document.getElementById("sampleText").textContent = "New Text Passed";
}

function addElement() {
  // create a new element
  const newElement = document.createElement("p");
  newElement.textContent = "This is a paragraph";

  // add link
  const link = document.createElement("a");
  link.textContent = "Link";
  link.href = "www.google.com";

  const parent = document.getElementById("container");
  parent.appendChild(newElement);
  parent.appendChild(link);
}
function removeElement() {
  const element = document.getElementById("textToRemove");
  element.remove();
}

function changeStyle() {
  const element = document.getElementById("styledText");
  element.style.color = "red";
  element.style.fontWeight = "bold";
  element.style.backgroundColor = "#f4f4f4";
}

function greetUser() {
  const personName = document.getElementById("nameInput").value;
  document.getElementById("display").textContent = `Hello ${personName}`;
}

function visibility() {
  const element = document.getElementById("hiddenText");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
