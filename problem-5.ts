{
  //problem-5

  type Person = {
    name: string;
    age: number;
  };

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  const result = getProperty(person, "name");
  console.log(result);

  //
}
