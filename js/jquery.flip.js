/*
 * Flip! jQuery Plugin (http://lab.smashup.it/flip/)
 * @author Luca Manno (luca@smashup.it) [http://i.smashup.it]
 *              [Original idea by Nicola Rizzo (thanks!)]
 *
 * @version 0.9.9 [Nov. 2009]
 *
 * @changelog
 * v 0.9.9      ->      Fix transparency over non-colored background. Added dontChangeColor option.
 *                      Added $clone and $this parameters to on.. callback functions.
 *                      Force hexadecimal color values. Made safe for noConflict use.
 *                      Some refactoring. [Henrik Hjelte, Jul. 10, 2009]
 * 						Added revert options, fixes and improvements on color management.
 * 						Released in Nov 2009
 * v 0.5        ->      Added patch to make it work with Opera (thanks to Peter Siewert), Added callbacks [Feb. 1, 2008]
 * v 0.4.1      ->      Fixed a regression in Chrome and Safari caused by getTransparent [Oct. 1, 2008]
 * v 0.4        ->      Fixed some bugs with transparent color. Now Flip! works on non-white backgrounds | Update: jquery.color.js plugin or jqueryUI still needed :( [Sept. 29, 2008]
 * v 0.3        ->      Now is possibile to define the content after the animation.
 *                              (jQuery object or text/html is allowed) [Sept. 25, 2008]
 * v 0.2        ->      Fixed chainability and buggy innertext rendering (xNephilimx thanks!)
 * v 0.1        ->      Starting release [Sept. 11, 2008]
 *
 */
(function($) {

    function int_prop(fx){
        fx.elem.style[ fx.prop ] = parseInt(fx.now,10) + fx.unit;
    }
    
    var throwError=function(message) {
        throw({name:"jquery.flip.js plugin error",message:message});
    };
    
    var isIE6orOlder=function() {
        // User agent sniffing is clearly out of fashion and $.browser will be be deprectad.
        // Now, I can't think of a way to feature detect that IE6 doesn't show transparent
        // borders in the correct way.
        // Until then, this function will do, and be partly political correct, allowing
        // 0.01 percent of the internet users to tweak with their UserAgent string.
        //
        // Not leadingWhiteSpace is to separate IE family from, well who knows?
        // Maybe some version of Opera?
        // The second guess behind this is that IE7+  will keep supporting maxHeight in the future.
        
        // First guess changed to dean edwards ie sniffing http://dean.edwards.name/weblog/2007/03/sniff/
        return (/*@cc_on!@*/false && (typeof document.body.style.maxHeight === "undefined"));
    };
    
    
    // Some named colors to work with
    // From Interface by Stefan Petre
    // http://interface.eyecon.ro/
    
    var colors = {
        aqua:[0,255,255],
        azure:[240,255,255],
        beige:[245,245,220],
        black:[0,0,0],
        blue:[0,0,255],
        brown:[165,42,42],
        cyan:[0,255,255],
        darkblue:[0,0,139],
        darkcyan:[0,139,139],
        darkgrey:[169,169,169],
        darkgreen:[0,100,0],
        darkkhaki:[189,183,107],
        darkmagenta:[139,0,139],
        darkolivegreen:[85,107,47],
        darkorange:[255,140,0],
        darkorchid:[153,50,204],
        darkred:[139,0,0],
        darksalmon:[233,150,122],
        darkviolet:[148,0,211],
        fuchsia:[255,0,255],
        gold:[255,215,0],
        green:[0,128,0],
        indigo:[75,0,130],
        khaki:[240,230,140],
        lightblue:[173,216,230],
        lightcyan:[224,255,255],
        lightgreen:[144,238,144],
        lightgrey:[211,211,211],
        lightpink:[255,182,193],
        lightyellow:[255,255,224],
        lime:[0,255,0],
        magenta:[255,0,255],
        maroon:[128,0,0],
        navy:[0,0,128],
        olive:[128,128,0],
        orange:[255,165,0],
        pink:[255,192,203],
        purple:[128,0,128],
        violet:[128,0,128],
        red:[255,0,0],
        silver:[192,192,192],
        white:[255,255,255],
        yellow:[255,255,0],
        transparent: [255,255,255]
    };

})