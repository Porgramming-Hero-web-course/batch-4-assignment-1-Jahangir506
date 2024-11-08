{
  //problem-1

  // function  -> sum array number
  function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }

  const arrOfNumber: number[] = [1, 2, 3, 4, 5];

  const result = sumArray(arrOfNumber);
  console.log(result);

  //
}
