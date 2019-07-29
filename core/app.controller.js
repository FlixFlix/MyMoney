(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.controller( 'AppController', AppController )
		.run( function( $rootScope ) {
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
		$rootScope.pageClass = 'something-new';
		vm.pageClass = 'something-new';
		vm.locale = AppStateFactory.locale;
		vm.locales = AppStateFactory.locales;

		vm.__ = function( text ) {
			var translation = vm.locale.customTranslations[text]
			if ( typeof translation === 'undefined' ) { // No custom translation
				if ( typeof window.translations[vm.locale.language] === 'undefined' ) { // Check if language set exists
					translation = text + ' ⚠'; // untranslated text plus a warning symbol
				} else {
					translation = window.translations[vm.locale.language][text]
					if ( typeof translation === 'undefined' ) { // No language string either
						translation = text + ' ⚠'; // untranslated text plus a warning symbol
					}
				}
				if ( !translation ) translation = text;  // translation key exists but it's empty (e.g. US english)
			}
			return translation;
		};

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
		vm.selectLocale = function( locale ) {
			document.cookie = "mm_locale=" + locale.code + ";max-age=" + 180 * 24 * 3600 * 1000 + ";";
			setTimeout( function() {
				window.location.replace( window.appHome + '?locale=' + locale.code );
			}, 250 )
		};

		vm.selectFlow = function( flow ) {
			vm.appState.currentScenario.states = angular.copy( flow.states );
			vm.appState.currentScenario.form = angular.copy( flow.form );
			vm.appState.currentScenario.assets = 'assets/images/' + flow.assets + '/';
			vm.appState.currentScenario.showPassport = (flow.assets === vm.locale.code + '/person4');
			vm.appState.currentScenario.review = flow.name;
			vm.appState.currentScenario.appId = flow.appId;
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
  