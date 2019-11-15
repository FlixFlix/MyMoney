var $buoop = {
	required: { e: -4, f: -3, o: -3, s: -1, c: -3 },
	insecure: true,
	unsupported: true,
	api: 2019.07
};

function $buo_f() {
	var e = document.createElement( "script" );
	e.src = "https://browser-update.org/update.min.js";
	document.body.appendChild( e );
};
try {
	document.addEventListener( "DOMContentLoaded", $buo_f, false )
} catch ( e ) {
	window.attachEvent( "onload", $buo_f )
}

function getCookie( cname ) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent( document.cookie );
	var ca = decodedCookie.split( ';' );
	for ( var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt( 0 ) == ' ' ) {
			c = c.substring( 1 );
		}
		if ( c.indexOf( name ) == 0 ) {
			return c.substring( name.length, c.length );
		}
	}
	return "";
}

function launch( b ) {
	track( 'launchFraudNet' );

	// let popup = window.open( b.dataset.href, "review", "width=" + (screen.availWidth - 0) + ",height=" + (screen.availHeight - 5) );
	let popup = window.open( b.dataset.href, "review", "width=" + (screen.availWidth - 0) + ",height=" + (screen.availHeight - 5) );
	popup.moveTo( 0, 5 );
}

window.lastScenario = '';
window.currentLocaleName = '';
window.appHome = window.location.href.split( '#' )[0].split( '?' )[0];

// if(getUrlVars()['locale'])
window.isDev = true;

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.split( '#' )[0].replace( /[?&]+([^=&]+)=([^&]*)/gi, function( m, key, value ) {
		vars[key] = value;
	} );
	return vars;
}

window.locale = getUrlVars()['locale'];

// Use ?reset=1 as URL parameter to delete the mm_locale cookie.
if ( getUrlVars()['reset'] ) {
	document.cookie = "mm_locale=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

document.addEventListener( 'error', function( event ) {
	var img = event.target;
	if ( img.tagName.toLowerCase() !== 'img' || window.location.href.indexOf( 'mitek' ) == -1 ) return;
	img.src = window.appHome + '/assets/images/id-front-default.jpg';
	img.title = 'The real image is missing! This is a sample image.';
	img.style = 'max-height: none; max-width: 100vw; min-width: 1440px; height: auto; width: 100vw; margin-left: 50%; transform: translateX(-50%);'
}, true );
window.isDev = false;

function track( eventName, more ) {
	if ( !window.isDev ) {
		let objectToPush = {
			event: eventName,
			attributes: {
				locale: window.currentLocaleName,
				scenario: window.lastScenario,
				appId: window.appId,
				isDev: window.isDev
			}
		};
		window.dataLayer.push( objectToPush );
	}
}
