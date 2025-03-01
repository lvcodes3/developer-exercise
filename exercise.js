// Assume that "str" is a sequence of words separated by spaces.
// Return a string in which every word in "str" that exceeds 4 characters is replaced with "marklar".
// If the word being replaced has a capital first letter, it should instead be replaced with "Marklar".
const marklar = (str) => {
  return str
    .split(" ")
    .map((word) => {
      const punctuation = word.match(/[.,!?]$/) ? word.slice(-1) : "";
      const cleanWord = punctuation ? word.slice(0, -1) : word;

      const replacement =
        cleanWord.length > 4
          ? cleanWord[0] === cleanWord[0].toUpperCase()
            ? "Marklar"
            : "marklar"
          : cleanWord;

      return replacement + punctuation;
    })
    .join(" ");
};

console.log(marklar("hi there whats! very good Nowadays Lmfaooo."));

// Return the sum of all even numbers in the Fibonacci sequence, up to
// the "nth" term in the sequence
// eg. the Fibonacci sequence up to 6 terms is (1, 1, 2, 3, 5, 8),
// and the sum of its even numbers is (2 + 8) = 10
const evenFibonacci = (nth) => {
  // init fib seq //
  const fib = [1, 1];

  while (fib.length < nth) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  return fib.reduce((acc, val) => {
    return val % 2 === 0 ? acc + val : acc;
  }, 0);
};

console.log(evenFibonacci(2));
