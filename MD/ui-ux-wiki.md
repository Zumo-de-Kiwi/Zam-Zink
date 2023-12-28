# UI/UX Wiki

1. A super amount [collection](https://www.uigoodies.com/) of UI, typo, icon, phot, illus....of webpages for UI/UX designers

## PERFORMANCE

### ANIMATION

1. Animation performance and frame rate [MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Animation_performance_and_frame_rate)

1. from [web.dev](https://web.dev/animations-guide/)

   1. Check if an animation triggers layout:
      An animation that moves an element using something other than transform, is likely to be slow. In the following example, I have achieved the same visual result animating top and left, and using transform.
      Don't use this
      `50% {`
      `top: calc(90vh - 160px);`
      `left: calc(90vw - 200px);}`
      Use this:
      `50% {`
      `transform: translate(calc(90vw - 200px), calc(90vh - 160px)); }`
      Using transform instead of margin eliminates those expensive paints entirely.

   1. Check if an animation triggers paint
      When it comes to painting, some things are more expensive than others. For example, anything that involves a blur (like a shadow, for example) is going to take longer to paint than drawing a red box. In terms of CSS, however, this isn't always obvious: background: red; and box-shadow: 0, 4px, 4px, rgba(0,0,0,0.5); don't necessarily look like they have vastly different performance characteristics, but they do.

## TYPOGRAPHY

### 1. Fonts I may use

1. **Bungee** The hair-outline-heavyfill game

   - You can use the type for the web, using his different family members, but his downside is it hasn't a lower case

   - [Google Fonts](https://fonts.google.com/specimen/Bungee)

   - <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Bungee+Inline&family=Bungee+Outline&family=Bungee+Shade&display=swap" rel="stylesheet"> -->

   - font-family: 'Bungee', cursive; font-family: 'Bungee Hairline', cursive;font-family: 'Bungee Inline', cursive;font-family: 'Bungee Outline', cursive;font-family: 'Bungee Shade', cursive;

   1. Bungee outline: normal mode.

   1. Bungee shade: when hover (it appears a shade in his left-downer side)

   1. Bungee (asecas): Title (is the fill version)

   1. Bungee inline: Like Bungee but without the hair inside (so weird)

   1. Bungee hairline: for complementary, UI or secondary stuff.

1. **BioRhyme** the seif cute normal-megastretched

   - [Google Fonts](https://fonts.google.com/specimen/BioRhyme)

   - <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=BioRhyme+Expanded:wght@300;400;800&family=BioRhyme:wght@300;400;800&display=swap" rel="stylesheet"> -->

   - <!--font-family: 'BioRhyme', serif; font-family: 'BioRhyme Expanded', serif;-->

1. **Palanquin Dark**

   - <!---<link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;600&display=swap" rel="stylesheet">-->
   - <!--font-family: 'Palanquin Dark', sans-serif;-->

1. **Anicons** Animated variable font icons

   1. How to [use](https://typogram.github.io/Anicons/use.html)

1. [Noto Sans Bamum](https://fonts.google.com/noto/specimen/Noto+Sans+Bamum?query=noto+sans+b)

   1. Noto is a global font collection for writing in all modern and **ancient languages**. Noto Sans Bamum is an unmodulated (“sans serif”) design for texts in the African Bamum script. It has multiple weights and 662 glyphs.

1. Cool Heavy Weight fonts

   1. [Mochiy Pop One](https://fonts.google.com/specimen/Mochiy+Pop+One?query=mochiy+pop+one#standard-styles)

      1. tender cute fonts +jp

   1. [Lilita One](https://fonts.google.com/specimen/Lilita+One?query=lil)

   1. [Paytone One](https://fonts.google.com/specimen/Paytone+One?query=payt)

1. [Signika Negative](https://fonts.google.com/specimen/Signika+Negative?query=signi#standard-styles)

   1. Signika is a sans-serif with a gentle character, developed for wayfinding, signage, and other media where clarity of information is required. It has a low contrast and tall x-height to improve readability of texts in small sizes as well as in large distances from the reader.

1. [Shippori Antique B1](https://fonts.google.com/specimen/Shippori+Antique+B1?query=shippo#standard-styles)
   1. little rounded sans serif.

### 1. Variable Fonts

1. Learn

   1. [ABC Dinamo](https://abcdinamo.com/news/using-variable-fonts-on-the-web) tutorial: USING VARIABLE FONTS ON THE WEB

      - WHAT ARE VFs?

      - THE “AXES” OF A VF

      - THE ADVANTAGES OF USING VFs

      - LOADING THE FILE
        `@font-face {`
        `font-family: "Favorit Variable";`
        `src: url("/fonts/ABCFavoritVariable.woff2") format("woff2-variations"),`
        `url("/fonts/ABCFavoritVariable.woff") format("woff-variations");}`

      - STYLING VARIABLE FONTS
        `font-variation-settings: "wght" 550, "ital" 6;`

      - USER INTERACTIONS
        `.my-variable-text {font-variation-settings: "wght" 300, "ital" 0;`
        `transition: font-variation-settings 0.3s ease;}`
        `.my-variable-text:hover {font-variation-settings: "wght" 700, "ital" 12;}`

      - ADJUSTING BASED ON SCREEN PROPERTIES

        1. **adjust the width** to help conserve space when the screen width is small. This is especially useful for headline text, which needs to fill space on desktop screens, while being preserved on mobile devices (to avoid nasty word breaks).
           `font-variation-settings: "wdth" 80;`

        1. **Dark Mode** Using the new CSS media query prefers-color-scheme, you can adjust a VF’s axes depending on the user’s current color “scheme” or “mode.”
           `.my-text { font-variation-settings: "wght" 400;}` - when is normal Black text on white bg

           `@media (prefers-color-scheme: dark) {` - When Dark Mode in enable:
           `.my-text { font-variation-settings: "wght" 300;}` - The Whitew text need to be thinner.

      - SETTING THE AXES WITH JAVASCRIPT

        1. Randomnize Variable Font
           `function randomizeText() {`
           `randomWeight = Math.random() * (200 - 35) + 35;` - for randomnize Weight axe 35~200
           `randomWidth = Math.random() * (200 - 100) + 100;`
           `myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;}`
           `setInterval(randomizeText, 1000);`

        1. Font axes dependent on the user’s **mouse position** on the screen.
           `function updateText(e) {`
           `multiplierWidth = e.offsetX / window.innerWidth;`
           `multiplierHeight = e.offsetY / window.innerHeight;`
           `randomWeight = multiplierWidth * (200 - 35) + 35;`
           `randomWidth = multiplierHeight * (200 - 100) + 100;`
           `myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth; }`
           `window.a

   1. Getting the Most Out of Variable Fonts on Google Fonts [CSS tricks](https://css-tricks.com/getting-the-most-out-of-variable-fonts-on-google-fonts/)

      1. Written by the person who made Recursive

   1. CSS [custom properties trick](https://pixelambacht.nl/2019/fixing-variable-font-inheritance/) for variable fonts

### 1. Ways of use

1. [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

### 1. TRICKS

1. Basic system font stacks

   **Sans-serif**
   font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;

   **Serif**
   font-family: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

   **Mono**
   font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

1. System Font Stack [(CSS TRICKS)](https://css-tricks.com/snippets/css/system-font-stack/)

   **Method 1:** System Fonts at the Element Level
   a. GitHub uses this method on their site, applying **system fonts** on the body element:
   `body {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";}` //{El capitan & later: San FRancisco, Yosemite: Helvetica, Vista: Segui UI, Android 4.0+: Roboto, }

   b. Both Medium and the WordPress admin use a similar approach, with a slight variation, most notably support for Oxygen Sans (created for the GNU+Linux operating system) and Cantarell (created for the GNOME operating system). This snippet also drops support for certain types of emoji and symbols:
   `body {font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;}`

   **Method 2:** System Font Stacks (@font-face)

   [Jonathan Neal](https://github.com/csstools/system-font-css/blob/gh-pages/system-font.css) offers an alternative method where system fonts are declared using @font-face. Example:

   1. 300 font weight:
      `@font-face {`
      `font-family: system-ui;`
      `font-style: normal;`
      `font-weight: 300;`
      `src: local(".SFNS-Light"), local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Segoe UI Light"), local("Ubuntu Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");`
      `}`

   1. 700 font weight:
      `@font-face {`
      `font-family: system-ui;`
      `font-style: normal;`
      `font-weight: 700;`
      `src: local(".SFNS-Bold"), local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");}`
      The benefit here is that you can declare the fonts once and then that becomes the thing you can on the font-family property instead of the long list of fonts each and every time.

1. [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) in CSS

1. [Get Started](https://developers.google.com/fonts/docs/getting_started) with the Google Fonts API
   - **There are** font-diplay, script subset, font effects, optimizing font effects
   - **font effects**: request multiple effects by separating the effect names with a pipe character (|): `https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple|3d-float`. When applying:`<div class="font-effect-shadow-multiple">This is a font effect!<div>`

### 1. System / Web safe Fonts

1. [Apple](https://developer.apple.com/fonts/system-fonts/)

1. [Windows](https://en.wikipedia.org/wiki/List_of_typefaces_included_with_Microsoft_Windows)

1. [Web Safe Fonts](https://blog.hubspot.com/website/web-safe-html-css-fonts)

### 1. Space between lines, words, characters

1. Space between letters: `letter-spacing: 5px;` (can be minus too)

1. Height between lines: `line-height: 0.7;`

1. Word spacing: `word-spacing: -2px;`

1. for the left margin of the first line of the first parapgraph`text-indent: 40px;`

## UNICODE

### Emoji

1. Emoji Cursor - CSS Generator [Tool](https://www.emojicursor.app/)

   - simplyfied version of the code?: `cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦄</text></svg>"), auto`

   - My web version:
     `cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='38' viewport='0 0 100 100' style='fill:black;font-size:23px;'><text y='57%'>👆</text></svg>") 16 0,auto;`
   - My cursors: 👆 👈 🖖 ☝️🤞 ✌️

   - My version with the numbers changed, the original=> `cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='38' viewport='0 0 100 100' style='fill:black;font-size:19px;'><text y='50%'>👆</text></svg>") 16 0,auto;`

1. Mattherayfield [Animating](https://www.matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/) urls with js & emojis

1. Some emojis not displaying correctly in [VSCode macOS](https://github.com/microsoft/vscode/issues/118905)

   - This appears to be something specific to Menlo, which happens to be the default editor font on macOS.

   - I updated this line in my settings.json so that I no longer include Menlo and instead I have Monaco as the first font listed: `"editor.fontFamily": "Monaco, 'Courier New', monospace, 'Apple Color Emoji'"`

## LAYOUT

### Phrases

1. Not many people read before the first paragraph
   - So, I made only one paragraph in the main page.

## COLOR

1. [Open color](https://yeun.github.io/open-color/) is an
   open-source color scheme

## PICS

1. WepP

   1. A format developed for the web by Google in 2010, focused on using advanced optimization techniques to reduce file-size. Supports transparency and even animation.

   1. Josh Comeau [blog](https://www.joshwcomeau.com/performance/embracing-modern-image-formats/)

   1. Someone Recommend to use WebP for images with alpha(like what **PNG** does), there is more difference in size than with **jpg** like images.

   1. FALLBACK: **'picture'** to the rescue!

      1. Critically, we're missing **Safari** and Internet Explorer so we need to have fallbacks.
         `<picture>`
         `<source srcset="/images/cereal-box.webp" type="image/webp" />` -For most modern browsers
         `<source srcset="/images/cereal-box.jp2" type="image/jp2" />` -For Safari
         `<img src="/images/cereal-box.jxr" type="image/vnd.ms-photo" />` -for IE
         `</picture>`
      1. The **picture** tag supports a bunch of source children. The browser parses the source elements in sequence, looking for the first one it can use based on the type. When it finds one, it works out where the image lives via srcset, and swaps it into the img's src
      1. **srcset** can do a lot of complicated things, but happily for our usecase, we can treat it the same as src. Essentially, source is config, and it plugs the matching value into the img.

      1. The **Lazier solution**
         `<picture>`
         `<source srcset="/images/cereal-box.webp" />`
         `<img src="/images/cereal-box.jpg" />`
         `</picture>`

   1. Online CONVERTERS

      - [Cloud Converter](https://cloudconvert.com/webp-converter)

      - [Green Guy](https://image.online-convert.com/convert-to-webp) Converter

1. CSS [image-rendering] is a filter that have: auto(bi/tri/linear), pixelated, crisp-edges(nearest-neighbor, for pixel art)(-webkit-optimize-contrast)

1. If you use background images a lot in your CSS, you can reduce the number of HTTP lookups needed by combining the images into one, known as an image sprite. Then you just apply the same image each time you need it for a background and adjust the x/y coordinates appropriately. This technique works best with elements that will have limited dimensions, and will not work for every use of a background image. However, the fewer HTTP requests and single image caching can help reduce page-load time.

## SVG

1. [Adding Shadows](https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/) to SVG Icons With CSS and SVG Filters, [Drop-Shadow](https://css-irl.info/drop-shadow-the-underrated-css-filter/): The Underrated CSS Filter

1. SASS [mixin](https://mimoymima.com/sass-mixin-responsive-svgs/) for responsive SVGs

1. Changing the complexity of the same logo/icon depending on the screen size, [Making SVGs Responsive with CSS](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/comment-page-2/#comments)

1. [Using SVG](https://css-tricks.com/lodge/svg/06-using-svg-svg-background-image/) as background-image

1. A more deep and complete w3 [page](https://www.w3.org/TR/SVG/styling.html#StylingUsingCSS)
   1. Styling SVG content using CSS
   2. Inline style sheets: the ‘style’ element
   3. External style sheets: the effect of the HTML ‘link’ element
   4. Style sheets in HTML documents
   5. Element-specific styling: the ‘class’ and ‘style’ attributes
   6. Presentation attributes
   7. Required properties
   8. User agent style sheet
   9. Required CSS features
   10. DOM interfaces
   - Interface SVGStyleElement

### OPTIMIZATION

1. my SOP

   1. Throw the SVG in the [Image Optim](https://imageoptim.com/mac) app
   1. Throw it again in [SVGOMG](https://jakearchibald.github.io/svgomg/) web and download it

1. Stuff at the Top of an SVG [medium](https://medium.com/@peternowell/stuff-at-the-top-of-an-svg-f3ad198eb54e)

1. [using](https://www.youtube.com/watch?v=a3-lwxTkUKI) SVGOMG and FontForge

1. Tools for [optimize](https://css-tricks.com/tools-for-optimizing-svg/) SVG

1. Optimizing for [WEB use](https://medium.com/larsenwork-andreas-larsen/optimising-svgs-for-web-use-part-1-67e8f2d4035#.2bnvih6cw)
