//app.js
(function() {
  var app = angular.module('myApp', ['ui.router']);
  
   app.run(function($rootScope, $location, $state, LoginService) {
     console.clear();
     console.log('running');
    if(!LoginService.isAuthenticated()) {
        $state.transitionTo('IniciarSesion');
      }
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('IniciarSesion', {
        url : '/IniciarSesion',
        templateUrl : '/iniciarsesion.component.html',
        controller : 'logincontroller'
      })
      .state('app-index', {
        url : '/Inicio',
        templateUrl : './index.component.html',
        controller : 'homeController'
      });
      
       $urlRouterProvider.otherwise('/login');
  }]);

})();