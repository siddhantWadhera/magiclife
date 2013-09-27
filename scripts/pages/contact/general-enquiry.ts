$('./body'){
	$('./div[@id="wrapper"]'){
	
		$('.//div[@id = "main"]'){
			
			$('./div[@class="main-holder"]'){
				$('./div[@id="content"]'){
					$('./div[@id="c12275"]')
					{
						remove() #removed content div with Contact Details
					}
					$('./div[@id="c9801"]')
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
									$('.//fieldset[position()=1]'){
										$('./b[position()=1]'){
											attribute("style"){
												value("font-size:10pt;margin-bottom:1%;")
											}
										}
										insert("div", class: "clear-both")
									}
									$('.//select')
									{
										remove_attributes()
										
									}
									$('.//div[position()<=2]'){
										$('./label'){
											#insert_bottom('br')
											#remove()
										}
									
									}
									$('.//div[position()>=1]'){
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




