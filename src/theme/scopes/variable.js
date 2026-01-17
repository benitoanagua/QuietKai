export default function getVariableSettings(scheme, term) {
  return [
    {
      name: "Local variables",
      scope: ["variable", "variable.other", "variable.other.readwrite"],
      settings: {
        foreground: scheme.onBackground,
      },
    },
    {
      name: "Function parameters",
      scope: ["variable.parameter", "variable.parameter.function"],
      settings: {
        foreground: scheme.secondary,
      },
    },
    {
      name: "Object properties and members",
      scope: [
        "variable.other.member",
        "variable.other.property",
        "variable.other.object.property",
      ],
      settings: {
        foreground: scheme.primary,
      },
    },
    {
      name: "Environment variables",
      scope: ["variable.other.environment"],
      settings: {
        foreground: scheme.tertiary,
        fontStyle: "italic",
      },
    },
    {
      name: "Global and module variables",
      scope: [
        "variable.other.constant",
        "variable.other.global",
        "variable.other.module",
      ],
      settings: {
        foreground: scheme.primary,
        fontStyle: "bold",
      },
    },
  ];
}