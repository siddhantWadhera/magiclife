#$$("head") {
#  insert("link", src:asset("javascript/jquery-ui-1.10.3.custom/js/jquery-1.9.1.js"))
 # insert("link", src:asset("javascript/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"))
  #insert("link", src:asset("javascript/jquery-ui-1.10.3.custom/css/jquery-ui-1.10.3.custom.min.css"))
#}

$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			$('./div[@class="main-holder"]'){
				$('./div[@id="sidebar"]'){
					$('./div[@id="c12316"]'){
						$('./div[@class="links-block"]'){
							attribute("data-ur-set", "toggler")
							$('./p[position()=1  ]'){
								name('div')
								$('./b'){
									name('h2')
									attribute("data-ur-toggler-component", "button")
									insert("div", class: "menu_indicator")
								}
								insert('div',id:'life-advantages')
								$('./div[@id= "life-advantages"]'){
									attribute("data-ur-toggler-component", "content")
									move_here('../.././ul[@class="contentlist"]','bottom'){
										#attribute("data-ur-toggler-component", "content")
									}
									move_here('../.././p[position()= last()]','bottom'){
										$('./a'){
											#attribute("data-ur-toggler-component", "content")
										}
									}
								}
								
							}
							$('./p[position()= last()-1]'){
								remove()
							}
							#$('./p[position()= last()]'){
							#	$('./a'){
							#		attribute("data-ur-toggler-component", "content")
							#	}
							
							#}
							#$('./ul[@class="contentlist"]'){
							#	attribute("data-ur-toggler-component", "content")
							#}	
						
						}
						
					}
					$('./div[@id="c12420"]'){
						$('./div[@class="top-block"]'){
							attribute("data-ur-set", "toggler")
							$('./h2'){
								attribute("data-ur-toggler-component", "button")
								insert("div", class: "menu_indicator")
							}
							$('./ul'){
								attribute("data-ur-toggler-component", "content")
							}		
						}
					
				
				
					}
				
			
				}
			
			
			}	
	
		
		}
	}
}	