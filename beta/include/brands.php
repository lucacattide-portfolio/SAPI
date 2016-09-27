  <!--Inizio Container Sezione-->
    
    <div id="brands_1">
        
        <section class="brands_1">
        
            <h3> 
            
                Brands
                
            </h3>
            
            <article>
            
                <h1> 
                
                    BRANDS
                    
                </h1>
            
            </article>
        
        </section>
        
        <!--Inizio Menu Contestuale Genere-->
        
        <aside id="menu_brands_1">
        
        	<h3>
            
            	Menu Brands
            
            </h3>
            
            <div>
            <?php 
			  
			  $sqlBrand = "SELECT * FROM `categoria`";
			  
			  $rBrand = $mysqli->query($sqlBrand); // Pagina 
			  
			  $countBrand =  $rBrand->num_rows; // Conteggio Record Pagina
			
			  if( $countBrand >= 1 ):
			  
			  while ( $brand = $rBrand->fetch_array()):
			?>
            
                <div class="<?php echo $brand["categoria_url"]; ?>">
                
                	<span>
                    
                    	<p>
                        
                        	<?php echo $brand["categoria_nome"]; ?>
                            
                        </p>
                        
                    </span>
                
                </div>
                
                <?php 
				
				 endwhile; 
				
				 endif; 
				 
				 ?>

            </div>
        
        </aside>
        
        <!--Fine Menu Contestuale Genere-->
        
        <section id="brands_1_gallery" class="espandi">
        
        	<h3>
            
            	Brands Gallery
                
            </h3>
            
            <!--Fine Menu Contesutale Brands-->
            
            <!--Inizio Gallery Brands-->
            
            <div id="brands_1_gallery_container">
            
            	<div class="brands_1_gallery grid">
                    
                    
                    <?php 
					 
					
					  if( $countArtBrand >= 1 ):
					  
					  while ($ArtBrand = $rArtBrand->fetch_array()): // Finchè sono presenti pagine 
					  
					 ?>  
                	
                    <div data-id="<?php echo $ArtBrand["articolo_id"]; ?>" rel="<?php echo $ArtBrand["articolo_titolo"]; ?>" class="grid-item immagine_<?php echo $ArtBrand["categoria_url"]; ?>">
                    
                        <?php // IMMAGINE GALLERY
							 $sqlImg = "SELECT * FROM `immagine` WHERE immagine_articolo_id = ".$ArtBrand["articolo_id"]." ORDER BY immagine_ordinamento ASC LIMIT 0,1  ";
							 $rImg = $mysqli->query($sqlImg);
							 while ($immagine = $rImg->fetch_array()):
						?>
	
                        <a href="#" title=""><span class="container_marca"><p class="marca"></p></span><img src="<?php echo $siteurl_base; ?>img/<?php echo $immagine["immagine_label"];  ?>" alt="" /></a>
						
						
					   <?php endwhile; ?>  
                    	 <!--AGGIUNGERE TITOLO & TESTO ALTERNATIVO-->
                    
                    </div>
                    
                    <?php endwhile; endif; ?>
                    
                   
                </div>
                
            </div>
            
            <!--Fine Gallery Brands-->
            
               <!--Inizio Navigazione Contestuale-->
    
        <nav id="scroll_up">
            <h3>Scroll Up</h3>
            <div>Scroll</div>
            <div class="freccia_su"></div>
            <div>Up</div>
        </nav>
        
        <!--Fine Navigazione Contestuale-->
                        
        </section>
        
        <!--inizio Popup Modale-->
        
        
        <!----------------------   AJAX SEZIONE    -------------------->
        
        <section class="popup alt ajaxChiamata">
        

            <h3>Dettagli</h3>
            
            <input type="button" id="chiudi_popup" value="X">
        
        	<!--  -->
            
            
             <div id="owl-carousel2">
              
             </div> 
           
           <!--Inizio Icone Slider-->
           <nav class="slides-navigation">
      
              <a class="freccia prev" href="#"></a>
              <a class="freccia next" href="#"></a>
      
           </nav> 
          
          <article>
          
          	<h3>Brand</h3>
            
            <h2>Nome Brand</h2>
            
            <p><a href="" title="" class="link_brand" target="new">www.nomebrand.com</a></p>
          
          </article>
    
   <!--Fine Icone Slider-->  
           
        
        	
                    
        </section>
        
        
         <!--Inizio Logo--> 
    
        <a href="home" title="SAPI | Showroom Milano" tabindex="0">
        
            <section class="logo_1">
            
                <div id="logo_1">
                </div>
        
            </section>
        
        </a> 
    
    	<!--Fine Logo--> 
        
    </div>
    
    <!--Fine Container Sezione--> 
    
    <!--Fine Sezione Contacts-->    