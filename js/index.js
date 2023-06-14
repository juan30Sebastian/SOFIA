// Verificar si boxhello ya fue vista
const hasBoxHelloBeenSeen = localStorage.getItem('boxhelloSeen');

if (!hasBoxHelloBeenSeen) {
  // Mostrar boxhello y ocultar loading
  document.querySelector('.boxwelcome').style.display = 'flex';
  document.querySelector('#loading-screen').style.display = 'none';
} else {
  // Ocultar boxhello y mostrar loading
  document.querySelector('.boxwelcome').style.display = 'none';
  document.querySelector('#loading-screen').style.display = 'flex';
}

// Botón para ocultar boxhello y mostrar loading
const logocarta = document.querySelector(".logocarta");
logocarta.addEventListener('click', () => {
  // Ocultar boxhello y mostrar loading
  document.querySelector('.boxwelcome').style.display = 'none';
  document.querySelector('#loading-screen').style.display = 'flex';

  // Guardar en local storage que boxhello ha sido vista
  localStorage.setItem('boxhelloSeen', 'true');
});









var media = [
    { type: "video", source: "videos/valeriaclip.mp4", titulo: "Valeria", descripcion: "En otra casa" },
    { type: "video", source: "videos/yotepago.mp4", titulo: "Yo te pago. Jajaja.", descripcion: "En otra casa" },
    { type: "video", source: "videos/mojada.mp4", titulo: "Mojada", descripcion: "En otra casa" },
    { type: "video", source: "videos/tequieroamorir.mp4", titulo: "Te quiero a morir", descripcion: "En otra casa" },
    { type: "video", source: "videos/entuquerres.mp4", titulo: "En tuquerres", descripcion: "En otra casa" },
    { type: "video", source: "videos/valeriacover.mp4", titulo: "Valeria cover", descripcion: "En otra casa" },
    { type: "video", source: "videos/coleccionistadecanciones.mp4", titulo: "Coleccionista de canciones", descripcion: "En otra casa" },
    { type: "video", source: "videos/poramarteasi.mp4", titulo: "Por amarte asi.", descripcion: "En otra casa" },
    { type: "video", source: "videos/jaquematejuanse.mp4", titulo: "Jaquemate", descripcion: "En otra casa" },
    { type: "video", source: "videos/yonomedoyporvencido.mp4", titulo: "Yo no me doy por vencido", descripcion: "En otra casa" },
    { type: "video", source: "videos/lalocuraautomatica.mp4", titulo: "La locura automatica", descripcion: "En otra casa" },
    { type: "video", source: "videos/dequemesirvelavida.mp4", titulo: "De que me sirve la vida", descripcion: "En otra casa" },
    { type: "video", source: "videos/suena.mp4", titulo: "Sueña", descripcion: "En otra casa" },
    { type: "video", source: "videos/sinotehubierasido.mp4", titulo: "Si no te hubieras ido", descripcion: "En otra casa" },
    { type: "video", source: "videos/lalocuraautomatica1.mp4", titulo: "La locura automatica", descripcion: "En otra casa" },
    { type: "video", source: "videos/megustas.mp4", titulo: "Me gustas", descripcion: "En otra casa" },
    { type: "video", source: "videos/buenosaires.mp4", titulo: "Buenos aires", descripcion: "En otra casa" },
    { type: "video", source: "videos/comoyonadietehaamado.mp4", titulo: "Como yo nadie te ha amado", descripcion: "En otra casa" },
    { type: "video", source: "videos/todoloquehagolohagoporti.mp4", titulo: "Todo lo que hago lo hago por ti", descripcion: "En otra casa" },
    
    
    
    
    
    
    
    
    { type: "image", source: "imagenes/condestinoasandona.jpg", titulo: "Con destino a Sandona", descripcion: "Me invitaron a pasar un fin de semana en Sandoná, y fue una experiencia realmente espectacular. Hacía años que no visitaba ese lugar, y me hizo recordar mi infancia, cuando solíamos llegar por la noche y escuchar los sonidos característicos de los grillos y el aleteo de las libélulas. Al llegar, me sorprendió gratamente el cambio que había experimentado el campo. Fue una experiencia muy hermosa poder caminar entre las trochas, cruzando el río de Guaitarilla mientras nos balanceábamos en los riscos, explorando un bosque y recolectando frutas. Sin embargo, lo que me entristeció un poco fue que no le diste importancia cuando te conté que iba de viaje." },
      { type: "image", source: "imagenes/arbolbocaabajo.jpg", titulo: "Árbol boca abajo", descripcion: "No recuerdo con precisión la razón por la cual hiciste ese árbol, pero si no me equivoco, fue debido a un intercambio de talleres que realizaste con un compañero. Recuerdo haberte mencionado que el árbol de papel amanecería húmedo por la brisa, pero tú me respondiste que estaba protegido en el interior. me daba risa imaginar que se iba a destruir tu trabajo por la interperie" },
      { type: "image", source: "imagenes/quecomidasera.jpg", titulo: "¿Qué comida sera?", descripcion: "Siempre me he preguntado qué tipo de comida es esa; a primera vista parece cereal, pero no estoy seguro si me equivoco. Parece que tus amigas tienen el mismo apetito voraz que tú, gastando grandes sumas de dinero para satisfacer sus antojos. Me pregunto dónde estarían comiendo. Esto me hace recordar todas esas ocasiones en las que disfrutabas de diversas comidas en la calle y nunca me compartías ni un bocado. Jajaja." },
      { type: "image", source: "imagenes/enotracasa.jpg", titulo: "En otra casa", descripcion: "Cuando me mencionaste que te habías quedado fuera de casa debido a que olvidaste las llaves, me pregunté cómo resolverías la situación. Me diste la tranquilidad al decirme que tu primo se encargaría de ello. Sin embargo, luego me enviaste una foto y mencionaste que estabas en la casa de otra vecina, lo cual me dejó pensando en cuál sería la razón. Al final, no me enteré de cómo lograron ingresar de nuevo." },
      { type: "image", source: "imagenes/laregla.jpg", titulo: "La regla", descripcion: "Me resultó divertido porque no entendía el propósito de la foto. Sin embargo, me llamó la atención cuando hiciste hincapié en la regla y luego me enviaste esa foto. En ese momento, me invadieron algunos pensamientos que iban en contra de mis principios morales, pero me reprendiste por expresar esos pensamientos y relacionarlos con la regla. No estoy seguro/a si no te gusta hablar de esa manera, aunque creo que sí lo haces, dado los múltiples mensajes de voz en los que te expresabas de manera brusca. No entiendo por qué no pude tener la misma confianza para hacerlo." },
      { type: "image", source: "imagenes/elrefugio.jpg", titulo: "El refugio", descripcion: "El refugio, o como ustedes decidan llamarlo, es el lugar donde ocurrió este recuerdo. Recuerdo claramente que estaban esperando el camión que traería su vaca cuando de repente comenzó a llover intensamente. En ese momento, te pregunté si se estaban mojando y tú me enviaste una foto de su refugio. Tal vez fue en esa ocasión cuando tu padre te envió a buscar una vaca que se había escapado, y fue entonces cuando me mencionaste que padecías algo relacionado con tu corazón. Es realmente una pena, imagínate lo que podría ocurrir si te enamoras de tu principe azúl, podrías sufrir un fuerte susto. Jajaja." },
      { type: "image", source: "imagenes/quepecadito.jpg", titulo: "Que pecadito", descripcion: "Sé que valoro nuestra amistad y me entristeció que alguien te haya lastimado. Recuerdo que ese tipo tomó el bolso de una de tus compañeras y parece ser que lo pateó, o quizás me equivoque. En respuesta, saliste en tu defensa cuando ese tipo tomó tu bolso, donde llevabas tu termo de café, y te hirió con un lapicero o lápiz. Si yo hubiera estado presente, los hubiera dejado sin decir muuuu jsjsjs. No entiendo cómo es que todavía te relacionas con ellos, encambio yo que no te he hecho nada y te has distanciado de mí." },
      { type: "image", source: "imagenes/sorpresa.jpg", titulo: "¡Sorpresa!", descripcion: "Ese día, creo recordar que era un lunes festivo. Tenía la expectativa de recibir un saludo por el Día del Hombre de tu parte. Me decía a mí mismo que si no fue el domingo, tal vez sería ese lunes festivo. Sin embargo, de todas las personas que conozco, solo una persona, con la que tengo menos relación, fue la primera y única que me felicitó. Fue en ese momento cuando te comenté que no creía que fueras capaz de visitarme y tú respondiste que estabas ocupado con tu madre." },
      { type: "image", source: "imagenes/enelrincon.jpg", titulo: "En el rincón", descripcion: "Ahora comprendo por qué siempre te encontrabas en la esquina de tu salón. Pareces ser una estudiante algo traviesa, pero encantadora. Recuerdo esos momentos en los que, junto con un compañero que ocupaba el mismo asiento que tú, nos sumergíamos en la lectura hasta que llegara el próximo profesor." },
      { type: "image", source: "imagenes/sontelasverdad.jpg", titulo: "¿Son telas verdad?", descripcion: "De esta foto, no puedo brindar muchos detalles. Solo sé que estabas comprando tela junto a tu madre, y me imagino que era para tejer. Un aspecto que recuerdo de tu madre es su destreza como modista." },
      { type: "image", source: "imagenes/mipasion.jpg", titulo: "Mi pasión", descripcion: "Una de las cosas que me apasiona es la literatura y la escritura. Desde que era niño, siempre he disfrutado imaginando historias y plasmándolas en papel. Este fervor por el arte de escribir nació gracias a mi profesora de primaria, quien solía asignarnos la tarea de escribir un cuento todos los viernes por la mañana. Aún conservo algunos de esos cuentos, y al leerlos, no puedo evitar sonreír al recordar cómo era mi imaginación de niño. Mi interés por la literatura se fortaleció aún más cuando Daniel repitió el año y me quedé sin compañía. Fue en ese momento cuando conocí a un compañero con el que nunca antes había interactuado. Él despertó en mí el deseo de leer, ya que lo veía sumergido en libros mucho más que yo. Comenzamos a compartir nuestras lecturas y yo le prestaba mis libros. Lo más hermoso era que leíamos un libro juntos durante los momentos de recreo, y si uno de nosotros faltaba, el otro no podía seguir leyendo. El último libro que leímos juntos fue El ruido de las cosas al caer. Ahora quisiera que tu fueras mi lectora numero uno de mis historias." },
      { type: "image", source: "imagenes/quegoce.jpg", titulo: "¡Qué goce!", descripcion: "En aquella tarde, me causaste una gran risa al actuar de manera exagerada por atrapar un cuy muerto. Me dio pena ver cómo tu hermana tuvo que encargarse de todo el trabajo, a pesar de que eres la hermana mayor. Fue divertido escucharlas gritar en cada paso que daban mientras enterraban al cuy. Incluso mencioné que los vecinos debieron alarmarse por el escándalo que montaron. No sé si podré subir los audios para revivir esos momentos jajaja." },
      { type: "image", source: "imagenes/aldesmadre.jpg", titulo: "Al desmadre", descripcion: "... " },
      { type: "image", source: "imagenes/inseparables.jpg", titulo: "Inseparables", descripcion: "... " },
      { type: "image", source: "imagenes/sancipriano.jpg", titulo: "San cipriano", descripcion: "... " },
      { type: "image", source: "imagenes/floresdepapel.jpg", titulo: "Flores de papel", descripcion: "... " },
      { type: "image", source: "imagenes/enmisueno.jpg", titulo: "En mi sueño", descripcion: "... " },
      { type: "image", source: "imagenes/dondesera.jpg", titulo: "¿Dónde será?", descripcion: "... " },
      { type: "image", source: "imagenes/kelly.jpg", titulo: "Kelly", descripcion: "... " },
      { type: "image", source: "imagenes/garabatos.jpg", titulo: "Garabatos", descripcion: "... " },
      { type: "image", source: "imagenes/queraraqueeres.jpg", titulo: "Que rara que eres", descripcion: "... " },
      { type: "image", source: "imagenes/meconoces.jpg", titulo: "Me conoces", descripcion: "... " },
      { type: "image", source: "imagenes/comosellamaeseinstrumento.jpg", titulo: "¿Cómo se llama ese instrumento?", descripcion: "... " },
       { type: "image", source: "imagenes/traerlenaalmonte.jpg", titulo: "Traer leña al monte", descripcion: "... " },
      { type: "image", source: "imagenes/diadelamujer.jpg", titulo: "Día de la mujer", descripcion: "... " },
      { type: "image", source: "imagenes/fondodepantalla.jpg", titulo: "Fondo de pantalla", descripcion: "... " },
      { type: "image", source: "imagenes/manilla.jpg", titulo: "Manilla", descripcion: "... " },
      { type: "image", source: "imagenes/woow.jpg", titulo: "¡Woow!", descripcion: "... " },
      { type: "image", source: "imagenes/spiderman.jpg", titulo: "Spider man", descripcion: "... " },
      { type: "image", source: "imagenes/quenosealaultima.jpg", titulo: "Que no se a la última", descripcion: "... " },
      { type: "image", source: "imagenes/queextrano.jpg", titulo: "¿Qué extraño?", descripcion: "... " },
      { type: "image", source: "imagenes/unaoportunidadparaconocer.jpg", titulo: "Una oportunidad para conocer", descripcion: "... " },
      { type: "image", source: "imagenes/primerdiadeclases.jpg", titulo: "Primer día de clases", descripcion: "... " },
      { type: "image", source: "imagenes/tuequipo.jpg", titulo: "Tu equipo", descripcion: "... " },
      { type: "image", source: "imagenes/jajaja.jpg", titulo: "Jajaja", descripcion: "... " },
      { type: "image", source: "imagenes/enprimerafila.jpg", titulo: "En primera fila", descripcion: "... " },
      { type: "image", source: "imagenes/jugamos.jpg", titulo: "¿Jugamos?", descripcion: "... " },
      { type: "image", source: "imagenes/recuerdos.jpg", titulo: "Recuerdos", descripcion: "... " },
      { type: "image", source: "imagenes/tutrono.jpg", titulo: "Tu trono", descripcion: "... " },
      { type: "image", source: "imagenes/tuletra.jpg", titulo: "Tu letra", descripcion: "... " },
      { type: "image", source: "imagenes/buscandotuuniforme.jpg", titulo: "Buscando tu uniforme", descripcion: "... " },
      { type: "image", source: "imagenes/nomeacuerdo.jpg", titulo: "No me acuerdo", descripcion: "... " },
      { type: "image", source: "imagenes/tusaventuras.jpg", titulo: "Tus aventuras", descripcion: "... " },
      { type: "image", source: "imagenes/ahoraonunca.jpg", titulo: "Ahora o numca", descripcion: "... " },
      { type: "image", source: "imagenes/comoteburlabas.jpg", titulo: "Como te burlabas", descripcion: "... " },
            
    
    
    
    ];

    var box = document.querySelector("#box");
    var description = document.querySelector(".description");
    var descriptionTitle = document.querySelector("#description-title");
    var descriptionText = document.querySelector("#description-text");
    var closeButton = document.querySelector("#close-button");
    var currentAudio = null;

    createMedia();

    function createMedia() {
      setInterval(function() {
        var mediaItem = getRandomMedia();
        var boxc = document.createElement("div");
        boxc.className = "boxc";
        box.appendChild(boxc);

        var mediaContainer = document.createElement("div");
        mediaContainer.className = "media-container";
        boxc.appendChild(mediaContainer);

        if (mediaItem.type === "image") {
          var img = document.createElement("img");
          img.src = mediaItem.source;
          mediaContainer.appendChild(img);
        } else if (mediaItem.type === "video") {
          var video = document.createElement("video");
          video.src = mediaItem.source;
          video.controls = true;
          mediaContainer.className += " audio";
          mediaContainer.appendChild(video);
          video.addEventListener("playing", function() {
            playAudio(video);
          });
          video.addEventListener("ended", function() {
            stopAudio(video);
          });
          currentAudio = video;
        }

        var title = document.createElement("div");
        title.className = "title";
        title.textContent = mediaItem.titulo;
        boxc.appendChild(title);

        title.addEventListener("click", function() {
          showDescription(mediaItem.titulo, mediaItem.descripcion);
        });
      }, 2000);
    }

    function getRandomMedia() {
      var randomIndex = Math.floor(Math.random() * media.length);
      return media[randomIndex];
    }

    function showDescription(title, text) {
      descriptionTitle.textContent = title;
      descriptionText.textContent = text;
      description.classList.add("open");
    }

    closeButton.addEventListener("click", function() {
      description.classList.remove("open");
    });

    // Detener la reproducción de audio al hacer scroll
    box.addEventListener("scroll", stopAudioPlayback);

    function stopAudioPlayback() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        stopAudio(currentAudio);
      }
    }

    function playAudio(audio) {
      // Generar un color aleatorio
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

      // Aplicar el color como fondo animado
      box.style.backgroundColor = randomColor;

      // Detener la reproducción de otros audios
      stopOtherVideos(audio);
    }

    function stopAudio(audio) {
      // Restablecer el fondo a negro
      box.style.backgroundColor = "black";

      // Detener la reproducción de otros audios
      stopOtherAudios(audio);
    }

    function stopOtherAudios(currentAudio) {
      var audioElements = box.querySelectorAll(".media-container.audio video");
      for (var i = 0; i < audioElements.length; i++) {
        var audio = audioElements[i];
        if (audio !== currentAudio) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    }

    // Desvanecer el loader después de 8 segundos
    setTimeout(function() {
      var loadingScreen = document.querySelector("#loading-screen");
      loadingScreen.style.opacity = 0;
      setTimeout(function() {
        loadingScreen.style.display = "none";
      }, 500);
    }, 5000);
  