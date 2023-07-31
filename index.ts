import { Parser, ParserOptions } from "prettier";
import { parsers as htmlParsers } from "prettier/parser-html";

const regex = /"[^"]*"|<textarea.*?<\/textarea|(<%([^>]*?)%>)/gs;

function parse(
  text: string,
  parsers: { [parserName: string]: Parser },
  options: ParserOptions
) {
  return htmlParsers.html.parse(
    text.replace(regex, (m, t, c) => (!t ? m : `<?${c}?>`)),
    parsers,
    options
  );
}

export default {
  languages: [
    {
      name: "EJS",
      parsers: ["html"],
      extensions: [".ejs"],
    },
  ],
  parsers: {
    html: {
      ...htmlParsers.html,
      parse,
    },
  },
};
