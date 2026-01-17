export default function getOperatorSettings(scheme, term) {
  return {
    name: "Operators",
    scope: [
      "keyword.operator.arithmetic",
      "keyword.operator.comparison",
      "keyword.operator.relational",
      "keyword.operator.logical",
      "keyword.operator.assignment",
      "keyword.operator.increment",
      "keyword.operator.decrement",
      "keyword.operator.bitwise",
      "keyword.operator",
    ],
    settings: {
      foreground: scheme.tertiary,
      fontStyle: "bold",
    },
  };
}