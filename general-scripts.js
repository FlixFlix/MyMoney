const FRAUDNET_DEMO_URL_BASE = 'https://00u5bcy7fvtu2oeya0x7-ccdemo-dev-fndlb.fraudnetdemo.com/fraudnet-ui/service/event/';
const INVISION_DEMO_URL_BASE = 'https://experian.invisionapp.com/share/';
var locale = '',
	currentLocaleName = '',
	localeNotSet = false,
	lastScenario = '',
	appHome = window.location.origin + window.location.pathname,
	isInVision = getCookie( 'mm_invision' ),
	isDev = getCookie( 'mm_devtest' );

function addGTM() {
	// Google Tag Manager
	(function( w, d, s, l, i ) {
		w[l] = w[l] || [];
		w[l].push( {
			'gtm.start':
				new Date().getTime(), event: 'gtm.js'
		} );
		var f = d.getElementsByTagName( s )[0],
			j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
		j.async = true;
		j.src =
			'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
		f.parentNode.insertBefore( j, f );
	})( window, document, 'title', 'dataLayer', 'GTM-NLH86QK' );
	// End Google Tag Manager
}

function getUrlVar( key ) {
	var urlVar = new URL( location.href ).searchParams.get( key );
	if ( typeof urlVar !== 'string' ) return false;
	else if ( urlVar.length ) return urlVar;
	else return true;
}

function getUrlVarList() {
	let searchParams = new URLSearchParams( window.location.search );
	return Array.from( searchParams.keys() );
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
	return false;
}

function deleteCookie( name ) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

function setCookie( name, value, expiration = 365 * 24 * 3600 ) {
	document.cookie = name + "=" + value + ";max-age=" + expiration + ";";
}

function reloadApp( params = '' ) {
	window.location.replace( appHome + params );
}

function isProduction() {
	if ( window.location.hostname.split( '.' ).pop() !== 'test' ) {
		return true;
	} else return false;
}

// Deal with any URL commands
(function( params ) {
	let searchParams = new URLSearchParams( window.location.search );

	for ( const [key, value] of searchParams ) {
		switch ( key ) {
			case 'reset':
				deleteCookie( 'mm_locale' );
				reloadApp();
				break;
			case 'dev':
				setCookie( 'mm_devtest', true );
				isDev = true;
				break;
			case 'nodev':
				deleteCookie( 'mm_devtest' );
				isDev = false;
				break;
			case 'vision2020':
				setCookie( 'mm_invision', true );
				reloadApp();
				break;
			case 'novision':
				deleteCookie( 'mm_invision' );
				reloadApp();
				break;
			case 'localeNotSet':
				window.localeNotSet = true;
				window.locale = 'US'; // A temporary locale
				break;
			default:
			// console.log( 'URL parameter "' + key + '" (' + getUrlVar( key ) + ') will be handled later if necessary.' );
		}
	}
})();

if ( !isDev ) addGTM();

// Check if URL locale is set and valid
window.locale = getUrlVar( 'locale' );
if ( !locales[window.locale] ) {
	// Try to check if cookie locale is set and valid instead
	window.locale = getCookie( 'mm_locale' );
	if ( !locales[window.locale] ) {

		// If neither of the two above, no locale is set
		window.localeNotSet = true;
		window.locale = 'US'; // A temporary locale

		// If not declared in URL params, we add it.
		// This will force a reload and later take us to the locale selection screen.
		if ( !getUrlVar( 'localeNotSet' ) ) {
			window.location.search = '?localeNotSet';
		}
	}

	// If locale was set by cookie, we reload and add the locale explicitly to the URL for analytics purposes
	else window.location.search = '?locale=' + window.locale;

	// If locale is set in the URL but no cookie or the locale in the cookie is different, we add or update a cookie
} else {
	window.localeNotSet = false;
	if ( getCookie( 'mm_locale' ) !== window.locale ) setCookie( 'mm_locale', window.locale );
}

// Check if running in InVision mode
if ( isInVision ) {
	// Update browser favicon to highlight InVision Mode
	setTimeout( function() {
		var link = document.querySelector( "link[rel*='icon']" ) || document.createElement( 'link' );
		link.rel = 'icon';
		link.type = 'image/png';
		link.href = 'assets/images/favicon.png';
		if ( isInVision ) {
			document.title = 'MyMoney [InVision]';
			link.href = 'assets/images/favicon-invision.png';
		}
		document.getElementsByTagName( 'head' )[0].appendChild( link );
	}, 1000 )
}
// Browser update
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
}

try {
	document.addEventListener( "DOMContentLoaded", $buo_f, false )
} catch ( e ) {
	window.attachEvent( "onload", $buo_f )
}

// FraudNet Launcher
function launch( b ) {
	track( 'launchFraudNet' );
	let popup = window.open( b.dataset.href, "review", "width=" + (screen.availWidth - 0) + ",height=" + (screen.availHeight - 5) );
	popup.moveTo( 0, 5 );
}

// Missing image handler
document.addEventListener( 'error', function( event ) {
	var img = event.target;
	if ( img.tagName.toLowerCase() !== 'img' || window.location.href.indexOf( 'mitek' ) == -1 ) return;
	img.src = window.appHome + '/assets/images/id-front-default.jpg';
	img.title = 'The real image is missing! This is a sample image.';
	img.style = 'max-height: none; max-width: 100vw; min-width: 1440px; height: auto; width: 100vw; margin-left: 50%; transform: translateX(-50%);'
}, true );

// Custom event tracker
function track( eventName, more ) {
	if ( !window.isDev ) {
		let objectToPush = {
			event: eventName,
			attributes: {
				locale: window.currentLocaleName,
				scenario: window.lastScenario,
				isDev: window.isDev
			}
		};
		window.dataLayer.push( objectToPush );
	}
}

(function() {
	document.querySelector( '#c-config' ).addEventListener( 'click', function( e ) {
		let pass = prompt( 'Enter passphrase to access settings' );
		if ( pass.toLowerCase() == 'ok' ) $( '#c-config-trigger' ).click();
	} );

})();
