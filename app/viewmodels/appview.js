define(['knockout'], function(ko) {
  var AppView = function(model) {
    var self = this;
    this.title = "Sparklist";
    this.currentPage = ko.observable('one');
  };
  return AppView;
});