<?php while ($articolo = $rArt->fetch_array()): // Finchè sono presenti pagine ?>  

  <?php if( $articolo["articolo_id"] == 2  ): ?>    
    <section id="slides">
    
        <h3> 
        
            Showroom
            
        </h3>
        <div class="overlay_about_me"> <!--Filtro Immagini--> 
        </div>
        <div class="slides-container"> 
          
          <?php // IMMAGINE GALLERY
				 $sqlImg = "SELECT * FROM `immagine` WHERE immagine_articolo_id = 2 ORDER BY immagine_ordinamento ASC  ";
				 $rImg = $mysqli->query($sqlImg);
				 while ($immagine = $rImg->fetch_array()):
			?>
            
            <img  src="<?php echo $siteurl_base; ?>img/<?php echo $immagine["immagine_label"];  ?>" /> 
            
            
           <?php endwhile; ?>  
            
        </div>
        
        <!--Inizio Icone Slider-->
        
        <nav class="slides-navigation"> 
        
        	<h3>
            
            	Gallery
                
            </h3>
        
            <a class="freccia_1 prev" href="#"> 
            </a> 
            <a class="freccia_1 next" href="#">
            </a> 
            
        </nav>
        
    </section>
    <?php endif; ?>
    
    <!--Fine Sezione Showroom--> 
    
    <!--Inizio Sezione Showroom_1-->
    <?php if( $articolo["articolo_id"] == 3  ): ?>
    <section id="showroom_1">
    
        <h3> 
        
            Showroom
            
        </h3>
        
        <article>
  
           <?php echo $articolo["articolo_testo"]; ?>
        
        </article>
        
        
        <!--Inizio Carousel-->
        
        <div id="showroom_carousel" class="owl-carousel">
        
          <?php // IMMAGINE GALLERY
				 $sqlImg = "SELECT * FROM `immagine` WHERE immagine_articolo_id = 3 ORDER BY immagine_ordinamento ASC ";
				 $rImg = $mysqli->query($sqlImg);
				 while ($immagine = $rImg->fetch_array()):
			?>
                        
                <div class="item">
                
                  <a class="fancybox" href="<?php echo $siteurl_base; ?>img/<?php echo $immagine["immagine_label"];  ?>" data-fancybox-group="gallery" ><img src="<?php echo $siteurl_base; ?>img/<?php echo $immagine["immagine_label"];  ?>" alt="" /></a>
                
                </div>
                  
            
           <?php endwhile; ?>  
  
        </div>
        
        <!--Fine Carousel-->
        
        <!--Inizio Navigazione Contestuale-->
    
        <nav id="scroll_up">
            <h3>Scroll Up</h3>
            <div>Scroll</div>
            <div class="freccia_su"></div>
            <div>Up</div>
        </nav>
        
        <!--Fine Navigazione Contestuale-->
        
    </section>
    <?php endif; ?>
    
    <!--Fine Sezione Showroom_1--> 
    
    <!--Inizio Logo--> 
    <?php if( $articolo["articolo_id"] == 2  ): ?>
    
    <a href="home" title="SAPI | Showroom Milano" tabindex="0">
    
        <section class="logo_1">
        
            <div id="logo_1">
            </div>
    
        </section>
    
    </a> 
    
    <!--Fine Logo--> 
    
    <!--Inizio Sezione Showroom--> 
    
    <!--Inizio Container Sezione-->
    
    <div id="showroom">
        
        <section class="showroom">
        
            <h3> 
            
                Showroom
                
            </h3>
            
            <article>
            
                <?php echo $articolo["articolo_titolo"] ?>
            
                <div class="dingbat"> 
                </div>
                                
                  <!--Inizio Citazione-->
              
                  <blockquote>
                  
                      <?php echo $articolo["articolo_sottotitolo"] ?>
                      
                      <div class="citazione">
                      
                        <?php echo $articolo["articolo_testo"] ?>
                          
                      </div>
                      
                  </blockquote>
                  
                  <!--Fine Citazione-->
                                
            </article>
        
        </section>
        
    </div>
    
    <!--Fine Container Sezione--> 
    
    <!--Fine Sezione Showroom--> 
    
    <!--Inizio Navigazione Contestuale-->
    
    <nav id="scroll_down">
    
        <h3>
        
            Scroll Down
        
        </h3>
    
        <div>
        
            Scroll
        
        </div>
        <div class="freccia_giu">
        </div>
        
        <div>
        
            Down
        
        </div>
    
    </nav>
    <?php endif; ?>
    <!--Fine Navigazione Contestuale-->
    
    <!--Inizio Popup Modale Carousel-->
    
    <aside id="popup_showroom">
    
    	<h3>
        
        	Showroom
        
        </h3>
    
    	<input type="button" id="chiudi_popup" value="X">
    
    </aside>
    
    <!--Fine Popup Modale Carousel-->
    
<?php endwhile; ?>    