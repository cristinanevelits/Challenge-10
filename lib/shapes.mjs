class Shape {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shapeColor = "";
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

export class Circle extends Shape {
  generateSVG() {
    return `<svg width="300" height="200">
                <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
                <text x="150" y="110" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
              </svg>`;
  }
}

export class Triangle extends Shape {
  generateSVG() {
    return `<svg width="300" height="200">
                <polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
                <text x="150" y="110" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
              </svg>`;
  }
}

export class Square extends Shape {
  generateSVG() {
    return `<svg width="300" height="200">
                <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
                <text x="150" y="150" fill="${this.textColor}" font-size="20" text-anchor="middle">${this.text}</text>
              </svg>`;
  }
}
