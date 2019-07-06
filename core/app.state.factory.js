(function () {
  'use strict';

  angular
    .module('webApp')
    .factory('AppStateFactory', AppStateFactory);

  AppStateFactory.$inject = ['$http'];

  /* @ngInject */
  function AppStateFactory ($http) {
    var vm = this;
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
    vm.contactFormSarah = [
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

    vm.contactFormLizzy = [
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
    
    vm.contactFormElizabeth = [
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

    vm.contactFormJeremy = [
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
        name: 'flow1',
        appId: 'CC_DEMO_AO_79',
        title: 'Typical applicant: multiple services but no friction',
        label: 'Typical Applicant',
        description: 'CrossCore strategies can be easily configured to conditionally include certain services based on risk while skipping others.',
        form: vm.contactFormSarah,
        states: [
          'app.mobile.input',
          'app.mobile.approved'
        ]
      },
      {
        name: 'flow2',
        appId: 'CC_DEMO_AO_80',
        title: 'Step-up for consumer with mismatched identity data',
        label: 'Mismatched Identities',
        description: 'Many applicants have slight identity discrepancies that require costly manual review and application delays.',
        form: vm.contactFormLizzy,
        assets: 'lizzy',
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
        name: 'flow3',
        appId: 'CC_DEMO_AO_81',
        title: 'Avoid unnecessary step-ups using CrossCore Decision Analytics',
        label: 'Machine Learning',
        description: 'CrossCore Decision Analytics machine learning models are trained on combinations of historical data to make the best possible decision and limit the need for step-ups that add friction.',
        form: vm.contactFormLizzy,
        assets: 'lizzy',
        states: [           
          'app.mobile.toggles',
          'app.mobile.input',
          'app.mobile.approved'
         ]
      },
      {
        name: 'flow4',
        appId: 'CC_DEMO_AO_76',
        title: 'Step-up for identity fraud attempt',
        label: 'Identity Fraud Attempt',
        description: 'CrossCore instantly identifies most synthetic and impersonation fraud applications, adding friction to the attacker and referring the case for manual review.',
        form: vm.contactFormElizabeth,
        assets: 'elizabeth',
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
        name: 'flow5',
        appId: 'CC_DEMO_AO_82',
        title: 'Passive step-up for thin-file applicant',
        label: 'Thin-file Applicant',
        description: 'Organizations can quickly and seamlessly incorporate additional phone intelligence or identity verification sources if the applicant was not found in traditional bureau data.',
        form: vm.contactFormJeremy,
        assets: 'jeremy',
        states: [
          'app.mobile.input.needmore',
          'app.mobile.mitek.front',
          'app.mobile.mitek.back',
          'app.mobile.mitek.selfie',
          'app.mobile.input',
          'app.mobile.approved'
        ]
      }
      // ,
      // {
      //   name: 'flow6',
      //   appId: '12345',
      //   title: 'JSON Request',
      //   label: 'JSON Request/Response',
      //   description: 'JSON Request/Response Data',
      //   states: [
      //     'app.mobile.json'
      //   ]
      // }
    ]
    
    
    return vm;
  }  
})();