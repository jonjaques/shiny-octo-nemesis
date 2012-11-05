// Partial config file
var require = {
    // Base URL relative to the test runner
    // Paths are relative to this
    baseUrl: '../app/',
    paths: {
        jquery: '../vendor/jquery',
        underscore: '../vendor/underscore',
        backbone: '../vendor/backbone',
        knockout: '../vendor/knockout',
        dpd: '../dpd'
    },
};

mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
});

// Protect from barfs
console = window.console || function() {};

// Don't track
window.notrack = true;

// Helper... not really needed but in case we want to do something fancy
var runMocha = function() {
    mocha.run();
};