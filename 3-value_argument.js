#!/usr/bin/node

const args = process.argv.slice(2); // Gets command-line arguments
const firstArg = args.at(0); // Safely fetches the first argument

if (firstArg) {
    console.log(firstArg); // Prints the first argument
} else {
    console.log("No argument");
}
