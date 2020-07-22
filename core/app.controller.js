(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.controller( 'AppController', AppController )
		.run( function( $rootScope ) {
			$rootScope.$on( '$stateChangeSuccess', function( e, current, pre ) {
				// track('ngStateChange');
			} );

		} );

	AppController.$inject = [
		'$state',
		'$rootScope',
		'$animate',
		'$location',
		'$anchorScroll',
		'AppStateFactory'
	];

	function AppController( $state, $rootScope, $animate, $location, $anchorScroll, AppStateFactory ) {
		$animate.enabled( true );
		var vm = this;
		vm.appState = AppStateFactory;
		vm.appState.currentScenario.isDev = window.isDev;
		vm.isInVision = window.isInVision;
		vm.locale = AppStateFactory.locale;
		window.currentLocaleName = vm.locale.label;
		vm.locales = AppStateFactory.locales;

		vm.__ = function( text ) {
			var translation = vm.locale.customTranslations[text]
			if ( typeof translation === 'undefined' ) { // No custom translation
				if ( typeof window.translations[vm.locale.language] === 'undefined' ) { // Check if language set exists
					translation = text; // + ' ⚠'; // untranslated text plus a warning symbol
				} else {
					translation = window.translations[vm.locale.language][text]
					if ( typeof translation === 'undefined' ) { // No language string either
						translation = text; // + ' ⚠'; // untranslated text plus a warning symbol
					}
				}
				if ( !translation ) translation = text;  // translation key exists but it's empty (e.g. US english)
			}
			return translation;
		};
		vm.appState.localeNotSet = window.localeNotSet;
		if ( vm.appState.localeNotSet ) {
			document.querySelector( '.c-header__locale' ).classList.add( 'hidden' );
			$state.go( 'app.mobile.locale' );
		} else {
			document.querySelector( '.c-header__flag' ).setAttribute( 'src', 'https://www.countryflags.io/' + vm.locale.ISOCode + '/flat/48.png' );
			document.querySelector( '.c-header__locale' ).classList.remove( 'hidden' );
		}

		/**
		 * Template Methods
		 */
		vm.go = function( path ) {
			$state.go( path );
		};
		vm.selectedLocale = function( locale ) {
			let exitUrl = appHome;
			if ( locale.password ) {
				let authorizedRegions = {}
				let regionAuthCookie = getCookie( 'mm_regionAuth' );
				if ( regionAuthCookie ) authorizedRegions = JSON.parse( getCookie( 'mm_regionAuth' ) );
				let isAuthorizedForRegion = authorizedRegions[locale.code];
				let tryPassword = true;
				while ( tryPassword && !isAuthorizedForRegion ) {
					let pass = prompt( `Enter the password for ${locale.label} to select this region` );
					console.log(pass);
					if(pass===null) tryPassword = false;
					else if ( pass.toLowerCase() === locale.password) isAuthorizedForRegion = true;
					else tryPassword = confirm( `Incorrect passphrase for ${locale.label}. Try again?` );
				}
				if ( isAuthorizedForRegion ) {
					authorizedRegions[locale.code] = true;
					setCookie( 'mm_regionAuth', JSON.stringify( authorizedRegions ) );
					setCookie( 'mm_locale', locale.code );
					exitUrl = appHome + '?locale=' + locale.code;
				}
			} else exitUrl = appHome + '?locale=' + locale.code;
			window.location.replace( exitUrl );
		};

		vm.selectFlow = function( scenario ) {
			document.querySelector( 'body' ).setAttribute( "lastScenario", window.lastScenario );

			track( 'selectScenario' );

			vm.appState.currentScenario.states = angular.copy( scenario.states );
			vm.appState.currentScenario.name = angular.copy( scenario.name );
			vm.appState.currentScenario.form = angular.copy( scenario.form );
			vm.appState.currentScenario.form2 = angular.copy( scenario.form2 );
			vm.appState.currentScenario.hasGDC = angular.copy( scenario.hasGDC );
			vm.appState.currentScenario.assets = 'assets/images/' + scenario.assets + '/';
			vm.appState.currentScenario.showPassport = (scenario.assets === vm.locale.code + '/person4');
			vm.appState.currentScenario.review = scenario.name;
			vm.appState.currentScenario.appId = scenario.appId;
			vm.appState.currentScenario.reviewUrl = scenario.reviewUrl;

			window.lastScenario = scenario.name;
			vm.next();
		};

		vm.next = function() {
			var route = (!vm.appState.currentScenario.states.length)
				? 'app.mobile.welcome'
				: vm.appState.currentScenario.states.shift();

			$state.go( route );
		};

		vm.anchor = function( hash ) {
			$location.hash( hash );
			$anchorScroll();
		};

		/**
		 * Custom Events
		 */
		$rootScope.$on( '$stateChangeSuccess', function( event, toState, toParams, fromState, fromParams ) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			document.body.classList.remove( 'page-' + fromState.url.substr( 1 ) );
			document.body.classList.add( 'page-' + toState.url.substr( 1 ) );
		} );

		vm.showDescriptions = false;
		vm.isDescriptionsEnabled = function() {
			if ( getCookie( 'mm_descriptions' ) == 'true' ) {
				vm.showDescriptions = true;
				document.getElementById( "c-toggle" ).checked = true;
			}
			return true;
		};

		vm.toggleDescriptions = function() {
			var checkbox = document.getElementById( "c-toggle" ).checked;
			if ( checkbox ) {
				vm.showDescriptions = true;
				document.cookie = "mm_descriptions=true;max-age=" + 180 * 24 * 3600 * 1000 + ";";
			} else {
				vm.showDescriptions = false;
				document.cookie = "mm_descriptions=false;max-age=" + 180 * 24 * 3600 * 1000 + ";";
			}
		}

	}
})();
