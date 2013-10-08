# HTML Transformations go here

$("/html") {
	 $("./body") {
      insert("script", src:asset("javascript/swipe.js"))
	}
	$("./head//link[contains(@href, 				'fileadmin/templates/club_magic_life/maintemplate/themes/start/jquery.ui.core.css')]") {
			attribute("data-mw-keep", "true")
	} 
	
	$("./head//link[contains(@href, 'fileadmin/templates/club_magic_life/maintemplate/themes/start/jquery.ui.datepicker.css')]") {
			attribute("data-mw-keep", "true")
	} 
	$("./head//link[contains(@href, 'fileadmin/templates/club_magic_life/maintemplate/themes/start/jquery.ui.theme.css')]") {
		attribute("data-mw-keep", "true")
	} 
	#$("./head//link[contains(@href, #'fileadmin/templates/club_magic_life/maintemplate/themes/start/jquery.ui.all.css')]") {
	#	attribute("data-mw-keep", "true")
	#} 
	
	$("./head//link[contains(@href, 'fileadmin/templates/club_magic_life/maintemplate/themes/start/colorbox.css')]") {
		attribute("data-mw-keep", "true")
	} 
	
	
	$("./head") {
	
	  #insert("script", src:asset("javascript/jquery-1.9.1.js"))
	  #insert("script", src:asset("javascript/jquery.ui.widget.js"))
	  #insert("script", src:asset("javascript/jquery-ui.js"))
	  #insert("script", src:asset("javascript/jquery-1.9.1.js"))
	  
	  #insert_top("link", src:asset("stylesheets/jquery.ui.core.css"))
	  #insert_top("link", src:asset("stylesheets/jquery.ui.datepicker.css"))
	  #insert_top("link", src:asset("stylesheets/jquery.ui.theme.css"))
	  #insert_top("link", src:asset("stylesheets/jquery.ui.all.css"))
	  #insert_top("link", src:asset("stylesheets/colorbox.css"))
	  
	}
	
  rewrite_links()
  absolutize_srcs()

    
  # Add the mobile meta tags 
  clean_mobile_meta_tags()

  
	 
	
  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()

	
  # Late load all the images on the site
  #lateload()
 

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
  
  
}

