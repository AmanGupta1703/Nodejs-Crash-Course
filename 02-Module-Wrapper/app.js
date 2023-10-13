
// What is a Module Wrapper?
// Every file in a Node application is considered a module.

// Node wraps the code in each file with an IIFE (Immediately Invoked Function Expression) to create scope.

// This means that variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.
// The top-level variables and functions defined in a module are scoped to that module and not visible to other modules unless they are explicitly exported.
// The variables and functions defined in a module are scoped to that module and not visible to other modules unless they are explicitly exported.

// Syntax
// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here
// });

console.log(exports, require, module, __filename, __dirname);