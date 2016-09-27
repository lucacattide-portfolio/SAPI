/* Template Sito *****************************************************************************************************************************************************************/

<!--

// Variabili Globali




$(document).ready(function($) { // Al caricamento della pagina

  inizializzazioni(); // Invocazione Funzione Inizializzazioni 
  fixLayout(); // Invocazione Funzioen Fix Layour brands Carousel     
  voceAttiva(); // Invocazione Funzione Pagina visualizzata
  form(); // Invocazione Funzione Form
  brands(); // Invocazione Funzione Menu Brands
  brands_1(); // Invocazione Funzione Menu Brands 1
  // popupShowroom(); // Invocazione Funzione Popup Modale Showroom
  

  
  //gallery sezione showroom
  $("#showroom_carousel .item").on("click",function(e){
    
	e.preventDefault();
	
	$('.fancybox').fancybox();
	
	$("html, body").animate({ scrollTop: $(document).height() },200);
	

  }); 
  
  
  
  $(".fancybox-overlay, .fancybox-close").on("click",function(){
	  
	 alert("ok"); 
	 
	 $("html, body").animate({ scrollTop: $(document).height() },200);
  
  });
  
  
});


/*********** FUNCTIONS SLIDER POPUP  ****************/

function destroyOwlCarousel() {
  var owl = $("#owl-carousel2");
  //init carousel
  owl.owlCarousel();
    owl.data('owlCarousel').destroy();
}
  




/* Inizializzazioni ***************************************************************************************************************************************************************/

/* Inizializzazione Icona Menu *********************************************************************************************************************************************************/

(function() {

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        
        var togli = toggles[i];
        toggleHandler(togli);
    
    }

    function toggleHandler(togli) {

        togli.addEventListener( "click", function(e) {
            
            e.preventDefault();
        
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      
            $("#menu_icona").toggleClass("attivo"); // Rimuove lo stato attivo dal menu
    
        });
    }

})(); 

// Funzione Inizializzazioni ***********************************************************************************************************************************************************/

function inizializzazioni() {
	
	// Preloader
	
	$("body").removeClass("preload"); // Attiva transizioni
		
	if ($(".preload").length === 0) { // Se le transizioni sono partite
		
		setTimeout(function() {
		
			$("#preloader").fadeOut(); // Nascondi il preloader
			
		}, 1000);
				
	}
    
	$('.toggle-menu').jPushMenu(); // Inizializza Panel	
	$('#slides').superslides({ // Inizializza Slideshow
    
    	animation: "fade",
    	pagination: "false",
    	hashchange: false,
    	scrollable: false
    
  	});
  
  
	// Inizializzazione Carousel
    
    // Showroom
    
    if($("#showroom_carousel").length > 0) { // Se siamo nella pagina showroom
    
        $('#showroom_carousel').owlCarousel({ // Allora inizializza carousel showroom
        
            loop: true,
            margin: 5,
            items: 3,
            autoHeight: false,
            nav: false,
            center: true,
            responsive: {
            
                320: {
                
                    items: 1
            
                },
				
				480: {
                
                    items: 1
            
                },
            
                768: {
                
                    items: 2
            
                },
            
                1280: {
                
                    items: 3
                }
        
            }
            
        }); 
    
    }
	
	
	// Inizializzazione Carousel Brands
	
	if($("#brands_carousel").length > 0) { // Se siamo nella pagina showroom	
		
        $('#brands_carousel').owlCarousel({ // Allora inizializza carousel showroom

            loop: true,
            margin: 5,
            items: 5,
            autoHeight: true,
            nav: false,
            center: true,
			responsiveRefreshRate: 100,
            responsive: {
            
                320: {
                
                    items: 3
            
                },
				
				480: {
                
                    items: 5
                                
                },
            
                600: {
                
                    items: 5
            
                },
            
                768: {
                
                    items: 5
            
                },
            
                1280: {
                
                    items: 5
                }
        
            }
            
        }); 
				
    }
	
	// Controllo responsive elementi
	
	$(window).on("resize", function() { // Al ridimensionamento della finestra
	
	 	fixLayout(); // Invocazione funzione Fix brands
	
	});
	
	// Rinomina pulsanti
	
	$('.prec').html("<span class='nav_sx'></span>");
	$('.prox').html("<span class='nav_dx'></span>");
	
	// Avanti / Indietro
	
	$('.prox').click(function() {
    
		$("#brands_carousel").trigger('next.owl.carousel');

	});
	$('.prec').click(function() {
    
    	$("#brands_carousel").trigger('prev.owl.carousel');

	});

	// Inizializzazione Masonry
	
	if ($("#brands_1_gallery").length > 0) {
		
		$('.grid').masonry({
  
  			itemSelector: '.grid-item',
  			columnWidth: 1,
			transitionDuration: 0, // Rimuove il bouncing effet sul refresh
			fitWidth: true

		});	
		
	}
	
	
	// Evidenziazione Elementi Carousel
	
	$("#brands_carousel .item").parent().addClass("evidenza");
    
}


