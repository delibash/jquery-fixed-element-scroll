// jQuery fixedElemScroll Plugin
// version 0.1, Feb. 17th, 2012
// by Mikhail Sabodzhan and Stanislas Duprey

(function($) {

    $.fn.fixedElemScroll = function(options) {
      // public methods to be called from outside the plugin
      var methods = {}

      var $this = $(this),
          $window = $(window),
          settings,
          process;

      // if options is a string then it's trying to call a public method
      if (typeof options === "string") return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
      
      settings = $.extend({
        $parent:  $this.parent(),
        // if the parent's element position is static, bottom will be the difference between the bottom of the parent element
        // and the bottom of the closest parent element with a position not equal "static"
        bottom: 0
      }, options);
      
      process = function() {
        // fix for IE7 layout bug
        settings.$parent.css({'zoom':1});
        function stickIt() {
          // check if the bottom of the parent element is inside the view port
          if (settings.$parent.offset().top + settings.$parent.height() - settings.bottom < $window.scrollTop() + $window.height()) {
            $this.css({
              position: "absolute",
              bottom: settings.bottom
            });
          } else {
            // check if the top of the parent element is outside the view port
            if (($this.offset().top + $this.height()) < $window.scrollTop() + $window.height() || $this.css("position") === "absolute") {
              $this.css({
                position: "fixed",
                bottom: 0
              });
            }
            // check if the image is higher then the parent element
            if (settings.$parent.offset().top >= $this.offset().top) {
              $this.css({ position: "relative" });
            }
          }
        };
        stickIt();
        $window.scroll(function() { stickIt(); });
        $window.resize(function() { stickIt(); });
      };

      return this.each(function() {
        if (settings.$parent.css("position") === "static") { settings.$parent.css("position", "relative"); }
        if ($this.height()>0) process();
        else $this.load(process);
      });
    }

})(jQuery);