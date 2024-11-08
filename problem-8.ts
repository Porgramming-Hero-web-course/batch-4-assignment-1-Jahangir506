{
  //problem-8

  // type alias
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  // type rsult = keys extends keyof obj ? true : false;

  const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    for (let key of keys) {
      if (obj[key as keyof T] === undefined) {
        return false;
      }
    }
    return true;
  };

  const person: Person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const result = validateKeys(person, ["name", "age"]);
  console.log(result);

  //
}
