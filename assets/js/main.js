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
  $("#contenitore-mymessages").append(elmentmsg);
  $(".message").val("");

  //risposta


  var ris = "ok";
  console.log(ris);

  // facciamo una copia del div con classe "msgsent" che sta dentro
  // un div con ID "template"
  var elmentanswer = $("#template-risp .risposta").clone();

  console.log(elmentanswer);

  // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
  elmentanswer.find(".risp-testo").text(ris);

  // appendiamo una copia con testo valorizzato del div "msgsent"
  $("#contenitore-answer").append(elmentanswer);



});

//quando clicco su un contatto in particolare il suo riquadro cambia colore

  $(".contatto").click(function(){
    if (!$(this).hasClass("active")) {
      $(".contatto").removeClass("active");
      $(this).addClass("active");


          //cambio immagine al click
      // var immagineavatar = $(".contatto.active .avatar img").clone();
      // $(".contenitore-avatar").html(immagineavatar);
          //aggiorno il nome al click
      var x=($(".contatto.active .nome").text());
      console.log(x);
      $("#nomecontatto").text(x);
    }

  });

});
