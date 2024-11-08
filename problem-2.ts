{
  //problem-2

  // function -> remove duplicate number
  const removeDuplicates = (numbers: number[]): number[] => {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  };

  // input
  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);

  //
}
