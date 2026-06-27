
const output = document.getElementById("output");

function getArray() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

getArray()
  .then((arr) => {
    return new Promise((resolve) => {
      const evenNumbers = arr.filter((num) => num % 2 === 0);

      setTimeout(() => {
        output.textContent = evenNumbers;
        resolve(evenNumbers);
      }, 1000); 
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      const doubled = evenNumbers.map((num) => num * 2);

      setTimeout(() => {
        output.textContent = doubled;
        resolve(doubled);
      }, 2000); 
    });
  });