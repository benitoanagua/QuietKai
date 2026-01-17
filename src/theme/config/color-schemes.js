// Monolumé Color Schemes - Material Design 3 tokens
// Light: Quiet Light essence with Brackets Light Pro accents
// Dark: Monokai vibrancy with Kanagawa harmony

export const monolumeLight = {
  primary: "#7A3E9D",
  onPrimary: "#FEFEFE",
  primaryContainer: "#F3E5FF",
  onPrimaryContainer: "#2D0051",

  secondary: "#4B69C6",
  onSecondary: "#FEFEFE",
  secondaryContainer: "#DCE7FF",
  onSecondaryContainer: "#001D36",

  tertiary: "#448C27",
  onTertiary: "#FEFEFE",
  tertiaryContainer: "#D5F7D6",
  onTertiaryContainer: "#0A2F0B",

  error: "#AA3731",
  onError: "#FEFEFE",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",

  background: "#F5F5F5",
  onBackground: "#1C1B1F",

  surface: "#F3F3F3",
  onSurface: "#1C1B1F",
  surfaceDim: "#EBEDEF",
  surfaceBright: "#FCFCFC",
  surfaceContainerLowest: "#FEFEFE",
  surfaceContainerLow: "#FAFAFA",
  surfaceContainer: "#F5F5F5",
  surfaceContainerHigh: "#F0F0F0",
  surfaceContainerHighest: "#E8E8E8",

  surfaceVariant: "#E7E0EC",
  onSurfaceVariant: "#49454F",

  outline: "#79747E",
  outlineVariant: "#CAC4D0",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#313033",
  inverseOnSurface: "#F4EFF4",
  inversePrimary: "#D0BCFF",
};

export const monolumeDark = {
  primary: "#A6E22E",
  onPrimary: "#0F1A06",
  primaryContainer: "#2B3D1A",
  onPrimaryContainer: "#C7F1D4",

  secondary: "#66D9EF",
  onSecondary: "#003544",
  secondaryContainer: "#004D61",
  onSecondaryContainer: "#C7F0FF",

  tertiary: "#AE81FF",
  onTertiary: "#381E72",
  tertiaryContainer: "#4F378B",
  onTertiaryContainer: "#EADDFF",

  error: "#F92672",
  onError: "#370617",
  errorContainer: "#93000A",
  onErrorContainer: "#FFD6E0",

  background: "#272822",
  onBackground: "#F8F8F2",

  surface: "#1F1F28",
  onSurface: "#DCD7BA",
  surfaceDim: "#16161D",
  surfaceBright: "#2A2A37",
  surfaceContainerLowest: "#0D0D12",
  surfaceContainerLow: "#1A1A20",
  surfaceContainer: "#23231F",
  surfaceContainerHigh: "#2F2F2B",
  surfaceContainerHighest: "#3A3A35",

  surfaceVariant: "#49483E",
  onSurfaceVariant: "#C8C093",

  outline: "#938F99",
  outlineVariant: "#49454F",

  shadow: "#000000",
  scrim: "#000000",

  inverseSurface: "#E6E1E5",
  inverseOnSurface: "#313033",
  inversePrimary: "#5A7539",
};

export const terminalColors = {
  "monolume-light": {
    normal: {
      black: "#0A0A0A",
      red: "#D02000",
      green: "#10A567",
      yellow: "#DDB700",
      blue: "#386AC3",
      magenta: "#8431C5",
      cyan: "#0798BC",
      white: "#6D705B",
    },
    bright: {
      black: "#535353",
      red: "#F92672",
      green: "#12CE14",
      yellow: "#E88501",
      blue: "#4B69C6",
      magenta: "#967EFB",
      cyan: "#0BC5E0",
      white: "#A5A5A5",
    },
    dim: {
      black: "#0A0A0A",
      red: "#AA3731",
      green: "#0C8552",
      yellow: "#B39D3C",
      blue: "#2D5A9E",
      magenta: "#6A28A0",
      cyan: "#067A9C",
      white: "#555555",
    },
  },
  "monolume-dark": {
    normal: {
      black: "#272822",
      red: "#F92672",
      green: "#A6E22E",
      yellow: "#E6DB74",
      blue: "#66D9EF",
      magenta: "#AE81FF",
      cyan: "#66D9EF",
      white: "#F8F8F2",
    },
    bright: {
      black: "#75715E",
      red: "#FF3D85",
      green: "#BBFD41",
      yellow: "#FFF08A",
      blue: "#8AEAFF",
      magenta: "#C99DFF",
      cyan: "#8AEAFF",
      white: "#F5F5F0",
    },
    dim: {
      black: "#1E1F1C",
      red: "#D11556",
      green: "#8BC123",
      yellow: "#C9BC5D",
      blue: "#4FB5CA",
      magenta: "#9368D9",
      cyan: "#4FB5CA",
      white: "#CCCCC7",
    },
  },
};

export const themeSchemes = {
  "monolume-light": monolumeLight,
  "monolume-dark": monolumeDark,
};
