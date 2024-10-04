---
layout: post
title: "Creating Mathematical Formulas with Commander.js"
date: 2024-10-04
categories: [tutorial, javascript]
tags: [JavaScript, Commander.js, mathematics]
---

## Introduction

In this tutorial, we will learn how to use **Commander.js** to create mathematical formulas that can be executed from the command line. **Commander.js** is a JavaScript library used to build command-line interfaces easily.

## Installation

First, we need to install **Commander.js**. Open your terminal and run the following command:


```bash
npm install commander
```

## Creating the Script

After installing Commander.js, we will create a JavaScript file. Let's name the file math.js:

```javascript
// math.js
const { Command } = require('commander');
const program = new Command();

program
    .version('1.0.0')
    .description('Mathematical Formula Application')
    .option('-a, --add <numbers>', 'Add numbers', (val) => val.split(',').map(Number))
    .option('-s, --subtract <numbers>', 'Subtract numbers', (val) => val.split(',').map(Number))
    .option('-m, --multiply <numbers>', 'Multiply numbers', (val) => val.split(',').map(Number))
    .option('-d, --divide <numbers>', 'Divide numbers', (val) => val.split(',').map(Number));

program.parse(process.argv);

const options = program.opts();

if (options.add) {
    const sum = options.add.reduce((acc, curr) => acc + curr, 0);
    console.log(`Addition Result: ${sum}`);
}

if (options.subtract) {
    const difference = options.subtract.reduce((acc, curr) => acc - curr);
    console.log(`Subtraction Result: ${difference}`);
}

if (options.multiply) {
    const product = options.multiply.reduce((acc, curr) => acc * curr, 1);
    console.log(`Multiplication Result: ${product}`);
}

if (options.divide) {
    const quotient = options.divide.reduce((acc, curr) => acc / curr);
    console.log(`Division Result: ${quotient}`);
}

```

## Running the Script

After creating the script, you can run it from the terminal using commands like the following:

```bash
node math.js --add 10,20,30
node math.js --subtract 50,20
node math.js --multiply 5,4
node math.js --divide 20,5
```


### Instructions

1. Copy the entire content above.
2. Create a new file named `2024-10-04-creating-mathematical-formulas-with-commander.md` in your `_posts` directory.
3. Paste the copied content into the file.
4. Save the file.
5. Run `bundle exec jekyll serve` to start your Jekyll server and view the new post in your browser.

## More Resources

For more information, you can visit [Commander JS](https://www.npmjs.com/package/commander/v/5.1.0) for a search engine.

