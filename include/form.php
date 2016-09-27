<?php

	// Invio Form
	
	$email_proprietario = "info@sapishowroom.it"; // Dichiarazione ed Inizializzazione Variabile Destinatario
	$oggetto = "SAPI | Contacts"; // Dichiarazione ed Inizializzazione Variabile Oggetto
	
	// Controllo Input
	
	if ((!isset($_POST['nome'])) || (!isset($_POST['email'])) || (!isset($_POST['messaggio'])) || (!isset($_POST['accettazione']))) { // Se non sono stati inseriti tutti i campi richiesti
		
		// RIATTIVARE L'INVOCAZIONE IN PRODUZIONE
		
		//chiudi('<div id="banner_email"><p>Errore: compilare tutti i campi del modulo</p></div>'); // Allora lancia l'eccezione
        
    } else { // Altrimenti
		
		// Assegnazione campi
		
		$nome = $_POST['nome'];
        $email = $_POST['email'];
        $messaggio = $_POST['messaggio'];
		
		// Validazione Input
		
		$pattern_email = "#^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})#"; // Impostazione pattern di controllo email
		
		if (!@preg_match($pattern_email, $email)) { // Se l'input non rispetta la condizione
        
            $messaggio_errore .= "<div id='banner_email'><p>Inserire un indirizzo di posta elettronica valido</p></div>"; // Allora errore
        
        }	
		
		if (@strlen($messaggio) < 2) { // Se il messaggio è più corto di 2 caratteri
        
            $messaggio_errore .= "<div id='banner_email'>Inserire un messaggio valido</p></div>"; // Allora errore
        
        }
        
        if (@strlen($messaggio_errore) > 0) { // Se il messaggio di errore è stato prodotto
        
            chiudi($messaggio_errore); // Allora lancia l'eccezione
        
        }
		
		$email_corpo = "SAPI | Contacts:\n\n"; // Separatore Mail
		
		// Definizione corpo del messaggio
        
        $email_corpo .= "Nome: ".@strip_tags(clean_stringa($nome))."\n"; // Invocazione Funzione Formattazione ed assegnazione concatenata
        $email_corpo .= "E-Mail: ".@strip_tags(clean_stringa($email))."\n";
        $email_corpo .= "Messaggio: ".@strip_tags(clean_stringa($messaggio))."\n";
		
		// Definizione Headers
        
        $headers = 'From: '.$nome.' <'.$email.">\r\n".'Reply-To: '.$email."\r\n".'Return-Path: '.$email."\r\n".'Inviato da SAPI Showroom (sapishowroom.it) con (X-Mailer): PHP/' . @phpversion();
         
        if (@mail($email_proprietario, $oggetto, $email_corpo, $headers)) { // Funzione Mail
		
			echo "<div id='banner_email'><p>Messaggio inviato correttamente</p></div>";
		
		}
		
	}
	
	
	// Funzione Formattazione Mail
    
    function clean_stringa($stringa) {
    
      $escluse = array("content-type", "bcc:", "to:", "cc:", "href"); // Dichiarazione ed Inizializzazione intestazioni
    
      return @str_replace($escluse, "", $stringa); // Restituisci la stringa formattata
    
    }
    
   
    // Funzione Gestione Eccezioni

    function chiudi($errore) {
        
        // Messaggio di errore
  
        echo $errore;
 
        die(); // Termina la sessione
 
    }

?>