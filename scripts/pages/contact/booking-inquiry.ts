$('./body'){
	$('./div[@id="wrapper"]'){
	
		$('.//div[@id = "main"]'){
			
			$('./div[@class="main-holder"]'){
				$('./div[@id="content"]'){
					$('./div[@id="c12277"]')
					{
						remove() #removed content div with Contact Details
					}
					$('./div[@id="c10413"]')
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
										remove_attributes()
										
									}
									$('.//div[position()<=1]'){
										$('./label'){
											#insert_bottom('br')
											#remove()
										}
									
									}
									$('.//div[position()>=0]'){
										$('./label'){
											insert_bottom('br')
										}
									
									}
									$('.//input[@class="btn-submit"]'){
										attribute("style"){
											value("");
										}
									}
									
								}
							}
							$(".//input[@id='date-from'] | .//input[@id = 'date-to']"){
								log('-----------------------------------------------------> INPUT DATE ')
								attribute('readonly','true')
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



