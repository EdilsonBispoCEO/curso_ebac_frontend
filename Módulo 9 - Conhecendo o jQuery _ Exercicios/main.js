$(document).ready(function() {
    // Para adicionar tarefa ao clicar no botão
    $("#form-tarefas").submit(function(e) {
      e.preventDefault();
      var novaTarefa = $("#nova-tarefa").val();      // .val chamando o JQuery
      $("#tarefa-ve").append("<li>" + novaTarefa + "</li>");
      $("#nova-tarefa").val("");
    });

    // Para marcar a tarefa como completa ao clicar nela
    $("#tarefa-ve").on("click", "li", function() {
      $(this).toggleClass("tarefaRealizada");
    });

    /*
      (this) → faz referência ao objeto do qual a função é uma propriedade
      .toggleClass() → função do JQuery que adiciona ou remove uma classe a um elemento
    */
});

      //  espero que seja isso...