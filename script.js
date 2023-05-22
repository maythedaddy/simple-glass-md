const simplemde = new SimpleMDE({
  element: document.getElementById('editor'),
  spellChecker: false,
});

// Display markdown in HTML preview
function drawPreview() {
  const html = SimpleMDE.prototype.markdown(simplemde.value());
  document.querySelector('.preview').innerHTML = html;
}

document.addEventListener('input', () => drawPreview());

// const easyMDE = new EasyMDE({
//   element: document.getElementById('my-text-area'),
// });

// document.addEventListener('input', () => easyMDE.value());
