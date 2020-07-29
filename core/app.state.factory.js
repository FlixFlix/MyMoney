(function() {
	'use strict';

	angular
		.module( 'webApp' )
		.factory( 'AppStateFactory', AppStateFactory );

	AppStateFactory.$inject = ['$http'];

	/* @ngInject */
	function AppStateFactory( $http ) {
		var vm = this;

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

		// Scenario constructor
		vm.scenario = {
			name: '',
			get appId() {
				return 'CC_DEMO_' + vm.locale.proposition + '_' + vm.locale[this.name] + '_' + vm.locale.code
			},
			get reviewUrl() {
				if ( vm.locale.useMockupFN )
					return encodeURI( FRAUDNET_MOCKUP_URL_BASE + vm.locale.code + '/fn-' + this.name + '.html'
						+ '?locale=' + vm.locale.code
						+ '&scenario=' + this.name
						+ '&title=' + __( 'FraudNet Demo' ) + ' (' + vm.locale.code + ') - ' + this.scenarioName + ' - ' + this.toolTip );
				else if ( vm.isInvision && vm.locale.invision ) return INVISION_DEMO_URL_BASE + vm.locale.invision[this.name];
				else return FRAUDNET_DEMO_URL_BASE + this.appId;
			},
			get form() {
				return generateForm( vm.locale.fields, vm.locale.persons[vm.locale.scenarios[this.name].person] );
			},
			get form2() {
				if ( vm.locale.hasGDC ) return generateForm( vm.locale.scenarios.gdc.address2_fields, vm.locale.scenarios.gdc.address2_values );
				else return [];
			},
			get hasGDC() {
				return ['gdc', 'iidv2'].includes( this.name )
			},
		};

		function generateForm( fields, values ) {
			var form = [];
			// console.log( 'Generating form for person:', values );
			// console.log( 'Generating with fields:', fields );
			fields.forEach( function( field, index ) {
				form.push( {
					name: field.name,
					placeholder: field.placeholder,
					value: values[index],
				} );
			} );
			return form;
		}

		function generateContactForm_old( person, fields = 'fields' ) {
			var form = [], values;
			console.log( 'Generating form for person:', person );
			console.log( 'Generating with fields:', fields );
			values = typeof person !== 'number' ? person : locales[vm.locale.code].persons[person];
			vm.locales[vm.locale.code][fields].forEach( function( field, index ) {
				form.push( {
					name: field.name,
					placeholder: field.placeholder,
					value: values[index],
				} );
			} );
			return form;
		}

		vm.scenarios = [
			Object.assign( Object.create( vm.scenario ), {
				name: 'typical',
				scenarioName: __( 'Typical Applicant' ),
				toolTip: __( 'Typical applicant: multiple services but no friction' ),
				description: __( 'Strategies can be easily configured to conditionally include certain services based on risk while skipping others.' ),

				// Person 1 does not have assets; do not use in scenarios other than "typical"
				assets: '' + vm.locale.scenarios.typical.person,
				states: [
					'app.mobile.input',
					'app.mobile.approved'
				]
			} ),
			Object.assign( Object.create( vm.scenario ), {
				name: 'mismatch',
				scenarioName: __( 'Mismatched Identities' ),
				toolTip: __( 'Step-up for consumer with mismatched identity data' ),
				description: __( 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.' ),
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

			} ),
			Object.assign( Object.create( vm.scenario ), {
				name: 'machine',
				scenarioName: __( 'Machine Learning' ),
				toolTip: __( 'Avoid unnecessary step-ups using Decision Analytics' ),
				description: __( 'Machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.' ),
				assets: 'person' + vm.locale.scenarios.machine.person,
				states: [
					'app.mobile.toggles',
					'app.mobile.input',
					'app.mobile.approved'
				]
			} ),
			Object.assign( Object.create( vm.scenario ), {
				name: 'fraud',
				scenarioName: __( 'Identity Fraud Attempt' ),
				toolTip: __( 'Step-up for identity fraud attempt' ),
				description: __( 'Instantly identify most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.' ),
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
			} ),
			Object.assign( Object.create( vm.scenario ), {
				name: 'thin',
				scenarioName: __( 'Thin-file Applicant' ),
				toolTip: __( 'Passive step-up for thin-file applicant' ),
				description: __( 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.' ),
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
			} ),
		];
		if ( vm.locale.hasGDC ) {
			vm.scenarios.push(
				Object.assign( Object.create( vm.scenario ), {
					name: 'gdc',
					scenarioName: __( 'International Identity Verification' ),
					toolTip: __( 'Frictionless application facilitated by GDC data' ),
					description: __( 'This particular example illustrates a former French resident applying for credit in the UK and being approved automatically' ),
					assets: '' + vm.locale.code + '/person' + vm.locale.scenarios.gdc.person,
					states: [
						'app.mobile.input',
						'app.mobile.input_address2',
						'app.mobile.approved'
					]
				} ) );
			vm.scenarios.push(
				Object.assign( Object.create( vm.scenario ), {
					name: 'iidv2',
					scenarioName: __( 'International Identity Verification with Step-Up' ),
					toolTip: __( 'Less frictionless application facilitated by GDC data ' ),
					description: __( 'This particular example illustrates a former French resident applying for credit in the UK and being approved after providing additional documentation' ),
					assets: '' + vm.locale.code + '/person' + vm.locale.scenarios.gdc.person,
					states: [
						'app.mobile.input',
						'app.mobile.input_address2',
						'app.mobile.input.needmore',
						'app.mobile.mitek.front',
						'app.mobile.mitek.selfie',
						'app.mobile.approved'
					]
				} ) );
		}
		return vm;
	}
})();
