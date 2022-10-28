```html
ESlint goal is to provide a pluggable linting utility for javascript.
```

```html
npm install eslint
```

**ESLint Quickstart - find errors automatically**

**lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.**

```html
const test = 'I am a test';
console.log(`Test: ${test}`);
const test = 'Another one.';
```

```html
 10:9  error  Parsing error: Identifier 'test' has already been declared

   8 |   const test = 'I am a test';
   9 |   console.log(`Test: ${2}`);
> 10 |   const test = 'Another one.';
```