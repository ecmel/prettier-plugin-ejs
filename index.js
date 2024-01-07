/*
 * Copyright (c) 1986-2023 Ecmel Ercan <ecmel.ercan@gmail.com>
 * Licensed under the MIT License
 */

const { parsers } = require("prettier/parser-html");

const regex =
  /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|<title.*?>.*?<\/title>|<textarea.*?>.*?<\/textarea>|<script.*?>.*?<\/script>|(<%([^>]*?)%>)/gs;

const replacer = (m, t, c) => (!t ? m : `<!${c}!>`);

function parse(text, options, legacy) {
  return parsers.html.parse(text.replace(regex, replacer), options, legacy);
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
