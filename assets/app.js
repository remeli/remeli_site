$(document).ready(function() {
  // $(".old-works a").fancybox();
  $(".old-works a").click(function(event) {
    var piclist = [];
    var curindex = 0;
    $(".old-works a").each(function(idx) {
      piclist.push(this.href);
    });
    $.fancybox(piclist, {
        'padding'           : 0,
        'margin'            : 0,
        'centerOnScroll'    : true,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'image',
        'changeFade'        : 0,
        'index'             : 0
    });
    return false;
  });
});