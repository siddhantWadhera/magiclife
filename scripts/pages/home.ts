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
							add_class('ui-inline')
							$('./ul'){
								$('.//br'){
									remove()
								}
							}
							$('.//div[@id="tab-2"]'){
								$('.//form[@class="box-form"]'){
									
								
								}
								
							}
					
						}
					}
					
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
	#$('./div[@id="ui-datepicker-div"]'){
		#remove_attributes()
	
	#}
}	