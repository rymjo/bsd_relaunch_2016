'use strict';

describe('Service: TerminService', function () {

  // load the service's module
  beforeEach(module('bsdApp'));

  // instantiate service
  var Termin;
  beforeEach(inject(function (_Termin_) {
    Termin = _Termin_;
  }));

  it('should do something', function () {
    expect(!!Termin).toBe(true);
  });

});