// Funzione Pagina visualizzata ********************************************************************************************************************************************************/

function voceAttiva() {
    
    // Dichiarazione Variabili
    
    var url = window.location.href; // Inizializzazione URL pagina
    var parametro = null; // Inizializzazione url Link, parametro query string
	
	// Estrazione querystring
	
	function getParameterByName(name, url) {

		if (!url) url = window.location.href;

			name = name.replace(/[\[\]]/g, "\\$&");
			
			var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	
			results = regex.exec(url);

			if (!results) {
				
				return null;
				
			}
			
			if (!results[2]) {
				
				return '';
				
			}

			return decodeURIComponent(results[2].replace(/\+/g, " "));

	}
	
	parametro = getParameterByName("pag", url); // Invocazione Funzione Estrazione Parametri ed inizializzazione variabile pagina

    // Controllo Pagina Visualizzata
                
	if($(".home_sfondo").length > 0) { // Se siamo sulla home
	
		$("#menu_principale a:contains('Home')").addClass("voce_attiva");
	
	} else { 
	
		if (url.indexOf(parametro) > 0) { // Se l'URL visualizzato è uno di quelli presenti nel menu
	
			$("#menu_principale a").each(function() { // Per ogni link del menu
	
				if ($(this).attr("href").indexOf(parametro) > 0) { // Se il link contiene il parametro
					
					$(this).addClass("voce_attiva"); // Allora seleziona come attiva
	
				}
	
			});
		
		} 
		
	}
    
}


// Fix brands


function fixLayout() {

	 // Ridimensiona container
		
	  var owlWidth = $('#brands_carousel .owl-item').width();  
	  var owlHeight = $('#brands_carousel .owl-item').height();
	  var navWidth = $('#brands_carousel .foto').width();
	  var navHeight = $('#brands_carousel .foto').height();
	  
	  // Setta dimensionamento in base all'altezza del container
	  
	  $('#brands_carousel .owl-item').css({
		  
		  "height": owlHeight + "px"
		  
	  });
	  
	  // Dimensionamento navigazione
	  
	  $('.prec, .prox').css({
		  
		  "width":  navWidth + "px",
		  "height":  navHeight + "px"
		  
	  });	
      
      // Altezza massima contatti
      
      $(".form").addClass("espandi");
	  
	  // Navigazione Slideshow
	  
	  if (($(".showroom").length > 0) && ($(window).width() < 480)) { // Nelle sezioni About e Showroom, su smartphone
	  
	  		$(".slides-navigation").addClass("nascondi"); // Nascondi navigazione
					  
	  }  else { 
	  
	  		$(".slides-navigation").removeClass("nascondi"); // Altrimenti mostra
	  
	  }
	  
	  // Brands
	  
	  // Altezza Marche
	  
	/*  var altezza = $(".brands_1_gallery").css("height"); // Dichiarazione ed inizializzazione variabile altezza
	  
	  $(".container_marca").css({ // Setta dinamicamente altezza e altezza minima della marca 
		  
		height: "" + altezza + "px !important",
		"min-height": "" + altezza + "px !important"    
	  
	  });*/

}

// Funzione Transizioni ***********************************************************************************************************************************************************************/

