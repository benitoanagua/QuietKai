export default function getConstantSettings(scheme, term) {
  return [
    {
      name: "Numeric values",
      scope: [
        "constant.numeric",
        "constant.numeric.integer",
        "constant.numeric.float",
        "constant.numeric.hex",
        "constant.numeric.octal",
        "constant.numeric.binary",
      ],
      settings: {
        foreground: scheme.tertiary,
        fontStyle: "bold",
      },
    },
    {
      name: "Language constants",
      scope: [
        "constant.language",
        "constant.other",
      ],
      settings: {
        foreground: scheme.primary,
      },
    },
    {
      name: "Character escapes and placeholders",
      scope: [
        "constant.character.escape",
        "constant.other.placeholder",
      ],
      settings: {
        foreground: scheme.secondary,
      },
    },
  ];
}