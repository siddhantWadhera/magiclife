# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

    
  # Add the mobile meta tags 
  clean_mobile_meta_tags()

    
  # Needed to begin mobilizing
  remove_all_styles()
  remove_html_comments()

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
  # Late load all the images on the site
  #lateload()
  

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
  
  
}

