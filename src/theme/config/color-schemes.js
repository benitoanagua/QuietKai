// QuietKai Manual Color Schemes - Using Material Design 3 token structure
// QuietKai Light - Based on exact Quiet Light palette
export const quietKaiLight = {
  // Core Material Design 3 tokens
  primary: '#0551A5',        // Accent 1 (blue)
  onPrimary: '#FFFFFF',
  primaryContainer: '#D6E3FF',
  onPrimaryContainer: '#00315B',
  
  secondary: '#7A3E9D',       // Accent 2 (purple)
  onSecondary: '#FFFFFF',
  secondaryContainer: '#F0D6FF',
  onSecondaryContainer: '#4A1A6C',
  
  tertiary: '#0F7C10',       // Accent 3 (green)
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#D5F7D6',
  onTertiaryContainer: '#0A2F0B',
  
  error: '#B3655E',           // Error color
  onError: '#FFFFFF',
  errorContainer: '#FFEAEA',
  onErrorContainer: '#410002',
  
  background: '#F5F5F5',      // Editor background
  onBackground: '#333333',     // Text normal
  
  surface: '#F3F3F3',        // Panel/background surfaces
  onSurface: '#333333',
  surfaceDim: '#E9E6ED',
  surfaceBright: '#FBF8FA',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F5F5F5',
  surfaceContainer: '#F3F3F3',
  surfaceContainerHigh: '#E9E6ED',
  surfaceContainerHighest: '#E4EAED',
  
  surfaceVariant: '#E9E6ED',
  onSurfaceVariant: '#777777',
  
  outline: '#D1D5DA',
  outlineVariant: '#E4EAED',
  
  shadow: '#000000',
  scrim: '#000000',
  
  inverseSurface: '#2C2C2C',
  inverseOnSurface: '#FFFFFF',
  inversePrimary: '#0551A5'
};

// QuietKai Dark - Based on exact Monokai palette
export const quietKaiDark = {
  // Core Material Design 3 tokens
  primary: '#A6E22E',        // Green (accent)
  onPrimary: '#272822',
  primaryContainer: '#3D4A2A',
  onPrimaryContainer: '#C7F1D4',
  
  secondary: '#66D9EF',       // Cyan (functions)
  onSecondary: '#272822',
  secondaryContainer: '#2E4A4A',
  onSecondaryContainer: '#B3E5FC',
  
  tertiary: '#AE81FF',       // Purple (numbers)
  onTertiary: '#272822',
  tertiaryContainer: '#4B3B5F',
  onTertiaryContainer: '#E6D5FF',
  
  error: '#F92672',         // Red/pink (keywords)
  onError: '#272822',
  errorContainer: '#5A1A1A',
  onErrorContainer: '#FFB3B3',
  
  background: '#272822',      // Editor background
  onBackground: '#F8F8F2',     // Text normal
  
  surface: '#34352F',        // Panel/background surfaces
  onSurface: '#F8F8F2',
  surfaceDim: '#1E1F1C',
  surfaceBright: '#49483E',
  surfaceContainerLowest: '#1E1F1C',
  surfaceContainerLow: '#272822',
  surfaceContainer: '#34352F',
  surfaceContainerHigh: '#49483E',
  surfaceContainerHighest: '#5C5C4E',
  
  surfaceVariant: '#49483E',
  onSurfaceVariant: '#CCCCC7',
  
  outline: '#75715E',
  outlineVariant: '#49483E',
  
  shadow: '#000000',
  scrim: '#000000',
  
  inverseSurface: '#F8F8F2',
  inverseOnSurface: '#272822',
  inversePrimary: '#A6E22E'
};

// Terminal colors using exact specified palettes
export const terminalColors = {
  'quiet-kai-light': {
    normal: {
      black: '#000000',      // Black
      red: '#AA3731',       // Red
      green: '#0F7C10',     // Green
      yellow: '#949800',    // Yellow
      blue: '#0551A5',      // Blue
      magenta: '#BC06BC',   // Magenta
      cyan: '#0798BC',     // Cyan
      white: '#555555'      // White
    },
    bright: {
      black: '#555555',      // Bright Black
      red: '#CD3131',       // Bright Red
      green: '#12CE14',     // Bright Green
      yellow: '#B5BA01',    // Bright Yellow
      blue: '#4B69C6',      // Bright Blue
      magenta: '#D94CD9',   // Bright Magenta
      cyan: '#7AB9CC',     // Bright Cyan
      white: '#A5A5A5'      // Bright White
    },
    dim: {
      black: '#000000',      // Dim Black
      red: '#AA3731',       // Dim Red
      green: '#0F7C10',     // Dim Green
      yellow: '#949800',    // Dim Yellow
      blue: '#0551A5',      // Dim Blue
      magenta: '#BC06BC',   // Dim Magenta
      cyan: '#0798BC',     // Dim Cyan
      white: '#555555'      // Dim White
    }
  },
  'quiet-kai-dark': {
    normal: {
      black: '#272822',      // Black
      red: '#F92672',       // Red
      green: '#A6E22E',     // Green
      yellow: '#E6DB74',    // Yellow
      blue: '#66D9EF',      // Blue
      magenta: '#AE81FF',   // Magenta
      cyan: '#66D9EF',      // Cyan
      white: '#F8F8F2'      // White
    },
    bright: {
      black: '#555555',      // Bright Black
      red: '#F92672',       // Bright Red
      green: '#A6E22E',     // Bright Green
      yellow: '#E6DB74',    // Bright Yellow
      blue: '#66D9EF',      // Bright Blue
      magenta: '#AE81FF',   // Bright Magenta
      cyan: '#66D9EF',      // Bright Cyan
      white: '#FFFFFF'       // Bright White
    },
    dim: {
      black: '#272822',      // Dim Black
      red: '#F92672',       // Dim Red
      green: '#A6E22E',     // Dim Green
      yellow: '#E6DB74',    // Dim Yellow
      blue: '#66D9EF',      // Dim Blue
      magenta: '#AE81FF',   // Dim Magenta
      cyan: '#66D9EF',      // Dim Cyan
      white: '#F8F8F2'      // Dim White
    }
  }
};

export const themeSchemes = {
  'quiet-kai-light': quietKaiLight,
  'quiet-kai-dark': quietKaiDark
};