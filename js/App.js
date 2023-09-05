(function($) {

    var MAIN = MAIN || {},

    MAIN = {

        _: function() {
            this.header.init();
            // Add more functions to include here
        },

        header: {
            init: function() {

                this.handleHeaderState()
                this.bindMobileMenuToggle()
            },

            // Handle Maxomized and Minimized state
            handleHeaderState: function() {

                var scrollThreshold = 12.5; // The distance to scroll up or down to trigger the change
                var offsetTopThreshold = 150; // You can change this value as per your needs
                var lastScrollPosition = -1; // Initialize to -1 to ensure the first scroll event doesn't trigger the change

                function setHeaderState() {

                    var currentScrollPosition = $(window).scrollTop();
                    
                    // If the current scroll position is less than a specific offset (let's say 50 pixels) from the top, maximize the header
                    if (currentScrollPosition < offsetTopThreshold) {

                        $('header').attr('data-state', 'maximized');
                        lastScrollPosition = currentScrollPosition;
                        return; // Exit the function early
                    }
                    
                    // If lastScrollPosition is -1, it's the first check, so just set the lastScrollPosition to the current value
                    if (lastScrollPosition === -1) {

                        lastScrollPosition = currentScrollPosition;
                        return;
                    }
                
                    var scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition); // Calculate the difference between the current and last scroll position
                    
                    // Check if the user has scrolled more than the scrollThreshold
                    if (scrollDifference > scrollThreshold) {

                        if (currentScrollPosition > lastScrollPosition) {

                            // Scrolled down
                            $('header').attr('data-state', 'minimized');
                        } else {

                            // Scrolled up
                            $('header').attr('data-state', 'maximized');
                        }
                    }
                
                    lastScrollPosition = currentScrollPosition; // Update the last scroll position
                }                

                // Listen to the scroll event
                $(window).on('scroll', setHeaderState);
            },

            // Toggle Mobile Navigation
            bindMobileMenuToggle: function() {

                console.log("test");
                $('#burger-menu').on('click', function() {
                    console.log("test2");

                    $('.nav-menu-links-mobile').toggleClass('hidden');
                });
            },
        },

        // You can add other functionalities here, similar to the slider example you provided
        // For example:
        // contentElements: {
        //     slider: {
        //         // Slider functionalities
        //     }
        // }
    }

    // Initialize the functionalities
    MAIN._();

})(jQuery);