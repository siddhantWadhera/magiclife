$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			$('.//div[@id="content"]'){
				#remove()  #temporary removed.
				add_class('page-content')
				$('./div[@class="banner-brown"]'){
					$('./div[@class="banner-brown-content"]'){
						attribute("data-ur-set", "toggler")
						move_here('.//p[@class="bodytext"]','top'){
							name('h2')
							attribute("data-ur-toggler-component", "button")
							insert("div", class: "menu_indicator")
						}
						$('./ul'){
							attribute("data-ur-toggler-component", "content")
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
								
								$('./div[@class="columnItems"]'){
									remove()
								}
							}
							
						}
					}
				}
			}
			$('.//div[@id="sidebar"]'){
				#remove()  #temporary removed.
				#add_class('page-content')
			}
		}
	}
}	