
jQuery("#support-topics-filter li, #common-questions-filter li").click(function() {
  
  filter = jQuery(this).attr('filter');
  filterSection = jQuery(this).attr('filter-target');
  
  //console.log('filter by ' + filter);
  //console.log('filter section ' + filterSection);
  
  jQuery(filterSection + ' li').show();
  
  if(filter != 'both'){
    jQuery(filterSection + ' li').each(function( index ) {
      filterClass = jQuery(this).attr('class');
      //console.log(filterClass);
      if(filterClass != 'both' && filterClass != filter){
        jQuery(this).hide();
      }
    });
  }
  
  
  
});