function showMenuItems(){
    jQuery('#menu-elements').addClass('show');
    jQuery('#menu-close').addClass('show');
    jQuery('#menu-open').removeClass('show');
}

function hideMenuItems(){
    jQuery('#menu-elements').removeClass('show');
    jQuery('#menu-close').removeClass('show');
    jQuery('#menu-open').addClass('show');
}

jQuery('#menu-open').click(showMenuItems);
jQuery('#menu-close').click(hideMenuItems);
