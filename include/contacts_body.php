 <!--Inizio Body-->
        
<body class="preload">

	<!--Inizio Preloader-->

		<div id="preloader"> <!--Sfondo--> 
		</div>
        
	<!--Fine Preloader-->
    
    <!--Inizio Sezione Contacts-->
    
    <!--Inizio Container Sezione-->
    
    <div id="contacts">
    
        <!--Inizio Sezione Recapiti-->
        
        <section class="contacts">
        
            <h3> 
            
                Contacts
                
            </h3>
            
            <article>
            
                <h1> 
                
                    SAPI SRL
                    
                </h1>
            
                <div class="dingbat_1"> 
                </div>
                
                <div> 
                
                	<span>
                    
                    	Indirizzo
                        
                    </span>
                    <span>
                    
                    	<p>Corso Plebisciti, 12<br />20129, Milano (MI)</p>   
                    
                    </span>
                    
                </div>
                <div> 
                
                	<span>
                    
                    	Recapiti
                        
                    </span>
                    <span>
                    
                    	Telefono: <a href="tel:+390270121266" title="Telefono" tabindex="20">+39 02 70121266</a><br />Email: <a href="mailto:info@sapishowroom.it.com" title="Email" tabindex="21">info@sapishowroom.it</a>
                          
                    </span>
                    
                </div>

            
            </article>
        
        </section>
        
        <!--Fine Sezione Recapiti-->
        
        <!--Inizio Form-->
        
        <!--Inizio banner Mail-->

            <?php 
    
                include "form.php"; 
    
            ?>
        
            <!--Fine Banner Mail-->
        
        <section class="form espandi">
        
        	<h3> 
            
                Form Application
                
            </h3>
            
            <h2> 
            
                Form Application
                
            </h2>
                
            <form method="post" enctype="application/x-www-form-urlencoded" action="<?php echo @htmlspecialchars($_SERVER['PHP_SELF']."?pag=".$_GET['pag']); ?>" id="contatti" autocomplete="on" accept-charset="UTF-8">
            
           	  <fieldset>
                
                	<legend>
                    
                    	Dati
                        
                    </legend>
                    
                    <div>
                                        
                  		<input name="nome" type="text" required="required" id="nome" form="contatti" placeholder="Il tuo Nome" tabindex="70" title="Nome" autocomplete="on">
                                        
                  		<input name="email" type="email" required="required" id="email" form="contatti" placeholder="La tua Email" pattern="^[a-z0-9][_.a-z0-9-]+@([a-z0-9][0-9a-z-]+.)+([a-z]{2,4})" tabindex="71" title="Email" autocomplete="on">
                    
                    </div>
                    <div>
                                        
                  		<textarea name="messaggio" type="textarea" required id="messaggio" form="contatti" placeholder="Il tuo Messaggio" tabindex="72" title="Messaggio" autocomplete="on"></textarea>
                    
                   	</div>
                    <div>
                    
                    	<input name="accettazione" type="checkbox" required="required" id="accettazione" form="contatti" title="Trattamento Dati Sensibili">
                        
                        <label for="accettazione">
                        
                        	Autorizzo il trattamento dei dati personali ai sensi dell'Art. 13 del DLgs. 196/2003
                            
                        </label>
                        
                        
                    
                </div>
                    <div>
                    
                    	<input name="invia" type="submit" id="invia" form="contatti" tabindex="73" value="Invia Messaggio">
                        
                    </div>
                    
                </fieldset>           
            
            </form>

                        
        </section>
        
        <!--Fine Sezione Form-->
        
         <!--Inizio Logo--> 
    
        <a href="index.php" title="SAPI | Showroom Milano" tabindex="0">
        
            <section class="logo_1">
            
                <div id="logo_1">
                </div>
        
            </section>
        
        </a> 
    
    	<!--Fine Logo--> 
        
    </div>
    
    <!--Fine Container Sezione--> 
    
    <!--Fine Sezione Contacts--> 