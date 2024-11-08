{
  //

  type Person = {
    name: string;
    age: number;
  };

  const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
    return object[key];
  };

  const person: Person = {
    name: "Alice",
    age: 30,
  };

  // const result = getProperty(person, "name");
  // console.log(result);

  //
}
