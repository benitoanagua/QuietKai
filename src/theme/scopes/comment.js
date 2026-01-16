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
      foreground: scheme.onSurfaceVariant, // Use MD3 onSurfaceVariant token for better contrast
      fontStyle: "italic",
    },
  };
}