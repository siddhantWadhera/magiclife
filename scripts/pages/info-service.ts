$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			#move_here('.//div[@id="sidebar"]','top'){
				#remove()
			#}
			$('.//div[@id="content"]'){
				#remove()  #temporary removed.
				add_class('page-content')
				move_here('./div[@class="banner-brown"]','top'){
					$('./div[@class="banner-brown-content"]'){
						#attribute("data-ur-set", "toggler")
						move_here('.//p[@class="bodytext"]','top'){
							name('h2')
							#attribute("data-ur-toggler-component", "button")
							insert("div", class: "menu_indicator")
						}
						$('./ul'){
							#attribute("data-ur-toggler-component", "content")
							$('./li[position()=1]'){
								remove()
							}
							$('./li'){
								#add_class('li-style')
								 remove_attributes()
								move_here('.//option','top'){
									name('a')
									# fetch the url from the value attribute and then assign it to the href attribute
									$href = fetch("@value")
									attribute('href',$href)
									insert('div',class:'arrow-indicator')
								}
								
								$('./a[position()=last()]'){
									remove()
								}
								# hardcoding the href attributes here
								#booking enquiry	
								$('./a[position()=1]'){
									attribute('href','en/info-service/contact/booking-inquiry.html?no_cache=1')
									
								}
								#customer-request
								$('./a[position()=2]'){
									attribute('href','en/info-service/contact/customer-request.html?no_cache=1')
									
								}
								#general-enquiry	
								$('./a[position()=3]'){
									attribute('href','en/info-service/contact/general-enquiry.html?no_cache=1')
									
								}
								#information-on-a-club-magic-life
								$('./a[position()=4]'){
									attribute('href','en/info-service/contact/information-on-a-club-magic-life.html?no_cache=1')
									
								}
								
								$('./div[@class="columnItems"]'){
									remove()
								}
							}
							
						}
					}
				}
				$('./div[@id="c12267"]'){
					$('./div[@class="csc-textpic csc-textpic-intext-right-nowrap"]'){
						$('./div[@class="csc-textpic-imagewrap"]'){
							
								remove()#contact pic
						
						}
					}
				}
				
			}
			#$('.//div[@id="sidebar"]'){
				#remove()  #temporary removed.
			#}
		}
	}
}	