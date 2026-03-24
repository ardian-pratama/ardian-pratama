//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tailwindPreserveWhitespace: true,
  tailwindPreserveDuplicates: true,
  tailwindFunctions: ['clsx'],
  plugins: [
    'prettier-plugin-organize-attributes',
    'prettier-plugin-multiline-arrays',
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
}

export default config
