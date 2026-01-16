export default function getCommentSettings(scheme, term) {
  return {
    name: "Comments",
    scope: [
      "comment",
      "comment.line",
      "comment.block",
      "comment.block.documentation",
      "punctuation.definition.comment",
    ],
    settings: {
      foreground: scheme.tertiary, // Use MD3 tertiary token
      fontStyle: "italic",
    },
  };
}