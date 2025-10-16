const botao = document.getElementById('btAdicionar');
const lista = document.getElementById('lista');
const itemInput = document.getElementById('item');

botao.addEventListener('click', function() {
  const texto = itemInput.value.trim();

  if (texto === "") {
    alert("Digite algo antes de adicionar!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);

  itemInput.value = "";
});
