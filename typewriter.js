const sentence = "hello there from lighthouse labs";

const print = sentence =>{
for (const char of sentence) {
  let letters = sentence[char];
setTimeout(() => {
    process.stdout.write(letters);
}, 50)}
