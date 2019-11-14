$( document ).ready(function() {

  var listanomi = [];
  var i=0;
  var contattocercato = "";

  //milestone 1

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

  //risposta automatica
  setTimeout(function(){
    var ris = "ok";
    console.log(ris);

    // facciamo una copia del div con classe "msgsent" che sta dentro
    // un div con ID "template"
    var elmentanswer = $("#template-risp .risposta").clone();

    console.log(elmentanswer);

    // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
    elmentanswer.find(".risp-testo").text(ris);

    // appendiamo una copia con testo valorizzato del div "msgsent"
    $("#contenitore-mymessages").append(elmentanswer);


  }, 1000);


});

//quando clicco su un contatto in particolare il suo riquadro cambia colore

  $(".contatto").click(function(){
    if (!$(this).hasClass("active")) {
      $(".contatto").removeClass("active");
      $(this).addClass("active");


          //cambio immagine al click
      var immagineavatar = $(".contatto.active .avatar").clone();
      $(".contenitore-avatar").html(immagineavatar);
          //aggiorno il nome al click
      var x=($(".contatto.active .status-contatto .nome").text());

      $(".contenitore-avatar #nomecontatto").text(x);
      console.log(x);
    }

  });

//milestone 2
  //prova tastiera
  $("input.research").keyup(function(k){
    // quando digito nella barra di ricerca tutti i contatti spariscono
   $(".listacontatti .container-contatti .contatto").hide();

  // });


   //al click sulla searchbar faccio una ricerca per vedere se il nomecontatto
   //inserito è un contatto

   // $(".sendsearch").click(function(){
   //salvo il nome digitato nella searchbar
    contattocercato = $("input.research").val().toLowerCase();
    // console.log("input  ",contattocercato);

   // faccio un ciclo che mi seleziona tutti i contatti
   $(".listacontatti .container-contatti .contatto").each(function(){

     //salvo i contatti in una variabile esterna
     var element= $(this);
     console.log(element);
     var contactname = element.find(".nome").text().toLowerCase();
     console.log(contactname);


     if (contactname.includes(contattocercato)) {

       element.addClass("visibile");
       $(".listacontatti .container-contatti .contatto.visibile").show();
       element.removeClass("visibile");
     }

  });

  //quando premo il tasto invio la searchbar si resetta e i contatti tornano visibili

  var x = k.which || k.keyCode;
    console.log(x);

  if(x === 13){
      console.log("invio");
   $("input.research").val("");
   $(".listacontatti .container-contatti .contatto").show();
 }

 });

 //milestone 3

 //intercetto il click su dot per muovere il carousel cliccandoci

// $(".contatto").click(function() {
//   //mi salvo tutti i .dot presenti in pagina
//   var dots = $(".contatto");
//   var msgwindow = $("#contenitore-mymessages")
//   console.log($(this));
//   for(var i = 0; i < dots.length; i++) {
//     console.log("entro nel for", dots.eq(i));
//     //se il dot su cui clicco è uguale all'i-esimo dot ciclato allora il valore attuale del contatore i
//     //posso usarlo come indice per risalire all'immagine
//     if ($(this).is(dots.eq(i))) {
//       //rimuovo active a tutte le finestre di messaggio
//       msgwindow.removeClass("display-block").addClass("display-none");
//
//       msgwindow.eq(i).removeClass("display-none").addClass("display-block");
//
//   }
//   $(".contatto.active").removeClass("active");
//   $(this).addClass("active");
// }
// });



});
