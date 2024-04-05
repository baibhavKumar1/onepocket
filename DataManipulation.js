const sumArray = (numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(`Sum of numbers: ${sumArray(numbers)}`);