(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.factory( 'AppStateFactory', AppStateFactory );

	AppStateFactory.$inject = ['$http'];

	/* @ngInject */
	function AppStateFactory( $http ) {
		var vm = this;

		function generateContactForm( person ) {
			var form = [];
			vm.locales[vm.locale.code].fields.forEach( function( field, index ) {
				form.push( {
					name: field.name,
					placeholder: field.placeholder,
					value: vm.locales[vm.locale.code].persons[person][index],
				} );
			} );
			return form;
		}

		// List of locales
		vm.locales = window.locales;
		const localeList = Object.keys( vm.locales );
		for ( const localeKey of localeList ) {
			Object.defineProperty( vm.locales[localeKey], 'getLabel', {
				get: function() {
					// Replace spaces with non-breaking spaces
					return this.label.replace( ' ', String.fromCharCode( 160 ) );
				}
			} )
		}

		vm.localeNotSet = window.localeNotSet;
		vm.locale = vm.locales[window.locale];

		vm.isDev = isDev;
		vm.isInvision = isInVision;

		var $body = document.querySelector( 'body' );
		$body.classList.add( "locale-" + vm.locale.code );
		$body.setAttribute( "locale", vm.locale.code );
		$body.setAttribute( "invision", window.isInVision );
		if ( window.isInVision ) {
			$body.classList.add( "invision" );
			document.querySelector( '.c-header__logo-wrapper' ).setAttribute( 'title', 'Vision2020 Preview Mode.\n\nMake sure you are LOGGED IN TO INVISION!\n\nTo exit, use ?novision.' )
		} else {
			$body.classList.remove( "invision" );
		}
		document.querySelector( '.c-header__logotext' ).innerHTML = vm.locale.appName;

		function __( text ) {
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
			/* Variables are identified in data-countries - TT 9/10/19 */
			{
				label: "Identity Verification",
				toggle: vm.locale.ShowIdentityVerification
			},
			{
				label: "Risk Engine",
				toggle: vm.locale.ShowRiskEngine
			},
			{
				label: "Document Verification",
				toggle: vm.locale.ShowDocumentVerification
			},
			{
				label: "Phone Intelligence",
				toggle: vm.locale.ShowPhoneIntelligence
			},
			{
				label: "Email Risk Scoring",
				toggle: vm.locale.ShowEmailRiskScoring
			},
			{
				label: "Behavioral Biometrics",
				toggle: vm.locale.ShowBehavioralBiometrics
			},
			{
				label: "Machine Learning",
				toggle: vm.locale.ShowMachineLearning
			}
		];

		/**
		 * Init
		 */

		/**
		 * Scripted Events
		 */

		vm.scenarios = [
			{
				name: 'typical',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale.propcase1 + '_' + vm.locale.code,
				get reviewUrl() {
					return vm.isInvision && vm.locale.invision ? INVISION_DEMO_URL_BASE + vm.locale.invision.propcase1 : FRAUDNET_DEMO_URL_BASE + this.appId
				},
				scenarioName: __( 'Typical Applicant' ),
				toolTip: __( 'Typical applicant: multiple services but no friction' ),
				description: __( 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.' ),
				form: generateContactForm( vm.locale.scenarios.typical.person ),

				// Person 1 does not have assets; do not use in scenarios other than "typical"
				assets: '' + vm.locale.scenarios.typical.person,
				states: [
					'app.mobile.input',
					'app.mobile.approved'
				]
			},
			{
				name: 'mismatch',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale.propcase2 + '_' + vm.locale.code,
				get reviewUrl() {
					return vm.isInvision && vm.locale.invision ? INVISION_DEMO_URL_BASE + vm.locale.invision.propcase2 : FRAUDNET_DEMO_URL_BASE + this.appId
				},
				scenarioName: __( 'Mismatched Identities' ),
				toolTip: __( 'Step-up for consumer with mismatched identity data' ),
				description: __( 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.' ),
				form: generateContactForm( vm.locale.scenarios.mismatch.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.mismatch.person,

				// Different set of steps based on locale parameter
				/* There are two variables, DrvIDBackside and GovIDBackside, that way some can show both sides and others not - TT 7/25/19 */

				states: vm.locale.DrvIDBackside ? [
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
				appId: 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale.propcase3 + '_' + vm.locale.code,
				get reviewUrl() {
					return vm.isInvision && vm.locale.invision ? INVISION_DEMO_URL_BASE + vm.locale.invision.propcase3 : FRAUDNET_DEMO_URL_BASE + this.appId
				},
				scenarioName: __( 'Machine Learning' ),
				toolTip: __( 'Avoid unnecessary step-ups using Decision Analytics' ),
				description: __( 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.' ),
				form: generateContactForm( vm.locale.scenarios.machine.person ),
				assets: 'person' + vm.locale.scenarios.machine.person,
				states: [
					'app.mobile.toggles',
					'app.mobile.input',
					'app.mobile.approved'
				]
			},
			{
				name: 'fraud',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale.propcase4 + '_' + vm.locale.code,
				get reviewUrl() {
					return vm.isInvision && vm.locale.invision ? INVISION_DEMO_URL_BASE + vm.locale.invision.propcase4 : FRAUDNET_DEMO_URL_BASE + this.appId
				},
				scenarioName: __( 'Identity Fraud Attempt' ),
				toolTip: __( 'Step-up for identity fraud attempt' ),
				description: __( 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.' ),
				form: generateContactForm( vm.locale.scenarios.fraud.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.fraud.person,

				// Different set of steps based on locale parameter
				/* There are two variables, DrvIDBackside and GovIDBackside, that way some can show both sides and others not - TT 7/25/19 */
				states: vm.locale.DrvIDBackside ? [
					'app.mobile.input',
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.back',
					'app.mobile.mitek.selfie',
					'app.mobile.input.phonemore'
				] : [
					'app.mobile.input',
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.selfie',
					'app.mobile.input.phonemore'
				]
			},
			{
				name: 'thin',
				appId: 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale.propcase5 + '_' + vm.locale.code,
				get reviewUrl() {
					return vm.isInvision && vm.locale.invision ? INVISION_DEMO_URL_BASE + vm.locale.invision.propcase5 : FRAUDNET_DEMO_URL_BASE + this.appId
				},
				scenarioName: __( 'Thin-file Applicant' ),
				toolTip: __( 'Passive step-up for thin-file applicant' ),
				description: __( 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.' ),
				form: generateContactForm( vm.locale.scenarios.thin.person ),
				assets: vm.locale.code + '/person' + vm.locale.scenarios.thin.person,

				/* There are two variables, DrvIDBackside and GovIDBackside, that way some can show both sides and others not - TT 7/25/19 */
				states: vm.locale.GovIDBackside ? [
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.back',
					'app.mobile.mitek.selfie',
					'app.mobile.input',
					'app.mobile.approved'
				] : [
					'app.mobile.input.needmore',
					'app.mobile.mitek.front',
					'app.mobile.mitek.selfie',
					'app.mobile.input',
					'app.mobile.approved'
				]
			}
		];
		return vm;
	}
})();
