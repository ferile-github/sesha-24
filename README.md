# Sesha - WordPress Starter Theme
A WordPress starter theme, using [Timber](https://upstatement.com/timber/), [Tailwind](https://tailwindcss.com/), and [Webpack](https://webpack.js.org/).

## Getting started
1. Make sure you have [Node.js](https://nodejs.org/en) installed. [NVM](https://github.com/nvm-sh/nvm) is a great resource to manage different versions of Node.js servers
2. Make sure you have composer installed, follow the instructions here : [Composer Installation](https://getcomposer.org/doc/00-intro.md). I would recommend [you install globally](https://getcomposer.org/doc/00-intro.md#globally)
3. Install all dependancies with `yarn install` and then `composer install`
4. Update your environment file: Create a `.env` file in the root of your theme, and add the following :


### `.env`
``` apache
WP_SITE = 'http://your-website-url.local'
PORT = 666
```

- These settings are for the Browsersync plugin for the build, so your browser refreshes automagically when you update code. Update `WP_SITE` with the URL of your website on your local machine, and anything you like for `PORT`, or just use 666, 3000, or whatever. This will open `http://localhost:xxxx` in your browser when you run a dev build.
- If you have multiple sites running, use a different port for each so they can run together at the same time.
- To kick off the build, run `yarn dev`. If everything is installed correctly, you should now be building/compiling assets as you code!
- If you have other devices on the same network, you can share your development URL and live update as you work. Browsersync will give you these URL's when you spin up a build. This is useful for testing on mobile devices, or other people's machines on the network.

### For example:
``` apache
Local: http://localhost:666
External: http://172.20.0.148:666
```





## Twig and Timber
Stem uses [Timber](https://timber.github.io/docs/v2/) and [Twig](https://twig.symfony.com/doc/) for all page templates. Twig is a flexible, fast, and secure template engine for PHP, and Timber extend Twig, which helps you create fully-customized WordPress themes faster with more sustainable code.

The idea behind using these technologies is to seperate concerns in your WordPress page templates, splitting logic from presentation.

Basically, your existing Wordpress `PHP` page templates collect all the data you want to present on your `TWIG` templates. With Timber, you write your HTML with the Twig Template Engine. This cleans up your theme code. Your PHP file can focus on providing the data or logic and your Twig files can focus 100% on the HTML and display.

### For example:

#### `page-template.php`
``` php
$context = Timber::context();
$timber_post = Timber::get_post();
$context['post'] = $timber_post;
Timber::render( array( 'page-template.twig' ), $context );
```

#### `page-template.twig`
``` php
{% extends "base.twig" %}
{% block content %}
	{% include "general/page-title.twig" with {'title' : post.title} %}
	{{post.content}}
{% endblock %}
```

Take a read through the documentation for both Twig and Timber to get a better idea of how it all works. Stem comes equipped with various starter templates to get you going.

Timber works really well with ACF, [take a read through the docs](https://timber.github.io/docs/v2/integrations/advanced-custom-fields/) for a better understanding.






## Tailwind CSS
Stem makes extensive use of Tailwind for all of your CSS needs. `tailwind.config.js` is your first port of call to configure the site theme, where you can change the site colors, typography, spacings and more.

There are several Tailwind config files in the `./tailwind` folder which give you some defaults to start with and then customise.

## `theme.json`
WordPress 5.8 comes with a new mechanism to configure the editor that enables a finer-grained control and introduces the first step in managing styles for future WordPress releases: the `theme.json` file.

`theme.json` is a foundational piece of block theming. While it is not a strictly required file, you will need to work with it for nearly any theme project. It is useful for everything from configuring colors to defining default typography settings to applying front-end styles to your theme.

Some of the things you can do with `theme.json` include (but are not limited to):

- Enabling block features in the user interface, such as color, typography, and spacing controls.
- Configuring a custom color palette, duotone filters, and background gradients.
- Defining typographical features like font families, bundling web fonts, and more.
- Adding your own CSS custom properties.
- Adjusting the overall design by working within the core styles system.

While you are customising your Tailwind theme, you should also update the `theme.json` file with all typography and color settings. In the same way the Tailwind config files are setup, there are some defaults here in this file for you to customise.






## Advanced Custom Fields Pro (ACF)
Stem uses the ACF Pro plugin extensively to customise the dashboard editor. You can add an array of different fields for any circumstance that your content demands. You must have the ACF pro plugin installed alongside this theme for it to work.

For a full breakdown of fields that you can use, [review this documentation](https://).







## Blocks
Stem uses Gutenberg blocks extensively, all website content is built using blocks. Stem comes with several default blocks that you can use to customise and extend as you see fit. Most blocks use ACF fields to customise the editor experience, and all blocks use Twig for the view template.

To create a new block, you can make a copy of the `blocks/example` folder and rename all the files/folders with the name of your new block.

### For Example:
```
├── my-block
│   ├── block-my-block.asset.php [needed to enqueue the JS file for this block]
│   ├── block-my-block.css [Your styles for this block, use sparingly as we have Tailwind]
│   ├── block-my-block.js [Any JavaScript needed for the block ]
│   ├── block-my-block.php [Base PHP file to gather all custom fields and content]
│   ├── block-my-block.twig [Twig template file to display your custom fields and content]
│   └── block.json [Block configuration]
│
```

You will then need to update your block.json file with your new filenames.
``` json
{
	"title": "My New Block",
	"description": "My New Block",
	"name": "acf/my-block",
	"viewScript": [ "file:./block-my-block.js", "block-my-block-script" ],
	"style": [ "file:./block-my-block.css", "block-my-block" ],
	...
	"acf": {
		"mode": "edit",
		"renderTemplate": "block-my-block.php"
	},
	...
```

There are also some defaults set for you, which you can update as needed. For a full breakdown of what you can do with `block.json` there [is this resource](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/).




## Font Loading
The theme comes with two methods to load a font for both the front end of the site and the dashboard admin. Choose one to use, dont use both methods.

You can either load a hosted Webfont using `SeshaGoogleFont()` or a local font using `SeshaLocalFont()`. Both functions will load the font stylesheet so that you can see your fonts in the Dashboard and the Front End.

- `SeshaGoogleFont()` Pass in the font URL as per the example below.
- `SeshaLocalFont()` Edit the `src/fonts.css` file and add your `@font-face` declarations in here.

### `functions.php`
```php
new SeshaGoogleFont('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500&display=swap');
// OR
new SeshaLocalFont();
```

### `fonts.css`
```css
@font-face {
	font-family: 'Font Name';
	src: url('fonts/font-name.woff2') format('woff2'),
		url('fonts/font-name.woff') format('woff');
	font-weight: 400;
	font-style: normal;
}
```






## Webpack Configuration files
There are three Webpack config files you can use :
- `webpack.config.common.js` : Common to production and development. Add most of your tasks to this file
- `webpack.config.dev.js` : For Development. Kicks off a watch so you can can and compile on the fly, also adds sourcemaps
- `webpack.config.prod.js`: For Production. Runs once, and minifies all assets, strips out comments, etc

## Included Post CSS plugins
These are the included POST CSS plugins you use in the theme.

### [tailwindcss](https://tailwindcss.com/)
Tailwind Utility CSS classes. Used extensively throughout the theme.

### [postcss-mixins](https://www.npmjs.com/package/postcss-mixins)
Include Mixins in your CSS

### [postcss-nested](https://www.npmjs.com/package/postcss-nested) and [tailwindcss/nesting](https://www.npmjs.com/package/@tailwindcss/nesting)
Ability to nest selectors

### [postcss-import](https://www.npmjs.com/package/postcss-import?activeTab=dependents)
Split up your CSS code with `@import` stylesheets

### [autoprefixer](https://github.com/postcss/autoprefixer)
Auto prefix new CSS rules

### [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
Automatically generate REM units from PX units in your CSS






## Post CSS configuration in Webpack
If you need to add a Post CSS plugin to the build, open `webpack.config.common.js` and add your plugin to `postcssOptions`.

For example, add your plugin to the list below:

``` js
postcssOptions: {
	plugins: [
		require('your-post-css-plugin-example'),
		...
	],
},

```
