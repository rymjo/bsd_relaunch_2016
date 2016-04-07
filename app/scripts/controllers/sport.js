'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:SportcontrollerCtrl
 * @description
 * # SportcontrollerCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('SportCtrl', function ($scope, $location, $anchorScroll) {
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
