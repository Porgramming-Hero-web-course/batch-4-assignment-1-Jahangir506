{
  //

  type Circle = {
    readonly shape: "circle";
    radius: number;
  };
  type Rectangle = {
    readonly shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number | string => {
    if (shape.shape === "circle") {
      const convertDecimal = Math.PI * shape.radius * shape.radius;
      const circleArea = parseFloat(convertDecimal.toFixed(2));
      return circleArea;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    } else {
      return "Wrong Value Input";
    }
  };

  const circle: Shape = {
    shape: "circle",
    radius: 5,
  };

  const rectangle: Shape = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };

  // const result = calculateShapeArea(rectangle);
  // console.log(result);

  //
}
