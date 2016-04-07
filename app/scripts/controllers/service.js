'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:ServiceCtrl
 * @description
 * # ServiceCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('ServiceCtrl', function ($scope, $location, $anchorScroll) {
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
