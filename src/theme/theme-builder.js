import { writeFileSync } from 'fs';
import { join } from 'path';
import { themeSchemes, terminalColors } from './config/color-schemes.js';
import { themeVariants } from './config/theme-variants.js';

class ThemeBuilder {
  static generateVSCodeTheme(themeName) {
    const scheme = themeSchemes[themeName];
    const term = terminalColors[themeName];
    const variant = themeVariants.find(v => v.filename === themeName);
    
    if (!scheme || !term || !variant) {
      throw new Error(`Theme ${themeName} not found`);
    }
    
    // Core editor colors using only the specified MD3 tokens
    const colors = {
      // Basic editor colors
      "editor.background": scheme.background,
      "editor.foreground": scheme.onBackground,
      "editor.lineHighlightBackground": scheme.surfaceContainer,
      "editor.selectionBackground": `${scheme.primaryContainer}4D`,
      "editor.inactiveSelectionBackground": `${scheme.primaryContainer}33`,
      "editorCursor.foreground": scheme.primary,
      "editorWhitespace.foreground": `${scheme.onSurfaceVariant}40`,
      "editorLineNumber.foreground": scheme.onSurfaceVariant,
      "editorLineNumber.activeForeground": scheme.primary,
      
      // UI Colors using MD3 tokens
      "activityBar.background": scheme.surfaceContainerLow,
      "activityBar.foreground": scheme.onSurface,
      "activityBar.inactiveForeground": scheme.onSurfaceVariant,
      "activityBarBadge.background": scheme.secondary,
      "activityBarBadge.foreground": scheme.onSecondary,
      
      "sideBar.background": scheme.surfaceContainerLow,
      "sideBar.foreground": scheme.onSurface,
      "sideBarSectionHeader.background": scheme.surfaceContainer,
      "sideBarSectionHeader.foreground": scheme.onSurfaceVariant,
      "sideBarTitle.foreground": scheme.onSurface,
      
      "tab.activeBackground": scheme.surface,
      "tab.inactiveBackground": scheme.surfaceContainerLow,
      "tab.activeForeground": scheme.onSurface,
      "tab.inactiveForeground": scheme.onSurfaceVariant,
      "tab.activeBorder": scheme.primary,
      "tab.activeBorderTop": scheme.primary,
      "tab.border": scheme.outlineVariant,
      
      "titleBar.activeBackground": scheme.surface,
      "titleBar.activeForeground": scheme.onSurface,
      "titleBar.inactiveBackground": scheme.surfaceContainerLow,
      "titleBar.inactiveForeground": scheme.onSurfaceVariant,
      
      "statusBar.background": scheme.surfaceContainerLow,
      "statusBar.foreground": scheme.onSurface,
      "statusBar.border": scheme.outlineVariant,
      "statusBar.noFolderBackground": scheme.surfaceContainerLow,
      "statusBar.noFolderForeground": scheme.onSurfaceVariant,
      "statusBarItem.hoverBackground": `${scheme.primary}1A`,
      "statusBarItem.prominentBackground": scheme.primaryContainer,
      "statusBarItem.prominentForeground": scheme.onPrimaryContainer,
      
      "panel.background": scheme.surface,
      "panel.border": scheme.outlineVariant,
      "panelTitle.activeBorder": scheme.primary,
      "panelTitle.activeForeground": scheme.onSurface,
      "panelTitle.inactiveForeground": scheme.onSurfaceVariant,
      
      "button.background": scheme.primary,
      "button.foreground": scheme.onPrimary,
      "button.hoverBackground": `${scheme.onPrimary}0A`,
      "button.secondaryBackground": scheme.secondaryContainer,
      "button.secondaryForeground": scheme.onSecondaryContainer,
      
      "input.background": scheme.surfaceContainerLow,
      "input.border": scheme.outlineVariant,
      "input.foreground": scheme.onSurface,
      "input.placeholderForeground": scheme.onSurfaceVariant,
      
      "dropdown.background": scheme.surface,
      "dropdown.border": scheme.outlineVariant,
      "dropdown.foreground": scheme.onSurface,
      
      "list.activeSelectionBackground": scheme.primaryContainer,
      "list.activeSelectionForeground": scheme.onPrimaryContainer,
      "list.inactiveSelectionBackground": `${scheme.primaryContainer}33`,
      "list.inactiveSelectionForeground": scheme.onSurfaceVariant,
      "list.hoverBackground": scheme.surfaceContainer,
      "list.hoverForeground": scheme.onSurface,
      "list.focusBackground": `${scheme.primary}1A`,
      "tree.indentGuidesStroke": scheme.outlineVariant,
      
      "badge.background": scheme.primary,
      "badge.foreground": scheme.onPrimary,
      "progressBar.background": scheme.primary,
      
      "widget.background": scheme.surface,
      "widget.foreground": scheme.onSurface,
      "widget.border": scheme.outlineVariant,
      "selection.background": `${scheme.primaryContainer}4D`,
      "focusBorder": scheme.primary,
      "foreground": scheme.onBackground,
      "disabledForeground": scheme.onSurfaceVariant,
      
      "minimap.background": scheme.surfaceContainerLow,
      "minimap.selectionHighlight": scheme.primary,
      "minimap.errorHighlight": scheme.error,
      "minimap.warningHighlight": term.normal.yellow,
      
      "scrollbar.shadow": scheme.outlineVariant,
      "scrollbarSlider.background": `${scheme.onSurface}1A`,
      "scrollbarSlider.hoverBackground": `${scheme.onSurface}33`,
      "scrollbarSlider.activeBackground": `${scheme.onSurface}4D`,
      
      "gitDecoration.modifiedResourceForeground": scheme.secondary,
      "gitDecoration.deletedResourceForeground": scheme.error,
      "gitDecoration.untrackedResourceForeground": scheme.tertiary,
      "gitDecoration.ignoredResourceForeground": scheme.outlineVariant,
      "gitDecoration.conflictingResourceForeground": scheme.error,
      
      "editorError.foreground": scheme.error,
      "editorError.border": scheme.error,
      "editorError.background": `${scheme.errorContainer}33`,
      "editorWarning.foreground": term.normal.yellow,
      "editorWarning.border": term.normal.yellow,
      "editorWarning.background": `${term.normal.yellow}33`,
      "editorInfo.foreground": term.normal.blue,
      "editorInfo.background": `${term.normal.blue}33`,
      "editorInfo.border": term.normal.blue,
      
      // Terminal colors using the exact structure
      "terminal.background": scheme.background,
      "terminal.foreground": scheme.onBackground,
      "terminal.ansiBlack": term.normal.black,
      "terminal.ansiRed": term.normal.red,
      "terminal.ansiGreen": term.normal.green,
      "terminal.ansiYellow": term.normal.yellow,
      "terminal.ansiBlue": term.normal.blue,
      "terminal.ansiMagenta": term.normal.magenta,
      "terminal.ansiCyan": term.normal.cyan,
      "terminal.ansiWhite": term.normal.white,
      "terminal.ansiBrightBlack": term.bright.black,
      "terminal.ansiBrightRed": term.bright.red,
      "terminal.ansiBrightGreen": term.bright.green,
      "terminal.ansiBrightYellow": term.bright.yellow,
      "terminal.ansiBrightBlue": term.bright.blue,
      "terminal.ansiBrightMagenta": term.bright.magenta,
      "terminal.ansiBrightCyan": term.bright.cyan,
      "terminal.ansiBrightWhite": term.bright.white,
      "terminal.selectionBackground": `${scheme.primaryContainer}4D`
    };
    
    // Manual syntax highlighting using MD3 tokens instead of syntax object
    const tokenColors = [
      {
        name: "Comments",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: scheme.onSurfaceVariant,
          fontStyle: "italic"
        }
      },
      {
        name: "Variables",
        scope: ["variable", "string constant.other.placeholder"],
        settings: {
          foreground: scheme.onBackground
        }
      },
      {
        name: "Colors",
        scope: ["constant.other.color"],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "Invalid",
        scope: ["invalid", "invalid.illegal"],
        settings: {
          foreground: scheme.error
        }
      },
      {
        name: "Keyword, Storage",
        scope: [
          "keyword",
          "storage.type",
          "storage.modifier",
          "control"
        ],
        settings: {
          foreground: scheme.error
        }
      },
      {
        name: "Operator, Misc",
        scope: [
          "keyword.control",
          "keyword.operator",
          "keyword.other",
          "punctuation.operator",
          "punctuation.separator",
          "punctuation.accessor"
        ],
        settings: {
          foreground: scheme.error
        }
      },
      {
        name: "Tag",
        scope: [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "Function, Special Method",
        scope: [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method"
        ],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "Number, Constant, Function Argument, Tag Attribute, Embedded",
        scope: [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "variable.parameter",
          "keyword.other.unit",
          "keyword.other"
        ],
        settings: {
          foreground: scheme.primary
        }
      },
      {
        name: "String, Symbols, Inherited Class, Markup Heading",
        scope: [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "Class, Support",
        scope: [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "Entity Types",
        scope: ["entity.name.type"],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "CSS Class and Support",
        scope: [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.less support.type.property-name",
          "source.scss support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name"
        ],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "Sub-methods",
        scope: [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js"
        ],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "Language methods",
        scope: ["variable.language"],
        settings: {
          fontStyle: "italic",
          foreground: scheme.secondary
        }
      },
      {
        name: "entity.name.method.js",
        scope: ["entity.name.method.js"],
        settings: {
          fontStyle: "italic",
          foreground: scheme.secondary
        }
      },
      {
        name: "Attributes",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "HTML Attributes",
        scope: [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name"
        ],
        settings: {
          fontStyle: "italic",
          foreground: scheme.tertiary
        }
      },
      {
        name: "CSS Classes",
        scope: ["entity.other.attribute-name.class"],
        settings: {
          foreground: scheme.secondary
        }
      },
      {
        name: "Inserted",
        scope: ["markup.inserted"],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "Deleted",
        scope: ["markup.deleted"],
        settings: {
          foreground: scheme.error
        }
      },
      {
        name: "Changed",
        scope: ["markup.changed"],
        settings: {
          foreground: scheme.error
        }
      },
      {
        name: "Regular Expressions",
        scope: ["string.regexp"],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "Escape Characters",
        scope: ["constant.character.escape"],
        settings: {
          foreground: scheme.tertiary
        }
      },
      {
        name: "URL",
        scope: ["*url*", "*link*", "*uri*"],
        settings: {
          fontStyle: "underline"
        }
      }
    ];
    
    return {
      name: variant.name,
      type: variant.uiTheme,
      colors: colors,
      tokenColors: tokenColors
    };
  }
  
  static generateAllThemes() {
    const themes = [];
    
    // Generate QuietKai Light
    const lightTheme = this.generateVSCodeTheme('quiet-kai-light');
    writeFileSync(
      join(process.cwd(), 'themes', 'quiet-kai-light.json'),
      JSON.stringify(lightTheme, null, 2)
    );
    themes.push({ variant: 'quiet-kai-light', path: 'themes/quiet-kai-light.json' });
    
    // Generate QuietKai Dark
    const darkTheme = this.generateVSCodeTheme('quiet-kai-dark');
    writeFileSync(
      join(process.cwd(), 'themes', 'quiet-kai-dark.json'),
      JSON.stringify(darkTheme, null, 2)
    );
    themes.push({ variant: 'quiet-kai-dark', path: 'themes/quiet-kai-dark.json' });
    
    return themes;
  }
}

export { ThemeBuilder };