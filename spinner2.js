/*
Refactor the logic to remove the repeated setTimeout statements.
We should instead be left with much less code (about 8 to 10 lines of code).
*/
process.stdout.write('hello from spinner2.js... \rHey!!\n');
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let increment = 100;
for (const i in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, increment)
  increment += 200;
};
