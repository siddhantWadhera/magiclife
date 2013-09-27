/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
      with(/^\/$|^\/\?/) {
        log("------------> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
	  with(/en/) {
        log("------------> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
		 match($path) {
			with(/cluboverview/){
				@import pages/cluboverview.ts
				log("------------> Importing pages/cluboverview.ts in mappings.ts")
			
			}
			with(/info-service/){
				with(/contact/){
					@import pages/info-service.ts
					log("-----------> Importing pages/info-service.ts in mappings.ts")
				
					match($path) {
						with(/information-/) {
							@import "pages/contact/information-on-a-club-magic-life.ts"
							log("--------> Importing pages/information-on-a-club-magic-life in mappings.ts")
						}
						with(/general-/) {
                            @import "pages/contact/general-enquiry.ts"
                            log("--------> Importing pages/general-html in mappings.ts")
                        }
						with(/booking-/){
                            @import "pages/contact/booking-inquiry.ts"
                            log("--------> Importing pages/booking-inquiry in mappings.ts")
                       
                        }
                        with(/customer-/){
                            @import "pages/contact/customer-request.ts"
                            log("--------> Importing pages/booking-inquiry in mappings.ts")
                       
                        }
						else() {
							#@import "pages/home/home.ts"
						}
					}
				}
			
			}
		 }
      }
	  
		
      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
