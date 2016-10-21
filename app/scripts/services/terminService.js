'use strict';

/**
 * @ngdoc service
 * @name bsdApp.Termin
 * @description
 * # Termin
 * Service in the bsdApp.
 */
angular.module('bsdApp')
  .service('TerminService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var promise;
    this.allTermine = function() {
      promise = $http.get('./assets/json/termine.json', { cache: 'true'})
        .then(function(res){

         return res.data;

        });

      return promise;
    }

  });

