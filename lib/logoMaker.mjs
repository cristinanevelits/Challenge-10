import { writeFileSync } from 'fs';
import { Circle, Triangle, Square } from './shapes.mjs';

export function createLogo(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  let logoShape;
  switch (shape) {
    case 'circle':
      logoShape = new Circle();
      break;
    case 'triangle':
      logoShape = new Triangle();
      break;
    case 'square':
      logoShape = new Square();
      break;
    default:
      console.error('Invalid shape selection');
      return;
  }

  logoShape.setText(text);
  logoShape.setTextColor(textColor);
  logoShape.setShapeColor(shapeColor);

  const logoSVG = logoShape.generateSVG();

  writeFileSync('logo.svg', logoSVG);

  console.log('Generated logo.svg');
}
