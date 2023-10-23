import inquirer from 'inquirer';
import { createLogo } from "./lib/logoMaker.mjs";

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters:",
      validate: (input) => {
        return input.length <= 3
          ? true
          : "Please enter up to three characters.";
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hex):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hex):",
    },
  ])
  .then((answers) => {
    createLogo(answers);
  })
  .catch((error) => {
    console.error(error);
  });
