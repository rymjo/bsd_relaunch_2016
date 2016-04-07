'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:TermineCtrl
 * @description
 * # TermineCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('TermineCtrl', function ($scope, $location, $anchorScroll, $http, TerminService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.scrollTo = function(id) {
      $location.hash( id );
      $anchorScroll();
    }


    $scope.allTermine = null;
    TerminService.allTermine().then(function(dataResponse) {
      console.log("call Terminservice" + dataResponse);
      //return dataResponse;
      $scope.allTermine = dataResponse;


    });

   // console.log("alltermine:" +   $scope.allTermine);

  });
