export default function getSupportSettings(scheme, term) {
  return [
    {
      name: "Built-in functions and methods",
      scope: ["support.function"],
      settings: {
        foreground: term.normal.cyan,
        fontStyle: "bold",
      },
    },
    {
      name: "Built-in classes and types",
      scope: ["support.class", "support.type"],
      settings: {
        foreground: term.normal.blue,
        fontStyle: "italic",
      },
    },
    {
      name: "Built-in constants and variables",
      scope: ["support.constant", "support.variable"],
      settings: {
        foreground: term.normal.magenta,
      },
    },
  ];
}