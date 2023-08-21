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
                var threshold = 100; // Change this value based on your requirements

                function setHeaderState() {

                    console.log("test");
                    var scrollPosition = $(window).scrollTop();

                    if (scrollPosition > threshold) {
                        $('header').attr('data-state', 'minimized');
                    } else {
                        $('header').attr('data-state', 'maximized');
                    }
                }

                // Initial check
                setHeaderState();

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