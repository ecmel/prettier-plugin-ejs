import typescript from "@rollup/plugin-typescript";

export default {
  input: "index.ts",
  output: [
    {
      file: "index.js",
      format: "cjs",
      sourcemap: false,
    },
  ],
  external: ["prettier/parser-html"],
  plugins: [typescript()],
};
