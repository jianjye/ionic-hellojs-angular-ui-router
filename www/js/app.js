// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope, $state, userService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  // UI Router Authentication Check
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    if (toState.data.authenticate && !userService.isLoggedIn()){
      // User isn’t authenticated
      $state.transitionTo("login");
      event.preventDefault(); 
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'homeCtrl',
      data: {
        authenticate: true
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'loginCtrl',
      data: {
        authenticate: false
      }
    });
    
  // Send to login if the URL was not found
  $urlRouterProvider.otherwise('/login');
})

.controller('homeCtrl', function() {
})

.controller('loginCtrl', function() {
})