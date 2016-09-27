<?php 
   include("admin/php/connessione_sql.php");
   
   $sqlImg = "SELECT * FROM `immagine` WHERE immagine_articolo_id = ".$_POST["marca"]." ORDER BY immagine_ordinamento DESC ";
   $rImg = $mysqli->query($sqlImg);
   while ($immagine = $rImg->fetch_array()):
?>             
                 
    <div class="owl-item">
     <center>
     <div class="overlay"></div>
      <img  src="img/<?php echo $immagine["immagine_label"];  ?>" alt="" />
     </center>
    </div>
                  
 <?php endwhile; ?>                
                
       