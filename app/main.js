require.config({
  deps: ['app'],
  paths: {
    jquery: '../vendor/jquery',
    underscore: '../vendor/underscore',
    backbone: '../vendor/backbone',
    knockout: '../vendor/knockout',
    knockback: '../vendor/knockback',
    'knockback-pane-navigator-panes': '../vendor/knockback-pane-navigator-panes'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});