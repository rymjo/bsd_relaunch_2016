'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:ImpressumCtrl
 * @description
 * # ImpressumCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('ImpressumCtrl', function ($scope, $location, $anchorScroll) {
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
