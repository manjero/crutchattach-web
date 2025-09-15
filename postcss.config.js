import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production'
      ? [purgeCSSPlugin({
          content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.ts',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })]
      : [])
  ]
};