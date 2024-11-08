{
  //problem-3

  const countWordOccurrences = (sentence: string, word: string) => {
    const arrWord: string[] = sentence.split(" ");
    const wordAppearsCount = arrWord.filter((arr) => arr.includes(word)).length;
    return wordAppearsCount;
  };

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);

  //
}