function transizioni() {
	    
  $("#banner_cookies, .logo, .logo_1, #about_me, #showroom, #contacts, .form, #brands_carousel, .prec, .prox, #brands_1, #menu_brands_1, #brands_1_gallery").addClass("animated fadeIn visibile");
  $(".sfondo").addClass("sfondo_attivo animated slideInLeft");
  $("#menu_icona").addClass("icona_comparsa animated slideInDown");
  $(".prev").addClass("animate slideInLeft icona_comparsa");
  $(".next").addClass("animate slideInRight ruota icona_comparsa");
  $("#scroll_down, #scroll_up").addClass("animated slideInUp");
  $(".freccia_giu, .freccia_su").addClass("icona_comparsa");
  
  // Controllo Timing Sfondo Home e footer
  
  if ($(".home_sfondo").length > 0) { // se siamo sulla home
  
	$(".slides-navigation").removeClass("frecce_basso"); // Riposiziona navigazione Slisedhow
	$("footer").removeClass("footer_2_livello"); // Reset eventuali impostazioni precedenti
	$("footer").addClass("animated slideInUp footer_home"); // Aumenta il delay
  
  } else { // Altrimenti per le altre pagine di secondo livello

	 $("footer").removeClass("footer_home"); // Reset eventuali impostazioni precedenti
	 $("footer").addClass("animated slideInUp footer_2_livello"); // Diminuisci il delay
	 $(".slides-navigation").addClass("frecce_basso"); // Riposiziona navigazione Slisedhow
	   
  } 
  
  setTimeout(function() {
	 
	 $(".sfondo").removeClass("animated slideInLeft");
	 $(".sfondo").addClass("animated slideOutRight");  
	
  }, 10600);
  
  setTimeout(function() {
	
   $(".sottotitolo_testo").addClass("sottotitolo_attivo");
	
  }, 1300);

  $(".logo, nav, body").on("click tap", function() { // Al click della home e del panel
	
	   $("#menu_icona").removeClass("attivo"); // Chiudi Panel
	   $("button.is-active").removeClass("is-active"); // Reset icona
	  
  });
  
    
  // Scroll Down
  
  $('.freccia_giu').on("click tap", function() { // Al click del pulsante
  
    // Dichiarazione variabili
  
    var showroom = $("#showroom_1").position().top; // Inizializzazione posizione sezione
                        
    $('body, html').animate({ scrollTop: showroom }, 'slow'); // Vai a showroom con transizione
                
  });
  
  // Scroll Down
  
  $('.freccia_su').on("click tap", function() { // Al click del pulsante
                        
    $('body, html').animate({ scrollTop: 0 }, 'slow'); // Vai a showroom con transizione
                
  });   
  
  // Popup
  	
  // Al click dell'immagine
  
  $(".brands_1_gallery a").on("click tap", function(e) { // Al click sul link
	  
	  e.preventDefault(); // Disattiva l'azione di default dei links
	  
  }); 
  
  
  
  
  

   
  

  $("#brands_carousel .foto, .brands_1_gallery div").on("click tap", function() {
	  	  
	  if (!($(this).parents(".owl-item").hasClass("secondo_piano"))) {
	  
		// Dichiarazione ed Inizializzazione Variabili
		
		var nome = $(this).attr("rel"); // Nome Brands 1
		var id = $(this).attr("data-id");
		/*var nome_1 = $("#brands_gallery_menu a[rel='" + $(this).parent().attr("rel") + "']").first().text(); // Nome Brands*/ // CONSERVARE PER FUTURE IMPLEMENTAZIONI
		/*var imgBrand = $("#brands_carousel div[rel='" + $(this).parent().attr("rel") + "'] .foto").css("background-image");*/ // Immagini Brands // CONSERVARE PER FUTURE IMPLEMENTAZIONI
		//var imgBrand_1 = $(".brands_1_gallery span[rel='" + $(this).attr("rel") + "'] img").attr("src"); // Immagini Brands 1
		
		nome = nome.replace("_", " "); // Rimuove l'underscore con lo spazio
		
		
		
		
		/* DECOMMENTARE IN PRODUZIONE - CONSERVARE PER FUTURE IMPLEMENTAZONI *****************************************************************************************************************************************************
		
		// Selezione Immagini Brands
		
		// RIMUOVERE beta/ IN PRODUZIONE
		
		if ($(".popup.main").length > 0) { // Se siamo nella sezione Brands
		
			// Allora inizializza le immagini da inserire
		
			imgBrand = imgBrand.replace('url("http://www.sapishowroom.it/beta/','').replace('")',''); // Pulisce la stringa dal prefisso CSS 

		} 

		$(".popup.main .slides-container div").empty(); // Pulisce inserimenti precedenti
		$(".popup.main .slides-container div").html("<img src='" + imgBrand + "' alt='" + nome_1 + "' />"); // Mostra nella popup tutte le immagini del brand selezionato
		/*DECOMMENTARE IN PRODUZIONE - CONSERVARE PER FUTURE IMPLEMENTAZONI*****************************************************************************************************************************************************/
		// Selezione Immagini Brands 1

		//$(".popup.alt .slides-container").empty(); // Pulisce inserimenti precedenti
		
		
		
		
		/* commento codice per ajax
		$(".popup .overlay").after("<div class='slides-container'></div>");
		*/
		
		
		var Marca = id;
		
		
		
		 $.post( "ajax.php", { marca: Marca }).done(function(date) {
		 
		 
			 
	     		 
			 
		  $("#owl-carousel2").html(date);
		  
		  
		 // $("#owl-carousel2 .owl-item, #owl-carousel2 .owl-item img").css({"height":"500px", "width":"500px", "z-index":"9999","display":"block" });
		  
		 
          $("#owl-carousel2").owlCarousel({
		   items : 1,
		   nav:false,
		   loop:true,
		   dots:false,
		   animateOut: 'fadeOut'
          });
		  
		  
		  
			$(".slides-navigation a.next").click(function(){
				$("#owl-carousel2").trigger('next.owl.carousel');
			});
			$(".slides-navigation a.prev").click(function(){
			   $("#owl-carousel2").trigger('prev.owl.carousel');
			});
					  
		  
	
		 
          
		  
		  
		 
		 
		  
		 
		 
	     $("#chiudi_popup").on("click tap", function() { // Al click della chiusura
             
			 destroyOwlCarousel();
			
    		 $(".popup").removeClass("visibile"); // Nascondi finestra modale
  	    	 $("#menu_icona").removeClass("indietro"); // Visualizza l'icona menu
	  	     $('.popup').superslides('destroy'); // Distrugge la precedente istanza dello slideshow
		     $('.popup .slides-pagination, .popup .slides-control').remove(); // remove paginatio
        
		 });
			
	
		});
		
		
		
		$(".brands_1_gallery div[rel='" + $(this).attr("rel") + "'] img").each(function() {
		
			
			$(".popup.alt .slides-container").append("<img src='" + $(this).attr("src") + "' alt='" + nome + "' />"); // Mostra nella popup tutte le immagini del brand selezionato
		
		});
		
			
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/
		
		// Selezione Links Brands
		
/*		switch (nome_1) {
		
			case "Paolo Pecora":
			
				$(".link_brand").attr("href", "http://www.paolopecora.com/");
				$(".link_brand").html("http://www.paolopecora.com");
				
				break;
				
			case "Low Brand":
			
				$(".link_brand").attr("href", "http://www.lowbrand.it/");
				$(".link_brand").html("http://www.lowbrand.it/");
				
				break;
				
			case "Individual":
			
				$(".link_brand").attr("href", "http://www.individualdenim.it/it/");
				$(".link_brand").html("http://www.individualdenim.it/it/");
				
				break;	
				
			case "Diktat":
			
				$(".link_brand").attr("href", "http://www.diktat-italia.com/");
				$(".link_brand").html("http://www.diktat-italia.com/");
				
				break;
				
			case "Cruna":
			
				$(".link_brand").attr("href", "http://cruna.com/");
				$(".link_brand").html("http://cruna.com/");

				break;
				
			case "Elisa B":
			
				$(".link_brand").attr("href", "http://elisab.com/");
				$(".link_brand").html("http://elisab.com/");
				
				break;
				
			case "Nenette":
			
				$(".link_brand").attr("href", "http://www.nenette.it/it");
				$(".link_brand").html("http://www.nenette.it/it");
				
				break;
				
			case "Rame":
			
				$(".link_brand").attr("href", "http://www.rame.eu/");
				$(".link_brand").html("http://www.rame.eu/");
				
				break;
				
			case "Up Jeans":
			
				$(".link_brand").attr("href", "http://upjeans.it/");
				$(".link_brand").html("http://upjeans.it/");
				
				break;	
				
			case "Silvian Heach":
			
				$(".link_brand").attr("href", "http://www.silvianheach.com/it/");
				$(".link_brand").html("http://www.silvianheach.com/it/");
				
				break;	
				
			case "Braintropy":
			
				$(".link_brand").attr("href", "http://braintropy.it/it/");
				$(".link_brand").html("http://braintropy.it/it/");
				
				break;	
																				
		}*/
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/
		
		// Selezione Links Brands 1
		
		switch (nome) {
		
			case "paolo pecora":
			
				$(".link_brand").attr("href", "http://www.paolopecora.com/");
				$(".link_brand").html("www.paolopecora.com");
				
				break;
				
			case "low brand":
			
				$(".link_brand").attr("href", "http://www.lowbrand.it/");
				$(".link_brand").html("www.lowbrand.it");
				
				break;
				
			case "individual":
			
				$(".link_brand").attr("href", "http://www.individualdenim.it/it/");
				$(".link_brand").html("www.individualdenim.it/it/");
				
				break;	
				
			case "diktat":
			
				$(".link_brand").attr("href", "http://www.diktat-italia.com/");
				$(".link_brand").html("www.diktat-italia.com");
				
				break;
				
			case "cruna":
			
				$(".link_brand").attr("href", "http://www.cruna.com/");
				$(".link_brand").html("www.cruna.com");

				break;
				
			case "elisabetta franchi":
			
				$(".link_brand").attr("href", "http://www.elisabettafranchi.com/");
				$(".link_brand").html("www.elisabettafranchi.com");
				
				break;
				
			case "nenette":
			
				$(".link_brand").attr("href", "http://www.nenette.it/it");
				$(".link_brand").html("www.nenette.it");
				
				break;
				
			case "rame":
			
				$(".link_brand").attr("href", "http://www.rame.eu/");
				$(".link_brand").html("www.rame.eu");
				
				break;
				
			case "up jeans":
			
				$(".link_brand").attr("href", "http://upjeans.it/");
				$(".link_brand").html("www.upjeans.it");
				
				break;		
				
			case "annie p":
			
				$(".link_brand").attr("href", "http://www.anniep.it/");
				$(".link_brand").html("www.anniep.it");
				
				break;	
																				
		}
						
		$("#menu_icona").addClass("indietro"); // Nascondi icona menu
		$(".popup.alt h2").html(nome); // Inserisci il nome del brand
		/*$(".popup.main h2").html(nome_1);*/ // Inserisci il nome del brand // CONSERVARE PER FUTURE IMPLEMENTAZIONI	
		$(".popup").addClass("animated fadeIn visibile"); // Mostra la finestra modale
	  
	  }

  });
  
  $("#chiudi_popup").on("click tap", function() { // Al click della chiusura
  
  		$(".popup").removeClass("visibile"); // Nascondi finestra modale
  		$("#menu_icona").removeClass("indietro"); // Visualizza l'icona menu
	  	$('.popup').superslides('destroy'); // Distrugge la precedente istanza dello slideshow
		$('.popup .slides-pagination, .popup .slides-control').remove(); // remove pagination
  });
    
} 


