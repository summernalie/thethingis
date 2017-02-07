// external js: isotope.pkgd.js
$(document).ready(function (){
    
    $grid.isotope({ sortBy: 'level' });
    
    
    $('.element-item').bind('touchstart touchend', function(e) {
        //e.preventDefault();
        
        if ($(this).hasClass('hover_effect')) {
            $(this).removeClass('hover_effect')
        }
        else {
            $(this).addClass('hover_effect');    
        }
        
        
    });
    
});


$(".modal").on('hidden.bs.modal', function (e) {
    var current = $(this);
    $(current).find("iframe").attr("src", $(current).find("iframe").attr("src"));
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    level: '.level',
    //release: '[data-release] parseInt',
    category: '[data-category]',
    release: function (itemElem) {
            return Date.parse($(itemElem).find('.release').text());
        }/*,
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }*/
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$('#filter2').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
