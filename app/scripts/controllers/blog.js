'use strict';

/**
 * @ngdoc function
 * @name bsdApp.controller:BlogcontrollerCtrl
 * @description
 * # BlogcontrollerCtrl
 * Controller of the bsdApp
 */
angular.module('bsdApp')
  .controller('BlogCtrl', function ($scope, $http, $sce, BlogService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.allBlogEntries = null;
    BlogService.allBlogEntries().then(function(dataResponse) {
      console.log("call BlogService" + dataResponse);
      //return dataResponse;
      $scope.allBlogEntries = dataResponse;


    });
    $scope.renderHtml = function(html_code)
    {
      return $sce.trustAsHtml(html_code);
    };
  });
