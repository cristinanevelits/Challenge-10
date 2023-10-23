import { Circle, Triangle, Square } from "./shapes.mjs";

test("Circle generates correct SVG", () => {
  const circle = new Circle();
  circle.setText("A");
  circle.setTextColor("red");
  circle.setShapeColor("blue");
  const expectedSVG = `<svg width="300" height="200">
                <circle cx="150" cy="100" r="50" fill="blue" />
                <text x="150" y="110" fill="red" font-size="20" text-anchor="middle">A</text>
              </svg>`;

  expect(circle.generateSVG()).toEqual(expectedSVG);
});

test("Triangle generates correct SVG", () => {
  const triangle = new Triangle();
  triangle.setText("B");
  triangle.setTextColor("green");
  triangle.setShapeColor("yellow");
  const expectedSVG = `<svg width="300" height="200">
                <polygon points="150,50 100,150 200,150" fill="yellow" />
                <text x="150" y="110" fill="green" font-size="20" text-anchor="middle">B</text>
              </svg>`;

  expect(triangle.generateSVG()).toEqual(expectedSVG);
});

test("Square generates correct SVG", () => {
  const square = new Square();
  square.setText("C");
  square.setTextColor("orange");
  square.setShapeColor("purple");
  const expectedSVG = `<svg width="300" height="200">
                <rect x="50" y="50" width="200" height="200" fill="purple" />
                <text x="150" y="150" fill="orange" font-size="20" text-anchor="middle">C</text>
              </svg>`;

  expect(square.generateSVG()).toEqual(expectedSVG);
});
