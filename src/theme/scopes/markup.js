export default function getMarkupSettings(scheme, term) {
  return [
    {
      name: "Markdown headings",
      scope: [
        "markup.heading",
        "markup.heading.setext",
        "entity.name.section.markdown",
      ],
      settings: {
        fontStyle: "bold",
        foreground: term.normal.blue,
      },
    },
    {
      name: "Markdown links",
      scope: [
        "markup.underline.link",
        "markup.underline.link.image",
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
      ],
      settings: {
        foreground: term.normal.green,
        fontStyle: "underline",
      },
    },
    {
      name: "Markdown code",
      scope: [
        "markup.inline.raw",
        "markup.fenced_code.block",
        "markup.quote.markdown",
      ],
      settings: {
        foreground: term.normal.yellow,
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown bold",
      scope: ["markup.bold", "punctuation.definition.bold"],
      settings: {
        fontStyle: "bold",
        foreground: scheme.secondary, // Use MD3 secondary token
      },
    },
    {
      name: "Markdown italic",
      scope: ["markup.italic", "punctuation.definition.italic"],
      settings: {
        fontStyle: "italic",
        foreground: scheme.tertiary, // Use MD3 tertiary token
      },
    },
    {
      name: "Markdown lists",
      scope: [
        "markup.list.unnumbered",
        "markup.list.numbered",
        "punctuation.definition.list.begin",
      ],
      settings: {
        foreground: scheme.primary, // Use MD3 primary token
      },
    },
    {
      name: "HTML/XML tags",
      scope: [
        "meta.tag",
        "punctuation.definition.tag",
        "entity.name.tag",
      ],
      settings: {
        foreground: scheme.secondary, // Use MD3 secondary token
      },
    },
    {
      name: "HTML/XML attributes",
      scope: [
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: scheme.tertiary, // Use MD3 tertiary token
      },
    },
  ];
}