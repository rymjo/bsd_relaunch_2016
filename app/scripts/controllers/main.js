'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('MainCtrl', function ($scope, $http, $sce, BlogService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allBlogEntries = null;
    BlogService.allBlogEntries().then(function(dataResponse) {
      //return dataResponse;
      $scope.allBlogEntries = dataResponse;
      $scope.showOnHomescreen = function(dataResponse) {
        return dataResponse.showOnHomescreen === "1";
      };

    });

    $scope.showOnHomescreen = function(user) {
      return user.User.Stats[0].active === "1";
    };

    $scope.renderHtml = function(html_code)
    {
      return $sce.trustAsHtml(html_code);
    };

  });
