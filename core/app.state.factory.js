(function () {
  'use strict';

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

  angular
    .module('webApp')
    .factory('AppStateFactory', AppStateFactory);

  AppStateFactory.$inject = ['$http'];

  /* @ngInject */
  function AppStateFactory ($http) {
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
    vm.locales = {

      /*********************/
      /*   UNITED STATES   */
      /*********************/
      US: {
        appName: 'MyMoney',
        label: 'US (English)',
        description: 'United States',
        code: 'US',
        persons: [
          ['', '', '', '', '', '', '', '', '', ''],
          ['Sarah', 'Jamison', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
          ['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '312-567-8500', 'lizzy_grant@gmail.com'],
          ['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '312-567-8500', 'elizabethgrant83@yahoo.com'],
          ['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '512-474-5171', 'jeremyv_007@gmail.com'],
        ],
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            label: 'Typical Applicant', title: 'Typical applicant: multiple services but no friction',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatch: {
            label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            label: 'Machine Learning', title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        },
        fields: [
          {
            name: 'firstName',
            placeholder: 'First Name'
          },
          {
            name: 'lastName',
            placeholder: 'Last Name'
          },
          {
            name: 'dob',
            placeholder: 'DOB - MM/DD/YYYY'
          },
          {
            name: 'ssn',
            placeholder: 'SSN'
          },
          {
            name: 'address',
            placeholder: '123 Streetname Ave'
          },
          {
            name: 'city',
            placeholder: 'City'
          },
          {
            name: 'state',
            placeholder: 'State'
          },
          {
            name: 'zip',
            placeholder: 'ZIP Code'
          },
          {
            name: 'phone',
            placeholder: 'Phone Number'
          },
          {
            name: 'email',
            placeholder: 'email@domain.com'
          },
        ]
      },

      /**********************/
      /*   UNITED KINGDOM   */
      /**********************/

      UK: {
        appName: 'MySmackers',
        label: 'UK (English)',
        description: 'United Kingdom',
        code: 'UK',
        persons: [
          ['', '', '', '', '', '', '', '', '', ''],
          ['Sarah', 'Jamison', '02/01/1976', 'AO 12 34 56', '17123 Peachtree Court', 'Edinburgh', 'Scotland', 'EH10 4BF', '+44 7911 123456', 'sarahlynnjamison0276@yahoo.com'],
          ['Lizzy', 'Grant', '04/04/1983', 'MB 56 65 54 C', '25301 3rd Avenue APT 184', 'London', 'England', 'W1T 1JY', '+44 7911 123456', 'lizzy_grant@gmail.com'],
          ['Elizabeth', 'Grant', '07/04/1983', 'MB 56 65 54 C', '7146 S Apostle Avenue #8160', 'Bath', 'England', 'BA1 2FJ', '+44 7911 123456', 'elizabethgrant83@yahoo.com'],
          ['Jeremy', 'Vasquez', '09/18/1999', 'XL 55 33 45 C', '9715 Rock Maple Street', 'Brighton', 'East Sussex, England', 'BN1 2NW', '+44 7911 123456', 'jeremyv_007@gmail.com'],
        ],
        text: {
          chooseScenario: 'Choose scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            label: 'Ordinary Applicant', title: 'Typical applicant: multiple services but no friction',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatch: {
            label: 'Identity Discrepancies', title: 'Step-up for consumer with mismatched identity data',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            label: 'Machine Learning', title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            label: 'A Crack At Identity Fraud', title: 'Step-up for identity fraud attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        },
        fields: [
          {
            name: 'firstName',
            placeholder: 'First Name'
          },
          {
            name: 'lastName',
            placeholder: 'Last Name'
          },
          {
            name: 'dob',
            placeholder: 'DOB - MM/DD/YYYY'
          },
          {
            name: 'NINO',
            placeholder: 'National Insurance Number'
          },
          {
            name: 'address',
            placeholder: '123 Streetname Ave'
          },
          {
            name: 'city',
            placeholder: 'City'
          },
          {
            name: 'country',
            placeholder: 'Country'
          },
          {
            name: 'postcode',
            placeholder: 'Postal Code'
          },
          {
            name: 'phone',
            placeholder: 'Phone Number'
          },
          {
            name: 'email',
            placeholder: 'email@domain.com'
          },
        ]
      },

      /****************/
      /*   AUSTRALIA  */
      /****************/

      AU: {
        appName: 'MyDollary-doos',
        label: 'AUS (English)',
        description: 'Australia',
        code: 'AU',
        persons: [
          ['', '', '', '', '', '', '', '', '', ''],
          ['Sarah', 'Jamison', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
          ['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '312-567-8500', 'lizzy_grant@gmail.com'],
          ['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '312-567-8500', 'elizabethgrant83@yahoo.com'],
          ['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '512-474-5171', 'jeremyv_007@gmail.com'],
        ],
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            label: 'Regular Bloke', title: 'Typical applicant: multiple services but no friction',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatch: {
            label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            label: 'Machine Learning', title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        },
        fields: [
          {
            name: 'firstName',
            placeholder: 'First Name'
          },
          {
            name: 'lastName',
            placeholder: 'Last Name'
          },
          {
            name: 'dob',
            placeholder: 'DOB - MM/DD/YYYY'
          },
          {
            name: 'ssn',
            placeholder: 'SSN'
          },
          {
            name: 'address',
            placeholder: '123 Streetname Ave'
          },
          {
            name: 'city',
            placeholder: 'City'
          },
          {
            name: 'state',
            placeholder: 'State'
          },
          {
            name: 'zip',
            placeholder: 'ZIP Code'
          },
          {
            name: 'phone',
            placeholder: 'Phone Number'
          },
          {
            name: 'email',
            placeholder: 'email@domain.com'
          },
        ]
      },

      /****************/
      /*   INDIA      */
      /****************/

      IND: {
        appName: 'MyCurry',
        label: 'India (Hindu)',
        description: 'India',
        code: 'IND',
        persons: [
          ['', '', '', '', '', '', '', '', '', ''],
          ['Singh', 'Patel', '02/01/1976', '165-23-9877', '17123 Peachtree Court', 'Boston', 'MA', '02196', '617-536-4100', 'sarahlynnjamison0276@yahoo.com'],
          ['Lizzy', 'Grant', '04/04/1983', '512-43-8888', '25301 3rd Avenue APT 184', 'San Francisco', 'CA', '94107', '312-567-8500', 'lizzy_grant@gmail.com'],
          ['Elizabeth', 'Grant', '07/04/1983', '512-43-8888', '7146 S Apostle Avenue #8160', 'Chicago', 'IL', '60652', '312-567-8500', 'elizabethgrant83@yahoo.com'],
          ['Jeremy', 'Vasquez', '09/18/1999', '754-63-2199', '9715 Rock Maple Street', 'Austin', 'TX', '78759', '512-474-5171', 'jeremyv_007@gmail.com'],
        ],
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            label: 'Regular Bloke', title: 'Typical applicant: multiple services but no friction',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatch: {
            label: 'Mismatched Identities', title: 'Step-up for consumer with mismatched identity data',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            label: 'Machine Learning', title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            label: 'Identity Fraud Attempt', title: 'Step-up for identity fraud attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            label: 'Thin-file Applicant', title: 'Passive step-up for thin-file applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        },
        fields: [
          {
            name: 'firstName',
            placeholder: 'First Name'
          },
          {
            name: 'lastName',
            placeholder: 'Last Name'
          },
          {
            name: 'dob',
            placeholder: 'DOB - MM/DD/YYYY'
          },
          {
            name: 'ssn',
            placeholder: 'SSN'
          },
          {
            name: 'address',
            placeholder: '123 Streetname Ave'
          },
          {
            name: 'city',
            placeholder: 'City'
          },
          {
            name: 'state',
            placeholder: 'State'
          },
          {
            name: 'zip',
            placeholder: 'ZIP Code'
          },
          {
            name: 'phone',
            placeholder: 'Phone Number'
          },
          {
            name: 'email',
            placeholder: 'email@domain.com'
          },
        ]
      },
    };


    var cookieLocale = getCookie( 'mm_locale' );
    if ( cookieLocale !== "" ) {
      vm.locale = vm.locales[cookieLocale];
    } else {
      vm.locale = vm.locales.US;
    }
    document.querySelector( 'body' ).classList.add( "locale-" + vm.locale.code );
    document.querySelector( '.c-header__logotext' ).innerHTML = vm.locale.appName;

    vm.currentScenario = {
      form: {},
      states: [],
      assets: '',
      review: '',
      showPassport: false
    }
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
      // Charlie changed from "CrossCore Decision Analytics" to "Machine Leanring" 5/17/19
    ]

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
        appId: 'CC_DEMO_AO_79' + '_' + vm.locale.code,
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
        appId: 'CC_DEMO_AO_80' + '_' + vm.locale.code,
        title: vm.locale.scenarios.mismatch.title,
        label: vm.locale.scenarios.mismatch.label,
        description: vm.locale.scenarios.mismatch.description,
        form: generateContactForm( vm.locale.code, vm.locale.scenarios.mismatch.person ),
        assets: vm.locale.code + '/person' + vm.locale.scenarios.mismatch.person,
        states: [
          'app.mobile.input',
          'app.mobile.input.needmore',
          'app.mobile.mitek.front',
          'app.mobile.mitek.back',
          'app.mobile.mitek.selfie',
          'app.mobile.approved'
        ]
      },

      {
        name: 'machine',
        appId: 'CC_DEMO_AO_81' + '_' + vm.locale.code,
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
        appId: 'CC_DEMO_AO_76' + '_' + vm.locale.code,
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
        appId: 'CC_DEMO_AO_82' + '_' + vm.locale.code,
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
    ]

    return vm;
  }  
})();