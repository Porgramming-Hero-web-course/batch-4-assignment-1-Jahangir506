{
  //problem-8

  // type alias
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  // type rsult = keys extends keyof obj ? true : false;

  const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {};

  const person: Person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const result = validateKeys(person, ["name", "age"]);
  console.log(result);

  //
}
