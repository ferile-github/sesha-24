const { pxToRem } = require('@captaincss/captaincss/helpers');

let base = 16;

/*
Fluid type generated with this tool :
@link https://utopia.fyi/type/calculator?c=375,36,1.25,1280,70,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
*/

exports.fontSize = {
	'sm': pxToRem(14, base),
	'md': pxToRem(15, base),
	'base': `${base}Px`,
  'page-title' : 'clamp(2.5rem, 0.6796rem + 7.767vw, 10rem)', // 40 -> 160
  'h1' : 'clamp(2.25rem, 1.7342rem + 2.2006vw, 4.375rem)', // 36 -> 70
  'h2' : 'clamp(1.75rem, 1.4163rem + 1.4239vw, 3.125rem)', // 28 -> 50
  'h3' : 'clamp(1.25rem, 1.0376rem + 0.9061vw, 2.125rem)', // 20 -> 34
  'h4' : 'clamp(1.25rem, 1.1464rem + 0.442vw, 1.5rem)', // 20 - 24
  'h5' : pxToRem(20, base),
  'h6' : pxToRem(20, base),
};

exports.fontWeight = {
  light: '400',
  normal: '400',
  medium: '400',
  semibold: '500',
  bold: '500',
  black: '500',
};

exports.lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};
