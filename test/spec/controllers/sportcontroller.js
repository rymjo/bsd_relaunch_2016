'use strict';

describe('Controller: SportcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bsdApp'));

  var SportcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportcontrollerCtrl = $controller('SportcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SportcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
