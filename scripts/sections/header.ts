 $('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="header"]'){
		
			$('../.././/div[@id="topbar"]'){
				$('./ul[@id="main-nav"]'){
					$('./li[position()=2]'){
						$('./a'){
							attribute("href", "en/concept/thats-magic-life.html")
						}
					}
					$('./li'){
						$('.//div[@class="drop"]'){
							remove()
						}
						$('.//div[@class="drop drop-default"]'){
							remove()
						}
					}
				}			
			}
			insert_top("div", id:"headerPanel")
			
			$('./div[@id= "headerPanel"]'){
				attribute("data-ur-set", "toggler")
				
				move_here('.././h1','bottom'){
					#move_here('../.././/strong[@class="slogan"]','bottom'){
							#remove()
						#}
					
					#$('./a'){
						
					#	insert('div',id:'logo-img')
					#	$('./div[@id="logo-img"]'){
					#		insert('img')
					#		$('./img'){
					#			attribute('src'){
					#				value('fileadmin/templates/club_magic_life/maintemplate/images/logo.gif');
					#			}
					#			attribute('alt'){
					#				value('image')
					#			}
					#		}
							
						
					#	}
						
					
					#}
					#insert_bottom('strong',"Where Magic Happens")
					#$('./strong[@class="slogan"]'){
						
					#}
					
					#attribute("data-ur-toggler-component", "button")
					
					move_here('../.././/div[@class="panel"]','after'){
						#attribute("data-ur-toggler-component", "content")

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
						
						#move_here('../.././/div[@id="topbar"]','bottom'){
						#	$('./ul[@id="main-nav"]'){
						#		$('./li[position()=2]'){
						#			$('./a'){
						#				attribute("href", "en/concept/thats-magic-life.html")
						#			}
						#		}
						#		$('./li'){
						#			$('.//div[@class="drop"]'){
						#				remove()
						#			}
						#			$('.//div[@class="drop drop-default"]'){
						#				remove()
						#			}
						#		}
						#	}
						#	
						#}
						
						
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
								# Remove unwanted top menu items from upper menu
								$('./li[position()>2]'){#remove  all except home and news tab from menu
									remove()
								}
								move_here('../../../../.././/ul[@id="main-nav"]',"bottom"){
									move_here('./li',"before"){
										
									}
								
								}
								remove('.//ul[@id="main-nav"]')
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
			
			#$('./div[@class="holder"]'){
			#	$('./div[@id="topbar"]'){
					
				
				#}
				
			#}
		}
	}
}
