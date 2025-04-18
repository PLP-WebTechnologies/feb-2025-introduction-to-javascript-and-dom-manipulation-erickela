// Change the text content of an element
function changeText() {
  document.getElementById("main-heading").textContent = "Text Changed with JavaScript!";
}

// Modify CSS styles dynamically
function changeStyle() {
  const text = document.getElementById("info-text");
  text.style.color = "white";
  text.style.backgroundColor = "purple";
  text.style.padding = "10px";
  text.style.borderRadius = "10px";
}

// Add a new paragraph to the page
function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "🎉 This paragraph was added dynamically!";
  newPara.id = "new-para";
  document.getElementById("dynamic-content").appendChild(newPara);
}

// Remove the previously added paragraph
function removeElement() {
  const para = document.getElementById("new-para");
  if (para) {
    para.remove();
  }
}
