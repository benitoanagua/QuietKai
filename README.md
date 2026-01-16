# Monolumé VSCode Theme

A modern Visual Studio Code theme inspired by Material Design 3 with manual color token assignments.

## Themes

- **Monolumé Light** - Inspired by Quiet Light theme with Material Design 3 color tokens
- **Monolumé Dark** - Inspired by Monokai theme with Material Design 3 color tokens

## Features

- Material Design 3 color system with manual token assignments
- Carefully crafted syntax highlighting
- Optimized for long coding sessions
- Comprehensive UI element theming
- Built-in terminal color schemes

## Installation

### From VSCode Marketplace

1. Open VSCode
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "Monolumé"
4. Click "Install"

### Manual Installation

1. Download the latest `.vsix` file from [Releases](https://github.com/benitoanagua/Monolume/releases)
2. Open VSCode
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Extensions: Install from VSIX"
5. Select the downloaded file

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/benitoanagua/Monolume.git
cd Monolume

# Install dependencies
npm install

# Build the themes
npm run build
```

### Scripts

- `npm run build` - Generate the theme files
- `npm run dev` - Build and show success message
- `npm run watch` - Watch for changes and rebuild automatically
- `npm run package` - Create VSIX package for distribution
- `npm run publish` - Publish to VSCode Marketplace
- `npm run clean` - Clean generated files

## Color Philosophy

Monolumé uses Material Design 3 color naming conventions but assigns colors manually to create the perfect balance between:

- **Monolumé Light**: Clean, bright, and easy on the eyes - inspired by Quiet Light
- **Monolumé Dark**: Warm, contrasting, and focused - inspired by Monokai

### Material Design 3 Tokens Used

- Primary/OnPrimary/PrimaryContainer/OnPrimaryContainer
- Secondary/OnSecondary/SecondaryContainer/OnSecondaryContainer  
- Tertiary/OnTertiary/TertiaryContainer/OnTertiaryContainer
- Surface/OnSurface/SurfaceVariant/OnSurfaceVariant
- Background/OnBackground
- Error/OnError/ErrorContainer/OnErrorContainer
- Outline/OutlineVariant

## Theme Variants

### Monolumé Light
- **Background**: Clean white (#FFFFFF)
- **Primary**: Deep green (#2E7D32)
- **Syntax**: GitHub-inspired with enhanced readability
- **Perfect for**: Day coding, documentation, presentations

### Monolumé Dark  
- **Background**: Monokai classic (#272822)
- **Primary**: Bright green (#66BB6A)
- **Syntax**: Monokai-inspired with Material Design structure
- **Perfect for**: Night coding, focus sessions, reduced eye strain

## Screenshots

Coming soon...

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run build` to generate themes
5. Test your changes with `npm run dev`
6. Submit a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

- Inspired by [Material Design 3](https://m3.material.io/)
- Quiet Light theme influences
- Monokai theme influences
- Built with ❤️ by [Benito Anagua](https://github.com/benitoanagua)