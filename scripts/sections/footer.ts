$("./body") {
	$(".//div[@id='footer']"){
		$(".//div[@id='footermenu1']"){
			remove()
		}$(".//div[@id='footermenu2']"){
			remove()
		}$(".//div[@id='footermenu3']"){
			remove()
		}
		
		
		$(".//div[@class = 'container-holder']"){
			#$(".//strong"){
			#	name("span")
			#}
			# Insert placeholders for inserting elements
			insert("div", id: "label")
			#insert("div", id: "tui-label")
			insert("div", id: "tui-copy")
			$("./div[@id = 'label']"){
				move_here(".././/strong[position()<3]","bottom"){
					name("span")
				
				}
			
			}
			#$("./div[@id = 'tui-label']"){
				#move_here(".././/strong[@class='logo']","bottom")
			
			#}
			$("./div[@id = 'tui-copy']"){
				move_here(".././/span[@class='copy']","bottom")
			
			}
		}
	}	
  
}
