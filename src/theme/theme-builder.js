import { writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Import all color modules
import getAdditionalElements from "./colors/additional-elements.js";
import getCommunicationElements from "./colors/communication-elements.js";
import getControlElements from "./colors/control-elements.js";
import getEditorColors from "./colors/editor-colors.js";
import getEditorGroupsTabs from "./colors/editor-groups-tabs.js";
import getEditorWidgetColors from "./colors/editor-widget-colors.js";
import getExtensionsAndQuickPickers from "./colors/extensions-and-quick-pickers.js";
import getGeneralColors from "./colors/general-colors.js";
import getKeybindingsAndShortcuts from "./colors/keybindings-and-shortcuts.js";
import getListsTreesSidebars from "./colors/lists-trees-sidebars.js";
import getMenusAndCommandCenter from "./colors/menus-and-command-center.js";
import getNotificationsAndBanners from "./colors/notifications-and-banners.js";
import getPanelsStatusBar from "./colors/panels-status-bar.js";
import getSettingsAndBreadcrumbs from "./colors/settings-and-breadcrumbs.js";
import getSnippetsAndSymbols from "./colors/snippets-and-symbols.js";
import getTerminalAndDebugging from "./colors/terminal-and-debugging.js";
import getTestingAndWelcomePage from "./colors/testing-and-welcome-page.js";
import getVersionControl from "./colors/version-control.js";

// Import all scope modules
import getCommentSettings from "./scopes/comment.js";
import getConstantSettings from "./scopes/constant.js";
import getEntitySettings from "./scopes/entity.js";
import getKeywordSettings from "./scopes/keywords.js";
import getMarkupSettings from "./scopes/markup.js";
import getMetaSettings from "./scopes/meta.js";
import getOperatorSettings from "./scopes/operators.js";
import getStorageSettings from "./scopes/storage.js";
import getStringSettings from "./scopes/string.js";
import getSupportSettings from "./scopes/support.js";
import getVariableSettings from "./scopes/variable.js";
import getVariousSettings from "./scopes/various.js";

// Import theme configuration
import { themeSchemes, terminalColors } from "./config/color-schemes.js";
import { themeVariants } from "./config/theme-variants.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

class ThemeBuilder {
  static buildTheme(scheme, term, variant) {
    const theme = {
      name: variant.name,
      type: variant.uiTheme,
      $schema: "vscode://schemas/color-theme",
      colors: {
        ...getAdditionalElements(scheme, term),
        ...getCommunicationElements(scheme, term),
        ...getControlElements(scheme, term),
        ...getEditorColors(scheme, term),
        ...getEditorGroupsTabs(scheme),
        ...getEditorWidgetColors(scheme, term),
        ...getExtensionsAndQuickPickers(scheme),
        ...getGeneralColors(scheme),
        ...getKeybindingsAndShortcuts(scheme),
        ...getListsTreesSidebars(scheme, term),
        ...getMenusAndCommandCenter(scheme, term),
        ...getNotificationsAndBanners(scheme, term),
        ...getPanelsStatusBar(scheme, term),
        ...getSettingsAndBreadcrumbs(scheme),
        ...getSnippetsAndSymbols(scheme),
        ...getTerminalAndDebugging(scheme, term),
        ...getTestingAndWelcomePage(scheme, term),
        ...getVersionControl(scheme, term),
      },
      semanticHighlighting: true,
      tokenColors: [
        getCommentSettings(scheme, term),
        getConstantSettings(scheme, term),
        ...getEntitySettings(scheme, term),
        getKeywordSettings(scheme, term),
        ...getMarkupSettings(scheme, term),
        getMetaSettings(scheme, term),
        getStorageSettings(scheme, term),
        getOperatorSettings(scheme, term),
        getStringSettings(scheme, term),
        ...getSupportSettings(scheme, term),
        ...getVariableSettings(scheme, term),
        ...getVariousSettings(scheme, term),
      ],
    };

    return theme;
  }

  static saveTheme(theme, filename) {
    const themesDir = resolve(__dirname, "../../themes");

    if (!existsSync(themesDir)) {
      mkdirSync(themesDir, { recursive: true });
    }

    const themePath = resolve(themesDir, `${filename}.json`);
    writeFileSync(themePath, JSON.stringify(theme, null, 2));

    return themePath;
  }

  static generateAllThemes() {
    const generated = [];

    for (const variant of themeVariants) {
      const scheme = themeSchemes[variant.filename];
      const term = terminalColors[variant.filename];

      if (!scheme || !term) {
        throw new Error(`Scheme or terminal colors not found for ${variant.filename}`);
      }

      const theme = this.buildTheme(scheme, term, variant);
      const path = this.saveTheme(theme, variant.filename);
      generated.push({ variant: variant.name, path });
    }

    return generated;
  }
}

export default ThemeBuilder;