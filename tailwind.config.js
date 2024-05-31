const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('./tailwind/colors.js');
const { screens } = require('./tailwind/screens.js');
const { zIndex } = require('./tailwind/zindex.js');
const { safelist } = require('./tailwind/safelist.js');
const { spacing } = require('./tailwind/spacing.js');
const { transitionTimingFunction } = require('./tailwind/animation.js');
const { fontSize, fontWeight, lineHeight, letterSpacing } = require('./tailwind/typography.js');
const { pxToRem } = require('@captaincss/captaincss/helpers');

module.exports = {
	content: [
		// "./**/*.php", // If you uncomment the world will end. Also Webpack has a tizzy and endlessly builds on dev
		"./templates/**/*.twig",
		"./blocks/**/*.twig",
	],
	safelist,
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Suisse"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Suisse Slab"', ...defaultTheme.fontFamily.serif],
				'heading': ['"Suisse"'],
				'button': ['"Suisse"'],
			},
			fontSize,
			spacing,
			zIndex,
			transitionTimingFunction,
		},
		screens,
		colors,
		fontWeight,
		lineHeight,
		letterSpacing,
		container: {
			center: true,
			padding: {
				DEFAULT: pxToRem(10),
				sm: pxToRem(16),
				lg: pxToRem(24),
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
	],
}
