{
  //problem-2

  const removeDuplicates = (numbers: number[]): number[] => {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);

  //
}
