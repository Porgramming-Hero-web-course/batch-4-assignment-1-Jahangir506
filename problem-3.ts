{
  //problem-3

  // count function
  const countWordOccurrences = (sentence: string, word: string): number => {
    const SentenceToWordArray: string[] = sentence.split(" ");
    const wordAppearsCount = SentenceToWordArray.filter((arr) =>
      arr.includes(word)
    ).length;
    return wordAppearsCount;
  };

  // input
  const sentences: string = "I love typescript";
  const word: string = "typescript";

  const result = countWordOccurrences(sentences, word);
  console.log(result);

  //
}
