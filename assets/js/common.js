/*$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});*/

var ANIM_TIME = 150;  // Animation time is 150ms

$(document).ready(function() {
    $('a.abstract').click(function() {
        var elem = $(this).parent().parent().find(".abstract.hidden");
        if (elem.hasClass('open')) {
            var currHeight = elem.css('height');
            elem.css('height', currHeight);
            elem.css('height');
            elem.css('height', '0px');
        } else {
            var prevHeight = elem.css('height');
            elem.css('height', 'auto');
            var endHeight = elem.css('height');
            elem.css('height', prevHeight);
            elem.css('height');
            elem.css('height', endHeight);
            setTimeout(function(){elem.css('height', 'auto')}, ANIM_TIME+1);
        }
        elem.toggleClass('open');
    });
});