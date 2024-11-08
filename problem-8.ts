{
  //

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
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

  // const result = validateKeys(person, ["name", "email"]);
  // console.log(result);

  //
}
