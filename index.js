const { parsers } = require("prettier/parser-html");

const regex =
  /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|<textarea.*?<\/textarea|(<%([^>]*?)%>)/gs;

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
