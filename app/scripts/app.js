'use strict';

/**
 * @ngdoc overview
 * @name bsdApp
 * @description
 * # bsdApp
 *
 * Main module of the application.
 */
angular
  .module('bsdApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.backtop',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sport/taekwondo', {
        templateUrl: 'views/sport.taekwondo.html',
        controller: 'SportCtrl',
        controllerAs: 'sport'
      })
      .when('/sport/kickboxen', {
        templateUrl: 'views/sport.kickboxen.html',
        controller: 'SportCtrl',
        controllerAs: 'sport'
      })
      .when('/termine', {
        templateUrl: 'views/termine.html',
        controller: 'TermineCtrl',
        controllerAs: 'termine'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/impressum', {
        templateUrl: 'views/impressum.html',
        controller: 'ImpressumCtrl',
        controllerAs: 'impressum'
      })
      .when('/datenschutz', {
        templateUrl: 'views/datenschutz.html',
        controller: 'ImpressumCtrl',
        controllerAs: 'impressum'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
