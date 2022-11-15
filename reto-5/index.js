let addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
  localStorage.setItem(keywordElement.value, valElement.value);
});