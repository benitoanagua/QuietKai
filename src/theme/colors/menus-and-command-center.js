export default function getMenusAndCommandCenter(scheme, term) {
  return {
    "titleBar.activeBackground": scheme.surfaceContainerHighest,
    "titleBar.activeForeground": scheme.onSurface,
    "titleBar.inactiveBackground": scheme.surfaceContainerLow,
    "titleBar.inactiveForeground": scheme.onSurfaceVariant,
    "titleBar.border": scheme.outlineVariant,

    "menubar.selectionForeground": scheme.onPrimary,
    "menubar.selectionBackground": scheme.primary,
    "menubar.selectionBorder": scheme.outline,
    "menu.foreground": scheme.onSurface,
    "menu.background": scheme.surfaceContainerHighest,
    "menu.selectionForeground": scheme.onPrimary,
    "menu.selectionBackground": scheme.primary,
    "menu.selectionBorder": scheme.outline,
    "menu.separatorBackground": scheme.outline,
    "menu.border": scheme.outline,

    "commandCenter.foreground": scheme.onSurface,
    "commandCenter.activeForeground": scheme.onPrimary,
    "commandCenter.background": scheme.surfaceContainer,
    "commandCenter.activeBackground": scheme.primary,
    "commandCenter.border": scheme.outline,
    "commandCenter.inactiveForeground": scheme.onSurfaceVariant,
    "commandCenter.inactiveBorder": scheme.outline,
    "commandCenter.activeBorder": scheme.primary,
    "commandCenter.debuggingBackground": `${scheme.errorContainer}66`,
  };
}