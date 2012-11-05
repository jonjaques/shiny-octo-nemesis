define([
  'knockout',
  'knockback',
  'backbone',
  'jquery',
  'viewmodels/appview',
  'knockback-pane-navigator-panes'
],
function(
  ko,
  kb,
  Backbone,
  $,
  AppView,
  panes
) {
  var viewModel = new AppView();
  console.log(kb);
  window.kb = kb;
  window.ko = ko;
  $(function(){
    var rootEl = $('#application');

    rootEl.find('.loading').remove();

    ko.applyBindings(viewModel, rootEl.get(0));
  });
});