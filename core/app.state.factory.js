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
    // List of locales
    vm.locales = {
      US: {
        label: 'US (English)',
        description: 'United States',
        code: 'US',
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            title: 'Typical applicant: multiple services but no friction',
            label: 'Typical Applicant',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatched: {
            title: 'Step-up for consumer with mismatched identity data',
            label: 'Mismatched Identities',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            label: 'Machine Learning',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            title: 'Step-up for identity fraud attempt',
            label: 'Identity Fraud Attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            title: 'Passive step-up for thin-file applicant',
            label: 'Thin-file Applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        }
      },
      UK: {
        label: 'UK (English)',
        description: 'United Kingdom',
        code: 'UK',
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            title: 'Typical applicant: multiple services but no friction',
            label: 'Typical Applicant',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatched: {
            title: 'Step-up for consumer with mismatched identity data',
            label: 'Mismatched Identities',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            label: 'Machine Learning',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            title: 'Step-up for identity fraud attempt',
            label: 'Identity Fraud Attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            title: 'Passive step-up for thin-file applicant',
            label: 'Thin-file Applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        }
      },
      AU: {
        label: 'Australia (English)',
        description: 'Australia',
        code: 'AU',
        text: {
          chooseScenario: 'Select scenario',
          approved: 'Your application was approved!',
          approvedDetails: 'Application details and instructions for accessing your new account will be emailed shortly.',
        },
        scenarios: {
          typical: {
            title: 'Typical applicant: multiple services but no friction',
            label: 'Typical Applicant',
            description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
            person: 1,
          },
          mismatched: {
            title: 'Step-up for consumer with mismatched identity data',
            label: 'Mismatched Identities',
            description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
            person: 2,
          },
          machine: {
            title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
            label: 'Machine Learning',
            description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
            person: 2,
          },
          fraud: {
            title: 'Step-up for identity fraud attempt',
            label: 'Identity Fraud Attempt',
            description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
            person: 3,
          },
          thin: {
            title: 'Passive step-up for thin-file applicant',
            label: 'Thin-file Applicant',
            description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
            person: 4,
          }
        }
      }
    };

    var cookieLocale = getCookie( 'mm_locale' );
    if ( cookieLocale !== "" ) {
      vm.locale = vm.locales[cookieLocale];
    } else {
      vm.locale = vm.locales.US;
    }
    document.querySelector( 'body' ).classList.add( "locale-" + vm.locale.code );

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
    function getJson(mockData) { 
      $http.get('./assets/json/' + mockData + '.json').then(function(data) {
        vm.json[mockData] = JSON.stringify(data, null, 3);
      })
    }

    ['request', 'response'].forEach(getJson);


    /**
     * Contact Form Data
     */
    vm.contactFormPerson1 = [
      {
        label: 'firstName',
        placeholder: 'First Name',
        value: 'Sarah'
      },
      {
        label: 'lastName',
        placeholder: 'Last Name',
        value: 'Jamison'
      },
      {
        label: 'dob',
        placeholder: 'DOB - MM/DD/YYYY',
        value: '02/01/1976'
      },
      {
        label: 'SSN',
        placeholder: 'SSN',
        value: '165-23-9877'
      },
      {
        label: 'address',
        placeholder: '123 Street Name Ave.',
        value: '17123 Peachtree Court'
      },
      {
        label: 'city',
        placeholder: 'City',
        value: 'Boston'
      },
      {
        label: 'state',
        placeholder: 'TX',
        value: 'MA'
      },
      {
        label: 'zip',
        placeholder: 'Zip Code',
        value: '02196'
      },
      {
        label: 'phone',
        placeholder: 'Phone: +1 ###-###-####',
        value: '+1 617-536-4100'
      },
      {
        label: 'email',
        placeholder: 'email@address.com',
        value: 'sarahlynnjamison0276@yahoo.com'
      }
    ]

    vm.contactFormPerson2 = [
      {
        label: 'firstName',
        placeholder: 'First Name',
        value: 'Lizzy'
      },
      {
        label: 'lastName',
        placeholder: 'Last Name',
        value: 'Grant'
      },
      {
        label: 'dob',
        placeholder: 'DOB - MM/DD/YYYY',
        value: '07/04/1983'
      },
      {
        label: 'SSN',
        placeholder: 'SSN',
        value: '512-43-8888'
      },
      {
        label: 'address',
        placeholder: '123 Street Name Ave.',
        value: '25301 3rd Street #184'
      },
      {
        label: 'city',
        placeholder: 'City',
        value: 'San Francisco'
      },
      {
        label: 'state',
        placeholder: 'TX',
        value: 'CA'
      },
      {
        label: 'zip',
        placeholder: 'Zip Code',
        value: '94107'
      },
      {
        label: 'phone',
        placeholder: 'Phone: +1 ###-###-####',
        value: '+1 312-567-8500'
      },
      {
        label: 'email',
        placeholder: 'email@address.com',
        value: 'lizzy_grant@gmail.com'
      }
    ]

    vm.contactFormPerson3 = [
      {
        label: 'firstName',
        placeholder: 'First Name',
        value: 'Elizabeth'
      },
      {
        label: 'lastName',
        placeholder: 'Last name',
        value: 'Grant'
      },
      {
        label: 'dob',
        placeholder: 'DOB - MM/DD/YYYY',
        value: '07/04/1983'
      },
      {
        label: 'SSN',
        placeholder: 'SSN',
        value: '512-43-8888'
      },
      {
        label: 'address',
        placeholder: '123 Street Name Ave.',
        value: '7146 S. Apostle Avenue #8160'
      },
      {
        label: 'city',
        placeholder: 'City',
        value: 'Chicago'
      },
      {
        label: 'state',
        placeholder: 'TX',
        value: 'IL'
      },
      {
        label: 'zip',
        placeholder: 'Zip Code',
        value: '60652'
      },
      {
        label: 'phone',
        placeholder: 'Phone: +1 ###-###-####',
        value: '+1 312-567-8500'
      },
      {
        label: 'email',
        placeholder: 'email@address.com',
        value: 'elizabethgrant83@yahoo.com'
      }
    ]

    vm.contactFormPerson4 = [
      {
        label: 'firstName',
        placeholder: 'First Name',
        value: 'Jeremy',
        delay: 0
      },
      {
        label: 'lastName',
        placeholder: 'Last Name',
        value: 'Vasquez',
        delay: 0
      },
      {
        label: 'dob',
        placeholder: 'DOB - MM/DD/YYYY',
        value: '09/18/1999',
        delay: 0
      },
      {
        label: 'SSN',
        placeholder: 'SSN',
        value: '754-63-2199'
      },
      {
        label: 'address',
        placeholder: '123 Street Name Ave.',
        value: '9715 Rock Maple Street'
      },
      {
        label: 'city',
        placeholder: 'City',
        value: 'Austin',
        delay: 0
      },
      {
        label: 'state',
        placeholder: 'TX',
        value: 'TX',
        delay: 0
      },
      {
        label: 'zip',
        placeholder: 'Zip Code',
        value: '78759'
      },
      {
        label: 'phone',
        placeholder: 'Phone: +1 ###-###-####',
        value: '+1 512-474-5171'
      },
      {
        label: 'email',
        placeholder: 'email@address.com',
        value: 'jeremyv_007@gmail.com'
      }
    ]

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
        form: vm['contactFormPerson' + vm.locale.scenarios.typical.person],
        // Person 1 does not have assets; do not use in scenarios other than "typical"
        assets: '' + vm.locale.scenarios.typical.person,
        states: [
          'app.mobile.input',
          'app.mobile.approved'
        ]
      },
      {
        name: 'mismatched',
        appId: 'CC_DEMO_AO_80' + '_' + vm.locale.code,
        title: vm.locale.scenarios.mismatched.title,
        label: vm.locale.scenarios.mismatched.label,
        description: vm.locale.scenarios.mismatched.description,
        form: vm['contactFormPerson' + vm.locale.scenarios.mismatched.person],
        assets: 'person' + vm.locale.scenarios.mismatched.person,
        states: [
          'app.mobile.input',
          'app.mobile.input.needmore',
          'app.mobile.mitek.front',
          'app.mobile.mitek.back',
          'app.mobile.mitek.selfie',
          'app.mobile.approved'
        ]
      },
      // Charlie changed "CrossCore Decision Analytics" to "Machine Learning" 5/20/19 
      {
        name: 'machine',
        appId: 'CC_DEMO_AO_81' + '_' + vm.locale.code,
        title: vm.locale.scenarios.machine.title,
        label: vm.locale.scenarios.machine.label,
        description: vm.locale.scenarios.machine.description,
        form: vm['contactFormPerson' + vm.locale.scenarios.machine.person],
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
        form: vm['contactFormPerson' + vm.locale.scenarios.fraud.person],
        assets: 'person' + vm.locale.scenarios.fraud.person,
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
        form: vm['contactFormPerson' + vm.locale.scenarios.thin.person],
        assets: 'person' + vm.locale.scenarios.thin.person,
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