// Funione Form ************************************************************************************************************************************************************************/

function form() {		

	if ($("#banner_email").length > 0) { // Se il banner è stato inserito nel DOM	
	
		$("#banner_email").slideDown("slow"); // Allora Visualizza il banner	  	  
		
		setTimeout(function() { // Nascondi dopo 3 secondi
			
			$("#banner_email").slideUp("slow"); 	
			
		}, 3000); 
		
	}
	
} 


// Funzione Menu Brands ************************************************************************************************************************************************************************/

function brands() {
		
	// Menu brands
	
	// Nascondi in partenza i menu contestuali
			
	$("#menu_brands div").on("click tap", function() { // Al click del menu
	
		if ($(this).hasClass("uomo_1")) { // Se la voce cliccata è Donna
		
			$("#menu_brands div").removeClass("marchio_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("marchio_attivo"); // Setta lo stato attivo sul link
			$("#brands_gallery_menu a").removeClass("marchio_attivo_1"); // Resetta marchi attivi
			
			// Allora mostra il menu contestuale

			$("#menu_uomo_1, #menu_donna_1, #menu_accessori_1").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_uomo_1").slideDown("slow"); // Mostra menu precedentemente nascosti
			$(".immagine_donna").parent().addClass("secondo_piano"); // Mostra elementi nascosti precedentemente
			$(".immagine_uomo").parent().removeClass("secondo_piano"); // Mostra elementi nascosti precedentemente
			//$("#brands_carousel .item").parent().removeClass("secondo_piano"); // Mostra tutti gli elementi nascosti in base al brand
			$(".immagine_uomo").parent().addClass("evidenza"); // Mostra tutti gli elementi nascosti in base al brand
			
			$("#brands_carousel").trigger('refresh.owl.carousel'); // Refresh griglia
			
		} else if ($(this).hasClass("donna_1")) { // Se la voce cliccata è Uomo
		
			$("#menu_brands div").removeClass("marchio_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("marchio_attivo"); // Setta lo stato attivo sul link
			$("#brands_gallery_menu a").removeClass("marchio_attivo_1"); // Resetta marchi attivi
		
			// Allora mostra il menu contestuale
			
			$("#menu_uomo_1, #menu_donna_1, #menu_accessori_1").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_donna_1").slideDown("slow"); // Mostra menu precedentemente nascosti
			$(".immagine_uomo").parent().addClass("secondo_piano"); // Mostra elementi nascosti precedentemente
			$(".immagine_donna").parent().removeClass("secondo_piano"); // Mostra elementi nascosti precedentemente
			//$("#brands_carousel .item").parent().removeClass("secondo_piano"); // Mostra tutti gli elementi nascosti in base al brand
			$(".immagine_donna").parent().addClass("evidenza"); // Mostra tutti gli elementi nascosti in base al brand
			
			$("#brands_carousel").trigger('refresh.owl.carousel'); // Refresh griglia
			
		} else if ($(this).hasClass("accessori_1")) { // Se la voce cliccata è Accessori
		
			$("#menu_brands div").removeClass("marchio_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("marchio_attivo"); // Setta lo stato attivo sul link
			$("#brands_gallery_menu a").removeClass("marchio_attivo_1"); // Resetta marchi attivi

			// Allora mostra il menu contestuale
			
			$("#menu_uomo_1, #menu_donna_1, #menu_accessori_1").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_accessori_1").slideDown("slow"); // Mostra menu precedentemente nascosti
			$("#brands_carousel .item").parent().removeClass("secondo_piano"); // Mostra tutti gli elementi nascosti in base al brand
			$("#brands_carousel .item:not(.immagine_accessori)").parent().addClass("secondo_piano"); // Filtra	
			$("#brands_carousel .item .immagine_accessori").parent().addClass("evidenza"); // Mostra tutti gli elementi nascosti in base al brand

						
			$("#brands_carousel").trigger('refresh.owl.carousel'); // Aggiorna il carousel
			
		} 
			
		$("#brands_carousel").owlCarousel({ // All'aggiornamento
    
			onRefresh: owlCallback // Chiama la funzione di callback

		});

	});	
	
	
	// Menu Marchi brands
	
	$("#brands_gallery_menu a").on("click tap", function(e) { // Al click del marchio
	
		e.preventDefault(); // Disattiva l'evento di default dell'elemento
	
		$("#brands_gallery_menu a").removeClass("marchio_attivo_1"); // Resetta marchi attivi
		$(this).addClass("marchio_attivo_1"); // Attiva il selezionato
	
	  	var voceContainer = $(this).attr("rel"); // Inizializzazione identificatore voce selezionata
	  
	  	// Nascondi tutti gli elementi
		  
		$("#brands_carousel .item").parent().removeClass("evidenza");
		$("#brands_carousel .item").parent().addClass("secondo_piano");
		
	  	// Mostra solo quelli corrispondenti alla voce
		  
	  	$("#brands_carousel .item[rel=" + voceContainer + "]").parent().removeClass("secondo_piano");
		$("#brands_carousel .item[rel=" + voceContainer + "]").parent().addClass("evidenza");
		$("#brands_carousel").trigger('refresh.owl.carousel');	// Refresh Layout

	});
	
}


// Funzione Callback Carousel Brands ************************************************************************************************************************************************/

function owlCallback(event) { 
    
	 var elemento = event.item.index;  // Inizializza elemento corrente
	 
	 $("#brands_carousel").trigger('to.owl.carousel', [elemento]); // Posiziona il carousel all'elemento corrente
	 
}


// Funzione Menu Brands 1 ************************************************************************************************************************************************************************/

function brands_1() {
		
	// Menu brands
	
	// Nascondi in partenza i menu contestuali
			
	$("#menu_brands_1 div").on("click tap", function() { // Al click del menu
	
		if ($(this).hasClass("uomo")) { // Se la voce cliccata è Donna
        
            $("#menu_brands_1 div").removeClass("genere_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("genere_attivo"); // Setta lo stato attivo sul link
            $(this).children("pseudo").addClass("genere_attivo"); // Setta lo stato attivo sul link


			// Allora mostra il menu contestuale

			$("#menu_uomo, #menu_donna, #menu_accessori").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_uomo").slideDown("slow"); // Mostra menu precedentemente nascosti
			$(".immagine_donna").addClass("trasparente nascondi"); // Mostra elementi nascosti precedentemente
			$(".immagine_uomo").removeClass("trasparente nascondi"); // Mostra elementi nascosti precedentemente
			$(".grid").masonry('layout'); // Refresh Layout
			
		} else if ($(this).hasClass("donna")) { // Se la voce cliccata è Uomo
        
			$("#menu_brands_1 div").removeClass("genere_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("genere_attivo"); // Setta lo stato attivo sul link
		
			// Allora mostra il menu contestuale

			$("#menu_uomo, #menu_donna, #menu_accessori").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_donna").slideDown("slow"); // Mostra menu precedentemente nascosti
			$(".immagine_uomo").addClass("trasparente nascondi"); // Mostra elementi nascosti precedentemente
			$(".immagine_donna").removeClass("trasparente nascondi"); // Mostra elementi nascosti precedentemente						
			$(".grid").masonry('layout'); // Refresh Layout
			
		} 
		
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/
		
		/*else if ($(this).hasClass("accessori")) { // Se la voce cliccata è Accessori
        
			$("#menu_brands_1 div").removeClass("genere_attivo"); // Resetta lo stato attivo sul link
			$(this).addClass("genere_attivo"); // Setta lo stato attivo sul link

			// Allora mostra il menu contestuale

			$("#menu_uomo, #menu_donna, #menu_accessori").slideUp("slow"); // Resetta altri menu eventualmente aperti
			$("#menu_accessori").slideDown("slow"); // Mostra menu precedentemente nascosti
			$(".immagine_uomo, .immagine_donna, .immagine_accessori").removeClass("trasparente nascondi"); // Mostra elementi nascosti precedentemente
			
			// nascondi tutto quello che NON contiene  ACCESSORI
			
			$(".brands_1_gallery span:not(.immagine_accessori)").addClass("trasparente nascondi"); // Filtra	
			$(".grid").masonry('layout'); // Refresh Layout

		}*/
		
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/

	});	
	
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/
	// Menu Marchi Brands 1
	
/*	$("#brands_1_gallery_menu a").on("click tap", function(e) { // Al click del marchio
	
		e.preventDefault(); // Disattiva l'evento di default dell'elemento
				
		// Dichiarazione Variabile controllo sull'elemento
		
		var voceContainer = $(this).attr("rel"); // Inizializzazione
				
	    $(".brands_1_gallery.grid span").addClass("trasparente nascondi"); // Nascondi tutti gli elementi
		$(".brands_1_gallery.grid span[rel=" + voceContainer + "]").removeClass("trasparente nascondi"); // Mostra solo quelli corrispondenti alla voce
		$(".grid").masonry('layout'); // Refresh Layout
		
	});
*/
		/* CONSERVARE PER FUTURE IMPLEMENTAZIONI ************************************************************************************************/
		
	// Hover su Preview
	
	$(".brands_1_gallery div[rel]").each(function() { // Per ogni elemento
	
		var marca = $(this).attr("rel"); // Estrai il nome del marchio
	
		marca = marca.replace("_", " "); // Rimuove l'underscore con lo spazio

		$(this).find(".marca").html(marca); // Inserisce il nome del brand

	});

}


// Funzione Popup Modale Showroom

function popupShowroom() {

	/* $("#showroom_carousel img").on("click tap", function() { // Al click su una foto
		
		$("#popup_showroom").append("<img src='" + $(this).attr("src") + "' alt='SAPI | Showroom Milano' />");
		$("#popup_showroom").fadeIn(); // Mostra la popup 		
		
	});	
	
	$("#popup_showroom #chiudi_popup").on("click tap", function() { // Al click su chiudi
		
		$("#popup_showroom").fadeOut(); // Chiudi la popup 	
		$("#popup_showroom img").remove(); // Rimuovi immagine aperta	
	
	}); */
	
}

//-->