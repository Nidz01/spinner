process.stdout.write('hello from spinner2.js... \rHey!!\n');
let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let increment = 100;
for (const i in spinner) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, increment)
  increment += 200;
};