'use strict';

/**
 * @ngdoc service
 * @name bsdApp.BlogService
 * @description
 * # BlogService
 * Service in the bsdApp.
 */
angular.module('bsdApp')
  .service('BlogService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var promise;
    this.allBlogEntries = function() {
      promise = $http.get('./assets/json/blog.json', { cache: 'true'})
        .then(function(res){

          /* angular.forEach(res.data, function(value, key) {
           console.log(JSON.stringify(value) + ":" + key);

           });
           */
          return res.data;

        });

      return promise;
    }

  });
