// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({  
  "baseUrl": "js/lib",
  "paths": {
    "app": "../app",
    "jquery": "jquery.new",    
    "inputmask.date.extensions": "inputmask.date.extensions",
    "inputmask.dependencyLib.js": "inputmask.dependencyLib.js",
    "inputmask.extensions.js": "inputmask.extensions.js",
    "inputmask": "inputmask",
    "inputmask.numeric.extensions": "inputmask.numeric.extensions",
    "inputmask.phone.extensions": "inputmask.phone.extensions",
    "inputmask.regex.extensions": "inputmask.regex.extensions",
    "jquery.inputmask": "jquery.inputmask"
  },
  "shim": {
    "jquery": {
      exports: '$'
    },
    "inputmask": {
      deps: ['jquery']
    }
  }
});

// Load the main app module to start the app
requirejs(["app/main"]);
