'use strict';

describe('Controller: BlogcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bsdApp'));

  var BlogcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogcontrollerCtrl = $controller('BlogcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
