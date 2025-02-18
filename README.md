# Express.js: Uncommon Errors and Vulnerabilities

This repository demonstrates two common yet easily overlooked issues in Express.js applications:

1. **Insufficient Input Validation:**  Failure to properly validate user inputs can lead to vulnerabilities, particularly SQL injection.
2. **Generic Error Handling:**  A poorly designed error handler can hinder debugging and expose sensitive information.

The `bug.js` file showcases the problematic code.  `bugSolution.js` provides improved versions with enhanced security and better error handling.  This example uses a simplified scenario, focusing on core concepts applicable to real-world Express applications.

## How to run

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the original problematic code running (requires a basic understanding of how to run a Node.js app).
5. Run `node bugSolution.js` to see the improved code in action.