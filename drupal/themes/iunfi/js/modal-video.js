jQuery("a.support-video-click").click(function() {
  
  theModal = jQuery(this).attr("data-target");
  videoSRC = jQuery(this).attr("data-theVideo");
  videoSRCauto = videoSRC + "?autoplay=1";
  
  jQuery(theModal + ' iframe').attr('src', videoSRCauto);
  jQuery(theModal + ' button.close').click(function () {
      jQuery(theModal + ' iframe').attr('src', videoSRC);
  });
  
});