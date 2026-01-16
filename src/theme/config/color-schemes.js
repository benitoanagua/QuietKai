// QuietKai Manual Color Schemes - Using Material Design 3 token structure
// QuietKai Light - Manual assignment inspired by Quiet Light
export const quietKaiLight = {
  // Core Material Design 3 tokens
  primary: '#2E7D32',
  onPrimary: '#FFFFFF',
  primaryContainer: '#A5D6A7',
  onPrimaryContainer: '#1B5E20',
  
  secondary: '#546E7A',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#B0BEC5',
  onSecondaryContainer: '#263238',
  
  tertiary: '#6D4C41',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#D7CCC8',
  onTertiaryContainer: '#3E2723',
  
  error: '#BA1A1A',
  onError: '#FFFFFF',
  errorContainer: '#FFDAD6',
  onErrorContainer: '#410002',
  
  background: '#FFFFFF',
  onBackground: '#1C1B1F',
  
  surface: '#FAFAFA',
  onSurface: '#1C1B1F',
  surfaceDim: '#DAD5D9',
  surfaceBright: '#FBF8FA',
  surfaceContainerLowest: '#FFFFFF',
  surfaceContainerLow: '#F5F5F5',
  surfaceContainer: '#F3F4F6',
  surfaceContainerHigh: '#E8EAF6',
  surfaceContainerHighest: '#E3F2FD',
  
  surfaceVariant: '#E7E0EC',
  onSurfaceVariant: '#49454F',
  
  outline: '#79747E',
  outlineVariant: '#CAC4D0',
  
  shadow: '#000000',
  scrim: '#000000',
  
  inverseSurface: '#313033',
  inverseOnSurface: '#F3EFF4',
  inversePrimary: '#A5D6A7'
};

// QuietKai Dark - Manual assignment inspired by Monokai
export const quietKaiDark = {
  // Core Material Design 3 tokens
  primary: '#66BB6A',
  onPrimary: '#1B5E20',
  primaryContainer: '#2E7D32',
  onPrimaryContainer: '#C8E6C9',
  
  secondary: '#78909C',
  onSecondary: '#263238',
  secondaryContainer: '#546E7A',
  onSecondaryContainer: '#ECEFF1',
  
  tertiary: '#A1887F',
  onTertiary: '#3E2723',
  tertiaryContainer: '#6D4C41',
  onTertiaryContainer: '#EFEBE9',
  
  error: '#F92672',
  onError: '#1C1B1F',
  errorContainer: '#8B0000',
  onErrorContainer: '#FFDAD6',
  
  background: '#272822',
  onBackground: '#F8F8F2',
  
  surface: '#3E4239',
  onSurface: '#F8F8F2',
  surfaceDim: '#1E1F1C',
  surfaceBright: '#49483E',
  surfaceContainerLowest: '#1E1F1C',
  surfaceContainerLow: '#272822',
  surfaceContainer: '#3E4239',
  surfaceContainerHigh: '#49483E',
  surfaceContainerHighest: '#626652',
  
  surfaceVariant: '#49483E',
  onSurfaceVariant: '#C1C1C1',
  
  outline: '#75715E',
  outlineVariant: '#49483E',
  
  shadow: '#000000',
  scrim: '#000000',
  
  inverseSurface: '#E7E0EC',
  inverseOnSurface: '#313033',
  inversePrimary: '#2E7D32'
};

// Terminal colors using only the specified structure
export const terminalColors = {
  'quiet-kai-light': {
    normal: {
      black: '#24292E',
      red: '#CB2431',
      green: '#22863A',
      yellow: '#F66A0A',
      blue: '#032F62',
      magenta: '#6F42C1',
      cyan: '#005CC5',
      white: '#6A737D'
    },
    bright: {
      black: '#6A737D',
      red: '#CB2431',
      green: '#22863A',
      yellow: '#F66A0A',
      blue: '#005CC5',
      magenta: '#6F42C1',
      cyan: '#005CC5',
      white: '#6A737D'
    },
    dim: {
      black: '#24292E',
      red: '#CB2431',
      green: '#22863A',
      yellow: '#F66A0A',
      blue: '#032F62',
      magenta: '#6F42C1',
      cyan: '#005CC5',
      white: '#6A737D'
    }
  },
  'quiet-kai-dark': {
    normal: {
      black: '#272822',
      red: '#F92672',
      green: '#A6E22E',
      yellow: '#FD971F',
      blue: '#66D9EF',
      magenta: '#F92672',
      cyan: '#66D9EF',
      white: '#F8F8F2'
    },
    bright: {
      black: '#75715E',
      red: '#F92672',
      green: '#A6E22E',
      yellow: '#FD971F',
      blue: '#66D9EF',
      magenta: '#F92672',
      cyan: '#66D9EF',
      white: '#F8F8F2'
    },
    dim: {
      black: '#272822',
      red: '#F92672',
      green: '#A6E22E',
      yellow: '#FD971F',
      blue: '#66D9EF',
      magenta: '#F92672',
      cyan: '#66D9EF',
      white: '#F8F8F2'
    }
  }
};

export const themeSchemes = {
  'quiet-kai-light': quietKaiLight,
  'quiet-kai-dark': quietKaiDark
};