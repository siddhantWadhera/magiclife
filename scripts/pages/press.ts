$('./body') {
	add_class('mw_press')
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			$('.//div[@id="content"]'){
				#remove()  #temporary removed.
				add_class('page-content')
				$('./div'){
					$('./ul[@class="mlpageinfos"]'){
						remove()
					}
				}
				
			}
			$('.//div[@id="sidebar"]'){
				add_class('info-contact')
			}
		}
	}
}