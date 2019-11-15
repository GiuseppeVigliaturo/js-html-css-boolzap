$( document ).ready(function() {

  var listanomi = [];
  var contattocercato = "";
  var elementoCliccato;
  var posizione;
  var containerMessaggi;

  //milestone 1

//quando clicco su un contatto in particolare il suo riquadro cambia colore
//e cambia anche la schermata dei messaggi

  $(".contatto").click(function(){

 // mi salvo il contatto cliccato in una variabile
    elementoCliccato = $(this);
    //mi salvo la posizione dell'elemento cliccato in una variabile
    posizione = elementoCliccato.index();
    //mi salvo la posizione del mio contenitore messaggi
    containerMessaggi = $('.contenitore-mymessages').eq(posizione);
    console.log("la posizione dell'elemento è: ",containerMessaggi);

  //elimino a prescindere la classe active da tutti i contatti
    $(".contatto").removeClass("active");
    //aggiungo la classe active al contatto cliccato
    elementoCliccato.addClass("active");

    //cambio immagine al click
    var immagineavatar = $(".contatto.active .avatar").clone();
    $(".contenitore-avatar").html(immagineavatar);

    //aggiorno il nome al click
    var aggiornanome=($(".contatto.active .status-contatto .nome").text());
    $("#nomecontatto").text(aggiornanome);

     //rendo visibile solo il contenitore dei messaggi corrispondente al contatto selezionato
    $('.contenitore-mymessages').removeClass('display-block');
    containerMessaggi.addClass('display-block');


    //agganciamo al click sull'icona di invio la funzione di callback

  });


  $(".sendmsg").click(function(){

  //ci salviamo il valore dell'input inserito dall'utente
  var messaggio = $(".message").val();

  // facciamo una copia del div con classe "msgsent" che sta dentro
  // un div con ID "template"
  var elmentmsg = $("#template .msgsent").clone();

  console.log(elmentmsg);

  // modifica questa copia di "msgsent" aggiungendogli il testo del messaggio
  elmentmsg.find(".testo").text(messaggio);

  // appendiamo una copia con testo valorizzato del div "msgsent" alla finestra messaggi corrispondente

  containerMessaggi.append(elmentmsg);
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

    // appendiamo una copia con testo valorizzato del div "msgsent"alla finestra
    containerMessaggi.append(elmentanswer);


  }, 1000);


});


// $( "body").delegate( "div.testo", "click", function() {
//   $( this);
// });


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


 // parto da un elemento statico,
 // poi mi sposto su .contenitore-mymessages
   $(document).on("click", ".contenitore-mymessages", function (event) {

       $(this).find("span").toggle().click(function() {
        $(this).parentsUntil(".contenitore-mymessages").addClass("display-none");
      })

   });


});
