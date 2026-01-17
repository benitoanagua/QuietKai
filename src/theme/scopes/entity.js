export default function getEntitySettings(scheme, term) {
  return [
    {
      name: "Class names, types, and structural entities",
      scope: [
        "entity.name.class",
        "entity.name.struct",
        "entity.name.enum",
        "entity.name.interface",
        "entity.name.type",
        "entity.name.namespace",
        "entity.name.tag",
        "entity.name.section",
      ],
      settings: {
        foreground: term.normal.cyan,
        fontStyle: "bold",
      },
    },
    {
      name: "Function and method names",
      scope: [
        "entity.name.function",
        "entity.name.method",
        "entity.name.constructor",
      ],
      settings: {
        foreground: term.normal.green,
        fontStyle: "bold",
      },
    },
    {
      name: "Property and attribute names",
      scope: [
        "entity.name.property",
        "entity.name.attribute",
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: term.normal.yellow,
      },
    },
  ];
}