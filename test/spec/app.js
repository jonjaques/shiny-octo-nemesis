define(['app'], function(app) {

  describe('Application', function() {
    it('Should start up. (Load dependencies, do initialization, etc.)', function() {
      app.should.respondTo('start');
    });
  });

});

