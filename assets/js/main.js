$( document ).ready(function() {

  //agganciamo al click sull'icona di invio la funzione di callback
  $(".sendmsg").click(function(){

  //ci salviamo il valore dell'input inserito dall'utente
  var messaggio = $(".message").val();

  // facciamo una copia del div con classe "msgsent" che sta dentro
  // un div con ID "template"
  var elmentmsg = $("#template .msgsent").clone();

  console.log(elmentmsg);

  // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
  elmentmsg.find(".testo").text(messaggio);

  // appendiamo una copia con testo valorizzato del div "msgsent"
  $("#contenitore").append(elmentmsg);

  // ripuliamo il contenuto dell'input, per UX
  $(".message").val("");

  })


  // $(window).on({
  //       keypress: function (k) {
  //           console.log(k); //check which keycode
  //
  //           if (k.keyCode == "13") {
  //               sendmsgs();
  //           }
  //
  //       }
  //   });

});
