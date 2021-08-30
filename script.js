function minhaLista() {
    var nome = document.getElementById("nome").value
    var node = document.createElement("li");
    node.append(nome);
    document.getElementById("id_lista").appendChild(node);
    limparCampo();
  }

  function limparCampo() {
    document.getElementById("nome").value='';
  }