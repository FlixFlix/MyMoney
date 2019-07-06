(function () {
    'use strict';
  
    angular
      .module('webApp')
      .controller('AppController', AppController);

    AppController.$inject = [
        '$state',
        '$rootScope',
        '$animate',
        '$location',
        '$anchorScroll',
        'AppStateFactory'
    ];

    function AppController($state, $rootScope, $animate, $location, $anchorScroll, AppStateFactory) {
        $animate.enabled(true)
        var vm = this;
        vm.appState = AppStateFactory;
        $rootScope.pageClass = 'something-new'
        vm.pageClass = 'something-new'

        /**
         * Template Methods
         */
        vm.go = function(path) {
            $state.go(path);
        }
        
        vm.selectFlow = function(flow) {
            vm.appState.currentScenario.states = angular.copy(flow.states);
            vm.appState.currentScenario.form = angular.copy(flow.form);
            vm.appState.currentScenario.assets = 'assets/images/' + flow.assets + '/';
            vm.appState.currentScenario.showPassport = (flow.assets === 'jeremy');            
            vm.appState.currentScenario.review = flow.name;
            vm.appState.currentScenario.appId = flow.appId;
            vm.next();
        }

        vm.next = function() {
            var route = (!vm.appState.currentScenario.states.length)
                ? 'app.mobile.welcome'
                : vm.appState.currentScenario.states.shift();
            
            $state.go(route);            
        }

        vm.anchor = function(hash) {
            $location.hash(hash);
            $anchorScroll();
        }

        /**
         * Custom Events
         */
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });

    } 
})();
  