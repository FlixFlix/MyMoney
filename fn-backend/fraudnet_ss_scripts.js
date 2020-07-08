const queryString = window.location.search;
const params = new URLSearchParams( queryString );
let title = params.get( 'title' );
if ( !title ) title = "FraudNet Demo";
document.title = title;
let cleanUrl = location.protocol + '//' + location.host + location.pathname;
window.history.replaceState( {}, document.title, cleanUrl );
$( 'tbody' ).each( function() {
	$( this ).find( '> tr' ).not( '.header, .sub-header' ).odd().addClass( 'odd' )
} );
$( '.highlight' ).wrapInner( '<span></span>' )
