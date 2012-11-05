define(['backbone'], function(Backbone) {
  return Backbone.Router.extend({
    routes: {
      ''        : 'home'
    },
    home: function() {
      console.log("we're home!!!");
    }
  });
});