const simplemde = new SimpleMDE({
  element: document.getElementById('editor'),
  spellChecker: false,
});

// Display markdown in HTML preview
function drawPreview() {
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.getElementById('preview').innerHTML = html;
}

document.addEventListener('input', () => drawPreview());
