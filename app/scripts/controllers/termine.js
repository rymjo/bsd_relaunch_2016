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

    $scope.openDetail = function(item){
      console.log(item);
      if ($scope.isOpen(item)){
        $scope.opened = undefined;
      } else {
        $scope.opened = item;
      }
    }

    $scope.isOpen = function(item){
      return $scope.opened === item;
    };

    $scope.anyItemOpen = function() {
      return $scope.opened !== undefined;
    };

    $scope.close = function() {
      $scope.opened = undefined;
    };

   // console.log("alltermine:" +   $scope.allTermine);

  });
