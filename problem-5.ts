{
  //problem-5

  // type alias
  type Person = {
    name: string;
    age: number;
  };

  // function -> use generic and constraint keyof operator
  const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
    return object[key];
  };

  // input
  const person: Person = {
    name: "Alice",
    age: 30,
  };

  const result = getProperty(person, "name");
  console.log(result);

  //
}
