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
$( '.highlight' ).wrapInner( '<span></span>' );
// let colSize = $( '.wrapper' ).innerWidth() / 3;
// $( 'tr' ).find('td').each( function() {
// 	$( this ).attr( 'title', $( this ).text() )
// } );
// $( '.max-width-col-4' ).find( 'td' ).each( function() {
// 	$( this ).width( colSize / 4 );
// 	// let text = $( this ).text().substr( 0, 30 );
// 	$( this ).text( text )
// } )
