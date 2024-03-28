"use strict";
import inquirer from "inquirer";

import favLanguage from "./questions/favoriteLanguage.js";
import favTool from "./questions/favoriteTool.js";

inquirer.prompt([favLanguage, favTool]).then((answers) => {
  console.log(
    `Your favorite programming language is ${answers.languages}, and you prefer ${answers.preferredTool} as a development tool. Your input is highly appreciated.`
  );
});
