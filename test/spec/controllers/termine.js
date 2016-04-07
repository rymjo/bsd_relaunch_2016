'use strict';

describe('Controller: TermineCtrl', function () {

  // load the controller's module
  beforeEach(module('bsdApp'));

  var TermineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermineCtrl = $controller('TermineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermineCtrl.awesomeThings.length).toBe(3);
  });
});
