<?php

	// Controllo Navigazione 
  
	if(isset($_GET["pag"])) { // Se il parametr pagina o è stato settato

		$pag = $_GET["pag"]; // Allora assegna a variabile

	} else { // Altrimenti inizializza vuota
	
		$pag = ""; 
		
	}

	// Caricamento pagine
	
	switch($pag): // Controllo valore

		case "":  
            
            include("home_body.php");    
			
			break;

		case "home":  
	
			include("home_body.php"); 
            
			break;
	
		case "showroom":  
		
			include("showroom_body.php"); 
            
			break;
	
		case "brands":  
	
			include("brands_1_body.php"); 
            
			break;
			
		case "contacts":  
	
			include("contacts_body.php"); 
            
			break;
		
	endswitch;
 
?> 