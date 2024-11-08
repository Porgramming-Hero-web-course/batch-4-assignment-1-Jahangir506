Type guard in TypeScript:

- Ensures that the code is typed correctly and is safe.
- A type guard prevents a copy when or before it occurs.
- can protect the incrroect type.
- Usually type guard narrow dawn and we check whether any type is correct according to need.

Different types and uses of type guards:

1. typeof - It usually checks the primitive data type and returns the output.
   For example: `(typeof isAdmin === "boolean")`

2. instanceof - It is usually prefixed with class - OOP
   For example: `(Animal instanceof Dog)`

3. custom type guard - by creating a custom function, `is` used as a type guard.
   For example: `function (shape: Shape) : shape is Circle {}`

4. in - It usually checks the Object property.
   For example: `("drive" in vehicle)`

5. keyof - It usually generics and checks the Object property.
   For example: `(T extends keyof K)`
