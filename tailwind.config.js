const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["*.html", "./src/js/*.js"],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function({ addUtilities, addComponents, e, prefix, config }) {}),
    ]
}