(function($) {

    var MAIN = MAIN || {},

    MAIN = {

        _: function() {
            this.header.init();
            // Add more functions to include here
        },

        header: {
            init: function() {
                // Header specific initializations
                this.handleHeaderState();
            },

            handleHeaderState: function() {

                var threshold = 12.5; // The distance to scroll up or down to trigger the change
                var lastScrollPosition = -1; // Initialize to -1 to ensure the first scroll event doesn't trigger the change

                function setHeaderState() {

                    var currentScrollPosition = $(window).scrollTop();
                    
                    // If lastScrollPosition is -1, it's the first check, so just set the lastScrollPosition to the current value
                    if (lastScrollPosition === -1) {
                        lastScrollPosition = currentScrollPosition;
                        return;
                    }

                    var scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition); // Calculate the difference between the current and last scroll position
                    console.log(scrollDifference);
                    // Check if the user has scrolled more than the threshold
                    if (scrollDifference > threshold) {
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
            }
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