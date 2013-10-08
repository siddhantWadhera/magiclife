$('./body'){
	$('./div[@id="wrapper"]'){
	
		$('.//div[@id = "main"]'){
			$('./div[@class="main-holder"]'){
				$('./div[@id="content"]'){
					
					$('./div[@id="c9796"]'){
						$('./div[@class="csc-textpic-text"]'){
							$('./p[position()=3 or position()=5 or position()=7]'){
								remove()
							}	
						
						}
					}
				}
				$('.//div[@id="sidebar"]'){
					remove()  #temporary removed.
				}
			}
		}
	}
}



