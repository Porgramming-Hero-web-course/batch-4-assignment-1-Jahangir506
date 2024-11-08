{
  //

  const countWordOccurrences = (sentence: string, word: string): number => {
    const arraySentenceToWord: string[] = sentence.split(" ");
    const wordAppearsCount = arraySentenceToWord.filter((arr) =>
      arr.includes(word)
    ).length;
    return wordAppearsCount;
  };

  const sentences: string = "I love typescript";
  const word: string = "typescript";

  // const result = countWordOccurrences(sentences, word);
  // console.log(result);

  //
}
