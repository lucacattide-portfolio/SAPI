<!--Inizio Body-->

	  
    
    <!--Inizio Sezione Home-->

    <section id="slides">
        
         <h3>
            
            Home
        
        </h3>
        
         <div class="overlay">  <!--Filtro Immagini-->
         </div>
         
         <?php while ($articolo = $rArt->fetch_array()): // Finchè sono presenti pagine ?> 
         
         <div class="slides-container">
         
            <?php // IMMAGINE GALLERY
				 $sqlImg = "SELECT * FROM `immagine` WHERE immagine_articolo_id = ".$articolo["articolo_id"]." ";
				 $rImg = $mysqli->query($sqlImg);
				 while ($immagine = $rImg->fetch_array()):
			?>
            
            <img class="home_sfondo" src="<?php echo $siteurl_base; ?>img/<?php echo $immagine["immagine_label"];  ?>" alt="SAPI | Showroom Milano"  />
            
			<?php endwhile; ?>

         </div>
         
        <!--Inizio Icone Slider-->
    
        <nav class="slides-navigation">
        
            <h3>
            
                Gallery
            
            </h3>
    
            <a class="freccia prev" href="#">
            </a>
            <a class="freccia next" href="#">
            </a>
    
        </nav>
    
        <!--Fine Icone Slider-->
        
         <!--Inizio Logo-->            
    
        <section class="logo">
    
             <div id="logo"> 
             </div>
        
        </section>
    
        <!--Fine Logo-->
        
        <!--Inizio Sottotitolo-->
    
        <aside id="sottotitolo"> <!--Container-->
        
            <div class="sfondo"> <!--Barra rossa-->
            </div>
        
            <?php echo $articolo["articolo_sottotitolo"]; ?>
    
        </aside>
    
    <!--Fine Sottotitolo-->
    <?php endwhile; ?>     
    
    </section>
    
     <!--Fine Sezione Home-->