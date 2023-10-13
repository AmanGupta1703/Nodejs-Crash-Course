const firstName = "John";

export function greet(name="Stranger") {
    console.log(`Hello, ${name}!`);
}

// module.exports = greet; // CommonJS

export default firstName;