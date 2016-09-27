<!--Inizio Preloader-->

    <div id="preloader"> <!--Sfondo--> 
    </div>
        
<!--Fine Preloader-->  

<!--Inizio Menu (Icona)-->
        
 <aside id="menu_icona">
        
        <h3>
            
            Menu
        
        </h3>
        
        <button class="c-hamburger c-hamburger--htx toggle-menu menu-right">

            <span>
            
                Menu
        
            </span>

        </button>
        
    </aside>

<!--Fine Menu (Icona)-->

<!--Inizio Menu-->
        
        <nav id="menu_principale" class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right">
    
            <h3>
                
                Menu
            
            </h3>
            
                <div id="logo_menu"> <!--Logo-->
                </div>
                
                <!--inizio Links-->
                
                <!--MODIFICARE EVENTUALI TESTI ALTERNATIVI-->
                
                <div>
                    
                    <?php while ($menu = $rMenu->fetch_array()): ?> 
                    
                    
                     <a href="<?php echo $siteurl_base.$menu["pagina_url"]; ?>" title="<?php echo $menu["pagina_meta_title"]; ?>" tabindex="<?php echo $menu["pagina_id"]; ?>">
                    
                       <?php echo $menu["pagina_meta_title"]; ?>
                        
                    </a>
                    
                    
                    <?php endwhile; ?>
                    
                
                </div>
                
                <!--Fine Links-->
    
        </nav>
        
        <!--Fine Menu-->