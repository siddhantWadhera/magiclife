$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			$('.//div[@id="content"]'){
				#remove()  #temporary removed.
				add_class('home-content')
			}
			$('./div[@class="main-holder"]'){
				
				$('./div[@id="sidebar"]'){
					## the club finder div 
					$('./div[@id="c12248"]'){
						$('.//div[@class="box-form"]'){
							attribute("data-ur-set", "toggler")
							add_class('ui-inline')
							$('./ul'){
								attribute("data-ur-toggler-component", "button")
								insert("div", class: "menu_indicator")
								$('./li'){
									
									#attribute("data-ur-toggler-component", "button")
									$('./a'){
										remove_attributes()
									}
									
								}
								$('.//br'){
									remove()
								}
							}
							$('.//div[@id="tab-2"]'){
								attribute("data-ur-toggler-component", "content")
								$('.//form[@class="box-form"]'){
									
								
								}
								
							}
					
						}
						insert_after('div',id:'mySwipe')
						
					}
					## swiper start
					$('./div[@id="mySwipe"]'){
						attribute("style","max-width: 500px; margin:0 auto")
						attribute("class","swipe")	
						move_here('../.././/div[@class="gallery-frame"]','bottom'){
							attribute("class") {
								value() {
									set("swipe-wrap")
								}
							}
							move_here('.//li','top'){
								remove_attributes()
								log('----------------------------------------------------> Move lI : : : ')	
								name('div')
								
							}
							remove("./ul")
							$(".//img") {
								attribute("width","")
								attribute("height","")
							}
						}
						
					}
					#### swiper end	
				
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
										
									}
									move_here('../.././p[position()= last()]','bottom'){
										$('./a'){
											
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
					## removing the contact info from home page
					remove('../../.././/div[@id="topbar"]')
			
				}
				
			
			}	
	
		
		}
	}
	#$('./div[@id="ui-datepicker-div"]'){
		#remove_attributes()
	
	#}
}	