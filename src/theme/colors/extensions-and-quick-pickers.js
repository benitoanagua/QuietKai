export default function getExtensionsAndQuickPickers(scheme) {
  return {
    "extensionButton.prominentForeground": scheme.onPrimary,
    "extensionButton.prominentBackground": scheme.primary,
    "extensionButton.prominentHoverBackground": scheme.primary,
    "extensionButton.background": scheme.surface,
    "extensionButton.foreground": scheme.onSurface,
    "extensionButton.hoverBackground": scheme.surfaceVariant,
    "extensionButton.hoverForeground": scheme.onSurfaceVariant,
    "extensionButton.separator": scheme.outlineVariant,
    "extensionBadge.remoteBackground": scheme.secondaryContainer,
    "extensionBadge.remoteForeground": scheme.onSecondaryContainer,
    "extensionIcon.starForeground": scheme.tertiary,
    "extensionIcon.verifiedForeground": scheme.primary,
    "extensionIcon.preReleaseForeground": scheme.primary,
    "extensionIcon.sponsorForeground": scheme.onPrimary,
    "extensionIcon.privateForeground": scheme.secondary,
    "mcpIcon.starForeground": scheme.tertiary,

    "pickerGroup.border": scheme.outlineVariant,
    "pickerGroup.foreground": scheme.primary,
    "quickInput.background": scheme.surfaceContainerLow,
    "quickInput.foreground": scheme.onSurface,
    "quickInputList.focusBackground": scheme.primaryContainer,
    "quickInputList.focusForeground": scheme.onPrimaryContainer,
    "quickInputList.focusIconForeground": scheme.onPrimary,
    "quickInputTitle.background": scheme.surfaceContainer,
  };
}