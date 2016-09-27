<?php 
   include("admin/php/connessione_sql.php");
   
   $sqlArtBrand = "SELECT * FROM `articolo` LEFT JOIN `categoria` ON `articolo`.`articolo_categoria_id` = `categoria`.`categoria_id` WHERE `articolo`.articolo_id = ".$_POST["marca"]." ORDER BY articolo_titolo ASC ";
					  
	$rArtBrand = $mysqli->query($sqlArtBrand); // Pagina 
			  
	$countArtBrand = $rArtBrand->num_rows; // Conteggio Record Pagina
	
	if( $countArtBrand >= 1 ):
					  
	 while ($ArtBrand = $rArtBrand->fetch_array()): // Finchè sono presenti pagine 
?>             
                 
            <h3><?php echo $ArtBrand["articolo_titolo"];  ?></h3>
            
            <h2><?php echo $ArtBrand["articolo_titolo"];  ?></h2>
            
            <p><a href="http://<?php echo $ArtBrand["articolo_url"];  ?>" title="" class="link_brand" target="new"><?php echo $ArtBrand["articolo_url"];  ?></a></p>
                  
 <?php endwhile; endif; ?>                
                
       