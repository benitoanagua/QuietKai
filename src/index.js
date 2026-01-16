import ThemeBuilder from './theme/theme-builder.js';

console.log("🎨 Generating QuietKai VSCode themes with Material Design 3 tokens...");

try {
  console.log("Starting theme generation...");
  const generatedThemes = ThemeBuilder.generateAllThemes();
  
  console.log("\n✅ QuietKai themes generated successfully:");
  generatedThemes.forEach(({ variant, path }) => {
    console.log(`   • ${variant} → ${path}`);
  });
} catch (error) {
  console.error("❌ Error generating QuietKai themes:");
  console.error(`   Message: ${error.message}`);
  console.error(`   Stack: ${error.stack}`);
  process.exit(1);
}