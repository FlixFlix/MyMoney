/**
 * Created by robertmartindelcampo on 5/17/17.
 */
(function () {
  'use strict';

  angular
    .module('webApp')
    .config(routeConfig);

  routeConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routeConfig ($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        views: {
          'header': {},
          'content': {}
        }
      })
      //  Mobile State
      .state('app.mobile', {
        url: '/mobile',
        abstract: true,
        // reload: true,
        template: '<div ui-view></div>',
        views: {
          'footer@': {
            templateUrl: 'shell/mobile.footer.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
          'header@': {
            templateUrl: 'shell/mobile.header.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.mobile.welcome', {
        url: '/welcome',
        views: {
          'content@': {
            templateUrl: 'mobile/welcome/mobile.welcome.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }          
        }
      })
      .state('app.mobile.review', {
        url: '/review',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/customer.review.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }          
        }
      })
      .state('app.mobile.input', {
        url: '/input',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/customer.input.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.mobile.input.needmore', {
        url: '/needmore',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/customer.result.needmore.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.mobile.input.phonemore', {
        url: '/phonemore',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/customer.result.phone.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
          'footer@': {
            templateUrl: 'shell/mobile.footer.dual.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
        }
      })
      .state('app.mobile.toggles', {
        url: '/toggles',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/admin.toggles.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.mobile.json', {
        url: '/json',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/admin.json.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
          'footer@': {
            templateUrl: 'shell/home.footer.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
        }
      })
      .state('app.mobile.approved', {
        url: '/approved',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/customer.approved.html',
            controller: 'AppController',
            controllerAs: 'vm'
          },
          'footer@': {
            templateUrl: 'shell/mobile.footer.dual.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })

      .state('app.mobile.mitek', {
        url: '/mitek',
        abstract: true, 
        template: '<ui-view/>'        
      })
      .state('app.mobile.mitek.front', {
        url: '/step-1',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/mitek.front.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })

      .state('app.mobile.mitek.back', {
        url: '/step-2',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/mitek.back.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })

      .state('app.mobile.mitek.selfie', {
        url: '/step-2',
        views: {
          'content@': {
            templateUrl: 'mobile/screens/mitek.selfie.html',
            controller: 'AppController',
            controllerAs: 'vm'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/mobile/welcome');
  }
})();
