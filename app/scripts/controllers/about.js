'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('AboutCtrl', function ($scope, $location, $anchorScroll) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.scrollTo = function(id) {
      $location.hash( id );
      $anchorScroll();
    }
  });
