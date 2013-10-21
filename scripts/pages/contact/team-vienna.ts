$('./body') {
	$('./div[@id="wrapper"]'){
		$('.//div[@id="main"]'){
			#move_here('.//div[@id="sidebar"]','top'){
				#remove()
			#}
			$('.//div[@id="content"]'){
				#remove()  #temporary removed.
				add_class('page-content')
				$('./div[@id="c5882"]'){
					$('./div[@class="tx-wecstaffdirectory-pi1"]'){
						$('.//div[@class="tx-wecstaffdirectory-fullWidth"]'){
							$('./div[(position()=1)]'){
								$('./div[@class="rightColumn"]'){
									#insert("div", class: "spacer")
									$('./div[position()=last()]'){
										remove()
									}
								
								}
							}
							$('./div'){
								$('./div[@class="leftColumn"]'){
									$('./a'){
										$('./img'){
											attribute('height'){
												value('121')
											}
										}
									}
								
								}
								$('./div[@class="rightColumn"]'){
									insert("div", class: "spacer")
								
								}
								
							
							}
								
						
						}
							
						$('.//div[@class="tx-wecstaffdirectory-staffpage"]'){
							$('./div[@class="maincontent"]'){
								move_here('.././div[@class="topmenu"]','after'){
									$('.//select'){
										$('./option[position()>1]'){
											attribute('value'){
												#log(search((http://[^/]*)(/.*)))
												#rewrite_links()
												 #replace((http://[^/]*)(/.*), "")
											}
										}
									}
								}
								#remove()
							}
						
						}
					}
				}
			}
		}
	}
}	