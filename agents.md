## Agents Documentation

This project is a personal site built with [Eleventy](https://www.11ty.dev/) (11ty), using Sass for CSS preprocessing and PostCSS for post-processing. Below are the key components and build processes involved:

### Build Tools & Scripts
- **Sass Compilation**: Transpiles SCSS to CSS using `sass` command.
- **PostCSS Processing**: Uses `postcss-cli` with Autoprefixer for browser compatibility.
- **Eleventy**: Static site generator that processes Nunjucks templates and outputs to `_site/`.

### Development Workflow
1. **Start Dev Server**: `npm start` runs Eleventy's dev server and watches Sass files.
2. **Build Process**: `npm run build` compiles CSS and generates static site files.

### File Structure
- `scss/`: Source SCSS files.
- `css/`: Compiled CSS outputs.
- `_includes/`: Nunjucks partials for Eleventy templates.
- `js/`: Client-side scripts.

### Customization
To add new agents or modify existing ones, update the `package.json` scripts or Eleventy configuration in `eleventy.config.js`.

**Note**: This documentation assumes no explicit 'agent' configurations beyond the static site generation tools listed above.