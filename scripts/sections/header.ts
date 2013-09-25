 $('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="header"]'){
			insert_top("div", id:"headerPanel")
			
			$('./div[@id= "headerPanel"]'){
				attribute("data-ur-set", "toggler")
				
				move_here('.././h1','bottom'){
					#attribute("data-ur-toggler-component", "button")
					
					move_here('../.././/div[@class="panel"]','after'){
						#attribute("data-ur-toggler-component", "content")
						
						$('./ul[@id="nav"]'){
							# Remove unwanted top menu items from upper menu
							$('./li[position()=6]'){#remove shop tab from menu
								remove()
							}
						}
						$('./div[@id="merkzettel"]'){
							remove();
						
						}
						
						#$('./dl[@id="target"]'){ # remove different lanaguage tab
							
							#attribute("data-ur-set", "toggler")
							#$('./dt'){
							#	attribute("data-ur-toggler-component", "button")
							#}
							#$('./dd'){
							#	attribute("data-ur-toggler-component", "content")
							#}
						
						#}
						
						$('./form[@class= "search-form"]'){
							remove()
						}
						
						move_here('../.././/div[@id="topbar"]','bottom'){
							$('.//div[@class="drop"]'){
								
								remove()
							}
							$('.//div[@class="drop drop-default"]'){
								
								remove()
							}
						}
						$('./strong'){
							remove()
						}
						insert_top("div", id:"nav-bar")
						$('./div[@id="nav-bar"]'){
							insert_top("div",id:"nav-toggler")
							$('./div[@id="nav-toggler"]'){
								attribute("data-ur-toggler-component", "button")
								
							}
							move_here('.././ul[@id="nav"]','bottom'){
								attribute("data-ur-toggler-component", "content")
								$('./li'){
									$('./a'){
										insert('div',class:'arrow-indicator')
									}
								}		
								
							}
							move_here('.././dl[@id="target"]','top'){
								attribute("data-ur-set", "toggler")
								$('./dt'){
									attribute("data-ur-toggler-component", "button")
								}
								$('./dd'){
									attribute("data-ur-toggler-component", "content")
								}
							
							}
						
						
						}
					}
				
				}
				move_here('.././/div[@class="breadcrumbs-block"]','after'){
					
				}
			
			}
			
			$('./div[@class="holder"]'){
				$('./div[@id="topbar"]'){
					
				
				}
				
			}
		}
	}
}
