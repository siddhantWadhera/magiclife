$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			$('./div[@class="main-holder"]'){
				move_here('.//div[@id="c12536"]','top'){
					$('./div[@class="tx-felogin-pi1"]'){
						$('./div[@class="sidebar-holder"]'){
							$('./div[@class="box-form"]'){
								$('.//ul'){
									$('.//li'){
										$('.//a'){
											attribute('style'){
												value('width:0px;')
											}
										}
									}
								
								}
								
							}
						
						}
					}
				}
				#$('./div[@id="sidebar"]')
				#{
					
					#move_here('../.././/div[@id="content"]','bottom'){
						#remove()
					#}
				#}
				$('.//div[@id="content"]'){
					#remove()  #temporary removed.
					add_class('page-content')
				}
			}
		}
	}
}	