(function(app) { 
    app.AppComponent = ng.core.Component({ 
        selector: 'hello-app', 
        template: '<h1>Hello Angular 2!</h1>' 
    }).Class({ 
        constructor: function() {} 
    }); 
})(window.app || (window.app = {}));