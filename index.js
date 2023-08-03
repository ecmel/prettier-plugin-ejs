const { parsers } = require("prettier/parser-html");

const regex = /"[^"]*"|<textarea.*?<\/textarea|(<%([^>]*?)%>)/gs;

function parse(text, parsersOrOptions, optionsOrUndefined) {
  return parsers.html.parse(
    text.replace(regex, (m, t, c) => (!t ? m : `<!${c}!>`)),
    parsersOrOptions,
    optionsOrUndefined
  );
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
