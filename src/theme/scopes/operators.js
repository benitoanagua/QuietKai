export default function getOperatorSettings(scheme, term) {
  return {
    name: "Operators",
    scope: [
      // Arithmetic
      "keyword.operator.arithmetic",

      // Comparison
      "keyword.operator.comparison",
      "keyword.operator.relational",

      // Logical
      "keyword.operator.logical",

      // Assignment
      "keyword.operator.assignment",

      // Increment/Decrement
      "keyword.operator.increment",
      "keyword.operator.decrement",

      // Bitwise
      "keyword.operator.bitwise",

      // Others
      "keyword.operator",
    ],
    settings: {
      foreground: term.normal.red,
    },
  };
}