export default function getVariableSettings(scheme, term) {
  return [
    {
      name: "Local variables",
      scope: ["variable", "variable.other", "variable.other.readwrite"],
      settings: {
        foreground: scheme.onSurface,
      },
    },
    {
      name: "Function parameters",
      scope: ["variable.parameter", "variable.parameter.function"],
      settings: {
        foreground: scheme.primary, // Use MD3 primary token
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
        foreground: scheme.secondary, // Use MD3 secondary token
      },
    },
    {
      name: "Environment variables",
      scope: ["variable.other.environment"],
      settings: {
        foreground: scheme.tertiary, // Use MD3 tertiary token
      },
    },
  ];
}