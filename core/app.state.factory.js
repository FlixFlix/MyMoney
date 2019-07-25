(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.factory( 'AppStateFactory', AppStateFactory );

	AppStateFactory.$inject = ['$http'];

	/* @ngInject */
	function AppStateFactory( $http ) {
		var vm = this;

		function generateContactForm( localeCode, person ) {
			var form = [];
			vm.locales[localeCode].fields.forEach( function( field, index ) {
				form.push( {
					name: field.name,
					placeholder: field.placeholder,
					value: vm.locales[localeCode].persons[person][index],
				} );
			} );
			return form;
		}

		// List of locales
		vm.locales = window.locales;

		var localeSelector;

		if ( window.locale ) {
			localeSelector = window.locale;
		} else {
			localeSelector = getCookie( 'mm_locale' );
		}

		if ( vm.locales[localeSelector] ) {
			vm.locale = vm.locales[localeSelector];
		} else {
			vm.locale = vm.locales.US;
		}

		document.querySelector( 'body' ).classList.add( "locale-" + vm.locale.code );
		document.querySelector( '.c-header__logotext' ).innerHTML = vm.locale.appName;
		if ( vm.locale.ISOCode ) {
			let flag = document.querySelector( '.c-header__locale' ).appendChild( document.createElement( 'img' ) );
			flag.classList.add( 'c-header__flag' );
			flag.setAttribute( 'src', 'https://www.countryflags.io/' + vm.locale.ISOCode + '/flat/32.png' );
		}
		vm.currentScenario = {
			form: {},
			states: [],
			assets: '',
			review: '',
			showPassport: false
		};
		vm.json = {};
		vm.crossCoreStrategies = [
			{
				label: "Identity verification",
				toggle: true
			},
			{
				label: "Risk Engine ",
				toggle: true
			},
			{
				label: "Document Verification",
				toggle: true
			},
			{
				label: "Phone Intelligence",
				toggle: true
			},
			{
				label: "Email Risk Scoring",
				toggle: true
			},
			{
				label: "Machine Learning",
				toggle: false
			}
		];

		/**
		 * Init
		 */

		/*
		function getJson(mockData) {
		  $http.get('./assets/json/' + mockData + '.json').then(function(data) {
			vm.json[mockData] = JSON.stringify(data, null, 3);
		  })
		}
		['request', 'response'].forEach(getJson);
		*/

		/**
		 * Scripted Events
		 */
		vm.scenarios = [
			{
				name: 'typical',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_79_' + vm.locale.code,
				title: vm.locale.scenarios.typical.title,
				label: vm.locale.scenarios.typical.label,
				description: vm.locale.scenarios.typical.description,
				form: generateContactForm( vm.locale.code, vm.locale.scenarios.typical.person ),

				// Person 1 does not have assets; do not use in scenarios other than "typical"
				assets: '' + vm.locale.scenarios.typical.person,
				states: [
					'app.mobile.input',
					'app.mobile.approved'
				]
			},
			{
				name: 'mismatch',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_80_' + vm.locale.code,
				title: vm.locale.scenarios.mismatch.title,
				label: vm.locale.scenarios.mismatch.label,
				description: vm.locale.scenarios.mismatch.description,
				form: generateContactForm( vm.locale.code, vm.locale.scenarios.mismatch.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.mismatch.person,

				// Different set of steps based on locale parameter
				states: vm.locale.IDBackside ? [
					'app.mobile.input',
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.back',
					'app.mobile.mitek.selfie',
					'app.mobile.approved'
				] : [
					'app.mobile.input',
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.selfie',
					'app.mobile.approved'
				]

			},

			{
				name: 'machine',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_81_' + vm.locale.code,
				title: vm.locale.scenarios.machine.title,
				label: vm.locale.scenarios.machine.label,
				description: vm.locale.scenarios.machine.description,
				form: generateContactForm( vm.locale.code, vm.locale.scenarios.machine.person ),
				assets: 'person' + vm.locale.scenarios.machine.person,
				states: [
					'app.mobile.toggles',
					'app.mobile.input',
					'app.mobile.approved'
				]
			},
			{
				name: 'fraud',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_76_' + vm.locale.code,
				title: vm.locale.scenarios.fraud.title,
				label: vm.locale.scenarios.fraud.label,
				description: vm.locale.scenarios.fraud.description,
				form: generateContactForm( vm.locale.code, vm.locale.scenarios.fraud.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.fraud.person,
				states: [
					'app.mobile.input',
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.back',
					'app.mobile.mitek.selfie',
					'app.mobile.input.phonemore'
				]
			},
			{
				name: 'thin',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_82_' + vm.locale.code,
				title: vm.locale.scenarios.thin.title,
				label: vm.locale.scenarios.thin.label,
				description: vm.locale.scenarios.thin.description,
				form: generateContactForm( vm.locale.code, vm.locale.scenarios.thin.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.thin.person,
				states: [
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.back',
					'app.mobile.mitek.selfie',
					'app.mobile.input',
					'app.mobile.approved'
				]
			}
		];

		return vm;
	}
})();