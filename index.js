/*
 * Copyright (c) 1986-2023 Ecmel Ercan <ecmel.ercan@gmail.com>
 * Licensed under the MIT License
 */

const { parsers } = require("prettier/parser-html");

function parse(text, options, legacy) {
  const find = /(?:<(textarea|title|script).*?<\/\1|(["']).*?\2|<%([^>]*)%>)/gs;
  text = text.replace(find, (match, p1, p2, p3) => (p3 ? `<!${p3}!>` : match));
  return parsers.html.parse(text, options, legacy);
}

module.exports = {
  languages: [
    {
      name: "EJS",
      parsers: ["html"],
      extensions: [".ejs"],
    },
  ],
  parsers: {
    html: {
      ...parsers.html,
      parse,
    },
  },
};
