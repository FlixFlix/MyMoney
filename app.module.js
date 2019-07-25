(function() {
	'use strict';

	angular
		.module( 'webApp', [
			'ngMask',
			'ui.router',
			'ngAnimate'
		] );

	angular.element( document ).ready( function() {
		angular.bootstrap( document, ['webApp'] );
	} )
})();
