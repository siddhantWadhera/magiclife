$('./body'){
	$('./div[@id="wrapper"]'){
	
		$('.//div[@id = "main"]'){
			$('./div[@class="main-holder"]'){
				$('./div[@id="content"]'){
					$('./div[@id="c12274"]')
					{
						remove() #removed content div with Contact Details
					}
					$('./div[@id="c9806"]')
					{
						$('./div[@class="Tx-Formhandler"]'){
							$('./div[@id="formhandler_contact_form"]')
							{
								$('.//p')
								{
									$('.//br'){
										remove()
									}
									remove()
								}
								attribute("data-role","fieldcontain")
								$('.//form'){
									$('.//select')
									{
										#remove_attributes()
										
										
									}
									$('.//div[position()<=2]'){
										$('./label'){
											#insert_bottom('br')
											remove()
										}
									
									}
									$('.//div[position()>2]'){
										$('./label'){
											insert_bottom('br')
										}
									
									}
									#align submit button to center
									$('.//input[@class="btn-submit"]'){
										attribute("style"){
											value("")
										}
									}
									
								}
							}
						}
						#remove() #removed content div with Contact Details
					}
				}
				$('.//div[@id="sidebar"]'){
					remove()  #temporary removed.
				}
			}
		}
	}
}



