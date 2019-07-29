(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.controller( 'AppController', AppController );

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
  