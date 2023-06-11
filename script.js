const simplemde = new SimpleMDE({
  element: document.getElementById("editor"),
  spellChecker: false,
});

// Display markdown in HTML preview
function drawPreview() {
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.querySelector(".preview").innerHTML = html;
}

document.addEventListener("input", () => drawPreview());

// Update preview when delete key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Delete" || event.key === "Backspace") {
    drawPreview();
  }
});
