'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:TermineCtrl
 * @description
 * # TermineCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('TermineCtrl', function ($scope, $location, $anchorScroll, $http, $sce, TerminService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.scrollTo = function(id) {
      $location.hash( id );
      $anchorScroll();
    }

    // termine in accordion
    $scope.oneAtATime = true;
    $scope.allTermine = null;
    TerminService.allTermine().then(function(dataResponse) {  
      $scope.allTermine = dataResponse;
    });
    $scope.renderHtml = function(html_code)
    {
      return $sce.trustAsHtml(html_code);
    };
    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };



  });
